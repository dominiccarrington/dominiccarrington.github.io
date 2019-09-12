const fs = require('fs');
const elasticlunr = require('elasticlunr');
const yaml = require('yaml');
const moment = require('moment');

const idx = elasticlunr(function() {
  this.setRef('slug');

  this.addField('title');
  this.addField('tags');
  this.addField('content');
});

const blogposts = JSON.parse(
  fs.readFileSync('static/blogposts.json').toString()
);
const tags = {};

for (const id in blogposts) {
  const post = blogposts[id];

  // Add last modified time
  const stats = fs.statSync('content/blogposts/' + id + '.md');
  post.mtime = stats.mtime.toISOString();
  post.type = 'md';
}

const morePosts = fs.readdirSync('content/blogposts').filter(f => f.endsWith('.yaml'));
for (const file of morePosts) {
  const data = yaml.parse(fs.readFileSync('content/blogposts/' + file).toString());

  blogposts[file.split('.')[0]] = Object.assign({
    type: 'vue',
    preview: '',
    content: '',
    iso8601Date: moment(data.date).toISOString(),
    basename: data.component,
    mtime: fs.statSync('components/Blog/Post/' + data.component + '.vue').mtime.toISOString()
  }, data);
}

for (const id in blogposts) {
  const post = blogposts[id];

  // Add to tag list
  for (const tag of post.tags) {
    if (tag != null) {
      if (tags[tag] === undefined) {
        tags[tag] = [];
      }

      tags[tag].push(id);
    }
  }

  // Parse for indexing
  idx.addDoc({
    slug: id,
    title: post.title,
    content: post.content,
    tags: post.tags.join(' ')
  });
}

fs.writeFileSync('static/blogposts.json', JSON.stringify(blogposts));
fs.writeFileSync('static/tags.json', JSON.stringify(tags));
fs.writeFileSync('static/indexed.json', JSON.stringify(idx));
