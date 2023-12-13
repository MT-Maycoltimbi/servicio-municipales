<template>
  <VCard elevation="5">
    <VTable>
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Fecha nacimiento</th>
          <th>Zona</th>
          <th>Dirección</th>
          <th>Telefono</th>
          <th>Cédula</th>
          <th>Sexo</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="i in inscriptions">
          <td>{{ i.name }}</td>
          <td>{{ moment(i.birdthDate).format('DD/MM/YYYY') }}</td>
          <td>{{ i.zone }}</td>
          <td>{{ i.address }}</td>
          <td>{{ i.phone }}</td>
          <td>{{ i.cedula }}</td>
          <td>{{ i.sexo }}</td>
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
import moment from "moment";

const inscriptionStore = useInscriptionStore()
const {inscriptions} = storeToRefs(inscriptionStore)

await inscriptionStore.getAllByCourse()

const editService = (inscription:IInscription)=>{
  inscriptionStore.setCurrent(inscription)
  inscriptionStore.setShowForm(true)
}

const confirmService = (inscription:IInscription)=>{
  inscriptionStore.setCurrent(inscription)
  inscriptionStore.setShowConfirm(true)
}

</script>

<style scoped>

</style>