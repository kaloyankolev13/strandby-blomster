<template>
  <NavigationBar />
  <router-view class='h-screen' />
  <FooterBar />
</template>

<script setup>
import NavigationBar from "./components/NavigationBar.vue";
import FooterBar from './components/FooterBar.vue'
</script>
