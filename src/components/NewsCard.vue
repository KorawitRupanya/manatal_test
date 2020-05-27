<template>
  <v-layout column>
      <v-flex xs12 sm6 offset-sm3 >
        <div v-for="article in articles" :key="article.title">
          <v-card class="my-3" hover>
            <v-container fluid grid-list-md>
              <v-layout row wrap>
                <v-flex
                        v-for="card in cards"
                        v-bind="{ [`xs${card.flex}`]: true }"
                        :key="card.title"
                >
            <v-img
                    height="350px"
                    v-bind:src="getImgUrl(article.id)"
            />
                </v-flex>
            <v-container fill-height fluid>
              <v-layout>
                <v-flex xs12 align-end d-flex>
                  <span class="headline">{{ article.title }}</span>
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
              {{article.source.name}}
            </v-chip>

            <v-btn small replace color="info" to="{ name: 'News', params: { id: this.article.id }}" >Read More</v-btn>
          </v-card-actions>
        </div>
      </v-flex>
  </v-layout>
</template>

<script>
  export default {
    name: 'NewsCard',
    props: {
      articles: Array
    },
  }
</script>
