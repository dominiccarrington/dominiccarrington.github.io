<template>
  <div>
    <h2>Tags</h2>
    <ul>
      <li v-for="(arr, tag) in tags" :key="tag"><nuxt-link :to="'/blog/tag/' + tag">{{ tag }} ({{ arr.length }})</nuxt-link></li>
    </ul>
  </div>
</template>

<script>
import { defer } from 'q';
export default {
  name: "blog-tags",
  async mounted() {
    this.tags = await this.$axios.$get("/tags.json");
  },
  data() {
    return {
      tags: {}
    };
  }
}
</script>

