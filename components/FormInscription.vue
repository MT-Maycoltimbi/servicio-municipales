<template>
  <VCard elevation="5">
    <VRow>
      <VCol>
        <VCardTitle class="text-center text-h4">
          {{ title }} Inscripción
        </VCardTitle>
      </VCol>
    </VRow>
    <VCardText>
      <VForm
        ref="formRef"  
        @submit.prevent="handleSubmit"
      >
        <VRow>
          <VCol>
            <Error/>
          </VCol>
        </VRow>
        <VRow>
          <VCol>
            <VTextField
              v-model="formData.name"
              variant="outlined"
              label="Nombre"
              :rules="rules.required"
            />
          </VCol>
          <VCol>
            <VTextField
              type="date"
              v-model="formData.birdthDate"
              variant="outlined"
              label="Fecha de nacimiento"
              :rules="rules.required"
            />
          </VCol>
        </VRow>
        <VRow>
          <VCol>
            <VTextField
              v-model="formData.cedula"
              variant="outlined"
              label="Cédula"
              :rules="[...rules.required,...rules.min]"
            />
          </VCol>
          <VCol>
            <VTextField
              type="tel"
              v-model="formData.phone"
              variant="outlined"
              label="Teléfono"
              :rules="[...rules.required,...rules.min]"
            />
          </VCol>
        </VRow>
        <VRow>
          <VCol>
            <VSelect
              v-model="formData.zone"
              variant="outlined"
              :items="['urbana','rural']"
              label="Zona"
              :rules="rules.required"
            />
          </VCol>
          <VCol>
            <VTextField
              v-model="formData.address"
              variant="outlined"
              label="Direccion"
              :rules="rules.required"
            />
          </VCol>
        </VRow>
        <v-radio-group inline v-model="formData.sexo">
          <template v-slot:label>
            Sexo
          </template>
          <v-radio value="M">
            <template v-slot:label>
              <div>Masculino</div>
            </template>
          </v-radio>
          <v-radio value="F">
            <template v-slot:label>
              <div>Femenino</div>
            </template>
          </v-radio>
        </v-radio-group> 
        
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
import moment from 'moment';
import { storeToRefs } from 'pinia';
import { VForm } from 'vuetify/lib/components/index.mjs';

const formRef = ref<VForm | null>(null)
const inscriptionStore = useInscriptionStore()
const errorStore = useErrorStore()
const {loading, current, currentCourse} = storeToRefs(inscriptionStore)
const formData = reactive({
  name: '',
  birdthDate: '',
  zone: 'urbana',
  address: '',
  phone: '',
  cedula: '',
  sexo: 'M'
})
const rules = {
  required: [
    (value: string) => !!value || 'Campo requerido!'
  ],
  min:[
    (value: string) => !!value && value.length === 10 || 'Debe tener 10 dígitos'
  ]
}

const title = computed(()=> current.value ? 'Editar':'Agregar')

const handleSubmit =async () => {
  const {valid} = await formRef.value!.validate()
  if(valid){
    if(current.value  ){
      await inscriptionStore.update({
        ...formData,
        birdthDate: moment(formData.birdthDate).utc().valueOf(),
        sexo: formData.sexo as 'M' | 'F',
        _id: current.value!._id,
        _course: currentCourse.value!._id,
      })
    }else{
      await inscriptionStore.create({
        ...formData,
        _course: currentCourse.value!._id,
        birdthDate: moment(formData.birdthDate).utc().valueOf(),
        sexo: formData.sexo as 'M' | 'F'
      })
    }
  }
}

const cancel = ()=>{
  inscriptionStore.setShowForm(false)
}

onMounted(()=>{
  if(current.value){
    formData.name = current.value!.name
    formData.birdthDate = moment(current.value!.birdthDate).format('YYYY-MM-DD')
    formData.address = current.value.address
    formData.cedula = current.value.cedula
    formData.zone = current.value.zone
    formData.sexo = current.value.sexo
    formData.phone = current.value.phone
  }
  
})

onUnmounted(()=>{
  inscriptionStore.setCurrent(null)
  errorStore.resetError()
})
</script>

<style scoped>

</style>