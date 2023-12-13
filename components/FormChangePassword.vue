<template>
  <VCard
    elevation="5"  
  >
    <VCardTitle class="text-center text-h4">
      Cambiar contraseña
    </VCardTitle>
    <VCardText>
      <VForm 
        ref="formRef"
        @submit.prevent="handleSubmit"
      >
        <Error/>

        <VTextField
          class="mt-1"
          type="email"
          v-model="formData.email"
          variant="outlined"
          label="Email"
          disabled
        />

        <VTextField
          class="mt-3"
          v-model="formData.password"
          variant="outlined"
          label="Password"
          :rules="rules.password"
        />

        <VBtn
          class="mt-4"
          variant="tonal"
          type="submit" 
          :loading="loading"
          block
          color="primary"
          text="Guardar" />

        <VBtn
          class="mt-2"
          variant="tonal"
          :disabled="loading"
          color="error"
          block
          @click="toCancel"
          text="Cancelar" />

      </VForm>
    </VCardText> 
  </VCard>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { VForm } from 'vuetify/lib/components/index.mjs';
import { Role } from '~/server/constants';

const formRef = ref<VForm | null>(null)
const userStore = useUserStore()
const {loading, current} = storeToRefs(userStore)
const formData = reactive<{
  email: string,
  password: string
}>({
  email: '',
  password: ''
})

const rules = {
  password: [
    (value: any) => !!value || "La contraseña es requerida",
    (value: any) =>
      (value && value.length >= 8) ||
      "La contraseña debe tener al menos 8 caracteres"
  ]
}

const handleSubmit =async () => {
  const {valid} = await formRef.value!.validate()
  
  if(valid){
    if(current.value  ){
      await userStore.changePassword({
        email: current.value.email,
        password: formData.password
      })
    }
  }
}

const toCancel = ()=>{
  userStore.setShowChangePassword(false)
}

onMounted(()=>{
  if(current.value){
    formData.email = current.value.email
  }
})

onUnmounted(()=>{
  userStore.setCurrent(null)
})
</script>

<style scoped>

</style>