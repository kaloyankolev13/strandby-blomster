<template>
   <div id='pagination' class='flex justify-evenly'>
    <div v-for='page in pages' :key='page'>
      <button @click=goToPage(page)>
        {{ page }}
      </button>
    </div>
  </div>
</template>

<script setup>
  import {  onMounted,computed } from "vue";
  import Products from "@/api/products";

const {
    state,
    fetchProducts, // deleteProduct, categoriseProduct,
  } = Products();
  
  console.log(state.value.products);


  // const category = null;
  const pages = computed(() => state.value.pages || 0);
  const skip = computed(() => state.value.skip || 0);
  const limit = computed(() => state.value.limit || 9);
  const goToPage = async (page) => {
    state.value.skip = (page - 1) * limit.value;
    await fetchProducts(limit, skip  );
  };
  onMounted(async () => {
    await fetchProducts(limit,skip); //Add limit and skip as the parameters
  });
  
  
  </script>

<style lang="scss" scoped>

</style>