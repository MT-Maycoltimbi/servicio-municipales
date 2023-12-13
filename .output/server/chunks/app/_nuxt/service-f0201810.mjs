import { u as useFetch } from './fetch-ac2e87f5.mjs';
import { d as defineStore } from '../server.mjs';

const useServiceStore = defineStore("service", {
  state: () => ({
    services: [],
    showForm: false,
    showConfirm: false,
    loading: false,
    current: null
  }),
  actions: {
    async getServices() {
      const { data } = await useFetch("/api/service", "$ch8qC0ik0G");
      this.services = data.value.data;
    },
    async create(body) {
      this.loading = true;
      const { data } = await useFetch("/api/service", {
        method: "POST",
        body
      }, "$ORAJlK7pTL");
      this.loading = false;
      this.showForm = false;
      this.services.push(data.value);
    },
    async update(body) {
      this.loading = true;
      await useFetch("/api/service", {
        method: "PATCH",
        body
      }, "$4e56lOOx7f");
      this.loading = false;
      this.showForm = false;
      this.services = this.services.map((x) => x._id === body._id ? body : x);
    },
    async delete(id) {
      this.loading = true;
      await useFetch(`/api/service/${id}`, {
        method: "DELETE"
      }, "$3UXx64luYE");
      this.services = this.services.filter((x) => x._id !== id);
      this.loading = false;
      this.showConfirm = false;
    },
    setShowForm(payload) {
      this.showForm = payload;
    },
    setCurrent(payload) {
      this.current = payload;
    },
    setShowConfirm(payload) {
      this.showConfirm = payload;
    }
  },
  getters: {
    servicesReportXLSX(state) {
      return state.services.map((x) => ({
        nombre: x.name,
        descripcion: x.description
      }));
    }
  }
});

export { useServiceStore as u };
//# sourceMappingURL=service-f0201810.mjs.map
