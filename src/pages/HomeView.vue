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
    <div class="w-full rounded-lg backdrop-blur-3xl bg-white/30 p-5">
      <div class="flex flex-row">
        <div class="w-[900px] bg-gray-600 flex justify-around flex-wrap p-5 rounded-lg">
          <!-- box -->
          <div class="w-80 bg-zinc-900 p-5 my-2 rounded-lg border-2 border-slate-100">
            <img class="border-b border-yellow-400" src="/images/18437.jpg">
            <h5 class="text-3xl text-yellow-400  font-mono py-2">Super adventures and ...</h5>
            <p class="pb-5 text-slate-200">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum officiis, suscipit ipsa sapiente aliquid autem aut ex quos similique excepturi nihil possimus voluptatibus adipisci dolorum nobis incidunt illum quam voluptates?</p>
            <a href="#"  class="flex justify-center text-center text-yellow-400 hover:text-white border border-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-lg px-5 py-2.5 me-2 mb-2 dark:border-yellow-300 dark:text-yellow-300 dark:hover:text-white dark:hover:bg-yellow-400 dark:focus:ring-yellow-900">Read..</a>
          </div>
          <!-- box -->
          <div class="w-80 bg-zinc-900 p-5 my-2 rounded-lg border-2 border-slate-100">
            <img class="border-b border-yellow-400" src="/images/18437.jpg">
            <h5 class="text-3xl text-yellow-400  font-mono py-2">Super adventures and ...</h5>
            <p class="pb-5 text-slate-200">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum officiis, suscipit ipsa sapiente aliquid autem aut ex quos similique excepturi nihil possimus voluptatibus adipisci dolorum nobis incidunt illum quam voluptates?</p>
            <a href="#"  class="flex justify-center text-center text-yellow-400 hover:text-white border border-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-lg px-5 py-2.5 me-2 mb-2 dark:border-yellow-300 dark:text-yellow-300 dark:hover:text-white dark:hover:bg-yellow-400 dark:focus:ring-yellow-900">Read..</a>
          </div>
          <!-- box -->
          <div class="w-80 bg-zinc-900 p-5 my-2 rounded-lg border-2 border-slate-100">
            <img class="border-b border-yellow-400" src="/images/18437.jpg">
            <h5 class="text-3xl text-yellow-400  font-mono py-2">Super adventures and ...</h5>
            <p class="pb-5 text-slate-200">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum officiis, suscipit ipsa sapiente aliquid autem aut ex quos similique excepturi nihil possimus voluptatibus adipisci dolorum nobis incidunt illum quam voluptates?</p>
            <a href="#"  class="flex justify-center text-center text-yellow-400 hover:text-white border border-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-lg px-5 py-2.5 me-2 mb-2 dark:border-yellow-300 dark:text-yellow-300 dark:hover:text-white dark:hover:bg-yellow-400 dark:focus:ring-yellow-900">Read..</a>
          </div>
          <!-- box -->
          <div class="w-80 bg-zinc-900 p-5 my-2 rounded-lg border-2 border-slate-100">
            <img class="border-b border-yellow-400" src="/images/18437.jpg">
            <h5 class="text-3xl text-yellow-400  font-mono py-2">Super adventures and ...</h5>
            <p class="pb-5 text-slate-200">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum officiis, suscipit ipsa sapiente aliquid autem aut ex quos similique excepturi nihil possimus voluptatibus adipisci dolorum nobis incidunt illum quam voluptates?</p>
            <a href="#" class="flex justify-center text-center text-yellow-400 hover:text-white border border-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-lg px-5 py-2.5 me-2 mb-2 dark:border-yellow-300 dark:text-yellow-300 dark:hover:text-white dark:hover:bg-yellow-400 dark:focus:ring-yellow-900">Read..</a>
          </div>
         <!-- pagination -->
          <div class="mt-5 w-full">
            <nav aria-label="Page navigation example" class="flex justify-center">
              <ul class="flex items-center -space-x-px h-8 text-lg">
                <li>
                  <a href="#" class="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-yellow-300 bg-zinc-950 border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-800 hover:text-yellow-300 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                    <span class="sr-only">Previous</span>
                    <svg class="w-2.5 h-2.5 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4"/>
                    </svg>
                  </a>
                </li>
                <li>
                  <a href="#" class="flex items-center justify-center px-3 h-8 leading-tight text-yellow-400 bg-zinc-950 border border-gray-300 hover:bg-zinc-800 hover:text-yellow-300 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">1</a>
                </li>
                <li>
                  <a href="#" class="flex items-center justify-center px-3 h-8 leading-tight text-yellow-400 bg-zinc-950 border border-gray-300 hover:bg-zinc-800 hover:text-yellow-300 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">2</a>
                </li>
                <li>
                  <a href="#" aria-current="page" class="z-10 flex items-center justify-center px-3 h-8 leading-tight text-rose-700 border border-gray-300 bg-zinc-950 hover:bg-gray-800 hover:text-rose-600 dark:border-gray-700 dark:bg-gray-700 dark:text-white">3</a>
                </li>
                <li>
                  <a href="#" class="flex items-center justify-center px-3 h-8 leading-tight text-yellow-400 bg-zinc-950 border border-gray-300 hover:bg-zinc-800 hover:text-yellow-300 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">4</a>
                </li>
                <li>
                  <a href="#" class="flex items-center justify-center px-3 h-8 leading-tight text-yellow-400 bg-zinc-950 border border-gray-300 hover:bg-zinc-800 hover:text-yellow-300 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">5</a>
                </li>
                <li>
                  <a href="#" class="flex items-center justify-center px-3 h-8 leading-tight text-yellow-400 bg-zinc-950 border border-gray-300 rounded-e-lg hover:bg-gray-800 hover:text-yellow-300 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                    <span class="sr-only">Next</span>
                    <svg class="w-2.5 h-2.5 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
                    </svg>
                  </a>
                </li>
              </ul>
             </nav>
          </div>
          <!-- and pagination -->
        </div>
        
        <div class="bg-white w-[50%] rounded-lg bg-gray-400 ml-2">
          <div class="spesial">
            <div class="bg-blue-700 bg-[url('../special/p1.jpg')] border-4 border-indigo-800 bg-cover p-5 m-5 rounded-lg">
              <h6 class="text-2xl font-mono text-slate-50 text-center">Special Offer!</h6>
            </div>

            <!-- special box -->
            <div class="m-5">
              <div class="relative group h-[500px]">
                <img src="/special/s1.jpg" alt="Card Image" class="w-full h-[500px] object-cover rounded-lg">
                <div class="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg">
                  <a href="#" class="text-2xl px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Learn more..</a>
                </div>
              </div>
            </div>

            <!-- special box -->
            <div class="m-5">
              <div class="relative group h-[500px]">
                <img src="/special/s2.jpg" alt="Card Image" class="w-full h-[500px] object-cover rounded-lg">
                <div class="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg">
                  <a href="#" class="text-2xl px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Learn more..</a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="w-full flex justify-center my-10">
    <div class="w-[80%] p-5 bg-slate-700 text-slate-100 rounded-lg text-5xl font-sans font-bold">
      <h6 class="leading-normal">On other pages you can learn a lot of interesting informative and positive stuff </h6>
      <div class="mt-5">
        <img class="rounded-lg h-[400px] w-full object-cover" src="/special/s3.jpg">
      </div>
      <div class="mt-5">
        <button type="button" class="text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-4xl px-5 py-2.5 text-center me-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800">Only Up</button>
      </div>
    </div>
  </div>

  <!-- end single news -->
</template>