<template>
    <div class="bg-[#f1f1f1]  ">
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
  
      <div
        class="flex grid grid-cols-2 pl-4 pr-4 gap-4 justify-center mt-4 mb-[5rem]"
      >
        <div class="max-w-sm">
          <div class="flex text-left">
            <span class="block text-sm text-left text-black font-bold mb-2"
              >Bulan</span
            >
          </div>
          <select
            id="countries"
            class="py-4 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 shadow-xl"
          >
            <option selected>Sila Pilih</option>
            <option value="01">January</option>
            <option value="02">February</option>
            <option value="03">March</option>
            <option value="04">April</option>
            <option value="05">May</option>
            <option value="06">June</option>
            <option value="07">July</option>
            <option value="08">August</option>
            <option value="09">September</option>
            <option value="10">October</option>
            <option value="11">November</option>
            <option value="12">December</option>
          </select>
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
      function decrement(e) {
        const btn = e.target.parentNode.parentElement.querySelector(
          'button[data-action="decrement"]'
        );
        const target = btn.nextElementSibling;
        let value = Number(target.value);
        value--;
        target.value = value;
      }
  
      function increment(e) {
        const btn = e.target.parentNode.parentElement.querySelector(
          'button[data-action="decrement"]'
        );
        const target = btn.nextElementSibling;
        let value = Number(target.value);
        value++;
        target.value = value;
      }
  
      const decrementButtons = document.querySelectorAll(
        `button[data-action="decrement"]`
      );
  
      const incrementButtons = document.querySelectorAll(
        `button[data-action="increment"]`
      );
  
      decrementButtons.forEach((btn) => {
        btn.addEventListener("click", decrement);
      });
  
      incrementButtons.forEach((btn) => {
        btn.addEventListener("click", increment);
      });
    },
  };
  </script>
  
  <style lang="scss" scoped>
  </style>