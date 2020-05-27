<template>
  <v-app light>
    <!--The SideMenu Component go here-->
    <v-app-bar
            app
            fixed
            color="#43a047"
            dark
            shrink-on-scroll
            prominent
            src="https://picsum.photos/1920/1080?random"
            fade-img-on-scroll
            scroll-threshold="500"
    >
      <template v-slot:img="{ props }">
        <v-img
                v-bind="props"
                gradient="to top right, rgba(55,236,186,.7), rgba(25,32,72,.7)"
        />
      </template>

      <v-app-bar-nav-icon/>

      <v-toolbar-title>News</v-toolbar-title>

      <v-spacer/>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

    </v-app-bar>

    <v-content>
      <v-container fluid>
        <NewsCard :articles="articles"/> <!-- Add the component in the template -->
      </v-container>
    </v-content>

  </v-app>


</template>

<script>

  import axios from 'axios'
  import NewsCard from '../components/NewsCard.vue'

  export default {

    components: {
      NewsCard,
    },

    data() {
      return {
        drawer: false,
        api_key:'099148be22804e849a0c6fe022b7cf5e',
        articles: [],
        errors: []
      }
    },
    created () {
      axios.get(' https://newsapi.org/v2/top-headlines?country=us&apiKey='+this.api_key)
              .then(response => {
                this.articles = response.data.articles;
                console.log('data:');
                console.log(response.data.articles)
              })
              .catch(e => {
                this.errors.push(e)
              })
    },


  }
</script>