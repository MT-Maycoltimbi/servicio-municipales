<template>
  <VCard
    elevation="5"  
  >
    <VCardTitle class="text-center text-h4">
      {{title}} usuario
    </VCardTitle>
    <VCardText>
      <VForm 
        ref="formRef"
        @submit.prevent="handleSubmit"
      >
        <Error/>

        <VTextField
          class="mt-3"
          v-model="formData.fullName"
          variant="outlined"
          label="Nombre"
          :rules="rules.required"
        />
        <VTextField
          class="mt-1"
          type="email"
          v-model="formData.email"
          variant="outlined"
          label="Email"
          :rules="rules.email"
          :disabled="!!current"
        />
        <VSelect
          class="mt-1"
          variant="outlined"
          :rules="rules.required"
          v-model="formData.rol"
          label="Rol"
          :items="roles"
          item-title="title"
          item-value="value"
          />

        <VSelect
          v-if="formData.rol === Role.ASSISTANT"
          class="mt-1"
          variant="outlined"
          :rules="rules.required"
          v-model="formData._service"
          label="Servicios"
          :items="services"
          item-title="name"
          item-value="_id"
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
const serviceStore = useServiceStore()
const {services} = storeToRefs(serviceStore)
const {loading, current} = storeToRefs(userStore)
const formData = reactive<{
  fullName: string,
  email: string,
  rol: Role | null,
  _service: string
}>({
  fullName: '',
  email: '',
  rol: null,
  _service: ''
})

const rules = {
  required: [
    (value: string) => !!value || 'campo requerido!'
  ],
  email: [
    (value: any) => !!value || "El correo es requerido",
    (value: any) => /.+@.+\..+/.test(value) || "El correo debe ser válido"
  ],
}

await serviceStore.getServices()

const roles = [{value:Role.ADMIN,title:'Administrador'},{value:Role.ASSISTANT,title:'Asistente'}]
const title = computed(()=> current.value ? 'Editar':'Agregar')
const handleSubmit =async () => {
  const {valid} = await formRef.value!.validate()
  
  if(valid){
    if(current.value  ){
      await userStore.update({
        _id: current.value._id,
        fullName: formData.fullName,
        rol: formData.rol as Role, 
        _service: formData.rol === Role.ADMIN ? undefined : formData._service
      })
    }else{
      await userStore.create({
        ...formData, 
        rol: formData.rol as Role, 
        _service: formData.rol === Role.ADMIN ? undefined : formData._service
      })
    }
  }
}

const toCancel = ()=>{
  userStore.setShowForm(false)
}

onMounted(()=>{
  if(current.value){
    formData.fullName = current.value.fullName
    formData.email = current.value.email
    formData.rol = current.value.rol as Role
    formData._service = current.value._service?._id ?? ''
  }
})

onUnmounted(()=>{
  userStore.setCurrent(null)
})
</script>

<style scoped>

</style>