<template>
  <div class="row">
    <div class="col-4" v-for="post in data" :key="post.id">
      <article>
        <h3><nuxt-link :to="'/blog/' + $moment(post.iso8601Date).format('YYYY/MM/DD') + '/' + post.id.substring(11)">{{ post.title }}</nuxt-link></h3>
        <h6>{{ $moment(post.iso8601Date).format("Do MMM YYYY") }}</h6>
        <p>{{ post.preview }}</p>
      </article>
    </div>
  </div>
</template>

<script>
import moment from "moment";

export default {
  name: "TableOfPosts",
  props: ['posts'],
  computed: {
    data() {
      return this.posts.sort((a, b) => {
        return moment(b.iso8601Date).unix() - moment(a.iso8601Date).unix();
      });
    }
  }
}
</script>
