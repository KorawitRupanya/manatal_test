<template>
  <v-app dark>
    <v-content>
      <v-container fluid>
        <h1 v-show="isLoading">Spinning</h1>
        <NewsCard :articles="articles"/> <!-- Add the component in the template -->
      </v-container>
    </v-content>

  </v-app>


</template>

<script>


  import NewsCard from '../components/NewsCard.vue'
  import { mapState } from "vuex";

  export default {

    components: {
      NewsCard,
    },

    data() {
      return {
        drawer: false,
        api_key:'099148be22804e849a0c6fe022b7cf5e',
        articles: [],
        errors: [],
        ...mapState(["articles"]),
        searchQuery: "",
        isLoading: false,
      }
    },
    created () {
      this.articles = this.$store.getters.allArticles;
      // this.$store.commit("setHeadline", "", "new");
      // axios.get(' https://newsapi.org/v2/top-headlines?country=us&apiKey='+this.api_key)
      //         .then(response => {
      //           this.articles = response.data.articles;
      //           console.log('data:');
      //           console.log(response.data.articles)
      //         })
      //         .catch(e => {
      //           this.errors.push(e)
      //         })
    },
  }
</script>