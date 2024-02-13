<script setup>
import HeroCard from '../components/HeroCard.vue'
import { useHeroStore } from '../stores/heroStore'

    const heroStore = useHeroStore()
    heroStore.fetchData()

</script>

<template>
  <HeroCard v-for="hero in heroStore.heroes" :key="hero" />
</template>

<style scoped>
</style>
