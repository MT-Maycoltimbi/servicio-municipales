<template>
  <VCard elevation="5">
    <VTable>
      <thead>
        <tr>
          <th>Nombre completo</th>
          <th>Email</th>
          <th>Título</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="i in teachers">
          <td>{{ i.fullName }}</td>
          <td>{{ i.email }}</td>
          <td>{{ i.degree }}</td>
          <td>
            <VBtn 
              icon="mdi-eye"
              color="warning"
              variant="text"
              title="Editar"
              @click="toEdit(i)"
            />
            <VBtn 
              icon="mdi-delete"
              color="error"
              variant="text"
              title="Eliminar"
              @click="toConfirm(i)"
            />
          </td>
        </tr>
      </tbody>
    </VTable>
  </VCard>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia';

const teacherStore = useTeacherStore()
const {teachers} = storeToRefs(teacherStore)

await teacherStore.getAll()

const toEdit = (teacher:ITeacher)=>{
  teacherStore.setCurrent(teacher)
  teacherStore.setShowForm(true)
}

const toConfirm = (teacher:ITeacher)=>{
  teacherStore.setCurrent(teacher)
  teacherStore.setShowConfirm(true)
}
</script>

<style scoped>

</style>