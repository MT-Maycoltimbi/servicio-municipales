<template>
  <VCard elevation="5">
    <VCardTitle class="text-center text-h4">
      {{ title }} Servicio
    </VCardTitle>
    <VCardText>
      <VForm
        ref="formRef"  
        @submit.prevent="handleSubmit"
      >
        <VTextField
          v-model="formData.name"
          variant="outlined"
          label="Nombre"
          :rules="rules.required"
        />
        <VTextField
          class="mt-1"
          v-model="formData.description"
          variant="outlined"
          label="Descripción"
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
          @click="cancel"
          text="Cancelar" />
      </VForm>
    </VCardText>
  </VCard>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { VForm } from 'vuetify/lib/components/index.mjs';

const formRef = ref<VForm | null>(null)
const serviceStore = useServiceStore()
const {loading, current} = storeToRefs(serviceStore)
const formData = reactive({
  name: '',
  description: ''
})
const rules = {
  required: [
    (value: string) => !!value || 'campo requerido!'
  ]
}

const title = computed(()=> current.value ? 'Editar':'Agregar')

const handleSubmit =async () => {
  const {valid} = await formRef.value!.validate()
  if(valid){
    if(current.value  ){
      await serviceStore.update({...formData, _id: current.value!._id})
    }else{
      await serviceStore.create(formData)
    }
  }
}

const cancel = ()=>{
  serviceStore.setShowForm(false)
}

onMounted(()=>{
  if(current.value){
    formData.name = current.value!.name
    formData.description = current.value!.description
  }
})

onUnmounted(()=>{
  serviceStore.setCurrent(null)
})
</script>

<style scoped>

</style>