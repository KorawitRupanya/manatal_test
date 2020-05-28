<template>
    <div>
        <SideMenu :drawer="drawer" :api_key="api_key" @selectsource="setResource" />
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

            <v-app-bar-nav-icon @click="drawer = !drawer" class="white--text" />
            <v-btn icon @click="toHome">
                <v-icon>mdi-home</v-icon>
            </v-btn>
            <v-btn icon :to="{ name: 'History' }">
                <v-icon>mdi-history</v-icon>
            </v-btn>
            <v-toolbar-title>News</v-toolbar-title>

            <v-spacer />
            <v-text-field
                    label="Search for some news"
                    outlined
                    v-model="searchQuery"
                    @input="search"
                    height="10px"
            />
        </v-app-bar>
    </div>
</template>

<script>
    import axios from "axios";
    import SideMenu from "../components/SideMenu.vue";
    import { mapState } from "vuex";

    export default {
        components: {
            SideMenu
        },

        data() {
            return {
                drawer: false,
                api_key: "a318b84d9f3848db8bf0ed3caf66f92c",
                errors: [],
                ...mapState(["articles"]),
                searchQuery: "",
                isLoading: false
            };
        },
        methods: {
            setResource(source) {
                this.$store.commit("setFiltered", source);
                axios
                    .get(
                        "https://newsapi.org/v2/top-headlines?sources=" +
                        source +
                        "&apiKey=" +
                        this.api_key
                    )
                    .then(response => {
                        this.articles = this.$store.getters.articlesWithSource(source);
                        console.log(response.data);
                    })
                    .catch(e => {
                        this.errors.push(e);
                    });
            },
            async fff() {
                return new Promise(resolve => {
                    setTimeout(() => {
                        resolve();
                    }, 5000);
                });
            },
            async search() {
                if (this.searchQuery.length > 0) {
                    this.isLoading = true;
                    this.$store.commit("setQuerying", true);
                    await this.$store.dispatch(
                        "fetchQuery",
                        this.searchQuery.toLowerCase()
                    );
                    this.isLoading = false;
                } else {
                    this.$store.commit("setQuerying", false);
                }
            },
            toHome() {
                this.$store.commit("setFiltered", false);
                if (this.$route.name !== "Home") {
                    this.$router.push("/");
                }
            }
        }
    };
</script>