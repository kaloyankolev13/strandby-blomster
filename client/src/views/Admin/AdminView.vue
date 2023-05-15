<template>
    <div>
      <h1>Admin Page</h1>
      <NewProduct/>
  
    </div>
  </template>
  
  <script>
  
  import NewProduct from '../../components/Admin/AddNewProduct.vue';
  
  export default {
    components: {
      NewProduct,
    },
    setup() {
    },
  
  };
  </script>
  
  <style lang="scss" scoped>
  
  </style>