
export default defineNuxtRouteMiddleware((to, from)=>{
  const auth = useAuth()
  const data = auth.data.value as SessionType
  if(!to.fullPath.startsWith('/api')){
    if(to.fullPath === '/' && data)
      return navigateTo(data.rol)
    
    if((to.fullPath.startsWith('/assistant') || to.fullPath.startsWith('/admin')) && !data)
      return navigateTo('/')
  
    if(data){
      if(!to.fullPath.startsWith(`/${data.rol}`))
        return navigateTo(`/${data.rol}`)
    }
  }
})