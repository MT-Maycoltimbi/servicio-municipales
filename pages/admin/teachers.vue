<template>
  <VContainer>
    <VRow>
      <VCol>
        <h2 class="text-center text-h3">Profesores</h2>
      </VCol>
    </VRow>
    <VRow>
      <VCol cols="auto">
        <VBtn 
          color="success"
          icon="mdi-plus"
          @click="toShowForm()"
        />
      </VCol>
      <VSpacer/>
      <VCol cols="auto">
        <VBtn 
          color="success"
          icon="mdi-file-excel"
          @click="exportXSLX(teachersReportXLSX,'profesores')"
        />
      </VCol>
    </VRow>
    <VRow>
      <VCol>
        <TableTeachers/>
      </VCol>
    </VRow>
  </VContainer>
  <VDialog
    v-model="showForm"     
    persistent
    max-width="650"
  >
    <FormTeacher/>
  </VDialog>
  <VDialog
    v-model="showConfirm"     
    persistent
    max-width="450"
  >
    <ConfirmTeacher/>
  </VDialog>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia';

const teacherStore = useTeacherStore()
const {showForm, showConfirm, teachersReportXLSX} = storeToRefs(teacherStore)

const toShowForm = ()=>{
  teacherStore.setShowForm(true);
}

</script>

<style scoped>

</style>