<script setup>
import { RouterLink, RouterView } from 'vue-router'
import NavBar from './components/NavBar.vue'
import FooterNav from './components/FooterNav.vue'
</script>

<template>
  <v-app>
    <header>
      <NavBar />
      <router-link to="/heroinfo">Heroes</router-link>
    </header>
    <main>
      <RouterView />
    </main>
      <FooterNav />
  </v-app>
</template>

<style scoped>
</style>
