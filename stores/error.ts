import {defineStore} from "pinia";

interface IState{
  error: null | string
}

export const useErrorStore = defineStore('error',{
  state:():IState =>({
    error: null
  }),
  actions:{
    resetError(){
      this.error = null;
    },
    setError(payload: string | null){
      this.error = payload;
    }
  }
})