<template>
  <div>
    <h2>Tags</h2>
    <ul>
      <li v-for="(arr, tag) in tags" :key="tag">
        <nuxt-link :to="'/blog/tag/' + tag">
          {{ tag }} ({{ arr.length }})
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import { Tags } from '~/types';

@Component({})
export default class BlogTags extends Vue {
  public tags: Tags = {};

  async mounted() {
    this.tags = await this.$axios.$get('/tags.json');
  }
}
</script>
