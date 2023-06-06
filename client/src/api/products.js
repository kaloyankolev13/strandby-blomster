/* eslint-disable no-underscore-dangle */
import { ref } from 'vue';
import axiosInstance from '../../axiosInstance';

const state = ref({
  product: {},
  products: [],
  category: '',
  message: '',
  limit: 6,
  skip: 0,
});
const Products = () => {
  const fetchProducts = async (limit, skip, category) => {
    let url = '/products';
    // console.log(limit);
    if (limit && limit.value) {
      url += `?limit=${limit.value}`;
    } else {
      url += `?limit=${limit}`; // Use the 'limit' parameter instead of 'state.value.limit'
    }

    if (skip) {
      url += `&skip=${skip.value}`;
    } else {
      url += `&skip=${state.value.skip}`;
    }

    if (category) {
      url += `&category=${category}`;
    }

    try {
      const res = await axiosInstance.get(url);

      state.value.products = res.data.products;
      state.value.pages = res.data.total
        ? Math.ceil(res.data.total / res.data.limit)
        : 0;
      state.value.currentPage = res.data.skip
        ? Math.ceil(res.data.skip / res.data.limit) + 1
        : 1;
      state.value.skip = res.data.skip;
      state.value.total = res.data.total;
      state.value.category = category;

      return state.value.products;
    } catch (error) {
      // Handle error here
      console.error('Error fetching products:', error);
      throw error;
    }
  };

  // This function gets only 5 of the latest products
  const fetchThreeProducts = async () => {
    const res = await axiosInstance.get('/products');
    const latestFiveProducts = res.data.products.reverse().slice(0, 3);
    state.value.products = latestFiveProducts;
  };

  // Gets a single product from the database by id
  const fetchOneProduct = async (id) => {
    await axiosInstance
      .get(`/products/${id}`)
      .then((res) => {
        state.value.product = res.data;
      })
      .catch((err) => {
        state.value.message = err;
      });
  };
  // add product form with image with axios
  const config = {
    headers: {
      'content-type': 'multipart/form-data',
    },
  };
  const addProduct = async (product, resetForm) => {
    const formData = new FormData();
    formData.append('name', product.name);
    formData.append('price', product.price);
    formData.append('description', product.description);
    formData.append('category', product.category);
    if (!product.images) {
      formData.append('images', null);
    } else {
      // eslint-disable-next-line no-plusplus, no-restricted-syntax
      for (const image of product.images) {
        formData.append('images', image);
      }
    }
    await axiosInstance
      .post('/products', formData, config)
      .then(() => {
        resetForm();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // deletes a product from the database
  const deleteProduct = async (_id) => {
    await axiosInstance
      .delete(`/products/${_id}`)
      .then((res) => {
        state.value.products = state.value.products.filter(
          (product) => product._id !== _id
        );
        state.value.message = res.data;
      })
      .catch((err) => {
        console.log(err);
      });
  };
  // Updates by put method
  const updateProduct = async (product, id) => {
    const images = Array.from(product.value.images);
    const formData = new FormData();
    if (!product.value.images) {
      formData.append('images', null);
    } else {
      images.forEach((image) => {
        formData.append('images', image);
      });
    }
    await axiosInstance
      .patch(`/products/${id}`, formData, config, {
        name: product.name,
        price: product.price,
        description: product.description,
        category: product.category,
      })
      .then((res) => {
        state.value.product = res.data;
      })
      .catch((err) => {
        console.log('ERROR', err);
      });
  };

  return {
    state,
    fetchProducts,
    addProduct,
    deleteProduct,
    fetchOneProduct,
    updateProduct,
    fetchThreeProducts,
  };
};

export default Products;
