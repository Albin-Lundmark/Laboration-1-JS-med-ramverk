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
    <h2 class="text-center">Superheroes unite!</h2>
    <v-divider></v-divider>
    <p class="text-center mx-4">Welcome to Heroes Unveiled, your portal to the extraordinary world of superheroes. Navigate through our captivating design to discover iconic champions of justice and enigmatic anti-heroes alike.</p>

    <p class="text-center mx-4">Uncover the origins that forged these heroes, from chance encounters to transformative moments. Witness their superhuman feats, from lightning speed to titanic strength, as they battle against villainy.</p>

    <p class="text-center mx-4">Dive into the intricate web of alliances and rivalries, exploring the complexities of heroism and villainy. Join our vibrant community to engage in discussions, exchange insights, and showcase your creativity.</p>

    <p class="text-center mx-4">Join us at Heroes Unveiled, where legends come to life with each click.
    </p>
    <!-- <ul v-for="hero in heroStore.heroes" :key="hero.id" class="text-center text-h5">
        <li>{{ hero.name }}</li>
    </ul> -->
</template>

<style scoped>
</style>
