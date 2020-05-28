<template>
    <v-app dark>
        <v-content>
            <v-container fluid>
                <NewsCard :articles="showArticle" />
            </v-container>
        </v-content>
    </v-app>
</template>

<script>
    import { mapGetters } from "vuex";
    import NewsCard from "../components/NewsCard"
    export default {
        name: "History",
        components: {
            NewsCard
        },
        computed: {
            ...mapGetters(["articlesVisited"]),
    showArticle(){
        return this.articlesVisited;
            }
        }
    };
</script>

<style scoped>
</style>