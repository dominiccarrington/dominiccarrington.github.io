<template>
  <div class="row">
    <div v-for="post in sortedPosts" :key="post.id" class="col-4">
      <article>
        <h3>
          <nuxt-link :to="'/blog/' + $moment(post.iso8601Date).format('YYYY/MM/DD') + '/' + post.id.substring(11)">
            {{ post.title }}
          </nuxt-link>
        </h3>
        <h6>{{ $moment(post.iso8601Date).format("Do MMM YYYY") }}</h6>
        <p>{{ post.preview }}</p>
      </article>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import moment from 'moment';
import { Post } from '~/types';

  @Component({})
export default class TableOfPosts extends Vue {
    @Prop({ type: Array, required: true }) readonly posts!: Post[];

    get sortedPosts() {
      return this.posts.sort((a, b) => moment(b.iso8601Date).unix() - moment(a.iso8601Date).unix());
    }
}
</script>
