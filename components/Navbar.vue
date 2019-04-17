<template>
  <nav class="navbar navbar-expand-md navbar-light bg-light">
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar"
      aria-controls="navbar" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbar">
      <ul class="navbar-nav mr-auto">
        <navlink text="Home" link="/"></navlink>
        <navlink text="Mods" link="/mods"></navlink>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown"
            aria-haspopup="true" aria-expanded="false">
            Dropdown
          </a>
          <div class="dropdown-menu" aria-labelledby="navbarDropdown">
            <a class="dropdown-item" href="#">Action</a>
            <a class="dropdown-item" href="#">Another action</a>
            <div class="dropdown-divider"></div>
            <a class="dropdown-item" href="#">Something else here</a>
          </div>
        </li>
      </ul>
      <ul class="navbar-nav">
        <li class="nav-item">
          <a href="https://github.com/dominiccarrington" class="nav-link"><fa :icon="faGithub"></fa></a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
  import Navlink from "~/components/Navlink.vue";
  import { faGithub } from "@fortawesome/free-brands-svg-icons";

  export default {
    name: "navbar",
    components: {
      Navlink
    },
    computed: {
      faGithub() {
        return faGithub;
      }
    }
  }

</script>
