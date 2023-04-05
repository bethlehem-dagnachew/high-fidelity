<template>
    <div class="bg-[#f1f1f1] h-screen mb-[4rem] ">
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

          <!-- select -->
          <select class="py-4 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 shadow-xl" v-model="form.category" name="make" >
              <option value="" disabled selected>Bulan Pilih</option>
              <option v-for="option in makes_options" v-bind:value="option.text" v-bind:key="option.text" >
                {{ option.text }}
              </option>
            </select>
            <router-link to="/datebulan">
            <div class="w-[20rem]" >
              <div class=" py-4">
                <div class="font-normal text-md mb-2 py-2 px-2 rounded-lg w-[20rem] bg-white shadow-lg" v-for="option in model_options[form.category]"
                v-bind:value="option.text"
                v-bind:key="option.text"
              >
                {{ option.text }}</div>
              </div>
            </div>
          </router-link>
         
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
    data() {
      return{
        form: {
        category: "",
        subCategory: "",
      },
      

        makes_options: [
        { text: "January", id: 1 },
        { text: "February", id: 2 },
        { text: "March", id: 3 },
        { text: "April", id: 4 },
        { text: "May", id: 5 },
        { text: "June", id: 6 },
        { text: "July", id: 7 },
        { text: "August", id: 8 },
        { text: "September", id: 9 },
        { text: "October", id: 10 },
        { text: "November", id: 11 },
        { text: "December", id: 12 },
      ],
      model_options: {
        January: [
          { text: "1/07/2023", id: 1 },
          { text: "2/07/2023", id: 2 },
          { text: "3/07/2023", id: 3 },
          { text: "4/07/2023", id: 4 },
          { text: "5/07/2023", id: 5 },
          { text: "6/07/2023", id: 6 },
        ],
        February: [
          { text: "1/07/2023", id: 1 },
          { text: "2/07/2023", id: 2 },
          { text: "3/07/2023", id: 3 },
          { text: "4/07/2023", id: 4 },
          { text: "5/07/2023", id: 5 },
          { text: "6/07/2023", id: 6 },
        ],
        March: [
          { text: "1/07/2023", id: 1 },
          { text: "2/07/2023", id: 2 },
          { text: "3/07/2023", id: 3 },
          { text: "4/07/2023", id: 4 },
          { text: "5/07/2023", id: 5 },
          { text: "6/07/2023", id: 6 },
        ],
        April: [
          { text: "1/07/2023", id: 1 },
          { text: "2/07/2023", id: 2 },
          { text: "3/07/2023", id: 3 },
          { text: "4/07/2023", id: 4 },
          { text: "5/07/2023", id: 5 },
          { text: "6/07/2023", id: 6 },
        ],
        May: [
          { text: "1/07/2023", id: 1 },
          { text: "2/07/2023", id: 2 },
          { text: "3/07/2023", id: 3 },
          { text: "4/07/2023", id: 4 },
          { text: "5/07/2023", id: 5 },
          { text: "6/07/2023", id: 6 },
        ],
        June: [
          { text: "1/07/2023", id: 1 },
          { text: "2/07/2023", id: 2 },
          { text: "3/07/2023", id: 3 },
          { text: "4/07/2023", id: 4 },
          { text: "5/07/2023", id: 5 },
          { text: "6/07/2023", id: 6 },
        ],
        July: [
          { text: "1/07/2023", id: 1 },
          { text: "2/07/2023", id: 2 },
          { text: "3/07/2023", id: 3 },
          { text: "4/07/2023", id: 4 },
          { text: "5/07/2023", id: 5 },
          { text: "6/07/2023", id: 6 },
        ],
        August: [
          { text: "1/07/2023", id: 1 },
          { text: "2/07/2023", id: 2 },
          { text: "3/07/2023", id: 3 },
          { text: "4/07/2023", id: 4 },
          { text: "5/07/2023", id: 5 },
          { text: "6/07/2023", id: 6 },
        ],
        September: [
          { text: "1/07/2023", id: 1 },
          { text: "2/07/2023", id: 2 },
          { text: "3/07/2023", id: 3 },
          { text: "4/07/2023", id: 4 },
          { text: "5/07/2023", id: 5 },
          { text: "6/07/2023", id: 6 },
        ],
        October: [
          { text: "1/07/2023", id: 1 },
          { text: "2/07/2023", id: 2 },
          { text: "3/07/2023", id: 3 },
          { text: "4/07/2023", id: 4 },
          { text: "5/07/2023", id: 5 },
          { text: "6/07/2023", id: 6 },
        ],
        November: [
          { text: "1/07/2023", id: 1 },
          { text: "2/07/2023", id: 2 },
          { text: "3/07/2023", id: 3 },
          { text: "4/07/2023", id: 4 },
          { text: "5/07/2023", id: 5 },
          { text: "6/07/2023", id: 6 },
        ],
        December: [
          { text: "1/07/2023", id: 1 },
          { text: "2/07/2023", id: 2 },
          { text: "3/07/2023", id: 3 },
          { text: "4/07/2023", id: 4 },
          { text: "5/07/2023", id: 5 },
          { text: "6/07/2023", id: 6 },
        ],
       
      
    
    }
      }
   
  },
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