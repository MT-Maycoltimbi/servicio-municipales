import moment from "moment";
import {defineStore} from "pinia";

interface IState{
  currentCourse: ICourse | null,
  showForm: boolean,
  loading: boolean,
  current: IInscription | null,
  showConfirm: boolean,
  inscriptions: IInscription[]
}

export const useInscriptionStore = defineStore('inscription',{
  state:():IState=>({
    currentCourse: null,
    inscriptions: [],
    showForm: false,
    loading: false,
    current: null,
    showConfirm: false,
  }),
  actions:{
    async getCourseById(id: string){
      const {data} = await useFetch(`/api/course/${id}`)
      this.currentCourse = data.value as ICourse
    },
    async getAllByCourse(){
      const {data} = await useFetch(`/api/inscription/${this.currentCourse!._id}`)
      this.inscriptions = (data.value! as any).data as IInscription[]
    },
    async create(body:IInscriptionCreate){
      const errorStore = useErrorStore()
      this.loading = true
      const {data, error} = await useFetch('/api/inscription', {
        method: 'POST',
        body
      })
      this.loading = false
      if(error.value){
        errorStore.setError(error.value.statusMessage!)
        return
      }
      this.showForm = false
      this.inscriptions.push(data.value as IInscription)
    },
    async update(body:IInscriptionUpdate){
      const errorStore = useErrorStore()
      this.loading = true
      const {data, error} = await useFetch('/api/inscription', {
        method: 'PATCH',
        body
      })
      this.loading = false
      if(error.value){
        errorStore.setError(error.value.statusMessage!)
        return
      }
      this.showForm = false
      this.inscriptions = this.inscriptions.map(x => x._id === body._id ? data.value as IInscription : x)
    },
    async delete(id:string){
      this.loading = true
      await useFetch(`/api/inscription/delete/${id}`, {
        method: 'DELETE',
      })
      this.inscriptions = this.inscriptions.filter(x => x._id !== id)
      this.loading = false
      this.showConfirm = false
    },
    setShowForm(payload: boolean){
      this.showForm = payload
    },
    setCurrent(payload: IInscription | null){
      this.current = payload
    },
    setShowConfirm(payload: boolean){
      this.showConfirm = payload
    }
  },
  getters:{
    inscriptionsReportXLSX(state){
      return state.inscriptions.map(x => ({
        nombre: x.name,
        fechaNacimiento: moment(x.birdthDate).format('DD-MM-YYYY'),
        direccion: x.address,
        zona: x.zone,
        sexo: x.sexo,
        telefono: x.phone,
        cedula: x.cedula
      }))
    }
  }
})