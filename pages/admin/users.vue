<template>
  <VContainer>
    <VRow>
      <VCol>
        <h2 class="text-center text-h3">Usuarios</h2>
      </VCol>
    </VRow>
    <VRow>
      <VCol>
        <VBtn 
          color="success"
          icon="mdi-plus"
          @click="toShowForm()"
        />
      </VCol>
    </VRow>
    <VRow>
      <VCol>
        <TableUsers/>
      </VCol>
    </VRow>
  </VContainer>
  <VDialog
    v-model="showForm"     
    persistent
    max-width="650"
  >
    <FormUser />
  </VDialog>
  <VDialog
    v-model="showChangePassword"     
    persistent
    max-width="650"
  >
    <FormChangePassword />
  </VDialog>
  <VDialog
    v-model="showConfirm"     
    persistent
    max-width="450"
  >
    <ConfirmUser/>
  </VDialog>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia';


const userStore = useUserStore()
const {showForm, showConfirm, showChangePassword} = storeToRefs(userStore)

const toShowForm = ()=>{
  userStore.setShowForm(true);
}

</script>

<style scoped>

</style>