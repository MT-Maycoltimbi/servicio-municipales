import { u as useFetch } from './fetch-ac2e87f5.mjs';
import { d as defineStore } from '../server.mjs';

const useDashboardStore = defineStore("dashboard", {
  state: () => ({
    data: []
  }),
  actions: {
    async getStatistics() {
      const { data, error } = await useFetch("/api/statistics", "$qQj0vXwSAy");
      this.data = data.value.data;
    }
  },
  getters: {
    barServices(state) {
      const services = state.data.map((x) => x.name);
      const inscriptions = state.data.map((x) => {
        return x.courses.reduce(
          (counter, current) => current.inscriptions.length + counter,
          0
        );
      });
      return {
        labels: services,
        datasets: [
          {
            label: "Personas",
            backgroundColor: "#f87979",
            data: inscriptions
          }
        ]
      };
    },
    pieZone(state) {
      const zones = ["urbana", "rural"];
      const inscriptioonsByZone = zones.map((x) => {
        return state.data.reduce((counter, current) => {
          let counterByZone = 0;
          current.courses.forEach((c) => counterByZone += c.inscriptions.filter((i) => i.zone === x).length);
          return counterByZone + counter;
        }, 0);
      });
      return {
        labels: zones,
        datasets: [
          {
            label: "Personas",
            backgroundColor: ["#8EDFF4", "#AABC58"],
            data: inscriptioonsByZone
          }
        ]
      };
    },
    barCourses(state) {
      return (idService) => {
        var _a, _b;
        const service = state.data.find((x) => x._id === idService);
        const courses = (_a = service == null ? void 0 : service.courses.map((x) => x.name)) != null ? _a : [];
        const inscriptions = (_b = service == null ? void 0 : service.courses.map((x) => x.inscriptions.length)) != null ? _b : [];
        return {
          labels: courses,
          datasets: [
            {
              label: "Personas",
              backgroundColor: ["#8EDFF4", "#AABC58"],
              data: inscriptions
            }
          ]
        };
      };
    },
    pieSexByService(state) {
      return (idService) => {
        var _a, _b;
        const service = state.data.find((x) => x._id === idService);
        const sexs = ["Masculino", "Femenino"];
        const inscriptions = [
          (_a = service == null ? void 0 : service.courses.reduce((counter, current) => current.inscriptions.filter((y) => y.sexo === "M").length + counter, 0)) != null ? _a : 0,
          (_b = service == null ? void 0 : service.courses.reduce((counter, current) => current.inscriptions.filter((y) => y.sexo === "F").length + counter, 0)) != null ? _b : 0
        ];
        return {
          labels: sexs,
          datasets: [
            {
              label: "Personas",
              backgroundColor: ["#8EDFF4", "#f87979"],
              data: inscriptions
            }
          ]
        };
      };
    }
  }
});

export { useDashboardStore as u };
//# sourceMappingURL=dashboard-dab582c7.mjs.map
