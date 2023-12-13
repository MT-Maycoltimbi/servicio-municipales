<template>
  <VContainer>
    <VRow>
      <VCol>
        <h2 class="text-center text-h3">Cursos</h2>
      </VCol>
    </VRow>
    <VRow>
      <VCol>
        <VBtn
          icon="mdi-plus"
          @click="toShowForm()" 
          color="success"
        />
      </VCol>
      <VSpacer/>
      <VCol cols="auto">
        <VBtn 
          color="success"
          icon="mdi-file-excel"
          @click="exportXSLX(coursesReportXLSX,'cursos')"
        />
      </VCol>
    </VRow> 
    <VRow>
      <VCol>
        <TableCourse />
      </VCol>
    </VRow>
  </VContainer>

  <VDialog
    v-model="showForm"     
    persistent
    max-width="650"
  >
    <FormCourse />
  </VDialog>

  <VDialog
    v-model="showConfirm"     
    persistent
    max-width="450"
  >
    <ConfirmCourse/>
  </VDialog>

</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia';

const courseStore = useCourseStore();
const {showForm, showConfirm, coursesReportXLSX} = storeToRefs(courseStore)

const toShowForm = ()=>{
  courseStore.setShowForm(true)
}

</script>

<style scoped>

</style>