<template>
  <div>
    <h1>My Blog</h1>
    <TableOfPosts :posts="posts" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import TableOfPosts from '~/components/Blog/TableOfPosts.vue';
import { Post, Posts } from '~/types';

export default Vue.extend({
  layout: 'blogpost',
  components: {
    TableOfPosts
  },
  async asyncData({ app }) {
    const blogposts = await app.$axios.$get('/blogposts.json') as Posts;

    const posts: Post[] = [];
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
});
</script>
