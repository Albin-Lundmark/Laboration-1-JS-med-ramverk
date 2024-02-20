import { defineStore } from 'pinia'
import axios from 'axios'

export const useHeroStore = defineStore('heroStore', {
  state: () => ({
    heroes: []
  }),
  actions: {
    async fetchData() {
      try {
        const response = await axios.get('heroes.json')
        this.heroes = response.data
        /* console.log(this.heroes) */
      } catch (error) {
        console.error('Allt har gått åt pipsvängen! :', error)
      }
    }
  },
  getters: {
    hero(state) {
      return state.heroes
    }
  }
})
