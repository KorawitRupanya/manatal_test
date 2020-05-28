import Vue from 'vue';
import Vuex from 'vuex';

import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        articles: [],
        visited: [],
        sources: [],
      },
    mutations: {
        setArticles(state, articles) {
          state.articles = articles;
        },

        appendVisited(state, newVisites) {
          state.visited.push(newVisites);
        },

        setSources(state, sources) {
          state.sources = sources;
        },

        setHeadline(state, oldTitle, newTitle) {
          const news = state.articles.findIndex(
              (article) => (article.title = oldTitle)
          );
          state.articles[news].title = newTitle;
        },
      },
    actions: {
        async fetchArticles({ commit }) {
          const { data } = await axios.get(
              `https://newsapi.org/v2/top-headlines?country=us&apiKey=099148be22804e849a0c6fe022b7cf5e`
          );
          commit('setArticles', data.articles);
        },

        async fetchSources({ commit }) {
          const { data } = await axios.get(
              ` https://newsapi.org/v2/sources?apiKey=099148be22804e849a0c6fe022b7cf5e`
          );
          commit('setSources', data.sources);
        },
      },
    getters: {
        allArticles: (state) => state.articles,
        articlesVisited: (state)=> state.visited,
        getAllSource: (state) =>  state.sources,
        articleWithTitle: (state) => (title) => {
            return state.articles.find((article) => article.title === title);
          },
        articlesWithSource: (state) => (source) => {
            return state.articles.filter((article) => article.source.name === source);
          },
      },
  });
