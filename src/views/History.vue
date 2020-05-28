<template>
    <h1>{{visitedArticle.title}}</h1>
</template>

<script>
    export default {
        name: "History",
        data(){
            return {
                visitedArticle: ""
        }
        },
        mounted() {
            this.visitedArticle = this.$store.getters.articlesVisited;
        }
    }
</script>

<style scoped>

</style>