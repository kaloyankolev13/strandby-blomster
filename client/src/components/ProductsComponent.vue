
<template>
    <div class="bg-white">
      <div
        class="mx-auto max-w-2xl px-4 py-16 sm:px-6  lg:max-w-7xl "
      >
       
        <div
          class=" grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-2xl:gap-x-8"
        >
          <div
            v-for="product in state.products"
            :key="product.id"
            class="group relative shadow-md rounded-md"
          >
          <router-link
      :to="{ name: 'product', params: { id: product._id } }"
      >
            <div
              class="min-h-80 aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-b-none rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80"
            >
            <div v-if='product.images.length === 0'>
                <h1>No Image</h1>
            </div>
              <img v-else class='w-52 mb-12' :src=product.images[0].url alt="">
          
            </div>
  
            <div class="flex p-3 flex-col items-center">
              <div class="flex items-center flex-col">
                <h3 class="text-lg font-bold text-[#333]">
                  <a :href="product.href">
                    <span aria-hidden="true" class=" inset-0" />
                    {{ product.name }}
                  </a>
                </h3>
                <p class="mt-1 text-sm text-center text-gray-500">
                  {{ product.description }}
                </p>
                <p class="mt-1 text-sm font-bold text-[#333]">
                  {{ product.price }}
                </p>
              </div>
            </div>
            <div
          v-if='userCred.token'
          id='admin-buttons'
          class='flex justify-between mt-5'>
          <router-link
          class="
          btn-dark
          "
          :to="{ name: 'admin-edit', params: { id: product._id } }"
        >
          Edit</router-link
        >
        <button
          class="
           btn-dark
          "
          @click="deleteProduct(product._id)"
        >
          Delete
        </button>
      </div>
            </router-link>
          </div>
          
  
        </div>
      </div>
    </div>
    <div id='pagination' class='flex justify-evenly'>
    <div v-for='page in pages' :key='page'>
      <button @click=goToPage(page)>
        {{ page }}
      </button>
    </div>
  </div>
  </template>
  
  
  
  <script setup>
  // import Product1 from "@/assets/product_photo_i_want_you.jpeg";
  import {  onMounted,computed } from "vue";
  import Products from "@/api/products";
  import User from "@/api/user";
  
  const {
    state,
    fetchProducts, // deleteProduct, categoriseProduct,
  } = Products();
  console.log(state.value.products);
  // const category = null;
  const { userCred } = User();
  const pages = computed(() => state.value.pages || 0);
  const skip = computed(() => state.value.skip || 0);
  const limit = computed(() => state.value.limit || 9);
  const goToPage = async (page) => {
    state.value.skip = (page - 1) * limit.value;
    await fetchProducts(limit, skip);
  };
  onMounted(async () => {
    await fetchProducts(); //Add limit and skip as the parameters
  });
  
  
  </script>
  
  <style lang="scss" scoped></style>
  