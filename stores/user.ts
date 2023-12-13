import {defineStore} from "pinia";
import { Role } from "~/server/constants";

interface IState{
  users: IUser[],
  showForm: boolean,
  showChangePassword: boolean,
  showConfirm: boolean,
  loading: boolean,
  current: IUser | null
}

export const useUserStore = defineStore('user',{
  state: ():IState=>({
    users: [],
    showForm: false,
    loading: false,
    current: null,
    showConfirm: false,
    showChangePassword: false
  }),
  actions:{
    async getUsers(){
      const {data} = await useFetch('/api/user')
      this.users = data.value?.data as IUser[]
    },
    async create(body:{email: string, fullName: string, rol: Role, _service?: string}){
      const errorStore = useErrorStore()
      errorStore.resetError()
      this.loading = true
      const {data, error} = await useFetch('/api/user',{
        method: 'POST',
        body
      })
      this.loading = false
      if(error.value){
        errorStore.setError(error.value.statusMessage!)
      }else{
        this.users.push(data.value as IUser)
        this.showForm = false;
      }
    },
    async update(body:{_id: string, fullName: string, rol: Role, _service?: string}){
      const errorStore = useErrorStore()
      errorStore.resetError()
      this.loading = true
      const {data, error} = await useFetch('/api/user',{
        method: 'PATCH',
        body
      })
      this.loading = false
      if(error.value){
        errorStore.setError(error.value.statusMessage!)
      }else{
        this.users = this.users.map(x => x._id === body._id ? data.value as IUser : x)
        this.showForm = false;
      }
    },
    async changePassword(body:{email: string, password: string}){
      const errorStore = useErrorStore()
      errorStore.resetError()
      this.loading = true
      const {data, error} = await useFetch('/api/user/change-password',{
        method: 'PUT',
        body
      })
      this.loading = false
      if(error.value){
        errorStore.setError(error.value.statusMessage!)
      }else{
        this.showChangePassword = false;
      }
    },
    async delete(id:string){
      this.loading = true
      await useFetch(`/api/user/${id}`,{
        method: 'DELETE'
      })
      this.loading = false
      this.users = this.users.filter(x => x._id !== id)
      this.showConfirm = false
    },
    setShowForm(payload:boolean){
      this.showForm = payload
    },
    setShowChangePassword(payload:boolean){
      this.showChangePassword = payload
    },
    setCurrent(payload: null | IUser){
      this.current = payload
    },
    setShowConfirm(payload: boolean){
      this.showConfirm = payload
    }
  }
})