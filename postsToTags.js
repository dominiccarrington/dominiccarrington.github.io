const fs = require("fs");

let blogposts = JSON.parse(fs.readFileSync("static/blogposts.json").toString());

let tags = {};

for (let id in blogposts) {
  let post = blogposts[id];

  const stats = fs.statSync("content/blogposts/" + id + ".md");
  post.mtime = stats.mtime.toISOString();

  for (let tag of post.tags) {
    if (tag != null) {
      if (tags[tag] == undefined) {
        tags[tag] = [];
      }

      tags[tag].push(id);
    }
  }
}

fs.writeFileSync("static/blogposts.json", JSON.stringify(blogposts));
fs.writeFileSync("static/tags.json", JSON.stringify(tags));
