<template>
  <VNavigationDrawer
    expand-on-hover
    rail
    permanent
  >
    <VListItem
      prepend-avatar="https://pre00.deviantart.net/1fa9/th/pre/i/2010/182/2/d/facebook_avatar_3_by_cynfullpryde.jpg"
      :title="data?.user?.name!"
      nav
    >
    </VListItem>

    <VDivider />

    <VList>
      <template
        v-for="i in items"
        :key="i.name"
      >
        <VListItem
          v-if="i.route.includes((data as SessionType)!.rol!)"
          link
          :to="i.route"
          :prepend-icon="i.icon"
          :title="i.name"
          :value="i.name"
          @click="navigateTo(i.route)"
        />
      </template>
    </VList>
  </VNavigationDrawer>
</template>

<script setup lang="ts">

const {data} = useAuth()
const items = [
  {
    name: 'Dashboard',
    route: '/admin',
    icon: 'mdi-home',
  },
  {
    name: 'Usuarios',
    route: '/admin/users',
    icon: 'mdi-account-group',
  },
  {
    name: 'Servicios',
    route: '/admin/services',
    icon: 'mdi-account-check'
  },
  {
    name: 'Profesores',
    route: '/admin/teachers',
    icon: 'mdi-human-male-board-poll'
  },
  {
    name: 'Cursos',
    route: '/admin/course',
    icon: 'mdi-ticket'
  },
  {
    name: 'Dashboard',
    route: '/assistant',
    icon: 'mdi-home',
  },
  {
    name: 'Cursos',
    route: '/assistant/course',
    icon: 'mdi-ticket'
  },
]
</script>

<style scoped></style>
