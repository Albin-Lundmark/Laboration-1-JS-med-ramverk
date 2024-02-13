<script setup>

</script>

<template>
  <v-card>
    <v-layout>
      <v-navigation-drawer v-model="drawer" temporary>
        <v-list-item prepend-avatar="https://randomuser.me/api/portraits/men/78.jpg" title="Albin Lundmark"></v-list-item>

        <v-divider></v-divider>

        <v-list density="compact" nav>
          <v-list-item prepend-icon="mdi-view-dashboard" title="Home" value="home"></v-list-item>
          <v-list-item prepend-icon="mdi-forum" title="About" value="about"></v-list-item>
        </v-list>
      </v-navigation-drawer>
      <v-main style="height: 250px">
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
export default {
  data() {
    return {
      drawer: null,
    }
  },
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
