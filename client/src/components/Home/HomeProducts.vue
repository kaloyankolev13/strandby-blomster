<template>
    <img src="../../assets/frontpage-accent1.png" class='rotate-45 absolute -right-20 -bottom-96'  width='500' alt="">
    <div class='text-center'>
        <h1 class='text-center mt-10 text-4xl '>Best Sellers</h1>
        <div id='bestseller-products' class='flex justify-center'>
            <div v-for='product in bestProducts' :key='product.name' class='m-10 flex flex-col items-center '>
                <img :src='product.imgUrl' alt="" class='w-96 h-96 drop-shadow-xl'>
                <h3 class='text-2xl'>{{ product.name }}</h3>
                <p class='text-xl'>{{ product.desc }}</p>
                <p class='text-xl'>{{ product.price }}</p>
            </div>
            <img src="../../assets/frontpage-accent2.png" class='absolute -left-32 -bottom-[900px] rotate-90'  width='500' alt="">
        </div>
        <a href="#" class='btn-light px-4 py-2'>Show more</a>
    </div>

</template>

<script setup>

const bestProducts = [
    {name:'name1' , imgUrl:'#',desc:'desc1',price:'100kr1'},
    {name:'name2' , imgUrl:'#',desc:'desc2',price:'100kr2'},
    {name:'name3' , imgUrl:'#',desc:'desc3',price:'100kr3'},
]

</script>

<style lang="scss" scoped>

</style>