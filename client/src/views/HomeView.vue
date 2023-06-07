<template>
  <div class="home">
    <HeroSection />
    <div class="bg-dark py-24 sm:py-32">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div
          class="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-2 items-center text-white"
        >
          <div class="mx-auto flex items-center">
            <img
              class="w-44 bg-white px-4 py-3 rounded-full"
              src="../assets/stars.svg"
              alt=""
            />
            <div class="ml-4">
              <p class="text-2xl">on Facebook</p>
            </div>
          </div>

          <div class="flex flex-col gap-2">
            <h2 class="text-5xl font-holispay">We love our customers</h2>
            <a href="#" class="underline">See the reviews here</a>
          </div>
        </div>
      </div>
    </div>

    <HomeProducts />
  </div>
</template>

<script setup>
// @ is an alias to /src
import HeroSection from "@/components/Home/HeroSection.vue";
import HomeProducts from "@/components/BestSellers.vue";
</script>
