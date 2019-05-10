<template>
  <div>
    <h2>Tags</h2>
    <ul>
      <li v-for="(no, tag) in tags" :key="tag">{{ tag }} ({{ no }})</li>
    </ul>
  </div>
</template>

<script>
import { defer } from 'q';
export default {
  name: "blog-tags",
  async mounted() {
    const blogposts = await this.$axios.$get("/blogposts.json");
    let tags = {};
    for (let post in blogposts) {
      let blogtags = blogposts[post].tags != undefined ? blogposts[post].tags : [];
      for (let tag of blogtags) {
        if (tag != null) {
          if (tags[tag] == undefined) tags[tag] = 0;

          tags[tag]++;
        }
      }
    }

    this.tags = tags;
  },
  data() {
    return {
      tags: {}
    };
  }
}
</script>

