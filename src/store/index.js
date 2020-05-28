import Vue from 'vue';
import Vuex from 'vuex';

import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        articles: [],
        filter: false,
        isQuerying: false,
        searchedArticles: [],
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

        setFiltered(state, filtered) {
          state.filter = filtered;
        },

        setQuery(state, query) {
          state.query = query;
        },

        setSources(state, sources) {
          state.sources = sources;
        },

        setQuerying(state, payload) {
          state.isQuerying = payload;
        },

        setHeadline(state, payload) {
          const { oldTitle, newTitle } = payload;
          const news = state.articles.findIndex(
              (article) => article.title === oldTitle
          );
          if (state.articles[news]) {
            state.articles[news].title = newTitle;
          } else {
            const searchNews = state.searchedArticles.findIndex(
                (article) => article.title === oldTitle
            );
            if (state.searchedArticles[searchNews])
                state.searchedArticles[searchNews].title = newTitle;
          }
        },

        setSearchArticles(state, payload) {
          state.searchedArticles = payload;
        },
      },
    actions: {
        async fetchArticles({ commit }) {
          const { data } = await axios.get(
              `https://newsapi.org/v2/top-headlines?country=us&apiKey=a318b84d9f3848db8bf0ed3caf66f92c`
          );
          commit('setArticles', data.articles);
        },

        async fetchSources({ commit }) {
          const { data } = await axios.get(
              ` https://newsapi.org/v2/sources?apiKey=a318b84d9f3848db8bf0ed3caf66f92c`
          );
          commit('setSources', data.sources);
        },

        async fetchQuery({ commit }, searchQuery) {
          const { data } = await axios.get(
              ' https://newsapi.org/v2/top-headlines?q=' +
              searchQuery +
              '&apiKey=a318b84d9f3848db8bf0ed3caf66f92c'
          );
          commit('setSearchArticles', data.articles);
        },
      },
    getters: {
        allArticles: (state) => state.articles,
        getSearchArticles: (state) => state.searchedArticles,
        articlesVisited: (state) => state.visited,
        getAllSource: (state) => state.sources,
        articleWithTitle: (state) => (title) => {
            if (state.articles) {
              return state.articles.find(
                  (article) => article.title.toLowerCase() === title.toLowerCase());
            } else {
              return state.searchedArticles.find(
                  (article) => article.title.toLowerCase() === title.toLowerCase());
            }
          },

        articlesWithSource: (state) => (source) => {
            return state.articles.filter(
                (article) => article.source.name.toLowerCase() === source.toLowerCase()
            );
          },
      },
  });
