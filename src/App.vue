<template>
  <component
      v-if="layout"
      :is="layout"
  >
    <router-view/>
  </component>
</template>

<script>
import ContentLayout from './layout/content/ContentLayout.vue'
import AuthLayout from './modules/auth/layout/AuthLayout.vue'
import {computed} from 'vue'
import { useRoute } from 'vue-router'
export default {
  name: 'App',
  setup() {
    const route = useRoute()
    const layout = computed(() => {
      console.log('route.meta.layout', route)
      return route?.meta?.layout ? route.meta.layout === 'auth' ? AuthLayout : ContentLayout : null
    })

    return {
      layout
    }
  }
}
</script>
