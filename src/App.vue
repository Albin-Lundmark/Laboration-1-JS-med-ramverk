<script setup>
import { RouterView } from 'vue-router'
import NavBar from './components/NavBar.vue'
import FooterNav from './components/FooterNav.vue'
</script>

<template>
  <v-app>
    <header>
      <NavBar />
    </header>
    <main>
      <RouterView />
    </main>
      <FooterNav />
  </v-app>
</template>

<style scoped>
</style>
