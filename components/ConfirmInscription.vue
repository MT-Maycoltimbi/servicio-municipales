<template>
  <VCard>
    <VCardTitle class="text-center">
      Eliminar Inscripción
    </VCardTitle>
    <VCardText>
      ¿Estás seguro de eliminar la inscripción de {{ current?.name  }}?
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


const  inscriptionStore = useInscriptionStore()
const {current, loading} = storeToRefs(inscriptionStore)

const cancel = ()=>{
  inscriptionStore.setShowConfirm(false)
}

const confirm = async()=>{
  await inscriptionStore.delete(current.value!._id)
}

onUnmounted(()=>{
  inscriptionStore.setCurrent(null)
})

</script>

<style scoped>

</style>