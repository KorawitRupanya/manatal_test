<template>
  <div id="app">
    <NavBar />
    <router-view />
  </div>
</template>

<script>
  import NavBar from "@/components/NavBar";
  export default {
    components: { NavBar },
    async created() {
      await this.$store.dispatch("fetchArticles");
      await this.$store.dispatch("fetchSources");
    }
  };
</script>