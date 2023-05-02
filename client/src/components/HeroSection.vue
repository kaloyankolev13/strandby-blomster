<template>
    <section>
        <div class='container mx-auto flex'>
            <div id='hero-image' class='w-1/2'>
                <h1>Image</h1>
            </div>
            <div id='hero-text' class='w-1/2 text-center'>
                <h3>Date:{{ event.date }}</h3>
                <h1>EventName: {{ event.name }}</h1>
                <h1>Desc: {{ event.description }}</h1>
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
