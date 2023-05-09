<template>
  <!-- <div class='h-[600px] bg-primary'>
        <h1 class='text-3xl'>Categories</h1>
    </div> -->
  <div class="container mx-auto m-10">
    <h1 class="text-3xl">Products</h1>
    <div class="grid grid-cols-3 place-items-center">
      <div
        v-for="product in products"
        :key="product.name"
        class="m-10 bg-primary h-60 w-60 px-4"
      >
        <router-link :to="{ name: 'product', params: { id: product.id } }">
          <div class="h-40">{{ product.image }}</div>
          <h2>{{ product.name }}</h2>
          <p>{{ product.description }}</p>
          <p>{{ product.price }}</p>
        </router-link>
      </div>

      <p>{{ state.products }}</p>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import Products from "../api/products";

const {
  state,
  fetchProducts, // deleteProduct, categoriseProduct,
} = Products();
console.log(state.value.products);
// const category = null;
// const { userCred } = User();
// const pages = computed(() => state.value.pages || 0);
// const skip = computed(() => state.value.skip || 0);
// const limit = computed(() => state.value.limit || 9);
// const goToPage = async (page) => {
//   state.value.skip = (page - 1) * limit.value;
//   await fetchProducts(limit, skip);
// };
onMounted(async () => {
  await fetchProducts(); //Add limit and skip as the parameters
});

const products = ref([
  {
    id: 1,
    name: "flower1",
    description: "Some description",
    price: 30,
    image: "url",
  },
  {
    id: 2,
    name: "flower2",
    description: "Some description",
    price: 30,
    image: "url",
  },
  {
    id: 3,
    name: "flower3",
    description: "Some description",
    price: 30,
    image: "url",
  },
  {
    id: 3,
    name: "flower3",
    description: "Some description",
    price: 30,
    image: "url",
  },
  {
    id: 3,
    name: "flower3",
    description: "Some description",
    price: 30,
    image: "url",
  },
]);
</script>

<style lang="scss" scoped></style>
