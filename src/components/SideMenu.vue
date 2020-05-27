<template>
    <v-navigation-drawer v-model="drawer" fixed app clipped  class="drawer-style" id="style-1">
        <v-list dense class="pt-3 white--text" >
            <v-list-item
                    v-for="source in sources"
                    :key="source.id"
                    @click="selectSource(source.id)"
            >
                <v-list-item-content>
                    <v-list-item-title>{{ source.name }}</v-list-item-title>
                </v-list-item-content>
            </v-list-item>
        </v-list>
    </v-navigation-drawer>
</template>


<script>

    import axios from 'axios'

    export default {

        props: {
            api_key: String,
            drawer: Boolean
        },

        data: () => ({
            sources: [],
            errors: []
        }),

        created () {
            axios.get('https://newsapi.org/v2/sources?apiKey='+this.api_key)
                .then(response => {
                    //this.articles = response.data.articles
                    this.sources = response.data.sources
                    console.log('data:')
                    console.log(response.data.sources) // This will give you access to the full object
                })
                .catch(e => {
                    this.errors.push(e)
                })
        },

        methods: {

            selectSource(source){
                this.$emit('selectsource',source)
            }
        }

    }
</script>