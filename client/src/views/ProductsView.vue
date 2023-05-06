<template>
    <div class='h-[600px] bg-primary'> Categories</div>
    <div class='container mx-auto m-10'>
        <h1 class='text-3xl'>Products</h1>
        <div class='flex justify-center'>
        <div v-for='product in products' :key='product.name' class='mx-10 bg-primary h-60 w-60'>
            <h2>{{product.name}}</h2>
            <p>{{product.description}}</p>
            <p>{{product.price}}</p>
        </div>
    </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'

const products = ref([
    {

        name:'flower1',
        description:'Some description',
        price:30,
        image:'url'


    },    {
        name:'flower2',
        description:'Some description',
        price:30,
        image:'url'

    },    {
        name:'flower3',
        description:'Some description',
        price:30,
        image:'url'

    },
])

</script>

<style lang="scss" scoped>

</style>