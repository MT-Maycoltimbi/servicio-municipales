<template>
  <VContainer>
    <VRow>
      <VCol>
        <h2 class="text-center text-h4">Datos generales</h2>
      </VCol>
    </VRow>
    <VRow>
      <VCol cols="6">
        <VCard width="auto">
          <VCardTitle class="text-h5 text-center">
            Servicios
          </VCardTitle>
          <VCardText>
            <Bar
              id="my-chart-id"
              :options="{...chartOptions}"
              :data="barServices"
            />
          </VCardText>
        </VCard>
      </VCol>
      <VCol cols="6">
        <VCard width="auto">
          <VCardTitle class="text-h4 text-center">
            Por zona
          </VCardTitle>
          <VCardText>
            <Pie
              id="my-chart-id"
              :options="{
                responsive: true, 
                maintainAspectRatio: false,
                // plugins: {
                //   legend: {
                //     labels: {
                //       color: 'blue',
                //     },
                //   },
                // },  
              }"
              :data="pieZone"
            />
          </VCardText>
        </VCard>
      </VCol>
    </VRow>
    <template v-for="service in data">
      <VDivider class="ma-4"/>
      <VRow>
        <VCol>
          <h2 class="text-center text-h4">{{ service.name }}</h2>
        </VCol>
      </VRow> 
      <VRow>
        <VCol cols="6">
          <VCard width="auto">
            <VCardTitle class="text-h5 text-center">
              Cursos
            </VCardTitle>
            <VCardText>
              <Bar
                :options="{...chartOptions}"
                :data="barCourses(service._id)"
              />
            </VCardText>
          </VCard>
        </VCol>
        <VCol cols="6">
        <VCard width="auto">
          <VCardTitle class="text-h5 text-center">
            Por sexo
          </VCardTitle>
          <VCardText>
            <Pie
              id="my-chart-id"
              :options="{
                responsive: true, 
                maintainAspectRatio: false,
              }"
              :data="pieSexByService(service._id)"
            />
            
          </VCardText>
        </VCard>
      </VCol>
      </VRow>
    </template>  
  </VContainer>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia';
import {Bar, Pie} from "vue-chartjs";

const dashboardStore = useDashboardStore()
const {barServices, pieZone, data, barCourses, pieSexByService} = storeToRefs(dashboardStore)

const chartOptions = {
  responsive: true
}

await dashboardStore.getStatistics()

</script>

<style scoped>

</style>