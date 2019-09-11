<template>
  <div>
    <navbar />
    <div class="container mt-4">
      <nuxt />
    </div>
    <footer />
  </div>
</template>

<script>
import Navbar from '~/components/Navbar.vue';

export default {
  components: {
    Navbar
  }
};
</script>

<style lang="scss" scoped></style>
