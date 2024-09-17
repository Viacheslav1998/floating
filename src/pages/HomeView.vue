<script lang="ts">
  export default {
    name: 'HomeView'
  }
</script>

<template>
  <!-- title page -->
  <div class="flex justify-center">
    <div class="bg-indigo-900 py-8 px-4 text-4xl font-semibold text-gray-100 relative bottom-10 z-10 w-[400px] flex items-center justify-center">
      <h2 class="border-b-2 border-gray-100 ">Home: main-news</h2>
    </div>
  </div>
  <!-- and title page -->
  <div>
    <div class="bg-yellow-300 flex justify-center py-5 mb-5 h-[100px]">
      <div class="bg-blue-100 w-[400px] h-[140px] relative bottom-12 z-10 flex flex-col justify-center shadow-lg">
        <div class="flex justify-around">
          <div>
            <div class="flex justify-center">
              <img src="/icons/books.png">
            </div>
            <p>Technology</p>
          </div>
          <div>
            <div class="flex justify-center">
              <img src="/icons/clock.png">
            </div>
            <p>Efficiency</p>
          </div>
          <div>
            <div class="flex justify-center">
              <img src="/icons/location.png">
            </div>
            <p>Convenience</p>
          </div>
        </div>
      </div>
    </div>
    <!-- top news -->
    <div class="flex justify-center mt-20">
      <p class="text-5xl font-mono font-extraboldfont-extrabold text-zinc-500 border-b-4 border-zinc-500">top news</p>
    </div>
    <div class="bg-slate-200 my-[95px] flex justify-center">
      <div class="bg-[url('../images/18437.jpg')] w-[1200px] h-[620px] bg-no-repeat bg-center">
        <div class="bg-[#838996A3] h-[620px]">
          <div class="flex justify-center font-sans py-5">
            <h3 class="border p-5 border-2 border-lime-50 text-lime-50 rounded-md text-2xl">TOP-3 NEWS</h3>
          </div>
          <div class="flex justify-around">
            <!-- start -->
            <div class="border border-4 rounded border-lime-600 p-3 w-[280px] bg-lime-900 shadow-xl text-white">
              <div class="text-xl pb-3">Environmental filter</div>
              <div class="image">
                <img class="h-[200px] w-[100%]" src="/top/6953.jpg">
              </div>
              <p class="py-5">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit ipsa pariatur quos consectetur beatae, facilis voluptates aliquam quisquam aut officia maiores consequuntur explicabo cum? Sequi quibusdam magni omnis eos sit?</p>
              <div class="pb-2">
                <a href="#" class="text-white bg-lime-600 hover:bg-lime-400 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Read more</a>
              </div>
            </div>
            <!-- end -->
            <!-- start -->
            <div class="border border-4 rounded border-lime-600 p-3 w-[280px] bg-lime-900 shadow-xl text-white">
              <div class="text-xl pb-3">Environmental filter</div>
              <div class="image">
                <img class="h-[200px] w-[100%]" src="/top/19718.jpg">
              </div>
              <p class="py-5">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit ipsa pariatur quos consectetur beatae, facilis voluptates aliquam quisquam aut officia maiores consequuntur explicabo cum? Sequi quibusdam magni omnis eos sit?</p>
              <div class="pb-2">
                <a href="#" class="text-white bg-lime-600 hover:bg-lime-400 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Read more</a>
              </div>
            </div>
            <!-- end -->
            <!-- start -->
            <div class="border border-4 rounded border-lime-600 p-3 w-[280px] bg-lime-900 shadow-xl shadow-lg text-white">
              <div class="text-xl pb-3">Environmental filter</div>
              <div class="image">
                <img class="h-[200px] w-[100%]" src="/top/2151794975.jpg">
              </div>
              <p class="py-5">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit ipsa pariatur quos consectetur beatae, facilis voluptates aliquam quisquam aut officia maiores consequuntur explicabo cum? Sequi quibusdam magni omnis eos sit?</p>
              <div class="pb-2">
                <a href="#" class="text-white bg-lime-600 hover:bg-lime-400 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Read more</a>
              </div>
            </div>
            <!-- end -->
          </div>
        </div>
      </div>
    </div>
    <!-- top news -->
    <div class="flex justify-center my-20">
      <p class="text-5xl font-mono font-extraboldfont-extrabold text-zinc-500 border-b-4 border-zinc-500">special offer</p>
    </div>
    <div class="dec-line py-5 w-full bg-slate-200 flex justify-center">
      <div class="flex p-5 rounded-lg bg-[url('../ad/b4.jpg')] w-[1000px] h-[562px] bg-no-repeat bg-center bg-green-200">
        <div class="flex flex-col justify-center basis-1/3 ">
          <a class="relative text-xl py-5 max-w-[150px] border-4 border-stone-100 hover:border-orange-300 text-center text-stone-100 hover:text-orange-300 focus:outline-none bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900 transition duration-300 ease-in-out" href="#try">Take</a>
          <h4 class="py-1 text-4xl text-gray-100">Complete solution</h4>
          <p class="py-1 text-3xl text-gray-100">Great solution</p>
          <p class="py-1 text-2xl text-gray-100">Journey begins</p>
        </div>
        <div class="flex flex-col justify-between basis-1/2">
          <p class="text-white">some things aren't available to everyone - don't limit yourself.</p>
          <p class="text-white text-3xl  rounded-lg bg-lime-500 pb-1 text-center">keep going.</p>
        </div>
      </div>
    </div>
    <!-- start grid -->
    <div class="flex justify-center my-20">
      <p class="text-5xl font-mono font-extraboldfont-extrabold text-zinc-500 border-b-4 border-zinc-500">fast news</p>
    </div>
      <div class="my-20 bg-slate-200 flex justify-center">
        <div class="bg-gray-700 w-[1200px] grid grid-cols-2">
          <div class="grid grid-cols-2">
            <div class="bg-slate-200 border-4 border-stone-400 rounded-md m-5">
              <div class="flex justify-around">
                <h5 class="text-slate-700 mb-1">sweet pancakes</h5>
                <div class="flex justify-center">
                  <img class="w-[16px] h-[16px] mt-1.5 mr-1" src="/icons/eye.png">
                  <p class="text-[12px] text-pink-600 pt-1.5 font-mono">564</p>
                </div>
              </div>
              <img class="max-h-[150px] w-full object-cover" src="/fast-blog/n1.jpg">
              <p class="p-1 text-slate-700">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt asperiores enim magnam ipsam ratione sit quisquam ipsum voluptatem facilis deserunt, in ducimus numquam provident obcaecati nesciunt reprehenderit eaque! Quis, itaque.</p>
              <div class="pt-2 px-2 flex justify-end"> 
                <a href="#" class="relative text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-sm px-3 py-1.5 text-center me-2 mb-2">Read...</a>
              </div>
            </div>
            <div class="bg-slate-200 border-4 border-stone-400 rounded-md m-5">
              <div class="flex justify-around">
                <h5 class="text-slate-700 mb-1">sweet pancakes</h5>
                <div class="flex justify-center">
                  <img class="w-[16px] h-[16px] mt-1.5 mr-1" src="/icons/eye.png">
                  <p class="text-[12px] text-pink-600 pt-1.5 font-mono">231</p>
                </div>
              </div>
              <img class="max-h-[150px] w-full object-cover" src="/fast-blog/n2.jpg">
              <p class="p-1 text-slate-700">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt asperiores enim magnam ipsam ratione sit quisquam ipsum voluptatem facilis deserunt, in ducimus numquam provident obcaecati nesciunt reprehenderit eaque! Quis, itaque.</p>
              <div class="pt-2 px-2 flex justify-end"> 
                <a href="#" class="relative text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-sm px-3 py-1.5 text-center me-2 mb-2">Read...</a>
              </div>
            </div>
            <div class="bg-slate-200 border-4 border-stone-400 rounded-md m-5">
              <div class="flex justify-around">
                <h5 class="text-slate-700 mb-1">sweet pancakes</h5>
                <div class="flex justify-center">
                  <img class="w-[16px] h-[16px] mt-1.5 mr-1" src="/icons/eye.png">
                  <p class="text-[12px] text-pink-600 pt-1.5 font-mono">125</p>
                </div>
              </div>
              <img class="max-h-[150px] w-full object-cover" src="/fast-blog/n3.jpg">
              <p class="p-1 text-slate-700">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt asperiores enim magnam ipsam ratione sit quisquam ipsum voluptatem facilis deserunt, in ducimus numquam provident obcaecati nesciunt reprehenderit eaque! Quis, itaque.</p>
              <div class="pt-2 px-2 flex justify-end"> 
                <a href="#" class="relative text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-sm px-3 py-1.5 text-center me-2 mb-2">Read...</a>
              </div>
            </div>
            <div class="bg-slate-200 border-4 border-stone-400 rounded-md m-5">
              <div class="flex justify-around">
                <h5 class="text-slate-700 mb-1">sweet pancakes</h5>
                <div class="flex justify-center">
                  <img class="w-[16px] h-[16px] mt-1.5 mr-1" src="/icons/eye.png">
                  <p class="text-[12px] text-pink-600 pt-1.5 font-mono">874</p>
                </div>
              </div>
              <img class="max-h-[150px] w-full object-cover" src="/fast-blog/n4.jpg">
              <p class="p-1 text-slate-700">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt asperiores enim magnam ipsam ratione sit quisquam ipsum voluptatem facilis deserunt, in ducimus numquam provident obcaecati nesciunt reprehenderit eaque! Quis, itaque.</p>
              <div class="pt-2 px-2 flex justify-end"> 
                <a href="#" class="relative text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-sm px-3 py-1.5 text-center me-2 mb-2">Read...</a>
              </div>
            </div>
          </div> 
          <div>
            <div class="m-5 p-2 rounded-lg bg-slate-100">
              <img class="rounded-lg max-h-[200px] w-full object-cover" src="/fast-blog/n5.jpg">
              <div class="relative pt-5">
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit perspiciatis quam porro. Incidunt voluptatibus vitae voluptatem ipsum ea ratione eaque, sed, laborum labore at tenetur? Est alias ipsam modi voluptatem!</p>
              </div>
            </div>
            <div class="m-5 p-2 rounded-lg bg-slate-100">
              <img class="rounded-lg max-h-[200px] w-full object-cover" src="/fast-blog/n6.jpg">
              <div class="relative pt-5">
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit perspiciatis quam porro. Incidunt voluptatibus vitae voluptatem ipsum ea ratione eaque, sed, laborum labore at tenetur? Est alias ipsam modi voluptatem!</p>
              </div>
            </div>

            <div class="rounded-lg m-5 p-2 bg-slate-600 text-slate-50 text-xl">
              <p>Calendar: your opportunities</p>
            </div>

            <div class="m-5">
              <div id="datepicker-inline" inline-datepicker datepicker datepicker-buttons datepicker-autoselect-today></div>
            </div>

          </div>
        </div>
      </div>
  </div>
  <!-- single news -->
  <div class="flex justify-center my-20">
    <p class="text-5xl font-mono font-extraboldfont-extrabold text-zinc-500 border-b-4 border-zinc-500">News</p>
  </div>

  <div class="bg-[url('../images/b2.jpg')] bg-cover p-5 bg-fixed flex">
    <div class="flex flex-row">
      <div class="basis-1/4">

      </div>
      <div class="basis-1/4">
        
      </div>
    </div>
  </div>
  <!-- end single news -->
</template>