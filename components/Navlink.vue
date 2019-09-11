<template>
  <li :class="'nav-item' + (active ? ' active' : '')">
    <nuxt-link :to="link" class="nav-link">
      {{ text }}
    </nuxt-link>
  </li>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from 'vue-property-decorator';

@Component({})
export default class Navlink extends Vue {
  @Prop({ type: String, required: true }) readonly text!: string;
  @Prop({ type: String, required: true }) readonly link!: string;
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

    return this.link === '/' ? currentPath === '/' : currentPath.includes(this.link);
  }
}
</script>
