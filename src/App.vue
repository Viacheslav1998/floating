<template>
  <div>
    <Header /> <!-- Здесь ваш компонент Header -->
    <router-view /> <!-- Здесь основной контент страниц -->
    <Footer /> <!-- Здесь ваш компонент Footer -->
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'

export default defineComponent({
  components: {
    Header,
    Footer
  }
})
</script>