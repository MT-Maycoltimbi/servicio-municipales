<template>
  <VApp>
    <Nabvar/>
    <NavigationDrawer v-if="data"/>
    <VMain>
      <slot></slot>
    </VMain>
  </VApp>
</template>

<script setup lang="ts">
const {data} = useAuth()

</script>

<style scoped>

</style>