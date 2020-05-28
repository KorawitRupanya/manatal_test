<template>
    <v-row justify="center">
        <v-dialog v-model="dialog" persistent max-width="600px">
            <template v-slot:activator="{ on }">
                <v-btn color="primary" dark v-on="on">Change Header</v-btn>
            </template>
            <v-card>
                <v-card-title>
                    <span class="headline">Header</span>
                </v-card-title>
                <v-card-text>
                    <v-container>
                        <v-row>
                            <v-col cols="12" sm="6" md="4">
                                <v-text-field
                                        label="News Header"
                                        required
                                        v-model="newHeader"
                                />
                            </v-col>
                        </v-row>
                    </v-container>
                </v-card-text>
                <v-card-actions>
                    <v-spacer />
                    <v-btn color="blue darken-1" text @click="dialog = false"
                    >Close</v-btn
                    >
                    <v-btn color="blue darken-1" text @click="setHeader">Save</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </v-row>
</template>

<script>
    export default {
        data: () => ({
            dialog: false,
            newHeader: ""
        }),
        props: {
            article: {
                type: Object,
                default: () => {}
            }
        },
        methods: {
            setHeader() {
                this.$store.commit("setHeadline", {
                    oldTitle: this.article.title,
                    newTitle: this.newHeader
                });
                this.dialog = false;
            }
        }
    };
</script>