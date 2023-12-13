<template>
  <VContainer class="centerDiv">
    <VCard
      elevation="5"
      class="pa-5">
        <VCardTitle class="text-center text-h4">Inicio de sesion</VCardTitle>
        
        <v-form 
          ref="form"
          @submit.prevent="handleSubmit"
          fast-fail>
          <v-text-field
            variant="outlined"
            v-model="dataForm.email"
            type="email"
            label="Correo"
            :rules="rules.email"
            required
            />
          <VContainer>
            <VRow>
              <v-text-field
                variant="outlined"
                class="mt-3"
                type="password"
                v-model="dataForm.password"
                :rules="rules.password"
                label="Contraseña"
                required
              />
            </VRow>
            <VRow justify="end">
              <NuxtLink to="/recovery">¿Olvidó su contraseña?</NuxtLink>
            </VRow>
          </VContainer>
            <v-btn
              type="submit"
              variant="tonal"
              class="mt-4"
              color="primary"
              width="400"
              :disabled="loading"
              >Iniciar sesión</v-btn
            >
        </v-form>
      </VCard>
  </VContainer>
</template>

<script setup lang="ts">
import { VForm } from 'vuetify/lib/components/index.mjs';

const form = ref<VForm |null>(null);
const dataForm = reactive({
  email: "",
  password: "",
})
const loading = ref(false);
const rules = {
  email: [
    (value: any) => !!value || "El correo es requerido",
    (value: any) => /.+@.+\..+/.test(value) || "El correo debe ser válido"
  ],
  password: [
    (value: any) => !!value || "La contraseña es requerida",
    (value: any) =>
      (value && value.length >= 8) ||
      "La contraseña debe tener al menos 8 caracteres"
  ]
}

const { data, signIn } = useAuth()

const handleSubmit = async ()=>{
  loading.value = true;
  await signIn('credentials',{...dataForm, redirect: false})
  if(data.value){
    navigateTo('/admin')
  }else{
    alert('Credenciales incorrectas!')
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