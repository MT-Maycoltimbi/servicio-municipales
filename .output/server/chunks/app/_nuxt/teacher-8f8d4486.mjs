import { u as useFetch } from './fetch-ac2e87f5.mjs';
import { d as defineStore } from '../server.mjs';

const useTeacherStore = defineStore("teacher", {
  state: () => ({
    teachers: [],
    showForm: false,
    loading: false,
    current: null,
    showConfirm: false
  }),
  actions: {
    async getAll() {
      var _a;
      const { data } = await useFetch("/api/teacher", "$ZL0I1fWsN0");
      this.teachers = (_a = data.value) == null ? void 0 : _a.data;
    },
    async create(body) {
      this.loading = true;
      const { data, error } = await useFetch("/api/teacher", {
        method: "POST",
        body
      }, "$EsdrRguzzS");
      this.loading = false;
      this.teachers.push(data.value);
      this.showForm = false;
    },
    async update(body) {
      this.loading = true;
      const { data, error } = await useFetch("/api/teacher", {
        method: "PATCH",
        body
      }, "$eiDPDYAjrK");
      this.loading = false;
      this.teachers = this.teachers.map((x) => x._id === body._id ? data.value : x);
      this.showForm = false;
    },
    async delete(id) {
      this.loading = true;
      await useFetch(`/api/teacher/${id}`, {
        method: "DELETE"
      }, "$jIPkHh7Bfo");
      this.loading = false;
      this.teachers = this.teachers.filter((x) => x._id !== id);
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
    teachersReportXLSX(state) {
      return state.teachers.map((x) => ({
        nombreCompleto: x.fullName,
        email: x.email,
        titulo: x.degree
      }));
    }
  }
});

export { useTeacherStore as u };
//# sourceMappingURL=teacher-8f8d4486.mjs.map
