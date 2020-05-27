<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>
    </div>
    <router-view />
  </div>
</template>

<script>
  export default {
    async mounted() {
      await this.$store.dispatch("fetchArticles");
      await this.$store.dispatch("fetchSources");
    }
  };
</script>