<template>
  <VCard>
    <VCardTitle class="text-center">
      Eliminar curso
    </VCardTitle>
    <VCardText>
      ¿Estás seguro de eliminar el curso {{ current?.name  }}, se borrará toda la información relacionada?
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


const  courseStore = useCourseStore()
const {current, loading} = storeToRefs(courseStore)

const cancel = ()=>{
  courseStore.setShowConfirm(false)
}

const confirm = async()=>{
  await courseStore.delete(current.value!._id)
}

onUnmounted(()=>{
  courseStore.setCurrent(null)
})

</script>

<style scoped>

</style>