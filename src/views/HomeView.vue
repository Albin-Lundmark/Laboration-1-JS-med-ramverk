<script>
import { useHeroStore } from '../stores/heroStore'

export default {
  computed: {
    firstColumn() {
        const heroStore = useHeroStore()
        let column1 = heroStore.heroes.slice(0, Math.ceil(this.heroStore.heroes.length / 2))
        return column1
    },
    secondColumn() {
        const heroStore = useHeroStore()
        let column2 = heroStore.heroes.slice(Math.ceil(this.heroStore.heroes.length / 2))
        return column2
    }
  },
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
    <p class="text-center mx-4 mt-2">Welcome to Heroes Unveiled, your portal to the extraordinary world of superheroes. Navigate through our captivating design to discover iconic champions of justice and enigmatic anti-heroes alike.</p>

    <p class="text-center mx-4">Uncover the origins that forged these heroes, from chance encounters to transformative moments. Witness their superhuman feats, from lightning speed to titanic strength, as they battle against villainy.</p>

    <p class="text-center mx-4">Dive into the intricate web of alliances and rivalries, exploring the complexities of heroism and villainy. Join our vibrant community to engage in discussions, exchange insights, and showcase your creativity.</p>

    <p class="text-center mx-4">Join us at Heroes Unveiled, where legends come to life with each click.
    </p>

    <h2 class="text-center my-3">Here's a list of all our heroes</h2>
    <v-divider></v-divider>
    <div class="two-column-list mt-2">
        <ul v-for="hero in firstColumn" :key="hero.id">
            <li class="text-center text-h6">{{ hero.name }}</li>
        </ul>
        <ul v-for="hero in secondColumn" :key="hero.id">
            <li class="text-center text-h6 mb-">{{ hero.name }}</li>
        </ul>
    </div>
</template>

<style scoped>
.two-column-list {
    display: grid;
    grid-template-columns: 50% 50%;
    grid-auto-rows: minmax(20px, auto);
    grid-gap: 5px;
    place-self: center
}
</style>
