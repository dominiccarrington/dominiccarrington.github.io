const fs = require("fs");

const blogposts = JSON.parse(fs.readFileSync("static/blogposts.json").toString());

let tags = {};

for (let id in blogposts) {
  let post = blogposts[id];
  for (let tag of post.tags) {
    if (tag != null) {
      if (tags[tag] == undefined) {
        tags[tag] = [];
      }

      tags[tag].push(id);
    }
  }
}

fs.writeFileSync("static/tags.json", JSON.stringify(tags));
