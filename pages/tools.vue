<template>
  <div>
    <div class="row">
      <div class="col-12">
        <h1>Tools</h1>
        <p>Here is a list of random tools and things I have made that are oneoffs.</p>
      </div>
    </div>
    <div class="row">
      <Card url="/tool/countdown" title="Countdown" desc="A countdown timer to certain points to interest." />
      <Card url="/tool/gameoflife" title="Game Of Life" desc="An online version of the Game of Life." />
      <Card url="/tool/langtonsant" title="Langton's Ant" desc="An online version of Langton's Ant, an autonomous robot following basic rules." />
    </div>
  </div>
</template>

<script>
import Card from '@/components/Card.vue';

export default {
  head() {
    return {
      title: "Tools - Dominic Carrington's Personal Website"
    };
  },
  components: {
    Card
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
