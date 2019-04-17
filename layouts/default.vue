<template>
  <div>
    <div class="row">
      <div class="col">
        <navbar></navbar>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <div class="container">
          <nuxt></nuxt>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <footer></footer>
      </div>
    </div>
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

<style>
</style>
