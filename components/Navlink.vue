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
  computed: {
    active() {
      return this.$router.currentRoute.path == this.link;
    }
  }
}
</script>
