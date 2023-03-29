<template>
    <div class="bg-[#f1f1f1] h-screen mb-[3rem]">
        <Navbar/>
        

        <!-- steps -->
        <section class="text-gray-600 body-font mb-[5rem]">
           
            <div class="container px-5 py-5 mx-auto flex flex-wrap">
                <!-- <h2 class="  text-[#781E2A] text-center mb-5 text-lg font-bold"> Status Projek</h2> -->
              <div class="flex flex-wrap w-full pl-5" >
                <div class="lg:w-2/5 md:w-1/2 md:pr-10 md:py-6">
                  <div class="flex relative pb-5">
                    <div class="h-full w-10 absolute inset-0 flex items-center justify-center">
                      <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
                    </div>
                    <div class="flex-shrink-0 ml-2.5 w-5 h-5 rounded-full bg-[#2ACD61] inline-flex items-center justify-center text-white  z-10">
                     
                    </div>
                    <div class="flex-grow pl-4">
                      <h2 class="font-medium title-font text-md font-bold text-gray-900 mb-1 tracking-wider">Peserta</h2>
                      <p class="leading-relaxed text-sm">Status: Belum Selesai</p>
                    </div>
                  </div>
                  <div class="flex relative pb-5">
                    <div class="h-full w-10 absolute inset-0 flex items-center justify-center">
                      <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
                    </div>
                    <div class="flex-shrink-0 ml-2.5 w-5 h-5 rounded-full bg-[#2ACD61] inline-flex items-center justify-center text-white  z-10">
                     
                    </div>
                    <div class="flex-grow pl-4">
                      <h2 class="font-medium title-font text-md font-bold text-gray-900 mb-1 tracking-wider">Peserta</h2>
                      <p class="leading-relaxed text-sm">Status: Belum Selesai</p>
                    </div>
                  </div>
                  <div class="flex sticky pb-5">
                    <div class="h-full w-10 absolute inset-0 flex items-center justify-center">
                      <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
                    </div>
                    <div class="flex-shrink-0 ml-2.5 w-5 h-5 rounded-full bg-[#2ACD61] inline-flex items-center justify-center text-white  z-10">
                     </div>
                     <div class="flex-grow pl-4">
                        <h2 class="font-medium title-font text-md font-bold text-gray-900 mb-1 tracking-wider">Peserta</h2>
                        <p class="leading-relaxed text-sm">Status: Belum Selesai</p>
                      </div>
                  </div>
                  <div class="flex sticky pb-5">
                    <div class="h-full w-10 absolute inset-0 flex items-center justify-center">
                      <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
                    </div>
                    <div class="flex-shrink-0 ml-2.5 w-5 h-5 rounded-full bg-[#2ACD61] inline-flex items-center justify-center text-white  z-10">
                     
                    </div>
                    <div class="flex-grow pl-4">
                        <h2 class="font-medium title-font text-md font-bold text-gray-900 mb-1 tracking-wider">Peserta</h2>
                        <p class="leading-relaxed text-sm">Status: Belum Selesai</p>
                      </div>
                  </div>
                  <div class="flex sticky pb-5">
                    <div class="h-full w-10 absolute inset-0 flex items-center justify-center">
                      <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
                    </div>
                    <div class="flex-shrink-0 ml-2.5 w-5 h-5 rounded-full bg-[#2ACD61] inline-flex items-center justify-center text-white  z-10">
                      
                    </div>
                    <div class="flex-grow pl-4">
                        <h2 class="font-medium title-font text-md font-bold text-gray-900 mb-1 tracking-wider">Peserta</h2>
                        <p class="leading-relaxed text-sm">Status: Belum Selesai</p>
                      </div>
                  </div>
                  <div class="flex sticky">
                    <div class="flex-shrink-0 ml-2.5 w-5 h-5 rounded-full bg-[#CD352A] inline-flex items-center justify-center text-white  z-10">
                      
                    </div>
                    <div class="flex-grow pl-4">
                        <h2 class="font-medium title-font text-md font-bold text-gray-900 mb-1 tracking-wider">Peserta</h2>
                        <p class="leading-relaxed font-bold text-sm">Status: Belum Selesai</p>
                      </div>
                  </div>
                  
                </div>
              </div>
            </div>
          </section>
     <Footer/>
    </div>
</template>

<script>
import Navbar from '@/components/NavStatusProjek.vue'
import Footer from '@/components/Footer.vue';
// import KomunitiTab from '@/components/KomunitiTab.vue';
    export default {
        name:'kom-laporan',
        components:{
            Navbar,
            Footer,
            // KomunitiTab
        }
        
    }
</script>

<style lang="scss" scoped>

</style>