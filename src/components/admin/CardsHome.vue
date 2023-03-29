<template>
    <div class="flex grid grid-cols-2 p-4 justify-center mt-4 mb-10">

        <!-- card 1 -->
        <router-link to="/komunitiMaklumat">
        <div class="p-[0.5rem] max-w-sm  shadow-sm">
            <div class="flex rounded-lg  bg-white h-[9rem] p-6 flex-col">
                <div class=" items-center justify-center mb-3 ">
                    <div
                        class="w-16 h-16 mb-5 inline-flex items-center justify-center text-white flex-shrink-0">
                       <img class="object-center ml-[2rem] " src="@/assets/image/bell.png"/>
                    </div>
                    <h2 class="text-[#781E2A] text-center text-lg font-medium">Notifikasi</h2>
                </div>
            </div>
        </div>
    </router-link>
    
        <!-- card 2 -->
        <router-link to="#">
        <div class="p-[0.5rem] max-w-sm  shadow-sm">
            <div class="flex rounded-lg  bg-white h-[9rem] p-6 flex-col">
                <div class=" items-center justify-center mb-3 ">
                    <div
                    class="w-16 h-16 mb-5 inline-flex items-center justify-center text-white flex-shrink-0">
                   <img class="object-center ml-[2rem] " src="@/assets/image/global-search.png"/>
                </div>
                    <h2 class="text-[#781E2A] text-center text-sm font-bold">Carian Projek</h2>
                </div>
            </div>
        </div>
        </router-link>
    
        <!-- card 3 -->
        <router-link to="#">
        <div class="p-[0.5rem] max-w-sm  shadow-sm">
            <div class="flex rounded-lg  bg-white h-[9rem] p-6 flex-col">
                <div class=" items-center justify-center mb-3 ">
                    <div
                    class="w-16 h-16 mb-5 inline-flex items-center justify-center text-white flex-shrink-0">
                   <img class="object-center ml-[2rem] " src="@/assets/image/earth-globe.png"/>
                </div>
                    <h2 class="text-[#781E2A] text-center text-md font-bold">Lawatan</h2>
                </div>
            </div>
        </div>
        </router-link>

         <!-- card 3 -->
         <router-link to="#">
         <div class="p-[0.5rem] max-w-sm  shadow-sm">
            <div class="flex rounded-lg  bg-white h-[9rem] p-6 flex-col">
                <div class=" items-center justify-center mb-3 ">
                    <div
                        class="w-16 h-16 mb-5 inline-flex items-center justify-center text-white flex-shrink-0">
                       <img class="object-center ml-[2rem] " src="@/assets/image/sticky-notes.png"/>
                    </div>
                    <h2 class="text-[#781E2A] text-center text-md font-bold">Status</h2>
                </div>
            </div>
        </div>
        </router-link>
         <!-- card 3 -->
        
    
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>

</style>