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
    <v-card-text class="text-center wrapper">
      <div>Word of the Day</div>
      <p class="text-h4 text--primary">
        Su•per•he•ro
      </p>
      <p>Substanstive</p>
      <div class="text--primary">
        A superhero is a fictional character possessing extraordinary powers or abilities, often dedicated to protecting the public and fighting against evil or injustice. Superheroes are commonly depicted in comic books, movies, and other forms of popular culture, serving as symbols of hope, courage, and justice.
      </div>
    </v-card-text>
  </v-card>
</template>

<style scoped>
.wrapper{
    margin-left: auto;
    margin-right: auto;
    max-width: 800px;
}
</style>
