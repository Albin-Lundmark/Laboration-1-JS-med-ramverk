<script setup>

</script>

<template>
  <v-card>
    <v-layout>
      <v-navigation-drawer v-model="drawer" temporary>
        <v-list-item prepend-avatar="https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/38/38abc254c642690d83ca2e872b031166b98bd92e.jpg" title="Superheroes"></v-list-item>

        <v-divider></v-divider>

        <v-list density="compact" nav>
          <v-list-item prepend-icon="mdi-home" value="Home"><router-link to="/">Home</router-link></v-list-item>
          <v-list-item prepend-icon="mdi-cake" value="Heroes"><router-link to="/heroinfo">Heroes</router-link></v-list-item>
        </v-list>
      </v-navigation-drawer>
      <v-main style="height: 45svh">
        <div class="d-flex h-100">
          <v-btn id="menu-btn" color="blue" @click.stop="drawer = !drawer">
            Menu
          </v-btn>
          <img class="hero" src="../assets/img/superhero-hero-image.jpg" alt="HeroImage">
        </div>
      </v-main>
    </v-layout>
  </v-card>
</template>

<script>
import { RouterLink } from 'vue-router';
export default {
  data() {
    return {
      drawer: null,
    }
  }
}
</script>

<style scoped>
*{
  margin: 0;
  padding: 0;
}

#menu-btn{
  z-index: 2;
  position: absolute;
  top: 10px;
  left: 10px;
}
.hero {
  position:relative;
  height: auto;
  width: 100vw;
}
</style>
