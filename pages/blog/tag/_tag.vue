<template>
  <div>
    <div class="row">
      <div class="col">
        <h1>My Blog</h1>
        <h4>Posts tagged with: {{ tag }}</h4>
      </div>
    </div>
    <div class="row">
      <div class="col-10">
        <TableOfPosts :posts="posts"/>
      </div>
      <div class="col-2">
        <BlogTags />
      </div>
    </div>
  </div>
</template>

<script>
import BlogTags from "~/components/Blog/Tags.vue";
import TableOfPosts from "~/components/Blog/TableOfPosts.vue";

export default {
  async asyncData({app, params}) {
    const blogposts = await app.$axios.$get("/blogposts.json");
    const tag = params.tag;
    const taggedPosts = await app.$axios.$get("/tags.json");

    let posts = [];
    for (let id of taggedPosts[tag]) {
      blogposts[id]["id"] = id;
      posts.push(blogposts[id]);
    }

    return {
      posts,
      tag
    }
  },
  head() {
    return {
      title: "Dominic Carrington's Blog"
    };
  },
  components: {
    BlogTags,
    TableOfPosts
  }
}
</script>
