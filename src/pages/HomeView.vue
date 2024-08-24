<script lang="ts">
import { defineComponent } from 'vue'
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue';

export default defineComponent({
  components: {
    Header, 
    Footer
  } 
}) 

</script>

<template>
  <!-- header here -->
  <div>
    <h2>HomeView</h2>
    <p>you can see it right now</p>
  </div>

  <!-- footer here -->
</template>