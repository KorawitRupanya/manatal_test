<template>
  <v-app dark>
    <v-content>
      <v-container fluid>
        <h1 v-show="isLoading">Spinning</h1>
        <NewsCard :articles="showArticle" />
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
  import NewsCard from "../components/NewsCard.vue";
  import { mapState, mapGetters } from "vuex";

  export default {
    components: {
      NewsCard
    },
    data() {
      return {
        isLoading: false
      };
    },
    computed: {
      ...mapState(["articles", "filter", "isQuerying", "searchedArticles"]),
      ...mapGetters(["articlesWithSource"]),
      showArticle() {
        if (this.isQuerying) {
          return this.searchedArticles;
        } else if (this.filter) {
          return this.articlesWithSource(this.filter);
        } else {
          return this.articles;
        }
      }
    },
    // methods: {
    //   async callWrongAPI() {
    //     await axios.get("https://newsapi.org/v2/sources?apiKey ");
    //   }
    // },
    async mounted() {}
  };
</script>