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
    <div></div>
</template>

<style scoped>
</style>
