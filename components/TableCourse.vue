<template>
  <VCard elevation="5">
    <VTable>
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Fecha</th>
          <th>Lugar</th>
          <th>Horarios</th>
          <th>Profesor</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="i in courses">
          <td>{{ i.name }}</td>
          <td>{{ formatDate(i.startDate) }} - {{ formatDate(i.endDate) }}</td>
          <td>{{ i.location }}</td>
          <th>
            <VChipGroup>
              <VChip v-for="item in i.schedules">
                {{ item.day }} {{ convertUtcToLocalTime(item.startTime) }} - {{ convertUtcToLocalTime(item.endTime) }}
              </VChip>
            </VChipGroup>
          </th>
          <th>{{ i._teacher.fullName }}</th>
          <td>
            <VBtn 
                icon="mdi-eye"
                color="warning"
                variant="text"
                title="Editar"
                @click="editCourse(i)"
              />
              <VBtn 
                icon="mdi-delete"
                color="error"
                variant="text"
                title="Eliminar"
                @click="confirmCourse(i)"
              />
              <VBtn 
                icon="mdi-list-box-outline"
                color="success"
                variant="text"
                title="Inscripciones"
                @click="navigateTo(`/${(data as SessionType).rol}/inscription/${i._id}`)"
              />
          </td>
        </tr>
      </tbody>
    </VTable>
  </VCard>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia';
import moment from "moment";

const {data, signOut} = useAuth()

const courseStore = useCourseStore()
const {courses} = storeToRefs(courseStore)

await courseStore.getAll((data.value as SessionType)._service)

const editCourse = (course:ICourse)=>{
  courseStore.setCurrent(course)
  courseStore.setShowForm(true)
}

const confirmCourse = (course:ICourse)=>{
  courseStore.setCurrent(course)
  courseStore.setShowConfirm(true)
}

const formatDate = (date:number)=>{
  return moment(date).format('DD/MM/YYYY')
}

</script>

<style scoped>

</style>