<template>
    <div class="bg-[#f1f1f1] h-screen mb-[10rem]">
        <Navbar/>
         <div class="flex grid grid-cols-2 p-2 mb-5 justify-center mt-4">
            <router-link to="#">
            <div class="p-[0.5rem] max-w-sm ">
                <div class="flex rounded-lg  bg-[#781E2A] h-[3rem] p-3 flex-col">
                    <div class=" items-center justify-center mb-3 ">
                        <h2 class="  text-[#fff] text-center text-md font-bold">Peti Masuk </h2>
                    </div>
                </div>
            </div>
            </router-link>
    
             <router-link to="/">
                <div class="p-[0.5rem] max-w-sm ">
                    <div class="flex rounded-lg  bg-[#E0E0E0] h-[3rem] p-3 flex-col">
                        <div class=" items-center justify-center mb-3 ">
                            <h2 class="  text-[#000] text-center text-md font-bold">Tugasan</h2>
                        </div>
                    </div>
                </div>
                </router-link>
        
        </div>


<div class="max-w-sm ml-4 mr-4 p-5 mb-5 pt-1 bg-white border border-gray-200 rounded-lg shadow-xl dark:bg-gray-800 dark:border-gray-700">
   
        <div class="container flex flex-wrap items-center justify-between mx-auto">
            <span class=" mt-3 self-center text-xl font-semibold tracking-tight text-black">1. Tugasan 1</span>
            <div class="w-7 h-7 bg-[#CD352A] rounded-full"></div>
      </div>
    <p class="mb-3 font-normal text-sm text-black ">Contoh Tugasan yang belum dibaca dan belum diselesaikan. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In efficitur turpis vitae metus auctor ornare quis in mi. Suspendisse nec venenatis enim.</p>
   
</div>
<div class="max-w-sm ml-4 mr-4 p-5 pt-1 mb-5 bg-white border border-gray-200 rounded-lg shadow-xl dark:bg-gray-800 dark:border-gray-700">
   
    <div class="container flex flex-wrap items-center justify-between mx-auto">
        <span class=" mt-3 self-center text-xl font-semibold tracking-tight text-black">2. Tugasan 2</span>
        <div class="w-7 h-7 bg-[#F0AE31] rounded-full"></div>
  </div>
  <p class="mb-3 font-normal text-sm text-black ">Contoh Tugasan yang belum dibaca dan belum diselesaikan. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In efficitur turpis vitae metus auctor ornare quis in mi. Suspendisse nec venenatis enim.</p>

</div>
<div class="max-w-sm ml-4 mr-4 p-5 pt-1 mb-5 bg-white border border-gray-200 rounded-lg shadow-xl dark:bg-gray-800 dark:border-gray-700">
   
    <div class="container flex flex-wrap items-center justify-between mx-auto">
        <span class=" mt-3 self-center text-xl font-semibold tracking-tight text-gray">3. Tugasan 3</span>
        <div class="w-7 h-7 bg-[#2ACD61] rounded-full"></div>
  </div>
  <p class="mb-3 font-normal text-sm text-gray ">Contoh Tugasan yang belum dibaca dan belum diselesaikan. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In efficitur turpis vitae metus auctor ornare quis in mi. Suspendisse nec venenatis enim.</p>

</div>


        
       
     <Footer/>
    </div>
</template>

<script>
import Navbar from '@/components/NavNotifikasi.vue'
import Footer from '@/components/Footer.vue';
// import KomunitiTab from '@/components/KomunitiTab.vue';
    export default {
        name:'nav-bar',
        components:{
            Navbar,
            Footer,
            // KomunitiTab
        }
        
    }
</script>

<style lang="scss" scoped>

</style>