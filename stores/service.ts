import {defineStore} from "pinia";

interface IState{
  services: IService[],
  showForm: boolean,
  loading: boolean,
  current: IService | null,
  showConfirm: boolean,
}

export const useServiceStore = defineStore('service', {
  state: ():IState=>({
    services: [],
    showForm: false,
    showConfirm: false,
    loading: false,
    current: null
  }),
  actions:{
    async getServices(){
      const {data} = await useFetch('/api/service')
      this.services = data.value!.data as IService[] 
    },
    async create(body:{name: string, description: string}){
      this.loading = true
      const {data} = await useFetch('/api/service', {
        method: 'POST',
        body
      })
      this.loading = false
      this.showForm = false
      this.services.push(data.value as IService)
    },
    async update(body:IService){
      this.loading = true
      const {data} = await useFetch('/api/service', {
        method: 'PATCH',
        body
      })
      this.loading = false
      this.showForm = false
      this.services = this.services.map(x => x._id === body._id ? body : x)
    },
    async delete(id:string){
      this.loading = true
      await useFetch(`/api/service/${id}`, {
        method: 'DELETE',
      })
      this.services = this.services.filter(x => x._id !== id)
      this.loading = false
      this.showConfirm = false
    },
    setShowForm(payload: boolean){
      this.showForm = payload
    },
    setCurrent(payload: IService | null){
      this.current = payload
    },
    setShowConfirm(payload: boolean){
      this.showConfirm = payload
    }
  },
  getters:{
    servicesReportXLSX(state){
      return state.services.map(x => ({
        nombre: x.name,
        descripcion: x.description
      }))
    }
  }
})