<!-- eslint-disable vuejs-accessibility/form-control-has-label -->
  <!-- Disable the accessibility rule for form inputs without a label -->
<!-- This template contains a form to add a new product -->
<template>
  <div class="container m-auto w-full">
    <h1 class="text-xl mx-12">Add a new product</h1>

    <!-- File upload input and form controls -->
    <form class='flex flex-col items-center' enctype='multipart/form-data'>
      <div>
        <!-- Text input for product name -->
        <label for="name">Name
          <input type="text" v-model="newProduct.name" placeholder="name" id='name' name='name'/>
        </label>
      </div>

      <div>
        <!-- Text input for product price -->
        <label for="price">Price
          <input type="text" v-model="newProduct.price" placeholder="price"
           id='price' name='price' />
        </label>
      </div>

      <div>
        <!-- Text input for product description -->
        <label for="description">Description
          <input
            type="text"
            v-model="newProduct.description"
            placeholder="description"
            name='description'
            id='description'
          />
        </label>

        <!-- File upload input for product image(s) -->
        <input type="file" multiple name="image" ref='image'
         @change='handleUpload($event)' id="image">
      </div>

      <div>
        <!-- Text input for product category -->
<!-- <div v-model='newProduct.category'> -->
  <div> Hello{{ newProduct.category }}</div>
        <label for="category">Category
          <select v-model='newProduct.category' name='category' id='category'>
            <option value=''>Select a category</option>
            <option value='special'>Special</option>
            <option value='limited'>Limited</option>
            <option value='bestseller'>Bestseller</option>
          </select>
        </label>
      </div>
      <!-- Display the URL and image preview of uploaded image(s) -->
      <div v-for='img in url' :key='img'>
        <img  :src="img" alt="" class='w-[300px]'>
    </div>

      <!-- Button to add the new product -->
      <button class='btn-dark' type='button'  @click="submitForm()">New</button>
    </form>
  </div>
</template>

<script>
import { ref } from 'vue';
import Products from '../../api/products';

// Import the function to add a new product from the products API
const { addProduct } = Products();

export default {
  setup() {
    // Initialize the data object for the new product
    const newProduct = ref({
      name: '',
      price: 0,
      description: '',
      category: '',

    });

    // Initialize the image uploader and URL to display uploaded image(s)
    const imageUploader = ref(null);
    const url = ref([]);

    // Handle file upload when an image is selected
    const handleUpload = (event) => {
      event.preventDefault();
      const { files } = event.target;
      // Loop through the uploaded files and display the URL and preview image for each
      // eslint-disable-next-line no-restricted-syntax
      for (const file of files) {
        const link = URL.createObjectURL(file);
        url.value.push(link);
      }
      // Add the uploaded image(s) to the new product object
      newProduct.value.images = files;
    };

    const resetForm = () => {
      newProduct.value.name = '';
      newProduct.value.price = '';
      newProduct.value.description = '';
      newProduct.value.images = [];
      url.value = [];
    };

    const submitForm = () => {
      addProduct(newProduct.value, resetForm);
    };

    // Return the data and functions to use in the template
    return {
      newProduct,
      addProduct,
      handleUpload,
      imageUploader,
      url,
      submitForm,
    };
  },
};
</script>

<style lang="scss" scoped>

</style>
