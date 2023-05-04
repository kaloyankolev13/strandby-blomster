<template>
    <footer class='flex pt-10'>
        <div id='internal-links' class='w-1/3 flex flex-col items-center '>
            <div v-for='link in navigation' :key='link.name' class='my-5 text-accent font-extrabold'>
            <a :href="link.href">
                {{ link.name }}
            </a>
        </div>
    </div>
        <div id='newsletter' class='text-center w-1/3'>
            <h3 class='text-5xl mb-4'>Stay Updated</h3>
            <label for="email">
                <input class='w-96 h-8 border-2 border-accent rounded-xl' type="text" placeholder='Email address'>
            </label>
            <br>
            <button class='mt-3 w-96 bg-accent text-white h-8 rounded-xl'>Subscribe to newsletter</button>
        </div>
        <div id='social-links' class='my-auto w-1/3 flex justify-center'>
            <a href="">Facebook</a>
            <a href="">Instagram</a>
        </div>
    </footer>
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

<style scoped>
footer{
    background-image: url("../assets/footer.jpg");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    }
</style>