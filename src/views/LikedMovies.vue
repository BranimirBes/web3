<template>
  <MovieList v-bind:movie-list="movieList" />
</template>

<script>
import MovieList from "@/components/MovieList";

export default {
  components: { MovieList },
  computed: {
    movieList() {
      return this.$store.state.likedMovies;
    },
  },
};
</script>
