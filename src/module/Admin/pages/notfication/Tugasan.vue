<template>
    <div class="bg-[#f1f1f1] h-screen mb-[10rem]">
        <Navbar/>
         <div class="flex grid grid-cols-2 p-2 mb-5 justify-center mt-4">
            <router-link to="/notifikasi">
            <div class="p-[0.5rem] max-w-sm ">
                <div class="flex rounded-lg  bg-[#E0E0E0] h-[3rem] p-3 flex-col">
                    <div class=" items-center justify-center mb-3 ">
                        <h2 class="  text-[#000] text-center text-md font-bold">Peti Masuk </h2>
                    </div>
                </div>
            </div>
            </router-link>
    
             <router-link to="#">
                <div class="p-[0.5rem] max-w-sm ">
                    <div class="flex rounded-lg  bg-[#781E2A] h-[3rem] p-3 flex-col">
                        <div class=" items-center justify-center mb-3 ">
                            <h2 class="  text-[#fff] text-center text-md font-bold">Tugasan</h2>
                        </div>
                    </div>
                </div>
                </router-link>
        
        </div>


<div class="max-w-sm ml-4 mr-4 p-5 mb-5 pt-1 ">
   
        <div class="container flex flex-wrap items-center justify-between mx-auto">
            <span class=" mt-3 mb-3 self-center text-xl font-semibold tracking-tight text-black">1. Tugasan 1</span>
            <!-- <div class="w-7 h-7 bg-[#CD352A] rounded-full"></div> -->
      </div>
    <p class="mb-3 font-normal text-sm text-black ">Contoh Tugasan yang belum dibaca dan belum diselesaikan. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In efficitur turpis vitae metus auctor ornare quis in mi. Suspendisse nec venenatis enim.</p>
   
</div>
<div class="ml-3 mr-3">
    <div>
        <h2 class="text-[#000] text-star mb-2 text-lg font-bold">Ulasan</h2>
        <textarea id="message" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-white rounded-lg  mb-2 border-white shadow-2xl focus:ring-blue-500 focus:border-blue-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder=""></textarea>

      </div>
      <div>
        <div class="flex items-center bg-white mt-5 justify-center w-full">
            <label for="dropzone-file" class="flex flex-col items-center justify-center w-full h-20 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer  dark:hover:bg-bray-800 ">
                <div class="flex flex-row items-center justify-center pt-5 pb-6">
                    <svg aria-hidden="true" class="w-10 h-10 mb-3 text-[#781E2A]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
                    <p class="mb-2 text-sm text-[#781E2A]"><span class="font-semibold">Click to upload</span> or drag and drop</p>
                    <!-- <p class="text-xs text-[#781E2A]">SVG, PNG, JPG or GIF (MAX. 800x400px)</p> -->
                </div>
                <input id="dropzone-file" type="file" class="hidden" />
            </label>
        </div> 
      </div>
      <button class="bg-[#781E2A] text-white font-bold mt-5 py-3 px-10 w-[98%] rounded-full shadow-xl">
        Simpan
      </button>
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