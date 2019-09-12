<template>
  <article>
    <h2>{{ blog.title }}</h2>
    <section class="h6">
      <small>Published On:
        {{ $moment(blog.iso8601Date).format("DD/MM/YYYY HH:mm") }}</small><br>
      <small>Last Edited On:
        {{ $moment(blog.mtime).format("DD/MM/YYYY HH:mm") }}</small><br>
      <small
        v-if="blog.tags.length > 0 && blog.tags[0] != null"
      >Tagged: {{ blog.tags.join(", ") }}</small>
    </section>
    <section v-if="blog.type === 'md'" class="blog-content" v-html="$md.render(blog.content)" />
    <component :is="blog.component" v-else-if="blog.type === 'vue'" />
  </article>
</template>

<script lang="ts">
import Vue from 'vue';
import { Posts } from '~/types';

import TestPostVue from '~/components/Blog/Post/TestPostVue.vue';

export default Vue.extend({
  layout: 'blogpost',
  components: {
    TestPostVue
  },
  async asyncData({ app, params }) {
    const slug = `${params.year}-${params.month}-${params.day}-${params.slug}`;
    const blogposts = await app.$axios.$get('/blogposts.json') as Posts;
    const blog = blogposts[slug];
    blog.tags.sort();

    return {
      blog
    };
  }
});
</script>
