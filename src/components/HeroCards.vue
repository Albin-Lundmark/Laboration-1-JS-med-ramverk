<script>
import { useHeroStore } from '../stores/heroStore'
export default {
  setup() {
    const heroStore = useHeroStore()
    heroStore.fetchData()

    return { heroStore }
  },
  data: () => ({
    search: ''
  })
}
</script>

<template>
  <v-card>
    <v-data-iterator :items="heroStore.heroes" :items-per-page="3" :search="search">
      <template v-slot:header>
        <v-toolbar class="px-4">
          <v-text-field v-model="search" clearable density="comfortable" hide-details placeholder="Search .."
            prepend-inner-icon="mdi-magnify" style="max-width: 400px;" variant="solo"></v-text-field>
        </v-toolbar>
      </template>

      <template v-slot:default="{ items }">
        <v-container class="pa-2 fill-height" fluid>
          <v-row dense>
            <v-col v-for="item in items" :key="item.name" cols="auto" md="4">
              <v-card class="pb-3 mx-5" border elevated>
                <v-img :src="item.raw.image.url" cover max-height="450"></v-img>

                <v-list-item class="mb-2 px-5" :subtitle="'Publisher: ' + item.raw.biography.publisher">
                  <template v-slot:title>
                    <strong class="text-h6 mb-2">{{ item.raw.name }}</strong>
                  </template>
                </v-list-item>

                <div class="d-flex justify-space-between px-4">
                  <div class="d-flex align-center text-caption text-medium-emphasis me-1">
                    <v-icon icon="mdi-star" start></v-icon>

                    <div class="text-truncate">First appeareance: {{ item.raw.biography.firstAppearance }}
                    </div>
                  </div>

                  <v-btn border elevated size="small" class="text-none px-1"><router-link to="/herocardinfo">Read more</router-link>
                  </v-btn>
                </div>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </template>

      <template v-slot:footer="{ page, pageCount, prevPage, nextPage }">
        <div class="d-flex align-center justify-center pa-4">
          <v-btn :disabled="page === 1" icon="mdi-arrow-left" density="comfortable" variant="tonal" rounded
            @click="prevPage"></v-btn>

          <div class="mx-2 text-caption">
            Page {{ page }} of {{ pageCount }}
          </div>

          <v-btn :disabled="page >= pageCount" icon="mdi-arrow-right" density="comfortable" variant="tonal" rounded
            @click="nextPage"></v-btn>
        </div>
      </template>
    </v-data-iterator>
  </v-card>
</template>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
</style>
