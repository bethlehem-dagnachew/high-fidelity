<template>
  <div class="bg-[#f1f1f1] h-screen mb-[9rem]">
    <NavCarian />
    <div>
      <div class="p-4" @click="carianDetail">
        <h2 class="text-[#000] text-star mb-1 text-md font-bold">Rancangan</h2>
        <div
          id="countries"
          class="py-5 px-4 block w-full border-gray-200 rounded-xl text-sm text-gray focus:border-blue-500 focus:ring-blue-500 shadow-xl"
        >
        <div class="container flex flex-wrap items-center justify-between mx-auto">
          <span class=" self-center text-md font-semibold whitespace-nowrap dark:text-[#000]"> Sila Pilih</span>
          <img class="h-3 w-3" src="@/assets/image/down-arrow.png"/>

    </div>
          <!-- <option selected="">Sila Pilih</option> -->
      </div>
      </div>
      <div class="p-4" @click="carianDetail">
        <h2 class="text-[#000] text-star mb-1 text-md font-bold">Wilayah</h2>
        <div
          id="countries"
          class="py-5 px-4 block w-full border-gray-200 rounded-xl text-sm text-gray focus:border-blue-500 focus:ring-blue-500 shadow-xl"
        >
        <div class="container flex flex-wrap items-center justify-between mx-auto">
          <span class=" self-center text-md font-semibold whitespace-nowrap dark:text-[#000]"> Sila Pilih</span>
          <img class="h-3 w-3" src="@/assets/image/down-arrow.png"/>

    </div>      </div>
      </div>
      <div class="p-4 " @click="carianDetail">
        <h2 class="text-[#000] text-star mb-1 text-md font-bold">Kod Projek</h2>
        <div
          id="countries"
          class="py-5 px-4 block w-full border-gray-200 rounded-xl text-sm text-gray focus:border-blue-500 focus:ring-blue-500 shadow-xl"
        >
        <div class="container flex flex-wrap items-center justify-between mx-auto">
          <span class=" self-center text-md font-semibold whitespace-nowrap dark:text-[#000]"> Sila Pilih</span>
          <img class="h-3 w-3" src="@/assets/image/down-arrow.png"/>

    </div>      </div>
      </div>
      <h2 class="text-[#000] text-center p-6 text-sm ">
        atau
      </h2>
      <div class="p-4 ">
        <div class="py-4 text-center justify-center flex flex-row px-4 block w-full bg-white border-gray-200 rounded-xl text-sm text-gray focus:border-blue-500 focus:ring-blue-500 shadow-xl"> 
          <img class="w-10 pr-3 h-8" src="@/assets/image/qr-code.png"/>
          <p class=" text-sm text-[#781E2A]">Scan Kod QR Peneroka</p>
        </div>
      </div>
      <div class="p-4 " @click="carianDetail">
      <button class="bg-[#781E2A] text-white font-bold mt-5 py-4 px-10 w-[100%] rounded-full shadow-xl">
        Cari
      </button>
      </div>

    </div>
    <Footer />
  </div>
</template>

<script>
import NavCarian from "@/components/NavCarian.vue";
import Footer from "@/components/Footer.vue";
export default {
  name: "carian-page",
  components: {
    NavCarian,
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