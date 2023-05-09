<template>
    <div class='h-screen'>
        <div id='banner' class='text-center h-80 bg-dark text-white flex flex-col justify-center'> 
            <h1 class='text-4xl mb-10'>Help and FAQ</h1>
            <p >To facilitate your order process, we have put together a list of the questions <br> that are often asked by customers. You can find this information under Questions and Answers.</p>
        </div>
            <FAQ/>
    </div>
</template>

<script setup>
import FAQ from '@/components/FAQ.vue'
</script>

<style lang="scss" scoped>

</style>