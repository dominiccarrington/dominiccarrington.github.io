<template>
  <div>
    <h1>My Blog</h1>
    <TableOfPosts :posts="posts"/>
  </div>
</template>

<script>
import BlogTags from "~/components/Blog/Tags.vue";
import TableOfPosts from "~/components/Blog/TableOfPosts.vue";

export default {
  layout: 'blogpost',
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
