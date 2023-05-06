<template>
    <div class='h-[600px] bg-primary'>
        <h1 class='text-3xl'>Categories</h1>
    </div>
    <div class='container mx-auto m-10'>
        <h1 class='text-3xl'>Products</h1>
        <div class='flex justify-center'>
        <div v-for='product in products' :key='product.name' class='mx-10 bg-primary h-60 w-60 px-4'>
            <div class='h-40'> {{ product.image }}</div>
            <h2>{{product.name}}</h2>
            <p>{{product.description}}</p>
            <p>{{product.price}}</p>
            <router-link :to="{ name: 'product', params: { id: product.id } }" >Hello</router-link>
        </div>
    </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'

const products = ref([
    {
        id:1,
        name:'flower1',
        description:'Some description',
        price:30,
        image:'url'


    },    {
        id:2,
        name:'flower2',
        description:'Some description',
        price:30,
        image:'url'

    },    {
        id:3,
        name:'flower3',
        description:'Some description',
        price:30,
        image:'url'

    },
])

</script>

<style lang="scss" scoped>

</style>