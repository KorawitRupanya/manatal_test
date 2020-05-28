<template>
    <v-navigation-drawer
            v-model="drawer"
            fixed
            app
            class="drawer-style"
            id="style-1"
    >
        <v-list dense class="pt-3 white--text">
            <v-list-item
                    v-for="source in $store.state.sources"
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
    import { mapState } from "vuex";

    export default {
        props: {
            drawer: Boolean
        },

        components: {},

        data() {
            return {
                sources: [],
                errors: [],
                ...mapState(["articles"])
            };
        },
        created() {
            this.sources = this.$store.getters.getAllSource;
        },
        methods: {
            selectSource(source) {
                this.$emit("selectsource", source);
            }
        }
    };
</script>