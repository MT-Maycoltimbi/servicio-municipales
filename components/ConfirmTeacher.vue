<template>
  <VCard>
    <VCardTitle class="text-center">
      Eliminar profesor
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


const teacherStore = useTeacherStore()
const {current, loading} = storeToRefs(teacherStore)

const cancel = ()=>{
  teacherStore.setShowConfirm(false)
}

const confirm = async()=>{
  await teacherStore.delete(current.value!._id)
}

onUnmounted(()=>{
  teacherStore.setCurrent(null)
})

</script>

<style scoped>

</style>