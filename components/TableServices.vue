<template>
  <VCard elevation="5">
    <VTable>
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Descripción</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="i in services">
          <td>{{ i.name }}</td>
          <td>{{ i.description }}</td>
          <td>
            <VBtn 
                icon="mdi-eye"
                color="warning"
                variant="text"
                title="Editar"
                @click="editService(i)"
              />
              <VBtn 
                icon="mdi-delete"
                color="error"
                variant="text"
                title="Eliminar"
                @click="confirmService(i)"
              />
          </td>
        </tr>
      </tbody>
    </VTable>
  </VCard>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia';


const serviceStore = useServiceStore()
const {services} = storeToRefs(serviceStore)

await serviceStore.getServices()

const editService = (service:IService)=>{
  serviceStore.setCurrent(service)
  serviceStore.setShowForm(true)
}

const confirmService = (service:IService)=>{
  serviceStore.setCurrent(service)
  serviceStore.setShowConfirm(true)
}
</script>

<style scoped>

</style>