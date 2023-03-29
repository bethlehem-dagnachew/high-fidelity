<template>
    <div class="bg-[#f1f1f1] h-screen mb-[2rem]">
      <Navbar />
      <div>
        <div class="p-4 ">
            <div class="flex items-center rounded-xl bg-white justify-center w-full">
                <label for="dropzone-file" class="flex flex-col items-center justify-center w-full h-15 border-2 border-gray-300 border-dashed rounded-xl cursor-pointer  dark:hover:bg-bray-800 ">
                    <div class="flex flex-row items-center justify-center pt-5 pb-6">
                        <svg aria-hidden="true" class="w-10 h-10 mb-3 text-[#781E2A]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
                        <p class="mb-2 text-sm text-[#781E2A]"><span class="font-semibold">Muat Naik Gambar</span></p>
                    </div>
                    <input id="dropzone-file" type="file" class="hidden" />
                </label>
            </div>
          </div>
          <div class="p-4 mt-[-0.8rem] mb-[-0.1rem]">
            <h2 class="text-[#000] text-star mb-2 text-lg font-bold">Deskripsi</h2>
            <textarea id="message" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-white rounded-lg  mb-2 border-white shadow-2xl focus:ring-blue-500 focus:border-blue-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder=""></textarea>
    
          </div>
       <router-link to="/QRcode">
        <div class="p-4 ">
          <div class="py-4 text-center justify-center flex flex-row px-4 block w-full bg-white border-gray-200 rounded-xl text-sm text-gray focus:border-blue-500 focus:ring-blue-500 shadow-xl"> 
            <img class="w-10 pr-3 h-8" src="@/assets/image/qr-code.png"/>
            <p class=" text-sm text-[#781E2A]">Scan Kod QR Peneroka</p>
          </div>
        </div>
      </router-link>
        
        <div class="p-4 " >
        <button class="bg-gradient-to-r from-[#781E2A] via-[#A2335D] to-[#7B202E] text-white font-bold mt-5 py-4 px-10 w-[100%] rounded-full shadow-xl">
            Simpan
        </button>
        </div>
  
      </div>
      <Footer />
    </div>
  </template>
  
  <script>
  import Navbar from "@/components/NavLawatan.vue";
  import Footer from "@/components/Footer.vue";
  export default {
    name: "carian-page",
    components: {
        Navbar,
      Footer,
    },
    methods:{
      carianDetail(){
        this.$router.push('/carianDetail')
      }
    }
  };
  </script>
  
  <style lang="scss" scoped>
  </style>