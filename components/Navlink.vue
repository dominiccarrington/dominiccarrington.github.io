<template>
  <li :class="'nav-item' + (active ? ' active' : '')">
    <nuxt-link :to="link" class="nav-link">{{ text }}</nuxt-link>
  </li>
</template>

<script>
export default {
  name: "navlink",
  props: [
    'text',
    'link'
  ],
  data() {
    return {
      active: false
    };
  },
  watch: {
    $route() {
      this.active = this.$router.currentRoute.path == this.link;
    }
  },
  mounted() {
      this.active = this.$router.currentRoute.path == this.link;
  }
}
</script>
