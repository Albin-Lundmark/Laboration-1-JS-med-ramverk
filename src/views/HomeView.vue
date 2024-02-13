<script>
import { useHeroStore } from '../stores/heroStore'
import { ref } from 'vue'

    export default {
        setup() {
            const heroStore = useHeroStore()
            /* onMounted(async () =>{
              await heroStore.fetchData()
              console.log(this.heroes)
            }) */
            heroStore.fetchData()
            const filter = ref('all')

            return { heroStore, filter }
        }
    }
</script>

<template>
<div>Hejsan hoppsan {{ heroStore.heroes + filter }}</div>
</template>

<style scoped>
</style>
