<template>
  <div>
    <Location/>
    <div id='info' class='flex justify-around py-14 bg-pink'>
      <div id='contact'>
      <h1 class='text-4xl mb-5'>Contact info</h1>
      <div class='text-accent'>
        <p>StrandBy Blomster</p>
        <p>Strandbygade 27 <br> 6700 Esbjerg</p>
      </div>
    </div>
    <div id='hours'>
      <h2 class='text-4xl mb-5'>Opening hours</h2>
      <div class='text-accent'>
        <p>Monday - Friday: 10:00 - 17:30</p>
        <p>Saturday: 09:00 - 12:00</p>
        <p>Sunday: Closed</p>
      </div>
    </div>
    </div>
    <!-- <div id='euroflorist-banner' class='h-96 mt-28 flex justify-around text-center items-center'>
      <div id='text'>
        <h3 class=' text-3xl'>We use Europe's #1 flower delivery service</h3>
      </div>
      <div id='logo'>
        <img src="../assets/euroflorist.png" width='200' alt="">
        <a href='https://www.euroflorist.dk/' class='btn-dark'>Read More</a>
      </div>
    </div> -->
    <div class='flex justify-around items-center text-accent my-20'>
      <div>
        <img src="../assets/aboutus-fill.png" width='600' alt="">
      </div>
      <div class='text-2xl w-[600px]'>
         <p class='mb-7'>We are a small independent flower shop located in the heart of Esbjerg.</p>
         <p class='mb-7'>We prides ourselves on good work and quality service. </p>
         <p>Our mission is to help you show show appreciation to your loved once. </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import Location from '@/components/AboutUsLocation.vue'

</script>
