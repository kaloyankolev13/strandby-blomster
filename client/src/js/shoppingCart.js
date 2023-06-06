import {ref} from 'vue';

let shoppingCart = ref(JSON.parse(localStorage.getItem('ShoppingCart')) || []);

const checkIfExist = function (shoppingCart, product) {
    for (let i = 0; i < shoppingCart.length; i++) {
      if (shoppingCart[i]._id === product._id) {
        return i; // Return the index if the item exists
      }
    }
    return -1; // Return -1 if the item does not exist
  };

function addToShoppingCart(product) {
    let productIndex = checkIfExist(shoppingCart.value, product);
  
    if (productIndex !== -1) {
      shoppingCart.value[productIndex].quantity += 1;
    } else {
      product.quantity = 1;
      shoppingCart.value.push(product);
    }
    localStorage.setItem('ShoppingCart', JSON.stringify(shoppingCart.value));
  }

  function removeFromShoppingCart(product) {
    let productIndex = checkIfExist(shoppingCart.value, product);
    if (productIndex !== -1) {
      if (shoppingCart.value[productIndex].quantity > 1) {
        shoppingCart.value[productIndex].quantity -= 1;
      } else {
        shoppingCart.value.splice(productIndex, 1); // Remove the product from the shopping cart
      }
      localStorage.setItem('ShoppingCart', JSON.stringify(shoppingCart.value));
    }
  }
  
  export { addToShoppingCart, removeFromShoppingCart, shoppingCart };
  