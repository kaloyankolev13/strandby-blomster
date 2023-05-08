<template>
    <section class=''>
        <div class='container mx-auto flex '>
            <div id='hero-image' class='w-1/2'>
                <img src="../../assets/hero-png.png" alt="" class='object-fill object-left scale-175 rotate-30 ml-32 mt-60'>
            </div>
            <div id='hero-text' class='w-[600px] p-10 text-right self-center'>
                <h3 class='text-right text-xl text-accent'>{{ event.date }}</h3>
                <h1 class='text-6xl text-center text-accent'>{{ event.name }}</h1>
                <h1 class='text-2xl text-center text-accent mb-10'>{{ event.description }}</h1>
                <button class='btn-light text-lg'>Order now</button>
            </div>
        </div>
</section>
</template>

<script setup>
import {ref} from "vue";

const event = ref({
    date:'14th May',
    name:"Mother's day",
    description:'Show her, you love her',
    heroColor:'#BECCA5',
});

</script>

<style>

section{
    background-color: v-bind('event.heroColor');
}
</style>
