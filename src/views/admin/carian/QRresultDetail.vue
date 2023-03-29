<template>
  <div class="bg-[#f1f1f1]  mb-[4rem]">
    <NavCarian />
    <div class="mb-[2rem]">
      <h2 class="text-[#000] text-star ml-5 mr-5 p-1 text-lg">Nama Peserta</h2>
      <div class="bg-white ml-5 mb-3 mr-5 p-3 py-5 rounded-xl shadow-xl">
        <div
          class="container flex flex-wrap items-center justify-between mx-auto"
        >
          <span class="self-center text-sm whitespace-nowrap dark:text-[#000]"
            >Muhammad Ali Bin Abu</span
          >
        </div>
      </div>
    </div>
    <div class="mb-5">
      <div class="bg-white ml-5 mb-5 mr-5 p-3 rounded-xl shadow-xl">
        <div
          class="container flex flex-wrap items-center justify-between mx-auto"
        >
          <span
            class="self-center text-md font-semibold whitespace-nowrap dark:text-[#000]"
          >
            Nama</span
          >
          <span class="text-sm font-semibold whitespace-nowrap text-gray"
            >Muhammad Ali bin Abu</span
          >
        </div>
        <div
          class="container flex flex-wrap items-center justify-between mx-auto"
        >
          <span
            class="self-center text-md font-semibold whitespace-nowrap dark:text-[#000]"
          >
            ID PPP</span
          >
          <span class="text-sm font-semibold whitespace-nowrap text-gray"
            >PNR-1180480</span
          >
        </div>
      </div>

      <!-- drop down -->
     <FirstDropdown/>
     <SecondDropDown/>
     <ThiredDropdown/>
      <!-- end drop down -->
    </div>
    <Footer />
  </div>
</template>
  
  <script>
import NavCarian from "@/components/NavCarian.vue";
import Footer from "@/components/Footer.vue";
import FirstDropdown from '@/components/admin/carian/FirstDropdown.vue';
import SecondDropDown from "@/components/admin/carian/SecondDropDown.vue";
import ThiredDropdown from "@/components/admin/carian/ThiredDropdown.vue";

export default {
  name: "carian-page",
  data() {
    return {
      // isShowing: false,
    };
  },
  components: {
    NavCarian,
    Footer,
    FirstDropdown,
    SecondDropDown,
    ThiredDropdown
  },
};
</script>
  
  <style lang="scss" scoped>
</style>