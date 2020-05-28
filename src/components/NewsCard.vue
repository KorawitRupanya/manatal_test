<template>
  <v-layout column>
    <v-flex xs10 sm6 offset-sm3>
      <div v-for="article in articles" :key="article.title">
        <v-card class="my-3" hover>
          <v-container fluid grid-list-md>
            <v-layout row wrap>
              <v-img height="350px" v-bind:src="article.urlToImage" />
              <v-flex
                      v-for="card in cards"
                      v-bind="{ [`xs${card.flex}`]: true }"
                      :key="card.title"
              >
              </v-flex>
              <v-container fill-height fluid>
                <v-layout>
                  <v-flex xs10 align-end d-flex>
                    <span class="headline">{{ article.title }}</span>
                    <ChangeHeaderDialog/>
                  </v-flex>
                </v-layout>
              </v-container>
            </v-layout>
          </v-container>
        </v-card>
        <v-card-text>
          {{ article.description }}
        </v-card-text>
        <v-card-actions>
          <v-chip small color="secondary" class="white--text">
            {{ article.source.name }}
          </v-chip>
          <v-spacer/>
          <v-btn
                  small
                  replace
                  color="info"
                  :to="{ name: 'News', params: { title: article.title } }"
          >Read More</v-btn>
          <v-spacer/>
        </v-card-actions>
      </div>
    </v-flex>
  </v-layout>
</template>

<script>
  import ChangeHeaderDialog from "@/components/ChangeHeaderDialog";
  export default {
    name: "NewsCard",
    components: {ChangeHeaderDialog},
    props: {
      articles: Array
    },
    data(){
      return{
        cards: []
      }
    }
  };
</script>
