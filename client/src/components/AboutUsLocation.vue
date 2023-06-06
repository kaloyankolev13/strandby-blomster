<template>
    <div class='w-full google-map'>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2261.607498095771!2d8.43764427740712!3d55.46950887298068!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x464b20d37e16a9c7%3A0x5752902cefd92007!2sStrandby%20Blomster!5e0!3m2!1sen!2sdk!4v1685377774422!5m2!1sen!2sdk" width="1800" height="320" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
</template>

<script setup>

</script>

<style  scoped>
.google-map {
     padding-bottom: 320px;
     position: relative;
}

.google-map iframe {
     width: 100%;
     left: 0;
     top: 0;
     position: absolute;
}
</style>