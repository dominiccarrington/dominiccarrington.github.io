<template>
  <div>
    <div class="row">
      <div class="col-12">
        <h1>Projects</h1>
        <p>Here is a list of the projects that I currently or have worked on! If you're looking for the Minecraft mods I have created, check the mods page.</p>
      </div>
    </div>
    <div class="row">
      <div class="col-6 col-md-3">
        <b-card
          tag="article"
          img-src="~/assets/projects/mason.png"
          img-alt="Mason Logo"
          img-top
          class="mb-2"
        >
          <b-card-title>
            Mason <b-badge variant="primary">
              In Progress
            </b-badge>
          </b-card-title>
          <b-card-text>A Minecraft function compiler to easily create datapacks using standard programming constructs.</b-card-text>
          <b-card-text>
            <small>Image credit: <b-link href="http://minecraft.net">Mojang</b-link>, <b-link href="https://minecraft.novaskin.me/skin/15447181/Iron-Hammer">anonymous</b-link></small>
          </b-card-text>
        </b-card>
      </div>
      <div class="col-6 col-md-3">
        <b-card
          tag="article"
          img-src="https://placekitten.com/300/300"
          img-alt="Placeholder"
          img-top
          class="mb-2"
        >
          <b-card-title>
            DashLife <b-badge variant="primary">
              In Progress
            </b-badge>
          </b-card-title>
          <b-card-text>A customizable dashboard to quickly see events in your life.</b-card-text>
        </b-card>
      </div>
      <div class="col-6 col-md-3">
        <b-card
          tag="article"
          img-src="https://placekitten.com/300/300"
          img-alt="Placeholder"
          img-top
          class="mb-2"
        >
          <b-card-title>
            OpenPress <b-badge variant="secondary">
              Abandoned
            </b-badge>
          </b-card-title>
          <b-card-text>A WordPress clone written from scratch using Slim 3.</b-card-text>
        </b-card>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
  .card-title {
    .badge {
      font-size: 0.65rem;
    }
  }
</style>
