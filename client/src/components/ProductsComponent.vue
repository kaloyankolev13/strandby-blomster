
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
          <img v-else class='w-full mb-12' :src=product.images[0].url alt="">
          
        </div>
      </router-link>  
            
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
                 DKK: {{ product.price }}
                </p>
                <button @click='addToShoppingCart(product)'>Add to shopping cart</button>
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
           
          </div>
          
  
        </div>
      </div>
    </div>
    <p>{{ state.category }}</p>
    <Pagination/>
  </template>
  
  
  
  <script setup>
  import Pagination from "@/components/PaginationComponent.vue";
  // import {   defineProps } from "vue";
  import  {addToShoppingCart } from "@/js/shoppingCart";
  import Products from "@/api/products";
  import User from "@/api/user";

  const { userCred } = User();
  const {
    state,deleteProduct
  } = Products();

  </script>
  
  <style lang="scss" scoped></style>
  