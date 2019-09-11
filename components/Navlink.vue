<template>
  <b-nav-item :to="href" :active="active">
    <slot />
  </b-nav-item>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from 'vue-property-decorator';

@Component({})
export default class Navlink extends Vue {
  @Prop({ type: String, required: true }) readonly href!: string;
  public active = false;

  mounted() {
    this.active = this.pageActive();
  }

  @Watch('$route')
  onRouteChanged() {
    this.active = this.pageActive();
  }

  pageActive() {
    const currentPath = this.$router.currentRoute.path;

    return this.href === '/' ? currentPath === '/' : currentPath.includes(this.href);
  }
}
</script>
