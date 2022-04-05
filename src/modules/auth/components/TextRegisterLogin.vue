<template>
  <p class="text-center font-roboto text-base leading-[18.75px] tracking-[0.075em] pb-4">
    {{route.name === 'Login' ? 'Quieres registrarte?' : 'Ya estas registrado?'}}
    <router-link
        :to="{name: (route.name === 'Login' ? 'Register' : 'Login') }"
        class="text-second-color hover:text-first-color focus:text-first-color transition duration-200 ease-in-out"
    >
      {{route.name === 'Login' ? 'Registrate' : 'Acceder'}}
    </router-link>
  </p>
</template>

<script>
import { useRouter, useRoute } from 'vue-router'
export default {
  name: 'TextRegisterLogin',
  setup() {
    const router = useRouter()
    const route = useRoute()
    return {
      router,
      route
    }
  }
}
</script>