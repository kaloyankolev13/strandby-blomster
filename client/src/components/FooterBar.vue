<template>
    <div class='flex justify-evenly h-64 border'>
        <div id='internal-links'>
            <div v-for='link in navigation' :key='link.name' class='my-5'>
            <a :href="link.href">
                {{ link.name }}
            </a>
        </div>
    </div>
        <div id='newsletter' class='text-center'>
            <h3 class='text-5xl mb-4'>Stay Updated</h3>
            <label for="email">
                <input class='w-96 h-8 border-2 border-primary rounded-xl' type="text" placeholder='Email address'>
            </label>
            <br>
            <button class='mt-3 w-96 bg-primary h-8 rounded-xl'>Subscribe to newsletter</button>
        </div>
        <div id='social-links' class='my-auto'>
            <a href="">Facebook</a>
            <a href="">Instagram</a>
        </div>
    </div>
</template>

<script setup>

const navigation = [
    { name: "Home", href: "#" },
    { name: "About Us", href: "#" },
    { name: "Flowers", href: "#" },
    { name: "Help", href: "#" },
    { name: "Contact us", href: "#" },
];

</script>

<style lang="scss" scoped>

</style>