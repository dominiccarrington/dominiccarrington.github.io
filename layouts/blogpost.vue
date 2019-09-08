<template>
  <div>
    <navbar></navbar>
    <div class="container mt-4">
      <div class="row">
        <div class="col-md-10 col-12">
          <nuxt></nuxt>
        </div>
        <div class="col-md-2 hidden-sm">
          <BlogTags />
        </div>
      </div>
    </div>
    <footer></footer>
  </div>
</template>

<script>
import Navbar from "~/components/Navbar.vue";
import BlogTags from "~/components/Blog/Tags.vue";

export default {
  components: {
    Navbar,
    BlogTags
  }
}
</script>

<style lang="scss" scoped>
</style>

