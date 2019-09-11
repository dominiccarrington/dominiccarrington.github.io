<template>
  <div>
    <h1>My Blog</h1>
    <TableOfPosts :posts="posts" />
  </div>
</template>

<script>
import TableOfPosts from '~/components/Blog/TableOfPosts.vue';

export default {
  layout: 'blogpost',
  components: {
    TableOfPosts
  },
  async asyncData({ app }) {
    const blogposts = await app.$axios.$get('/blogposts.json');

    const posts = [];
    for (const id in blogposts) {
      blogposts[id].id = id;
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
  }
};
</script>
