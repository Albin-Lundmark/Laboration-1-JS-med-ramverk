<script>
import { useHeroStore } from '../stores/heroStore'

export default {
    setup() {

        const heroStore = useHeroStore()
        heroStore.fetchData()

        return { heroStore }
    }
}
</script>
<script setup>
import HeroInfo from '../components/HeroInfo.vue';
</script>

<template>
    <HeroInfo />
</template>

<style scoped>
</style>
