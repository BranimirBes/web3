<template>
  <input v-model="message" />
  <p>Message is: {{ message }}</p>
  <button v-on:click="onClick">Emit event</button>
</template>

<script>
export default {
  data() {
    return {
      message: "",
    };
  },
  methods: {
    onClick() {
      this.$emit("buttonclickevent");
    },
  },
};
</script>
