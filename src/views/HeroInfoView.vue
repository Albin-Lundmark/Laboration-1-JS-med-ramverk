<script setup>
import HeroCard from '../components/HeroCard.vue'
</script>

<template>
  <HeroCard v-if="HeroCard !== null" />
  <h2 v-else>Något har gått fel med laddningen av superhjältar..</h2>
</template>

<style scoped>
</style>
