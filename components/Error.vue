<template>
  <VAlert
    v-if="error"
    color="error"
    :text="error"
  >
  <template v-slot:append>
    <VBtn
      variant="text"
      icon="mdi-close"
      @click="errorStore.resetError()"
    />
  </template>
  </VAlert>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia';


const errorStore = useErrorStore()
const {error} = storeToRefs(errorStore)

</script>

<style scoped>

</style>