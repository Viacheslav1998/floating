<script>
export default {
  methods: {
    goToAbout() {
      this.$router.push('/about')
    },
  },
}
</script>

<template>
  <div>
    <h2>HomeView</h2>
    <button @click="goToAbout">Go to About</button>
  </div>
</template>