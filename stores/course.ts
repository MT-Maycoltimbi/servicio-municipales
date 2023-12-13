import moment from "moment";
import { defineStore } from "pinia";

interface IState{
  courses: ICourse [],
  showForm: boolean,
  loading: boolean,
  current: ICourse | null,
  showConfirm: boolean,
}

export const useCourseStore = defineStore('course', {
  state: ():IState=>({
    courses: [],
    showForm: false,
    showConfirm: false,
    loading: false,
    current: null
  }),
  actions: {
    async create(body: ICourseCreate){
      this.loading = true;
      const {data} = await useFetch('/api/course',{
        body,
        method:'POST'
      })
      this.courses.push(data.value! as ICourse)
      this.loading = false;
      this.showForm = false
    },
    async getAll(idService?: string){
      const {data} = await useFetch(`/api/course${idService ? '?idService='+idService:''}`)
      this.courses = data.value!.data as ICourse[]
    },
    async update(body:ICourseUpdate){
      this.loading = true
      const {data} = await useFetch('/api/course', {
        method: 'PATCH',
        body
      })
      this.loading = false
      this.showForm = false
      this.courses = this.courses.map(x => x._id === body._id ? data.value as ICourse : x)
    },
    async delete(id:string){
      this.loading = true
      await useFetch(`/api/course/${id}`, {
        method: 'DELETE',
      })
      this.courses = this.courses.filter(x => x._id !== id)
      this.loading = false
      this.showConfirm = false
    },
    setShowForm(payload: boolean){
      this.showForm = payload
    },
    setCurrent(payload: ICourse | null){
      this.current = payload
    },
    setShowConfirm(payload: boolean){
      this.showConfirm = payload
    }
  },
  getters:{
    coursesReportXLSX(state){
      return state.courses.map(x => ({
        nombre: x.name,
        inicio: moment(x.startDate).format('DD-MM-YYYY'),
        fin: moment(x.endDate).format('DD-MM-YYYY'),
        lugar: x.location,
        profesor: x._teacher.fullName        
      }))
    }
  }
})
