<template>
  <form v-click-outside="onBlur" autocomplete="off" class="position-relative" @submit.prevent>
    <input v-model="searchValue" type="search" class="search-field form-control" placeholder="Search..." @input="search">
    <ul v-if="searchResults.length > 0" class="search-results">
      <li v-for="result of searchResults.slice(0, 5)" :key="result.search.ref">
        <nuxt-link :to="'/blog/' + $moment(result.iso8601Date).format('YYYY/MM/DD') + '/' + result.search.ref.substring(11)">
          <h5 class="mb-0">
            {{ result.title }}
          </h5>
        </nuxt-link>
        <p class="mb-0">
          <small>{{ result.preview }}</small>
        </p>
        <b-progress :value="(result.search.score / totalScore) * 100" style="height: 1px;" />
      </li>
    </ul>
  </form>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator';
import { Post, Posts, SearchResult } from '~/types';
const elasticlunr = require('elasticlunr');
const vClickOutside = require('v-click-outside');

@Component({
  directives: {
    clickOutside: vClickOutside.directive
  }
})
export default class SearchField extends Vue {
  public searchResults: Post[] = [];
  public searchValue = '';
  public totalScore = 0;
  public index!: any;
  public blogposts!: Posts;

  async mounted() {
    const dump = await this.$axios.$get('/indexed.json');
    this.index = elasticlunr.Index.load(dump);
    elasticlunr.clearStopWords();

    this.blogposts = await this.$axios.$get('/blogposts.json');
  }

  search() {
    if (this.index !== null) {
      this.totalScore = 0;
      this.searchResults = (this.index.search(this.searchValue, {
        fields: {
          title: { boost: 2 },
          tags: { boost: 2 },
          content: { boost: 1 }
        },
        expand: true
      }) as SearchResult[]).map((val) => {
        const post = this.blogposts[val.ref];
        post.search = val;
        return post;
      });

      this.searchResults.forEach((el) => {
        this.totalScore += el.search ? el.search.score : 0;
      });
    }
  }

  onBlur() {
    this.searchResults = [];
  }

  @Watch('$route')
  clear() {
    this.searchResults = [];
    this.searchValue = '';
  }
}
</script>

<style lang="scss" scoped>
  .search-field {
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 0;
  }

  .search-results {
    display: block;
    border: 1px solid var(--secondary);
    position: absolute;
    z-index: 1000;
    background-color: white;
    padding: 5px;
    width: 100%;

    li {
      list-style-type: none;
      margin-bottom: 5px;

      p {
        line-height: 1em;
      }

      .progress {
        margin-left: -5px;
        margin-right: -5px;
      }
    }
  }
</style>
