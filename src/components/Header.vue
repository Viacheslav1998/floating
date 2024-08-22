<script setup lang="ts">
</script>

<template>
  <div class="bg-[url('../public/images/header.jpg')] bg-left">
    <div class="bg-[#838996DE] h-[500px] w-full">
      <div class="flex justify-center">
        <div class="w-[50%] mt-5">
          <nav class="flex justify-evenly font-sans text-2xl font-semibold text-slate-200">
            <RouterLink to="/" class="cursor-pointer hover:text-orange-300">home</RouterLink>
            <RouterLink to="/news" class="cursor-pointer hover:text-orange-300">news</RouterLink>
            <RouterLink to="/gardens" class="cursor-pointer hover:text-orange-300">gardens</RouterLink>
            <RouterLink to="/tech" class="cursor-pointer hover:text-orange-300">tech</RouterLink>
            <RouterLink to="/about" class="cursor-pointer hover:text-orange-300">about us</RouterLink>
          </nav>
          <main>
            <router-view />
          </main>
        </div>
      </div>
      <div class="flex flex-col mt-40 cursor-pointer">
        <div class="flex justify-center">
          <h1 class="text-5xl text-neutral-900">Floating</h1>
        </div>
        <div class="flex justify-center">
          <p class="text-neutral-900 border-b border-black">the-news</p>
        </div>
      </div> 
    </div>
  </div>
</template>
