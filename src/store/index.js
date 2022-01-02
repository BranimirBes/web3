import { createStore } from "vuex";

export default createStore({
  state: {
    likedMovies: [],
  },
  mutations: {
    likeMovie(state, payload) {
      const newList = [...state.likedMovies];
      newList.push(payload.movie);
      state.likedMovies = newList;
    },

    dislikeMovie(state, payload) {
      state.likedMovies = state.likedMovies.filter(
        (movie) => movie.id !== payload.movieId
      );
    },
  },
  actions: {},
  modules: {},
});
