<template>
  <div>
    <div class="row">
      <div class="col">
        <h1>My Blog</h1>
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
  async asyncData({app}) {
    // Move sorting into component
    const blogposts = await app.$axios.$get("/blogposts.json");

    let posts = [];
    for (let id in blogposts) {
      blogposts[id]["id"] = id;
      posts.push(blogposts[id]);
    }

    return {
      posts
    };
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
