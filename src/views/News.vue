<template>
    <div>
        <div v-for="news in feedNews" :key="news.id"/>
        <v-img
                height="350px"
                v-bind:src="getImgUrl(news.id)"
        />
    </div>
</template>

<script>

    export default {
        name: "News",
        data() {
            return {
                id:'',
                feedNews: '',
            }
        },
        methods: {
            initData: function (id) {
                let queryString  = '';
                queryString = "https://newsapi.org/v2/articles?source="+id+"&apiKey=099148be22804e849a0c6fe022b7cf5e";
                this
                    .$http
                    .get(queryString)
                    .then(function(res){
                        console.log(res.body.articles);
                        this.feedNews = res.body.articles;
                    })
                    .catch(function(err){
                        this.feedNews = err;
                    })
            }
        },
        created() {
            this.id = this.$route.params.id;
        },
    }
    console.log("running");
</script>

<style scoped>

</style>