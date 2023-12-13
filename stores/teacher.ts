import {defineStore} from "pinia";

interface IState{
  teachers: ITeacher[],
  showForm: boolean,
  showConfirm: boolean,
  loading: boolean,
  current: ITeacher | null
}

export const useTeacherStore = defineStore('teacher',{
  state: ():IState=>({
    teachers: [],
    showForm: false,
    loading: false,
    current: null,
    showConfirm: false,
  }),
  actions:{
    async getAll(){
      const {data} = await useFetch('/api/teacher')
      this.teachers = data.value?.data as ITeacher[]
    },
    async create(body:{email: string, fullName: string, degree: string}){
      this.loading = true
      const {data, error} = await useFetch('/api/teacher',{
        method: 'POST',
        body
      })
      this.loading = false
      this.teachers.push(data.value as ITeacher)
      this.showForm = false;
    },
    async update(body:{_id: string, email: string, fullName: string, degree: string}){
      this.loading = true
      const {data, error} = await useFetch('/api/teacher',{
        method: 'PATCH',
        body
      })
      this.loading = false
      this.teachers = this.teachers.map(x => x._id === body._id ? data.value as ITeacher : x)
      this.showForm = false;
    },
    async delete(id:string){
      this.loading = true
      await useFetch(`/api/teacher/${id}`,{
        method: 'DELETE'
      })
      this.loading = false
      this.teachers = this.teachers.filter(x => x._id !== id)
      this.showConfirm = false
    },
    setShowForm(payload:boolean){
      this.showForm = payload
    },
    setCurrent(payload: null | ITeacher){
      this.current = payload
    },
    setShowConfirm(payload: boolean){
      this.showConfirm = payload
    }
  },
  getters:{
    teachersReportXLSX(state){
      return state.teachers.map(x => ({
        nombreCompleto: x.fullName,
        email: x.email,
        titulo: x.degree
      }))
    }
  }
})