<script lang="ts">
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
    <div class="bg-yellow-300 flex justify-center py-5 h-[100px]">
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
    <div class="bg-slate-200 my-[95px] flex justify-center">
      <div class="bg-[url('../images/18437.jpg')] w-[1200px] h-[400px] bg-no-repeat bg-center">
        <div class="bg-[#838996A3] h-[400px]">
          <div class="flex justify-center font-sans py-5">
            <h3 class="border p-5 border-teal-100 text-teal-100 rounded-md text-2xl">TOP-3 NEWS</h3>
          </div>
          <div class="flex justify-around">

            <div class="border p-3 w-[280px]">
              <div class="text-xl pb-3">Environmental filter</div>
              <div class="image">
                <img src="/top/6953.jpg">
              </div>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit ipsa pariatur quos consectetur beatae, facilis voluptates aliquam quisquam aut officia maiores consequuntur explicabo cum? Sequi quibusdam magni omnis eos sit?</p>
              <a href="#" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Read more</a>
            </div>

            <div class="box2-tag ">
              <div class="eye">321</div>
              <div class="image">
                image here
              </div>
              <h3>text title</h3>
              <p>desk</p>
            </div>

            <div class="box3-tag ">
              <div class="eye">321</div>
              <div class="image">
                img here
              </div>
              <h3>text title</h3>
              <p>desk</p>
            </div>

          </div>
        </div>
      </div>
    </div>
    <!-- and top news -->
    <div>
      advertisement
    </div>
  </div>
</template>