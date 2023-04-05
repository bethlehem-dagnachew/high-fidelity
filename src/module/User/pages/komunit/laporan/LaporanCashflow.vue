<template>
    <div class="bg-[#f1f1f1] h-[100%] mb-[3rem]">
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
        Laporan Stok Inventori
      </h2>
  
      <div
        class="flex grid grid-cols-2 pl-4 pr-4 gap-4 justify-center mt-4 mb-[5rem]"
      >
        <div class="max-w-sm">
          <div class="flex text-left">
            <span class="block text-sm text-left text-black font-bold mb-2"
              >Tarikh</span
            >
          </div>
         <input class="py-4 px-4 block w-full border-gray-200 rounded-xl text-sm focus:border-blue-500 focus:ring-blue-500 shadow-xl" type="date"/>
        </div>
        <div class="max-w-sm">
          <div class="flex item-start text-left">
            <span class="block text-sm text-left text-black font-bold mb-2"
              >Hari</span
            >
          </div>
          <select
            id="countries"
            class="py-4 px-4 block w-full border-gray-200 rounded-xl text-sm focus:border-blue-500 focus:ring-blue-500 shadow-xl"
          >
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
      <div class="p-4 mt-[-4rem]">
        <h2 class="text-[#000] text-star mb-2 text-lg font-bold">Aktiviti</h2>
        <select
          id="countries"
          class="py-5 px-4 block w-full border-gray-200 rounded-xl text-sm text-gray focus:border-blue-500 focus:ring-blue-500 shadow-xl"
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
        <div class="pl-[0.6rem] pt-[0.9rem] mb-[2rem]">
          <div>
            <h2 class="text-[#000] text-star mb-2 text-lg font-bold">Aktiviti</h2>
            <div
              class="flex flex-row w-full h-[3.6rem] rounded-xl relative bg-transparent mt-1"
            >
              <button
                data-action="decrement"
                class="w-[2.4rem] h-[2.6rem] mt-[0.6rem] rounded-xl bg-[#781E2A] mr-3 text-white hover:text-gray-700 hover:bg-gray-400 w-20 cursor-pointer outline-none"
              >
                <span class="m-auto text-3xl font-bold">−</span>
              </button>
              <input
                type="number"
                class="outline-none focus:outline-none rounded-xl w-[5rem] text-center bg-white font-semibold text-md hover:text-black focus:text-black md:text-basecursor-default flex items-center text-gray-700 outline-none"
                name="custom-input-number"
                value="0"
              />
              <button
                data-action="increment"
                class="w-[2.4rem] h-[2.6rem] mt-[0.6rem] rounded-xl bg-[#781E2A] ml-3 text-white hover:text-gray-700 hover:bg-gray-400 w-20 cursor-pointer outline-none"
              >
                <span class="m-auto text-3xl text-center justify-center font-bold"
                  >+</span
                >
              </button>
            </div>
          </div>
  
          <div>
            <h2 class="text-[#000] text-star mb-2 text-lg font-bold">Aktiviti</h2>
            <div
              class="flex flex-row w-full h-[3.6rem] rounded-xl relative bg-transparent mt-1"
            >
              <button
                data-action="decrement"
                class="w-[2.4rem] h-[2.6rem] mt-[0.6rem] rounded-xl bg-[#781E2A] mr-3 text-white hover:text-gray-700 hover:bg-gray-400 w-20 cursor-pointer outline-none"
              >
                <span class="m-auto text-3xl font-bold">−</span>
              </button>
              <input
                type="number"
                class="outline-none focus:outline-none rounded-xl w-[5rem] text-center bg-white font-semibold text-md hover:text-black focus:text-black md:text-basecursor-default flex items-center text-gray-700 outline-none"
                name="custom-input-number"
                value="0"
              />
              <button
                data-action="increment"
                class="w-[2.4rem] h-[2.6rem] mt-[0.6rem] rounded-xl bg-[#781E2A] ml-3 text-white hover:text-gray-700 hover:bg-gray-400 w-20 cursor-pointer outline-none"
              >
                <span class="m-auto text-3xl text-center justify-center font-bold"
                  >+</span
                >
              </button>
            </div>
          </div>
          <div>
            <h2 class="text-[#000] text-star mb-2 text-lg font-bold">Aktiviti</h2>
            <div
              class="flex flex-row w-full h-[3.6rem] rounded-xl relative bg-transparent mt-1"
            >
              <button
                data-action="decrement"
                class="w-[2.4rem] h-[2.6rem] mt-[0.6rem] rounded-xl bg-[#781E2A] mr-3 text-white hover:text-gray-700 hover:bg-gray-400 w-20 cursor-pointer outline-none"
              >
                <span class="m-auto text-3xl font-bold">−</span>
              </button>
              <input
                type="number"
                class="outline-none focus:outline-none rounded-xl w-[5rem] text-center bg-white font-semibold text-md hover:text-black focus:text-black md:text-basecursor-default flex items-center text-gray-700 outline-none"
                name="custom-input-number"
                value="0"
              />
              <button
                data-action="increment"
                class="w-[2.4rem] h-[2.6rem] mt-[0.6rem] rounded-xl bg-[#781E2A] ml-3 text-white hover:text-gray-700 hover:bg-gray-400 w-20 cursor-pointer outline-none"
              >
                <span class="m-auto text-3xl text-center justify-center font-bold"
                  >+</span
                >
              </button>
            </div>
          </div>
          <div>
            <h2 class="text-[#000] text-star mb-2 text-lg font-bold">Aktiviti</h2>
            <div
              class="flex flex-row w-full h-[3.6rem] rounded-xl relative bg-transparent mt-1"
            >
              <button
                data-action="decrement"
                class="w-[2.4rem] h-[2.6rem] mt-[0.6rem] rounded-xl bg-[#781E2A] mr-3 text-white hover:text-gray-700 hover:bg-gray-400 w-20 cursor-pointer outline-none"
              >
                <span class="m-auto text-3xl font-bold">−</span>
              </button>
              <input
                type="number"
                class="outline-none focus:outline-none rounded-xl w-[5rem] text-center bg-white font-semibold text-md hover:text-black focus:text-black md:text-basecursor-default flex items-center text-gray-700 outline-none"
                name="custom-input-number"
                value="0"
              />
              <button
                data-action="increment"
                class="w-[2.4rem] h-[2.6rem] mt-[0.6rem] rounded-xl bg-[#781E2A] ml-3 text-white hover:text-gray-700 hover:bg-gray-400 w-20 cursor-pointer outline-none"
              >
                <span class="m-auto text-3xl text-center justify-center font-bold"
                  >+</span
                >
              </button>
            </div>
          </div>
          <div>
            <h2 class="text-[#000] text-star mb-2 text-lg font-bold">Ulasan</h2>
            <textarea id="message" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-white rounded-lg  mb-2 border-white shadow-2xl focus:ring-blue-500 focus:border-blue-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your thoughts here..."></textarea>

          </div>
          <div>
            <h2 class="text-[#000] text-star mb-2 text-lg font-bold">Muat Naik Gambar</h2>
            <div class="flex items-center justify-center w-full">
                <label for="dropzone-file" class="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer  dark:hover:bg-bray-800 ">
                    <div class="flex flex-col items-center justify-center pt-5 pb-6">
                        <svg aria-hidden="true" class="w-10 h-10 mb-3 text-[#781E2A]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
                        <p class="mb-2 text-sm text-[#781E2A]"><span class="font-semibold">Click to upload</span> or drag and drop</p>
                        <p class="text-xs text-[#781E2A]">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                    </div>
                    <input id="dropzone-file" type="file" class="hidden" />
                </label>
            </div> 
          </div>
          <button class="bg-[#781E2A] text-white font-bold mt-5 py-3 px-10 w-[98%] rounded-full shadow-xl">
            Simpan
          </button>
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