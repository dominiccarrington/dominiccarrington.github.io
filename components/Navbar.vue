<template>
  <b-navbar toggleable="md" type="light" variant="light">
    <b-navbar-brand href="/" class="d-md-none">
      Dominic Carrington
    </b-navbar-brand>
    <b-navbar-toggle target="navbar" />

    <b-collapse id="navbar" is-nav>
      <b-navbar-nav>
        <navlink href="/">
          Home
        </navlink>
        <navlink href="/blog">
          Blog
        </navlink>
        <navlink href="/mods">
          Mods
        </navlink>
        <navlink href="/projects">
          Projects
        </navlink>
        <navlink href="/tools">
          Tools
        </navlink>
      </b-navbar-nav>

      <b-navbar-nav class="ml-auto">
        <b-nav-item href="https://github.com/dominccarrington">
          <fa :icon="faGithub" />
        </b-nav-item>

        <b-nav-item href="mailto:dominiccarrington@mail.com">
          @
        </b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
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
