<template>
  <VCard>
    <VCardTitle class="text-center">
      Eliminar servicio
    </VCardTitle>
    <VCardText>
      ¿Estás seguro de eliminar el servicio {{ current?.name  }}?
    </VCardText>
    <VCardActions>
      <VSpacer/>
      <VBtn
        variant="tonal"
        text="Cancelar"
        @click="cancel"
        :disabled="loading"
        color="error"
      />

      <VBtn
        variant="tonal"
        text="Confirmar"
        @click="confirm"
        :loading="loading"
        color="primary"
      />
    </VCardActions>
  </VCard>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia'


const  serviceStore = useServiceStore()
const {current, loading} = storeToRefs(serviceStore)

const cancel = ()=>{
  serviceStore.setShowConfirm(false)
}

const confirm = async()=>{
  await serviceStore.delete(current.value!._id)
}

onUnmounted(()=>{
  serviceStore.setCurrent(null)
})

</script>

<style scoped>

</style>