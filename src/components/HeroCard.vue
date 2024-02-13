<script>
import { useHeroStore } from '../stores/heroStore'
  export default {
    setup() {
      const heroStore = useHeroStore()
        heroStore.fetchData()

        return { heroStore }
      },
    data: () => ({
      search: '',
      heroes: []
    })
  }
</script>

<template>
  <v-card>
    <v-data-iterator
      :items="heroes"
      :items-per-page="3"
      :search="search"
    >
      <template v-slot:header>
        <v-toolbar class="px-2">
          <v-text-field
            v-model="search"
            clearable
            density="comfortable"
            hide-details
            placeholder="Search"
            prepend-inner-icon="mdi-magnify"
            style="max-width: 400px;"
            variant="solo"
          ></v-text-field>
        </v-toolbar>
      </template>

      <template v-slot:default="{ heroStore }">
        <v-container class="pa-2" fluid>
          <v-row dense>
            <v-col
              v-for="hero in heroStore.heroes"
              :key="hero.name"
              cols="auto"
              md="4"
            >
              <v-card class="pb-3" border flat>
                <v-img :src="item.image.url"></v-img>

                <v-list-item class="mb-2" :biography="item.biography">
                  <template v-slot:name>
                    <strong class="text-h6 mb-2">{{ item.name }}</strong>
                  </template>
                </v-list-item>

                <div class="d-flex justify-space-between px-4">
                  <div class="d-flex align-center text-caption text-medium-emphasis me-1">
                    <v-icon icon="mdi-clock" start></v-icon>

                    <div class="text-truncate">{{ item.raw.duration }}</div>
                  </div>

                  <v-btn
                    border
                    flat
                    size="small"
                    class="text-none"
                    text="Read"
                  >
                  </v-btn>
                </div>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </template>

      <template v-slot:footer="{ page, pageCount, prevPage, nextPage }">
        <div class="d-flex align-center justify-center pa-4">
          <v-btn
            :disabled="page === 1"
            icon="mdi-arrow-left"
            density="comfortable"
            variant="tonal"
            rounded
            @click="prevPage"
          ></v-btn>

          <div class="mx-2 text-caption">
            Page {{ page }} of {{ pageCount }}
          </div>

          <v-btn
            :disabled="page >= pageCount"
            icon="mdi-arrow-right"
            density="comfortable"
            variant="tonal"
            rounded
            @click="nextPage"
          ></v-btn>
        </div>
      </template>
    </v-data-iterator>
  </v-card>
</template>

<style scoped>
*{
  margin: 0;
  padding: 0;
}
</style>
