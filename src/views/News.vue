<template>
    <div>
        <div class="split left">
            <div class="centered">
                <v-img max-width="600px" v-bind:src="feedNews.urlToImage" />
                <h2>{{feedNews.title}}</h2>
                <p>{{feedNews.description}}</p>
                <p>author: {{feedNews.author}}</p>
                <p>publishedAt : {{feedNews.publishedAt}}</p>
            </div>
        </div>

        <div class="split right">
            <div class="centered">
                <p>{{feedNews.content}}</p>
            <br/>
                <v-btn  v-bind:href="feedNews.url" target="_blank" >Read More</v-btn>
            </div>
            </div>
        </div>

</template>
<style>

    .home{
        position: absolute;
        right: 0;
    }

    .split {
        height: 100%;
        width: 50%;
        position: fixed;
        z-index: 1;
        top: 0;
        overflow-x: hidden;
        padding-top: 20px;
    }

    .left {
        left: 0;
        background-color: white;
    }

    .right {
        right: 0;
        background-color: deepskyblue;
    }

    .centered {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        text-align: center;
    }

</style>

<script>
    export default {
        name: "News",
        data() {
            return {
                feedNews: ""
            };
        },
        mounted() {
            this.feedNews = this.$store.getters.articleWithTitle(
                this.$route.params.title
            );
            this.$store.commit("appendVisited", this.$route.params.title);
        }
    };
</script>


<!--<v-btn v-bind:href="feedNews.url" target="_blank">See more info</v-btn>-->