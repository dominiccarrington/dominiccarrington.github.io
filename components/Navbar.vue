<template>
  <nav class="navbar navbar-expand-md navbar-light bg-light">
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbar"
      aria-controls="navbar"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon" />
    </button>

    <div id="navbar" class="collapse navbar-collapse">
      <ul class="navbar-nav mr-auto">
        <navlink text="Home" link="/" />
        <navlink text="Blog" link="/blog" />
        <navlink text="Mods" link="/mods" />
        <navlink text="Tools" link="/tools" />
      </ul>
      <ul class="navbar-nav">
        <li class="nav-item">
          <a href="https://github.com/dominiccarrington" class="nav-link"><fa :icon="faGithub" /></a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import Navlink from '~/components/Navlink.vue';

@Component({
  components: {
    Navlink
  }
})
export default class Navbar extends Vue {
  get faGithub() {
    return faGithub;
  }
}
</script>
