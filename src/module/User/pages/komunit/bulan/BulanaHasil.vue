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
      <div class="flex">
      <div class="text-[#000] font-bold pl-4 mb-5 text-sm mb-2">Laporan Bulanan Mengikut Hasil</div>
      <div class="text-[#000] font-bold pl-4 mb-5 text-sm mb-2">1/07/2023</div>
    </div>
    <div class="">
        <div class="max-w-sm mb-[10rem] ml-3 mr-3 bg-white rounded-xl overflow-hidden shadow-xl">
            <div class="px-6 py-3 ">
              <div class="text-[#000] text-sm mb-2">Ini adalah contoh PDF View. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In efficitur turpis vitae metus auctor ornare quis in mi. Suspendisse nec venenatis enim. Vivamus mattis turpis ac urna convallis, vitae finibus tortor rutrum. Mauris sagittis, libero id gravida blandit, justo dui iaculis libero, vitae mollis elit neque sit amet elit. Aliquam ornare eros eget felis condimentum, tristique dictum orci vehicula. Fusce ullamcorper nibh leo, sit amet dapibus tellus bibendum id. Quisque risus augue, porta non justo id, ultrices lacinia eros. Nam id luctus lorem, eu molestie arcu. Nullam pellentesque mattis tortor. Mauris vulputate risus nulla, sit amet bibendum diam pulvinar sit amet. Fusce ullamcorper convallis tellus, vel blandit nibh placerat et. Quisque congue nunc velit.

                In mattis sem non libero molestie, eget feugiat nunc tempus. In commodo, purus ac lobortis congue, leo enim pharetra nulla, eget tempus orci nibh vel lacus. Integer pharetra tincidunt tellus, vestibulum commodo dolor porta vitae. Curabitur ac posuere metus. Nulla tempor velit vitae velit eleifend euismod. Integer et lectus lacinia, scelerisque neque at, auctor nibh. Morbi sed tortor quis lorem ultricies hendrerit quis sed magna. Integer vel ante in ante fringilla vulputate. Aenean vitae mauris vitae velit maximus rutrum. Etiam in arcu magna. Etiam volutpat lacus sed lacus laoreet, quis egestas tortor rutrum. Morbi commodo elit a velit vestibulum mattis.</div>
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