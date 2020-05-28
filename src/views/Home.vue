<template>
  <v-app dark>
    <SideMenu :drawer="drawer" :api_key="api_key" @selectsource="setResource"/>
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

      <v-app-bar-nav-icon @click="drawer = !drawer"   class="white--text"/>

      <v-toolbar-title>News</v-toolbar-title>

      <v-spacer/>

        <v-text-field
                label="Search for some news"
                outlined
                @click="search"
                @input="searchQuery"
                height="10px"
        />


    </v-app-bar>

    <v-content>
      <v-container fluid>
        <h1 v-show="isLoading">Spinning</h1>
        <NewsCard :articles="articles"/> <!-- Add the component in the template -->
      </v-container>
    </v-content>

  </v-app>


</template>

<script>

  import axios from 'axios'
  import NewsCard from '../components/NewsCard.vue'
  import SideMenu from '../components/SideMenu.vue'
  // import { mapState } from "vuex";

  export default {

    components: {
      NewsCard,
      SideMenu
    },

    data() {
      return {
        drawer: false,
        api_key:'099148be22804e849a0c6fe022b7cf5e',
        articles: [],
        errors: [],
        // ...mapState(["articles"]),
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
    }, methods: {
      setResource(source){
        this.articles = this.$store.getters.articlesWithSource(source);
        axios.get('https://newsapi.org/v2/top-headlines?sources='+source+'&apiKey='+this.api_key)
              .then(response => {
                this.articles = response.data.articles
                console.log(response.data)
              })
              .catch(e => {
                this.errors.push(e)
              })

      },
      async fff() {
        return new Promise(resolve => {
          setTimeout(() => {
            resolve();
          }, 5000);
        });
      },
      async search(searchQuery) {
        this.isLoading = true;
        await this.fff();
        this.isLoading = false;
        axios.get(' https://newsapi.org/v2/top-headlines?q='+searchQuery+'&apiKey='+this.api_key)
                .then(response => {
                  this.articles = response.data.articles;
                  console.log('data:');
                  console.log(response.data.articles)
                })
                .catch(e => {
                  this.errors.push(e)
                })
      }
    }
  }
</script>