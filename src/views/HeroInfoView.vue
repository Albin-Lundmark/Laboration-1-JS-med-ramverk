<script setup>
import HeroCards from '../components/HeroCards.vue'
</script>

<template>
  <HeroCards v-if="HeroCards !== null" />
  <h2 v-else>Något har gått fel med laddningen av superhjältar..</h2>
</template>

<style scoped>
</style>
