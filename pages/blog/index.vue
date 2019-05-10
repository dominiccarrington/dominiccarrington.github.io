<template>
  <div>
    <div class="row">
      <div class="col">
        <h1>My Blog</h1>
      </div>
    </div>
    <div class="row">
      <div class="col-10">
        <div class="row">
          <div class="col-4" v-for="(data, id) in posts" :key="id">
            <article>
              <h3><nuxt-link :to="'/blog/' + $moment(data.date).format('YYYY/MM/DD') + '/' + id.substring(11)">{{ data.title }}</nuxt-link></h3>
              <h6>{{ $moment(data.date).format("Do MMM YYYY") }}</h6>
              <p>{{ data.preview }}</p>
            </article>
          </div>
        </div>
      </div>
      <div class="col-2">
        <BlogTags />
      </div>
    </div>
  </div>
</template>

<script>
import BlogTags from "~/components/Blog/Tags.vue";

export default {
  async asyncData({app}) {
    const blogposts = await app.$axios.$get("/blogposts.json");

    return {
      posts: blogposts
    }
  },
  head() {
    return {
      title: "Dominic Carrington's Blog"
    };
  },
  components: {
    BlogTags
  }
}
</script>
