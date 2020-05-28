<template>
  <v-layout row wrap align-center>
    <v-flex xs8 offset-md2>
      <div v-for="article in articles" :key="article.title">
        <v-card class="my-3" hover>
          <v-container fluid grid-list-md>
            <v-layout row wrap>
              <v-img height="350px" v-bind:src="article.urlToImage" />
              <v-container fill-height fluid>
                <v-layout>
                  <v-flex>
                    <v-chip small color="secondary" class="white--text">
                      {{ article.source.name }}
                    </v-chip>
                    <v-spacer />
                    <span class="headline"
                    >{{ article.title }}
                      <ChangeHeaderDialog :article="article" />
                    </span>
                  </v-flex>
                </v-layout>
              </v-container>
            </v-layout>
          </v-container>
          <v-card-text>
            {{ article.description }}
            <v-btn
                    small
                    replace
                    color="info"
                    :to="{ name: 'News', params: { title: article.title } }"
            >Read More</v-btn
            >
          </v-card-text>

          <v-card-actions>
            <v-spacer />

            <v-spacer />
          </v-card-actions>
        </v-card>
      </div>
    </v-flex>
  </v-layout>
</template>

<script>
  import ChangeHeaderDialog from "@/components/ChangeHeaderDialog";
  export default {
    name: "NewsCard",
    components: { ChangeHeaderDialog },
    props: {
      articles: Array
    }
  };
</script>
