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
  <v-card>

  </v-card>
</template>

<style scoped>

</style>
