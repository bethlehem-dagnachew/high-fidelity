<template>
    <div class="bg-[#f1f1f1] h-screen  ">
      <Navbar />
      <div class="flex grid grid-cols-2 p-2 justify-center mt-4">
        <router-link to="/komunitiMaklumat">
          <div class="p-[0.5rem] max-w-sm">
            <div class="flex rounded-lg bg-[#E0E0E0] h-[3rem] p-3 flex-col">
              <div class="items-center justify-center mb-3">
                <h2 class="text-[#000] text-center text-md font-bold">
                  Maklumat Asas
                </h2>
              </div>
            </div>
          </div>
        </router-link>
        <router-link to="/laporan">
          <div class="p-[0.5rem] max-w-sm">
            <div class="flex rounded-lg bg-[#781E2A] h-[3rem] p-3 flex-col">
              <div class="items-center justify-center mb-3">
                <h2 class="text-[#fff] text-center text-md font-bold">Laporan</h2>
              </div>
            </div>
          </div>
        </router-link>
        <router-link to="/status">
          <div class="p-[0.5rem] max-w-sm ml-[5rem] -mr-[5rem]">
            <div class="flex rounded-lg bg-[#E0E0E0] h-[3rem] p-3 flex-col">
              <div class="items-center justify-center mb-3">
                <h2 class="text-[#000] text-center text-md font-bold">Status</h2>
              </div>
            </div>
          </div>
        </router-link>
      </div>
      <h2 class="text-[#781E2A] text-start pl-4 mb-5 text-xl font-bold">
        Laporan Bulanan
      </h2>
    <div>
        <router-link to="/bulanaHasil">
        <div class="max-w-sm ml-3 mr-3 bg-white rounded-xl overflow-hidden shadow-xl">
            <div class="px-6 py-3 ">
              <div class="text-[#8C263C] text-sm mb-2">Laporan Bulanan Mengikut Hasil</div>
            </div>
          </div>
        </router-link>
          <h2 class="text-[#000] text-center p-3 text-sm ">
            atau
          </h2>
          <div class="max-w-sm ml-3 mr-3 bg-white rounded-xl overflow-hidden shadow-xl">
            <div class="px-6 py-3">
              <div class="text-[#8C263C] text-sm mb-2">Laporan Bulanan Mengikut Perbelanjaan</div>
            </div>
          </div>
          
    </div>
  
      <Footer />
    </div>
  </template>
  
  <script>
  import Navbar from "@/components/Navbar.vue";
  import Footer from "@/components/Footer.vue";
  
  // import KomunitiTab from '@/components/KomunitiTab.vue';
  export default {
    name: "kom-laporan",
    
    components: {
      Navbar,
      Footer,
      // KomunitiTab
    },
    mounted() {
  
    },
  };
  </script>
  
  <style lang="scss" scoped>
  </style>