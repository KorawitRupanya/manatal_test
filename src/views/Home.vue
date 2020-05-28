<template>
  <v-app dark>
    <v-content>
      <v-container fluid>
        <v-btn @click="callWrongAPI"> Wrong API calls</v-btn>
        <NewsCard :articles="showArticle" />
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
  import NewsCard from "../components/NewsCard.vue";
  import axios from 'axios';
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
    methods: {
      async callWrongAPI() {
        await axios.get(
                ` https://newsapi.org/v2/sources?apiKey=`
        ).then(response => {console.log(response.data);}).catch(e=>{
          this.errors.push(e);
          alert(e);
        });
      }
    },
    async mounted() {}
  };
</script>