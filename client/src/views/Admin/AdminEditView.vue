<template>
    <div class="isolate bg-white px-6 py-16 sm:py-10 lg:px-8">
      <div class="mx-auto max-w-2xl text-center">
        <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Edit a product</h2>
      </div>
      <form class="mx-auto mt-16 max-w-xl sm:mt-20">
        <div class="grid grid-cols-1  gap-y-6 ">
          <div class="sm:col-span-2">
            <label for="name"  class="block text-sm font-semibold leading-6 text-gray-900">Name</label>
            <div class="mt-2.5">
              <input type="text" name="name" id="name" autocomplete="name" placeholder='Product Name' v-model='state.product.name' class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
            </div>
          </div>
          <div class="sm:col-span-2">
            <label for="price"  class="block text-sm font-semibold leading-6 text-gray-900">Price</label>
            <div class="mt-2.5">
              <input v-model='state.product.price' type="number" name="price" placeholder='Product Price' id="price" autocomplete="price" class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
            </div>
          </div>
          <div class="mb-6 pt-4 sm:grid-cols-1">
        <label class="mb-5 block text-sm font-semibold text-[#07074D]">
          Upload File
        </label>
  
          <input type="file" multiple name="file" class='sr-only' ref='image'
         @change='handleUpload($event)' id="file">
          <label
            for="file"
            class="relative flex min-h-[200px] items-center justify-center rounded-md border border-dashed border-[#e0e0e0] p-12 text-center"
          >
            <div>
              <span class="mb-2 block text-xl font-semibold text-[#07074D]">
                Drop files here
              </span>
              <span class="mb-2 block text-base font-medium text-[#6B7280]">
                Or
              </span>
              <span
                class="inline-flex rounded border border-[#e0e0e0] py-2 px-7 text-base font-medium text-[#07074D]"
              >
                Browse
              </span>
            </div>
          </label>
        <!-- Display the URL and image preview of uploaded image(s) -->
        <div class='grid grid-cols-3'>
          <div v-for='img in state.product.images' class='' :key='img'>
            <img  :src="img.url" alt="" class=''>
          </div>
          <div v-for='img in url' class='' :key='img'>
            <img  :src="img" alt="" >
          </div>
    </div>
      </div>
          <div class="sm:col-span-2">
            <label for="description"  class="block text-sm font-semibold leading-6 text-gray-900">Description</label>
            <div class="mt-2.5">
              <textarea name="description" id="description" v-model='state.product.description' placeholder='Product Description' rows="4" class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
            </div>
          </div>
          
        </div>
        <label for="category" class="block my-3 text-sm font-semibold leading-6 ">Select an option</label>
        <select id="category" v-model='state.product.category' class="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-accent focus:border-accent block w-full p-2.5 ">
          <option selected >  Select a category </option>
          <option value="special">Special</option>
          <option value="limited">Limited</option>
          <option value="bestseller">Bestseller</option>
        </select>
        <div class="mt-10">
          <button type="button" @click='submitForm()' class="block w-full rounded-md bg-accent px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent">Edit product</button>
        </div>
  
      </form>
    </div>
   
  
  </template>

<script>
import { ref, onMounted, } from 'vue';
import Products from '../../api/products';

// Import the function to add a new product from the products API
const { state, updateProduct, fetchOneProduct } = Products();

export default{
  props: { id: String },
  setup(props) {
    // Initialize the data object for the new product
    const newImages = ref({});

    onMounted(() => {
      fetchOneProduct(props.id);
    });

    // // Initialize the image uploader and URL to display uploaded image(s)
    // const imageUploader = ref(null);
    const url = ref([]);

    // // Handle file upload when an image is selected
    const handleUpload = (event) => {
      event.preventDefault();
      const { files } = event.target;
      // Loop through the uploaded files and display the URL and preview image for each
      for (const file of files) {
        const link = URL.createObjectURL(file);
        url.value.push(link);
      }
      console.log(url.value);
      console.log(url.value[0], 'url valueß');
      // Add the uploaded image(s) to the new product object
      newImages.value.images = files;
    };
    const submitForm = () => {
      updateProduct(newImages, props.id);
    };

    // Return the data and functions to use in the template
    return {
      newImages,
      updateProduct,
      handleUpload,
      // imageUploader,
      url,
      submitForm,
      state,
    };
  },
};
</script>

<style lang="scss" scoped>

</style>