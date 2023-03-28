<template>
    <div class="bg-[#f1f1f1] h-screen mb-[3rem]">
        <Navbar/>
         <div class="flex grid grid-cols-2 p-2 justify-center mt-4">
            <router-link to="/komunitiMaklumat">
                <div class="p-[0.5rem] max-w-sm ">
                    <div class="flex rounded-lg  bg-[#E0E0E0] h-[3rem] p-3 flex-col">
                        <div class=" items-center justify-center mb-3 ">
                            <h2 class="  text-[#000] text-center text-md font-bold">Maklumat Asas</h2>
                        </div>
                    </div>
                </div>
                </router-link>
            <router-link to="#">
            <div class="p-[0.5rem] max-w-sm ">
                <div class="flex rounded-lg  bg-[#781E2A] h-[3rem] p-3 flex-col">
                    <div class=" items-center justify-center mb-3 ">
                        <h2 class="  text-[#fff] text-center text-md font-bold"> Laporan</h2>
                    </div>
                </div>
            </div>
            </router-link>
             <router-link to="/status">
             <div class="p-[0.5rem] max-w-sm  ml-[5rem] -mr-[5rem] ">
                <div class="flex rounded-lg  bg-[#E0E0E0] h-[3rem] p-3 flex-col">
                    <div class=" items-center justify-center mb-3 ">
                       
                        <h2 class="text-[#000] text-center text-md font-bold">Status</h2>
                    </div>
                </div>
            </div>
        </router-link>
        
        
        </div>

        <div class="flex grid grid-cols-2 pl-6 pr-6 gap-4 justify-center mt-4 ">

            <!-- card 1 -->
            <router-link to="/laporanHarian">
            <div class="p-[0.9rem] max-w-sm shadow-xl bg-white rounded-xl">
                <div class="flex rounded-lg   h-[9rem] p-6 flex-col">
                    <div class=" items-center justify-center mb-5 ">
                        <div
                            class="w-21 h-21 mb-1 inline-flex items-center justify-center text-white flex-shrink-0">
                           <img class="object-center " src="@/assets/image/h1.png"/>
                        </div>
                        <h2 class="text-[#781E2A] text-center text-sm font-bold leading-4">Laporan Harian</h2>
                    </div>
                </div>
            </div>
        </router-link>
        
            <!-- card 2 -->
            <router-link to="/laporanCashflow">
            <div class="p-[0.9rem] max-w-sm bg-white shadow-xl rounded-xl">
                <div class="flex rounded-lg   h-[9rem] p-6 flex-col">
                    <div class=" items-center justify-center mb-5 ">
                        <div
                        class="w-21 h-21 mb-1 inline-flex items-center justify-center text-white flex-shrink-0">
                       <img class="object-center " src="@/assets/image/h2.png"/>
                    </div>
                        <h2 class="text-[#781E2A] text-center text-sm font-bold leading-4">Laporan Cashflow</h2>
                    </div>
                </div>
            </div>
            </router-link>
        
            <!-- card 3 -->
            <router-link to="/laporanStok">
            <div class="p-[0.5rem] max-w-sm shadow-xl bg-white rounded-xl">
                <div class="flex rounded-lg   h-[10rem] p-6 flex-col">
                    <div class=" items-center justify-center mb-3 ">
                        <div
                        class="w-23 h-23 mb-1 inline-flex items-center justify-center text-white flex-shrink-0">
                       <img class="object-center " src="@/assets/image/h3.png"/>
                    </div>
                        <h2 class="text-[#781E2A] text-center text-sm font-bold leading-4">Laporan Stok Inventori</h2>
                    </div>
                </div>
            </div>
            </router-link>
    
             <!-- card 3 -->
             <router-link to="/laporanBulanan">
             <div class="p-[0.5rem] max-w-sm shadow-xl bg-white rounded-xl">
                <div class="flex rounded-lg   h-[10rem] p-6 flex-col">
                    <div class=" items-center justify-center mb-5 ">
                        <div
                            class="w-23 h-23 inline-flex items-center justify-center text-white flex-shrink-0">
                           <img class="object-center  " src="@/assets/image/h4.png"/>
                        </div>
                        <h2 class="text-[#781E2A] text-center text-sm font-bold leading-4">Laporan Bulanan</h2>
                    </div>
                </div>
            </div>
            </router-link>
             
        
        </div>

     <Footer/>
    </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
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