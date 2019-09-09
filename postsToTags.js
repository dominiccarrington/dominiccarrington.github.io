const fs = require('fs');
const elasticlunr = require('elasticlunr');

const idx = elasticlunr(function() {
  this.setRef('slug');

  this.addField('title');
  this.addField('tags');
  this.addField('content');
});

let blogposts = JSON.parse(fs.readFileSync("static/blogposts.json").toString());
let tags = {};

for (let id in blogposts) {
  let post = blogposts[id];

  // Add last modified time
  const stats = fs.statSync("content/blogposts/" + id + ".md");
  post.mtime = stats.mtime.toISOString();

  // Add to tag list
  for (let tag of post.tags) {
    if (tag != null) {
      if (tags[tag] == undefined) {
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
    tags: post.tags.join(' '),
  });
}

fs.writeFileSync("static/blogposts.json", JSON.stringify(blogposts));
fs.writeFileSync("static/tags.json", JSON.stringify(tags));
fs.writeFileSync("static/indexed.json", JSON.stringify(idx));
