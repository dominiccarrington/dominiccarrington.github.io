<template>
  <div>
    <div class="row">
      <div class="col">
        <h1>{{ tag }}</h1>
      </div>
    </div>
    <div class="row">
      <div class="col-10">
        <TableOfPosts :posts="posts"/>
      </div>
      <div class="col-2">
        <BlogTags />
      </div>
    </div>
  </div>
</template>

<script>
import BlogTags from "~/components/Blog/Tags.vue";
import TableOfPosts from "~/components/Blog/TableOfPosts.vue";

export default {
  async asyncData({app, params}) {
    const blogposts = await app.$axios.$get("/blogposts.json");
    const tag = params.tag;

    let posts = [];
    for (let id in blogposts) {
      blogposts[id]["id"] = id;
      posts.push(blogposts[id]);
    }

    posts = posts.sort((a, b) => {
      return app.$moment(b.date).unix() - app.$moment(a.date).unix();
    });

    return {
      posts,
      tag
    }
  },
  head() {
    return {
      title: "Dominic Carrington's Blog"
    };
  },
  components: {
    BlogTags,
    TableOfPosts
  }
}
</script>
