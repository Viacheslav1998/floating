<script setup lang="ts">
</script>

<template>
  <div class="bg-[url('../public/images/header.jpg')] bg-left">
    <div class="bg-[#838996DE] h-[500px] w-full">
      <div class="flex justify-center">
        <div class="w-[50%] mt-5">
          <nav class="flex justify-evenly font-sans text-2xl font-semibold text-slate-200">
            <RouterLink to="/">home</RouterLink>
            <RouterLink to="/news">news</RouterLink>
            <RouterLink to="/gardens">gardens</RouterLink>
            <RouterLink to="/tech">tech</RouterLink>
            <RouterLink to="/about">about us</RouterLink>
          </nav>
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
