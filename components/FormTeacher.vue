<template>
  <VCard
    elevation="5"  
  >
    <VCardTitle class="text-center text-h4">
      {{title}} profesor
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
        />
        <VTextField
          class="mt-3"
          v-model="formData.degree"
          variant="outlined"
          label="Título"
          :rules="rules.required"
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

const formRef = ref<VForm | null>(null)
const teacherStore = useTeacherStore()
const {loading, current} = storeToRefs(teacherStore)
const formData = reactive<{
  fullName: string,
  email: string,
  degree: string,
}>({
  fullName: '',
  email: '',
  degree: ''
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

const title = computed(()=> current.value ? 'Editar':'Agregar')
const handleSubmit =async () => {
  const {valid} = await formRef.value!.validate()
  
  if(valid){
    if(current.value  ){
      await teacherStore.update({
        _id: current.value._id,
        ...formData
      })
    }else{
      await teacherStore.create(formData)
    }
  }
}

const toCancel = ()=>{
  teacherStore.setShowForm(false)
}

onMounted(()=>{
  if(current.value){
    formData.fullName = current.value.fullName
    formData.email = current.value.email
    formData.degree = current.value.degree
  }
})

onUnmounted(()=>{
  teacherStore.setCurrent(null)
})
</script>

<style scoped>

</style>