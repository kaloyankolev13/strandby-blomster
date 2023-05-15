<!-- eslint-disable max-len -->
<template>
    <div class='mx-32 my-12'>
      <div v-if='state.message'>
        <p>{{ state.message }}</p>
      </div>
      <div class='flex ' v-else>
        <div class='text-center w-1/2'>
          <h1>{{ state.product.name }}</h1>
          <div class='flex justify-center my-20 items-center'>
        <div v-for='image in state.product.images' :key='image.id'>
          <img :src="image.url" alt="">
        </div>
      </div>
      </div>
        <div class=' self-center m-12 w-1/2'>
          <h2>{{ state.product.description }}</h2>
          <br>
          <h2>{{ state.product.category }}</h2>
      <h2 class='text-right font-bold'>Цена: {{ state.product.price }}лв</h2>
      <!-- Add to cart button -->
      <div class='text-right mt-5'>
      <button>
      <svg xmlns="http://www.w3.org/2000/svg" width="25.239" height="24" viewBox="0 0 25.239 24">
      <g id="Icon_feather-shopping-bag" data-name="Icon feather-shopping-bag" transform="translate(-3 -1.5)">
        <path id="Path_24" data-name="Path 24" d="M8.207,3,4.5,7.2V21.9A2.308,2.308,0,0,0,6.971,24h17.3a2.308,2.308,0,0,0,2.471-2.1V7.2L23.033,3Z" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"/>
        <path id="Path_25" data-name="Path 25" d="M4.5,9H26.739" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"/>
        <path id="Path_26" data-name="Path 26" d="M24,15a6,6,0,0,1-12,0" transform="translate(-2.38 -4.5)" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"/>
    </g>
  </svg>
  </button>
  </div>
  
  </div>
  </div>
    </div>
  
  </template>
  
  <script setup>
  import { onMounted } from 'vue';
  import { useRoute } from 'vue-router';
  import Products from '../../api/products';
  
  const route = useRoute();
  const { state, fetchOneProduct } = Products();
  
  onMounted(() => {
    fetchOneProduct(route.params.id);
  });
  
  </script>
  
  <style lang="scss" scoped>
  
  </style>
  