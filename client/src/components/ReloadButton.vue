<template>
  <div>
<button @click='reload' class='btn-dark' >Retry !</button>

  </div>
</template>

<script setup>

const reload = () => {
  window.location.reload();
};

</script>
