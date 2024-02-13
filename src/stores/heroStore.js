import { defineStore } from 'pinia'
import axios from 'axios'

export const useHeroStore = defineStore('heroStore', {
  state: () => ({
    heroes: null
  }),
  actions: {
    async fetchData() {
      /* const res = await fetch('https://avancera.app/cities')
      const data = await res.json()
      this.data = data
      console.log(this.data) */
      try {
        const response = await axios.get('https://superheroapi.com/api/10161598990293033/1')
        this.heroes = response
        console.log(this.response, 'Hejsan');
        console.log(this.heroes)
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
