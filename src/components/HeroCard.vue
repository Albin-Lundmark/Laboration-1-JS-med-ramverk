<script>
import { useHeroStore } from '../stores/heroStore'
import {ref} from 'vue'
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
  <v-card
    class="mx-auto"
    max-width="400"
  >
    <v-img
      class="align-end text-white"
      height="200"
      src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
      cover
    >
      <v-card-title>Top 10 Australian beaches</v-card-title>
    </v-img>

    <v-card-subtitle class="pt-4">
      Number 10
    </v-card-subtitle>

    <v-card-text>
      <div>Whitehaven Beach</div>

      <div>Whitsunday Island, Whitsunday Islands</div>
    </v-card-text>

    <v-card-actions>
      <v-btn color="orange">
        Share
      </v-btn>

      <v-btn color="orange">
        Explore
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<style scoped>
*{
  margin: 0;
  padding: 0;
}
</style>
