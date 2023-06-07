<template>
  <div class='font-helvetica'>
  <NavigationBar />
  <router-view />
  <FooterBar />
</div>
</template>

<script setup>
import NavigationBar from "./components/NavigationBar.vue";
import FooterBar from './components/FooterBar.vue'
</script>
