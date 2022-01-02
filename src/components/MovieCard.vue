<template>
  <div class="container">
    <img v-bind:src="poster" height="148" width="100" alt="Movie Poster" />
    <div class="movie-info-container">
      <p>{{ title }}</p>
      <button class="button-class" v-on:click="dislikeMovie" v-if="movieLiked">
        Dislike
      </button>
      <button class="button-class" v-on:click="likeMovie" v-else>Like</button>
    </div>
  </div>
</template>

<script>
export default {
  props: ["title", "poster", "id"],
  methods: {
    likeMovie() {
      this.$store.commit({
        type: "likeMovie",
        movie: {
          id: this.id,
          title: this.title,
          poster: this.poster,
        },
      });
    },
    dislikeMovie() {
      this.$store.commit({
        type: "dislikeMovie",
        movieId: this.id,
      });
    },
  },
  computed: {
    movieLiked() {
      const movie = this.$store.state.likedMovies.find(
        (movie) => movie.id === this.id
      );
      return !!movie;
    },
  },
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: row;
  margin-bottom: 2px;
}
.movie-info-container {
  display: flex;
  flex-direction: column;
  margin-left: 2px;
}
.button-class {
  height: 20px;
}
</style>
