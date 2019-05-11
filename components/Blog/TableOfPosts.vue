<template>
  <div class="row">
    <div class="col-4" v-for="data in posts" :key="data.id">
      <article>
        <h3><nuxt-link :to="'/blog/' + $moment(data.iso8601Date).format('YYYY/MM/DD') + '/' + data.id.substring(11)">{{ data.title }}</nuxt-link></h3>
        <h6>{{ $moment(data.iso8601Date).format("Do MMM YYYY") }}</h6>
        <p>{{ data.preview }}</p>
      </article>
    </div>
  </div>
</template>

<script>
export default {
  name: "TableOfPosts",
  props: ['posts']
}
</script>
