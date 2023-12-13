<template>
  <VContainer>
    <VRow>
      <VCol>
        <h2 class="text-center text-h3">Inscripciones de {{ currentCourse?.name }}</h2>
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
          @click="exportXSLX(inscriptionsReportXLSX,'inscripciones')"
        />
      </VCol>
    </VRow> 
    <VRow>
      <VCol>
        <TableInscription />
      </VCol>
    </VRow>
  </VContainer>

  <VDialog
    v-model="showForm"     
    persistent
    max-width="650"
  >
    <FormInscription />
  </VDialog>

  <VDialog
    v-model="showConfirm"     
    persistent
    max-width="450"
  >
    <ConfirmInscription />
  </VDialog>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useRoute } from 'vue-router';

const {idCourse} = useRoute().params
const inscriptionStore = useInscriptionStore()
const {currentCourse, showConfirm, showForm, inscriptionsReportXLSX} = storeToRefs(inscriptionStore)

const toShowForm = ()=>{
  inscriptionStore.setShowForm(true);
}

await inscriptionStore.getCourseById(idCourse as string)

</script>

<style scoped>

</style>