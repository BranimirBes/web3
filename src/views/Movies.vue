<template>
  <div class="movies">
    <MovieList v-bind:movie-list="movies" />
  </div>
</template>

<script>
import { getMovies } from "@/api/movies";
import MovieList from "@/components/MovieList";

export default {
  components: { MovieList },
  data: function () {
    return {
      movies: [],
    };
  },
  async mounted() {
    this.movies = await getMovies();
  },
};
</script>
