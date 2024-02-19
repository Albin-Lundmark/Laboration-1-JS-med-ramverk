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
    <footer>
      <FooterNav />
    </footer>
  </v-app>
</template>

<style scoped>
#app > div > div > footer {
  margin: 0;
  padding: 0;
}
footer{
  margin: 0;
  padding: 0;
}
</style>
