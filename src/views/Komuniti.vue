<template>
    <div class="text-[##F5F5F5]">
        <Navbar/>
        <div class="flex grid grid-cols-2 p-2 justify-center mt-4">
            <!-- card 3 -->
            <router-link to="#">
            <div class="p-[0.5rem] max-w-sm ">
                <div class="flex rounded-lg  bg-[#781E2A] h-[3rem] p-3 flex-col">
                    <div class=" items-center justify-center mb-3 ">
                        <h2 class="  text-[#fff] text-center text-md font-bold">Projek Rintis</h2>
                    </div>
                </div>
            </div>
            </router-link>
    
             <!-- card 3 -->
             <router-link to="#">
                <div class="p-[0.5rem] max-w-sm ">
                    <div class="flex rounded-lg  bg-[#E0E0E0] h-[3rem] p-3 flex-col">
                        <div class=" items-center justify-center mb-3 ">
                            <h2 class="  text-[#000] text-center text-md font-bold">Projek Rintis</h2>
                        </div>
                    </div>
                </div>
                </router-link>
             <!-- card 3 -->
             <router-link to="/komuniti">
             <div class="p-[0.5rem] max-w-sm  ml-[5rem] -mr-[5rem] ">
                <div class="flex rounded-lg  bg-[#E0E0E0] h-[3rem] p-3 flex-col">
                    <div class=" items-center justify-center mb-3 ">
                       
                        <h2 class="text-[#000] text-center text-md font-bold">Usahawan</h2>
                    </div>
                </div>
            </div>
        </router-link>
        
        </div>

        <div class="block max-w-sm p-4 ml-4 mr-4 mt-10 bg-[#FFFFFF] border border-gray rounded-2xl shadow-xl  ">
            <div class=" border-gray-200 px-2 sm:px-4 py-2.5 rounded ">
                <div class="container flex flex-wrap items-center justify-between mx-auto">
                      <span class=" self-center text-md font-bold whitespace-nowrap dark:text-[#000]">Nilai Geran</span>
                      <span class=" self-center text-sm font-bold whitespace-nowrap dark:text-[#781E2A]">RM 9870</span>
                </div>
                <div class="container flex flex-wrap items-center justify-between mx-auto">
                    <span class=" self-center text-md font-bold whitespace-nowrap dark:text-[#000]">Nama Projek</span>
                    <span class=" self-center text-sm font-bold whitespace-nowrap dark:text-[#781E2A]">Lorem Ipsum</span>
              </div>
              <div class="container flex flex-wrap items-center justify-between mx-auto">
                <span class=" self-center text-md font-bold whitespace-nowrap dark:text-[#000]">Tarikh Lulus</span>
                <span class=" self-center text-sm font-bold whitespace-nowrap dark:text-[#781E2A]">10/10/2023</span>
          </div>
          <div class="container flex flex-wrap items-center justify-between mx-auto">
            <span class=" self-center text-md font-bold whitespace-nowrap dark:text-[#000]">Tarikh Mula</span>
            <span class=" self-center text-sm font-bold whitespace-nowrap dark:text-[#781E2A]">10/10/2023</span>
      </div>
            </div>
        </div>
     <Footer/>
    </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue';
    export default {
        name:'nav-bar',
        components:{
            Navbar,
            Footer
        }
        
    }
</script>

<style lang="scss" scoped>

</style>