<template>
  <VContainer>
    <VRow>
      <VCol>
        <h2 class="text-center text-h3">Servicios</h2>
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
          @click="exportXSLX(servicesReportXLSX,'servicios')"
        />
      </VCol>
    </VRow> 
    <VRow>
      <VCol>
        <TableServices/>
      </VCol>
    </VRow>
  </VContainer>
  <VDialog
    v-model="showForm"     
    persistent
    max-width="650"
  >
    <FormService />
  </VDialog>
  <VDialog
    v-model="showConfirm"     
    persistent
    max-width="450"
  >
    <ConfirmService/>
  </VDialog>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia';

const serviceStore = useServiceStore()
const {showForm, showConfirm, servicesReportXLSX} = storeToRefs(serviceStore)

const toShowForm = ()=>{
  serviceStore.setShowForm(true);
}

</script>

<style scoped>

</style>