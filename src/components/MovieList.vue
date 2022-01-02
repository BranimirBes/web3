<template>
  <MovieCard
    v-for="item in movieList"
    :key="item.title"
    v-bind:poster="item.poster"
    v-bind:title="item.title"
    v-bind:id="item.id"
  />
</template>

<script>
import MovieCard from "@/components/MovieCard";
export default {
  components: { MovieCard },
  props: ["movieList"],
};
</script>
