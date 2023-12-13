<template>
  <VAppBar>
    <template v-slot:title>
      Sistema Municipal
    </template>
    <template v-slot:image>
      <VImg src="/images/logo.png"/>
    </template>
    <template v-slot:append>
      <VBtn :icon="iconTheme" @click="changeTheme()"/>
      <VBtn 
        v-if="data"
        @click="signOut"
        title="Salir"
        icon="mdi-logout"
        text="Cerrar Sesión" />
    </template>
  </VAppBar>
</template>

<script setup lang="ts">
import { useTheme } from 'vuetify/lib/framework.mjs';

const theme = useTheme();
const {data, signOut} = useAuth()

const changeTheme = () => {
  theme.global.name.value = theme.global.name.value === 'dark' ? 'light' : 'dark'
}

const iconTheme = computed(() => {
  const value = theme.global.name.value
  return value === 'dark' ? 'mdi-weather-night' : 'mdi-weather-sunny'
})
</script>

<style scoped>

</style>