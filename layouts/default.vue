<template>
  <div>
    <navbar />
    <div class="container mt-4" style="min-height: 80vh;">
      <nuxt />
    </div>
    <Footer />
  </div>
</template>

<script>
import Navbar from '~/components/Navbar.vue';
import Footer from '~/components/Footer.vue';

export default {
  components: {
    Navbar,
    Footer
  }
};
</script>

<style lang="scss" scoped></style>
