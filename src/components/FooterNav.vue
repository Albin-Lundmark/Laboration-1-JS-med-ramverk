<script>
export default {
  data: () => ({
    icons: [
      'mdi-facebook',
      'mdi-twitter',
      'mdi-linkedin',
      'mdi-instagram',
    ]
  })
}
</script>

<template>
  <v-footer class="d-flex flex-column">
    <div class="bg-blue d-flex w-100 align-center px-4">
      <strong>Get connected on social networks!</strong>

      <v-spacer></v-spacer>

      <v-btn v-for="icon in icons" :key="icon" class="mx-4" href="#" :icon="icon" variant="plain" size="large"></v-btn>
    </div>

    <div class="px-4 py-2 bg-black text-center w-100">
      <strong>Albins superhero webpage</strong> — {{ new Date().getFullYear() }}
    </div>
  </v-footer>
</template>

<style scoped>
*{
  margin: 0;
  padding: 0;
}
</style>
