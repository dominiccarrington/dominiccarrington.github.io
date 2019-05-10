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
      this.active = this.pageActive();
    }
  },
  mounted() {
    this.active = this.pageActive();
  },
  methods: {
    pageActive() {
      let currentPath = this.$router.currentRoute.path;

      return currentPath == "/" && this.link == "/" || (this.link != "/" && currentPath.indexOf(this.link) >= 0);
    }
  }
}
</script>
