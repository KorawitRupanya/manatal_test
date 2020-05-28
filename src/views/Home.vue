<template>
  <v-app dark>
    <v-content>
      <v-container fluid>
        <h1 v-show="isLoading">Spinning</h1>
        <NewsCard :articles="articles"/>
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
        ...mapState(["articles"]),
      }
    },
    mounted () {
      this.articles = this.$store.getters.allArticles;
    },
  }
</script>