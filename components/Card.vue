<template>
  <div class="col-6 col-md-3">
    <b-card
      tag="article"
      class="mb-2"
    >
      <b-card-title>
        <nuxt-link :to="url">{{ title }}</nuxt-link>
      </b-card-title>
      <b-card-text>{{ desc }}</b-card-text>
    </b-card>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component({})
export default class Navbar extends Vue {
  @Prop() public url?: string;

  @Prop() public title?: string;

  @Prop() public desc?: string;
}
</script>
