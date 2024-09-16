<script lang="ts">
  import { defineComponent, ref, onMounted, onUnmounted } from 'vue';

  export default defineComponent({
    name: "Header",
    
    setup() {
      // local var progress scroll
      const scrollPropgress = ref<number>(0);

      // func for update progress scroll
      const updateScrollProgress = () => {
        const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        scrollPropgress.value = (scrollTop / scrollHeight) * 100;
      };

      // handler event scroll
      onMounted(() => {
        window.addEventListener('scroll', updateScrollProgress);
      });
      
      //Delete the handler when the component is destroyed
      onUnmounted(() => {
        window.removeEventListener('scroll', updateScrollProgress);
      });

      return {
        scrollPropgress,
      };
    }
  });

</script>

<template>

<div class="fixed top-0 w-full bg-gray-200 z-20 rounded-full h-2.5 dark:bg-gray-700">
  <div class="bg-purple-600 h-2.5 rounded-full dark:bg-purple-500 transition-all duration-300" 
  :style="{ width: scrollPropgress + '%' }"
  ></div>
</div>

  <div class="bg-[url('../images/header.jpg')] bg-left relative">
    <div class="bg-[#838996DE] h-[500px] w-full">
      <div class="flex justify-center">
        <div class="w-[50%] mt-5">
          <nav class="flex justify-evenly font-sans text-2xl font-semibold text-slate-200">
            <RouterLink to="/" class="cursor-pointer hover:text-yellow-300">home</RouterLink>
            <RouterLink to="/news" class="cursor-pointer hover:text-yellow-300">news</RouterLink>
            <RouterLink to="/gardens" class="cursor-pointer hover:text-yellow-300">gardens</RouterLink>
            <RouterLink to="/tech" class="cursor-pointer hover:text-yellow-300">tech</RouterLink>
            <RouterLink to="/about" class="cursor-pointer hover:text-yellow-300">about us</RouterLink>
          </nav>
        </div>
      </div>
      <div class="flex flex-col mt-40 cursor-default">
        <div class="flex justify-center">
          <h1 class="text-5xl text-amber-100">Floating</h1>
        </div>
        <div class="flex justify-center">
          <p class="text-amber-300 border-b border-amber-300">the-news</p>
        </div>
      </div> 
    </div>
  </div>
</template>
