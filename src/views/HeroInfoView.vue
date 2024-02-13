<script setup>
import HeroCard from '../components/HeroCard.vue';

</script>

<template>
  <HeroCard v-for="hero in heroes" :key="hero" />
</template>

<style scoped>
</style>
