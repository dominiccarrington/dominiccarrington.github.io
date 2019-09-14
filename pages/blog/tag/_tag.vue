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
        <TableOfPosts :posts="posts" />
      </div>
      <div class="col-2">
        <BlogTags />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import BlogTags from '~/components/Blog/Tags.vue';
import TableOfPosts from '~/components/Blog/TableOfPosts.vue';
import { Post, Posts, Tags } from '~/types';

export default Vue.extend({
  components: {
    BlogTags,
    TableOfPosts
  },
  async asyncData({ app, params }) {
    const blogposts = await app.$axios.$get('/blogposts.json') as Posts;
    const tag = params.tag;
    const taggedPosts = await app.$axios.$get('/tags.json') as Tags;

    const posts: Post[] = [];
    for (const id of taggedPosts[tag]) {
      blogposts[id].id = id;
      posts.push(blogposts[id]);
    }

    return {
      posts,
      tag
    };
  },
  head() {
    return {

      // @ts-ignore
      title: `Tagged: ${this.tag} - Dominic Carrington's Blog`
    };
  }
});
</script>
