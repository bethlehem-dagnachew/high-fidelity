<template>
    <div class="">
        <div class="p-1 ml-3 mr-3">
            <div
              @click="isShowing ^= true"
              class="py-5 px-4 bg-white block w-full border-gray-200 rounded-xl text-sm text-gray focus:border-blue-500 focus:ring-blue-500 shadow-xl"
            >
              <div
                class="container flex flex-wrap items-center justify-between mx-auto"
              >
                <span
                  class="self-center text-md font-bold whitespace-nowrap text-[#781E2A]"
                >
                Laporan Harian</span
                >
                <img class="h-3 w-3" src="@/assets/image/down-arrow.png" />
              </div>
            </div>
            <div v-show="isShowing" class="h-[100%]">
              <div
                class="block w-full bg-[#FFFFFF] pl-4 pr-4 border border-[#f2f2f2] rounded-2xl shadow-xl"
              >
                <div class="border-gray-200 px-2 sm:px-4 py-2.5 rounded">
                  <div
                    class="container flex flex-wrap items-center justify-between mx-auto"
                  >
                    <span
                      class="self-center text-md  whitespace-nowrap dark:text-[#000]"
                      >Nilai Geran</span
                    >
                    <span
                      class="self-center text-sm whitespace-nowrap dark:text-[#781E2A]"
                      >RM 9870</span
                    >
                  </div>
                  <div
                    class="container flex flex-wrap items-center justify-between mx-auto"
                  >
                    <span
                      class="self-center text-md  whitespace-nowrap dark:text-[#000]"
                      >Nama Projek</span
                    >
                    <span
                      class="self-center text-sm  whitespace-nowrap dark:text-[#781E2A]"
                      >Lorem Ipsum</span
                    >
                  </div>
                  <div
                    class="container flex flex-wrap items-center justify-between mx-auto"
                  >
                    <span
                      class="self-center text-md whitespace-nowrap dark:text-[#000]"
                      >Tarikh Lulus</span
                    >
                    <span
                      class="self-center text-sm  whitespace-nowrap dark:text-[#781E2A]"
                      >10/10/2023</span
                    >
                  </div>
                  <div
                    class="container flex flex-wrap items-center justify-between mx-auto"
                  >
                    <span
                      class="self-center text-md  whitespace-nowrap dark:text-[#000]"
                      >Tarikh Mula</span
                    >
                    <span
                      class="self-center text-sm whitespace-nowrap dark:text-[#781E2A]"
                      >10/10/2023</span
                    >
                  </div>
                  <div
                    class="container flex flex-wrap items-center justify-between mx-auto"
                  >
                    <span
                      class="self-center text-md whitespace-nowrap dark:text-[#000]"
                      >Tarikh Mula</span
                    >
                    <span
                      class="self-center text-sm  whitespace-nowrap dark:text-[#781E2A]"
                      >10/10/2023</span
                    >
                  </div>
                  <div
                    class="container flex flex-wrap items-center justify-between mx-auto"
                  >
                    <span
                      class="self-center text-md  whitespace-nowrap dark:text-[#000]"
                      >Tarikh Mula</span
                    >
                    <span
                      class="self-center text-sm  whitespace-nowrap dark:text-[#781E2A]"
                      >10/10/2023</span
                    >
                  </div>
                </div>
              </div>
    
              <div class="ml-3 mr-3 mt-3">
                <div>
                    <h2 class="text-[#000] text-star mb-2 text-lg font-bold">Ulasan</h2>
                    <textarea id="message" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-white rounded-lg  mb-2 border-white shadow-2xl focus:ring-blue-500 focus:border-blue-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder=""></textarea>
            
                  </div>
                  <div>
                    <div class="flex items-center bg-white mt-5 justify-center w-full">
                        <label for="dropzone-file" class="flex flex-col items-center justify-center w-full h-20 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer  dark:hover:bg-bray-800 ">
                            <div class="flex flex-row items-center justify-center pt-5 pb-6">
                                <svg aria-hidden="true" class="w-10 h-10 mb-3 text-[#781E2A]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
                                <p class="mb-2 text-sm text-[#781E2A]"><span class="font-semibold">Muat Naik Gambar</span> </p>
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
            </div>
           
          </div>
    

    </div>
</template>

<script>
    export default {
        data() {
    return {
      isShowing: false,
    };
  },
        
    }
</script>

<style lang="scss" scoped>

</style>