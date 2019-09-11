<template>
  <div>
    <navbar />
    <div class="container mt-4">
      <div class="row d-md-none d-block mb-3">
        <div class="col-12">
          <SearchField />
        </div>
      </div>
      <div class="row">
        <div class="col-md-10 col-12">
          <nuxt />
        </div>
        <div class="col-md-2 d-md-block d-none">
          <div class="row mb-3">
            <SearchField />
          </div>
          <div class="row">
            <BlogTags />
          </div>
        </div>
      </div>
    </div>
    <footer />
  </div>
</template>

<script>
import Navbar from '~/components/Navbar.vue';
import BlogTags from '~/components/Blog/Tags.vue';
import SearchField from '~/components/Blog/SearchField.vue';

export default {
  components: {
    Navbar,
    BlogTags,
    SearchField
  }
};
</script>

<style lang="scss" scoped></style>
