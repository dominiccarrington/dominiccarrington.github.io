<template>
  <div>
    <div class="row">
      <div class="col-12">
        <h1>My Minecraft Mods</h1>
        <p>Here is a list of the minecraft mods I have created, either if they have been abandoned or are being maintained when I have free time.</p>
      </div>
    </div>
    <div class="row">
      <div class="col-6 col-md-3">
        <b-card
          tag="article"
          img-src="https://media.forgecdn.net/avatars/199/472/636907575046658111.png"
          img-alt="Variety O' Textures"
          img-top
          class="mb-2"
        >
          <b-card-title>
            Variety O' Textures <b-badge variant="primary">
              Active
            </b-badge>
          </b-card-title>
          <b-card-text>Adds a varierty of textures to the Minecraft mobs</b-card-text>
          <b-card-text>
            <a href="https://www.curseforge.com/minecraft/mc-mods/variety-o-textures">CurseForge</a> -
            <a href="https://github.com/dominiccarrington/VarietyO-Textures">GitHub</a>
          </b-card-text>
        </b-card>
      </div>
      <div class="col-6 col-md-3">
        <b-card
          tag="article"
          img-src="https://media.forgecdn.net/avatars/199/386/636906838926510804.png"
          img-alt="Shulker Inventory"
          img-top
          class="mb-2"
        >
          <b-card-title>
            Shulker Inventory <b-badge variant="primary">
              Active
            </b-badge>
          </b-card-title>
          <b-card-text>Access your shulker boxes using a keybind.</b-card-text>
          <b-card-text>
            <a href="https://www.curseforge.com/minecraft/mc-mods/shulker-inventory">CurseForge</a> -
            <a href="https://github.com/dominiccarrington/ShulkerInventory">GitHub</a>
          </b-card-text>
        </b-card>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: "My Minecraft Mods - Dominic Carrington's Personal Website"
    };
  }
};
</script>

<style lang="scss" scoped>
  .card-title {
    .badge {
      font-size: 0.65rem;
    }
  }
</style>
