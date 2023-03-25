import {defineStore} from "pinia"

export const useAppStore = defineStore('app', {
  state: () => {
    return {

    }
  },

  getters:{

  },

  actions: {
    appStarted(){
      console.log('App started!')
    }
  }
})