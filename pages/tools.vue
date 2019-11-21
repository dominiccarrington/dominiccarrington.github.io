<template>
  <div>
    <div class="row">
      <div class="col-12">
        <h1>Tools</h1>
        <p>Here is a list of random tools and things I have made that are oneoffs.</p>
      </div>
    </div>
    <div class="row">
      <div class="col-6 col-md-3">
        <b-card
          tag="article"
          class="mb-2"
        >
          <b-card-title>
            <nuxt-link to="/tool/countdown">Countdown</nuxt-link>
          </b-card-title>
          <b-card-text>A countdown timer to certain points to interest.</b-card-text>
        </b-card>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: "Tools - Dominic Carrington's Personal Website"
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
