<template>
  <div class="h-[100%]  bg-gradient-to-r from-[#781E2A] via-[#A2335D] to-[#7B202E] ">
    <Profile/>
    <CardsHome/>
    <Footer/>
  </div>
</template>

<script>
import Profile from '@/components/home/Profile.vue';
import CardsHome from '@/components/home/CardsHome.vue'
import Footer from '@/components/Footer.vue';
  export default {
    components:{
      Profile,
      CardsHome,
      Footer
    }
    
  }
</script>

<style lang="scss" scoped>


</style>