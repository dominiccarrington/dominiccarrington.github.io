<template>
  <article>
    <h2>{{ blog.title }}</h2>
    <section class="blog-content" v-html="$md.render(blog.content)"></section>
  </article>
</template>

<script>
export default {
  layout: 'blogpost',
  async asyncData({app, params}) {
    const slug = `${params.year}-${params.month}-${params.day}-${params.slug}`;
    const blogposts = await app.$axios.$get("/blogposts.json");
    const blog = blogposts[slug];

    return {
      blog
    };
  }
}
</script>
