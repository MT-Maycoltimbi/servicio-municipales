<template>
  <VContainer class="centerDiv">
    <VCard
      elevation="5"
      class="pa-5">
        <VCardTitle class="text-center text-h4">Recuperar contraseña</VCardTitle>
        
        <v-form 
          ref="form"
          @submit.prevent="handleSubmit"
          fast-fail>
          <v-text-field
            class="mt-3"
            variant="outlined"
            v-model="dataForm.email"
            type="email"
            label="Correo"
            :rules="rules.email"
            required
            />
            <v-btn
              type="submit"
              variant="tonal"
              class="mt-4"
              color="primary"
              width="400"
              :disabled="loading"
              >Restablecer</v-btn
            >
        </v-form>
      </VCard>
  </VContainer>
</template>

<script setup lang="ts">
import { VForm } from 'vuetify/lib/components/index.mjs';

const form = ref<VForm |null>(null);
const dataForm = reactive({
  email: ""
})
const loading = ref(false);
const rules = {
  email: [
    (value: any) => !!value || "El correo es requerido",
    (value: any) => /.+@.+\..+/.test(value) || "El correo debe ser válido"
  ],
}

const handleSubmit = async ()=>{
  loading.value = true;
  const {data, error} = await useFetch('/api/user/recovery',{method:'POST',body: dataForm})
  if(data.value){
    alert('Las credenciales se enviaron a su email')
    navigateTo('/')
  }else{
    alert('El email no existe!')
  }
  loading.value = false
}
</script>

<style scoped>
.centerDiv {
  display: grid;
  place-items: center;
  height: 80vh;
}
</style>