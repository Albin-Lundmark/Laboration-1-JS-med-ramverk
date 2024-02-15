<script setup>
import HeroCard from '../components/HeroCard.vue'
/* import { useHeroStore } from '../stores/heroStore'

    const heroStore = useHeroStore()
    heroStore.fetchData()
 */
</script>

<template>
  <HeroCard v-if="HeroCard !== null" />
  <h2 v-else>Något har gått fel med laddningen av superhjältar..</h2>
</template>

<style scoped>
</style>
