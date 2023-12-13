<template>
  <VCard elevation="5">
    <VTable>
      <thead>
        <tr>
          <th>Nombre completo</th>
          <th>Email</th>
          <th>Rol</th>
          <th>Servicio</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="i in users">
          <td>{{ i.fullName }}</td>
          <td>{{ i.email }}</td>
          <td>{{ i.rol }}</td>
          <td>{{ i?._service ? i._service.name : 'Todos' }}</td>
          <td>
            <VBtn 
              icon="mdi-lock-reset"
              color="success"
              variant="text"
              title="Cambiar contraseña"
              @click="toChangePassword(i)"
            />
            <VBtn 
              icon="mdi-eye"
              color="warning"
              variant="text"
              title="Editar"
              @click="toEdit(i)"
            />
            <VBtn 
              icon="mdi-delete"
              color="error"
              variant="text"
              title="Eliminar"
              @click="toConfirm(i)"
            />
          </td>
        </tr>
      </tbody>
    </VTable>
  </VCard>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia';


const userStore = useUserStore()
const {users} = storeToRefs(userStore)

await userStore.getUsers()

const toEdit = (user:IUser)=>{
  userStore.setCurrent(user)
  userStore.setShowForm(true)
}

const toChangePassword = (user:IUser)=>{
  userStore.setCurrent(user)
  userStore.setShowChangePassword(true)
}

const toConfirm = (user:IUser)=>{
  userStore.setCurrent(user)
  userStore.setShowConfirm(true)
}
</script>

<style scoped>

</style>