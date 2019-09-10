<template>
  <nav class="navbar navbar-expand-md navbar-light bg-light">
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar"
      aria-controls="navbar" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbar">
      <ul class="navbar-nav mr-auto">
        <navlink text="Home" link="/"></navlink>
        <navlink text="Blog" link="/blog"></navlink>
        <navlink text="Mods" link="/mods"></navlink>
        <navlink text="Tools" link="/tools"></navlink>
      </ul>
      <ul class="navbar-nav">
        <li class="nav-item">
          <a href="https://github.com/dominiccarrington" class="nav-link"><fa :icon="faGithub"></fa></a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import Navlink from "~/components/Navlink.vue";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

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
