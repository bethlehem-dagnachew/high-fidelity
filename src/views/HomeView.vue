<template>
  <div
    class="h-[100%] bg-gradient-to-r from-[#781E2A] via-[#A2335D] to-[#7B202E]"
  >
    <!-- <Profile/> -->
    <div class="p-6 sm:p-12 dark:text-gray-100">
      <div class="flex flex-row space-y-6 pt-9 pl-3 md:flex-row">
        <img
          src="https://source.unsplash.com/75x75/?portrait"
          alt=""
          class="self-center flex-shrink-0 w-24 h-24 border rounded-full md:justify-self-start dark:bg-gray-500 dark:border-white-700 border-4"
        />
        <div class="flex ml-[2rem] w-full flex-col">
          <div class="text-start -mt-2">
            <p class="text-sm font-normal text-white lg:text-2xl">
              Nama:
              <span class="text-[#cbd5e1] font-light text-sm">Ali Bin Abu</span>
            </p>
            <p class="text-sm font-normal text-white lg:text-2xl">
              No.ID:
              <span class="text-[#cbd5e1] font-light text-sm">1189460-PNR</span>
            </p>
            <p class="text-sm font-normal text-white lg:text-2xl">
              Project:
              <span class="text-[#cbd5e1] font-light text-sm"
                >Plasma Arnab</span
              >
            </p>
          </div>
        </div>
      </div>
    </div>
    <CardsHome />
    <Footer />
  </div>
</template>

<script>
// import Profile from '@/components/home/Profile.vue';
import CardsHome from "@/components/home/CardsHome.vue";
import Footer from "@/components/Footer.vue";
import api from '@/services/api'
export default {
  components: {
    // Profile,
    CardsHome,
    Footer,
  },
  mounted() {
        this.getData()
    },
  methods: {
    getData() {
      api.request({ auth: true })
        .get(`/home`)
        .then((response) => {
          this.home = response.data;
          console.log(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<style lang="scss" scoped>
</style>