<template>
  <VCard elevation="5">
    <VCardTitle class="text-center text-h4">
      {{ title }}
    </VCardTitle>
    <VCardText>
      <VForm
        ref="formRef"  
        @submit.prevent="handleSubmit"
      >
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
              type="number"
              v-model.number="formData.spaces"
              variant="outlined"
              label="Cupos"
              :rules="rules.spaces"
            />
          </VCol>
        </VRow>
        <VRow>
          <VCol>
            <VTextField 
              type="date"
              variant="underlined"
              label="Fecha inicio"
              v-model.trim="formData.startDate"
            />
          </VCol>
          <VCol>
            <VTextField 
            type="date"
            variant="underlined"
            label="Fecha fin"
            :rules="rules.endDate"
            v-model.trim="formData.endDate"
            />
          </VCol>
        </VRow>
        <VRow>
          <VCol>
            <p>Agregue el horario</p>
          </VCol>
        </VRow>
        <VRow>
          <VCol>
            <VSelect
              label="Día"
              :items="dias"
              :disabled="!formData.startDate"
              v-model="schedule.day"
            />
          </VCol>
          <VCol>
            <VTextField 
              type="time"
              variant="underlined"
              label="Hora inicio"
              :disabled="!formData.startDate"
              v-model.trim="schedule.startTime"
            />
          </VCol>
          <VCol>
            <VTextField 
              type="time"
              variant="underlined"
              label="Hora fin"
              :disabled="!formData.startDate"
              v-model.trim="schedule.endTime"
            />
          </VCol>
          <VCol cols="auto">
            <VBtn 
              color="primary" 
              icon="mdi-plus" 
              @click="addSchedule" 
              fab
              :disabled="!formData.startDate"
            />
          </VCol>
        </VRow>
        <VRow>
          <VCol v-for="i in formData.schedules" cols="auto">
            <VChip>
              {{ i.day }} {{ i.startTime }} - {{ i.endTime }}
            </VChip>
          </VCol>
        </VRow>
        <VRow>
          <VCol>
            <VSelect 
              variant="outlined"
              v-model="formData._service"
              label="Servicio"
              :items="services"
              item-title="name"
              item-value="_id"
              :rules="rules.required"
            />
          </VCol>
          <VCol>
            <VSelect 
              label="Profesor"
              variant="outlined"
              v-model="formData._teacher"
              :items="teachers"
              item-title="fullName"
              item-value="_id"
              :rules="rules.required"
            />
          </VCol>
        </VRow>
        <VRow>
          <VCol>
            <VTextField
              v-model="formData.rangeAge.min"
              variant="outlined"
              label="Edad mínima"
              :rules="rules.minAge"
            />
          </VCol>
          <VCol>
            <VTextField
              type="number"
              v-model.number="formData.rangeAge.max"
              variant="outlined"
              label="Edad máxima"
              :rules="[...rules.minAge,...rules.maxAge]"
            />
          </VCol>
        </VRow>
        <VRow>
          <VCol>
            <VTextField
              v-model="formData.location"
              variant="outlined"
              label="Lugar"
              :rules="rules.required"
            />
          </VCol>
        </VRow>
        <VBtn
          class="mt-4"
          variant="tonal"
          type="submit" 
          :loading="loading"
          block
          :disabled=" formData.schedules.length === 0"
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
import moment from "moment";
import {dias} from "../server/constants";


const formRef = ref<VForm | null>(null)
const courseStore = useCourseStore()
const serviceStore = useServiceStore()
const teacheStore = useTeacherStore()
const {services} = storeToRefs(serviceStore)
const {teachers} = storeToRefs(teacheStore)
const {loading, current} = storeToRefs(courseStore)
const formData = reactive<{
  name: String,
  spaces: number,
  startDate: string,
  endDate: string,
  schedules: {day:string, startTime:string, endTime: string}[],
  location: String,
  rangeAge:{
    min: number,
    max: number,
  },
  _service: String,
  _teacher: String
}>({
  name: '',
  spaces: 0,
  startDate: '',
  endDate: '',
  schedules: [],
  location: '',
  rangeAge:{
    min: 12,
    max: 50
  },
  _service: '',
  _teacher: ''
})
const schedule = reactive({
  day: '',
  endTime: '',
  startTime: ''
})
const rules = {
  required: [
    (value: string) => !!value || 'campo requerido!'
  ],
  spaces: [
    (value: string) => !!value || 'campo requerido!',
    (value: number) => value >= 1 || 'debe ser positivo'
  ],
  endDate:[
    (value: string) => !!value || 'campo requerido!',
    (value: string) => !!formData.startDate && moment(value).isAfter(moment(formData.startDate)) || 'Debe ser mayor que la fecha inicial'
  ],
  minAge:[
    (value: string) => !!value || 'campo requerido!',
    (value: number) => value >= 1 && value <= 120 || 'Edad inválida'
  ],
  maxAge:[
    (value: number) => formData.rangeAge.min <= value || 'no puede ser menor que la edad mínima'
  ]
}

const title = computed(()=> current.value ? 'Editar curso':'Agregar curso')

const handleSubmit =async () => {
  const {valid} = await formRef.value!.validate()
  if(valid){
    if(current.value  ){
      await courseStore.update({
        ...formData, 
        _id: current.value!._id,
        startDate: moment(formData.startDate+"").utc().valueOf(),  
        endDate: moment(formData.endDate).utc().valueOf(),
        schedules: formData.schedules.map((x)=> ({...x, startTime: convertTimeUtc(x.startTime), endTime: convertTimeUtc(x.endTime)}))
      })
    }else{
      await courseStore.create({
        ...formData, 
        startDate: moment(formData.startDate+"").utc().valueOf(),  
        endDate: moment(formData.endDate).utc().valueOf(),
        schedules: formData.schedules.map((x)=> ({...x, startTime: convertTimeUtc(x.startTime), endTime: convertTimeUtc(x.endTime)}))
      })
    }
  }
}

const convertTimeUtc = (time:string)=>{
  return moment(`${moment().format('yyyy-MM-DD')}T${time}`).utc().valueOf()
}

const addSchedule = ()=>{
  if(schedule.day !== '' && schedule.startTime !== '' && schedule.endTime !== ''){
    formData.schedules.push({...schedule})
    schedule.day = '';
    schedule.startTime = '';
    schedule.endTime = '';
  }
}

const cancel = ()=>{
  courseStore.setShowForm(false)
}

const formatDateLocal = (date:number)=>{
  return moment(date).format('YYYY-MM-DD')
}

await serviceStore.getServices()
await teacheStore.getAll()

onMounted(()=>{
  if(current.value){
    formData.name = current.value!.name
    formData.spaces = current.value.spaces
    formData.location = current.value.location
    formData.startDate = formatDateLocal(current.value.startDate)
    formData.endDate = formatDateLocal(current.value.endDate)
    formData.rangeAge = current.value.rangeAge
    formData.schedules = current.value.schedules.map(x => ({...x, startTime: convertUtcToLocalTime(x.startTime), endTime: convertUtcToLocalTime(x.endTime)}))
    formData._service = current.value._service
    formData._teacher = current.value._teacher._id
  }
})

onUnmounted(()=>{
  courseStore.setCurrent(null)
})

</script>

<style scoped>

</style>