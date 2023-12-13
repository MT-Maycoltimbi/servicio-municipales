<template>
  <VCard>
    <VCardTitle class="text-center">
      Eliminar usuario
    </VCardTitle>
    <VCardText>
      ¿Estás seguro de eliminar a {{ current?.fullName  }}?
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


const  userStore = useUserStore()
const {current, loading} = storeToRefs(userStore)

const cancel = ()=>{
  userStore.setShowConfirm(false)
}

const confirm = async()=>{
  await userStore.delete(current.value!._id)
}

onUnmounted(()=>{
  userStore.setCurrent(null)
})

</script>

<style scoped>

</style>