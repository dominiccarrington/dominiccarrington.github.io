<template>
  <div>
    <navbar></navbar>
    <div class="container">
      <nuxt></nuxt>
    </div>
    <footer></footer>
  </div>
</template>

<script>
  import Navbar from "~/components/Navbar.vue";

  export default {
    components: {
      Navbar
    }
  }

</script>

<style lang="scss" scoped>
  .container {
    height: 100%;
  }
</style>

