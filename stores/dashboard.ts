import {defineStore} from "pinia";

interface IState{
  data: IStatistic[]
}

export const useDashboardStore = defineStore('dashboard',{
  state:():IState=>({
    data: []
  }),
  actions: {
    async getStatistics(){
      const {data, error} = await useFetch('/api/statistics')
      this.data = data.value!.data as [IStatistic]      
    }
  },
  getters:{
    barServices(state){
      const services = state.data.map(x => x.name)
      const inscriptions = state.data.map(x => {
        return x.courses.reduce(
          (counter, current) => current.inscriptions.length+counter
          ,0
        )
      })
      return {
        labels: services,
          datasets: [ { 
            label: 'Personas',
            backgroundColor: '#f87979',
            data: inscriptions
          } 
        ]
      }
    },

    pieZone(state){
      const zones = ["urbana","rural"]
      const inscriptioonsByZone = zones.map(x => {
        return state.data.reduce((counter, current)=>{
          let counterByZone = 0
          current.courses.forEach(c => counterByZone += c.inscriptions.filter(i => i.zone === x).length )
          return counterByZone + counter
        },0)
      })
      return {
        labels: zones,
          datasets: [ { 
            label: 'Personas',
            backgroundColor: ['#8EDFF4','#AABC58'],
            data: inscriptioonsByZone
          } 
        ]
      }
    },

    barCourses(state){
      return (idService: string)=>{
        const service = state.data.find(x => x._id === idService);
        const courses = service?.courses.map(x => x.name) ?? []
        const inscriptions = service?.courses.map(x => x.inscriptions.length) ?? []

        return {
          labels: courses,
            datasets: [ { 
              label: 'Personas',
              backgroundColor: ['#8EDFF4','#AABC58'],
              data: inscriptions
            } 
          ]
        }
      }
    },

    pieSexByService(state){
      return (idService: string)=>{
        const service = state.data.find(x => x._id === idService);
        const sexs = ["Masculino","Femenino"];
        const inscriptions = [
          service?.courses.reduce((counter, current)=> current.inscriptions.filter(y => y.sexo === "M").length + counter,0) ?? 0,
          service?.courses.reduce((counter, current)=> current.inscriptions.filter(y => y.sexo === "F").length + counter,0) ?? 0
        ]

        return {
          labels: sexs,
            datasets: [ { 
              label: 'Personas',
              backgroundColor: ['#8EDFF4','#f87979'],
              data: inscriptions
            } 
          ]
        }
      }
    }
  }
})