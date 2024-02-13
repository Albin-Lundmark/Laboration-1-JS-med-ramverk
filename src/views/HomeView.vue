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

<template>
<ul v-for="hero in heroStore.heroes" class="text-center text-h4" :key="hero.id">
  <li>{{ hero.name }}</li>
</ul>
</template>

<style scoped>
</style>
