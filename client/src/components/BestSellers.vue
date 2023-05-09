
<template>
  <div class="bg-white">
    <div
      class="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8"
    >
      <h2 class="text-2xl font-bold tracking-tight text-gray-900">
        Best Sellers
      </h2>

      <div
        class="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8"
      >
        <div
          v-for="product in products"
          :key="product.id"
          class="group relative shadow-md rounded-md"
        >
          <div
            class="min-h-80 aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-b-none rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80"
          >
            <img
              :src="product.imageSrc"
              :alt="product.imageAlt"
              class="h-full w-full object-cover object-center lg:h-full lg:w-full"
            />
          </div>
          <div class="flex p-3 flex-col items-center">
            <div class="flex items-center flex-col">
              <h3 class="text-lg font-bold text-[#333]">
                <a :href="product.href">
                  <span aria-hidden="true" class="absolute inset-0" />
                  {{ product.name }}
                </a>
              </h3>
              <p class="mt-1 text-sm text-center text-gray-500">
                {{ product.description }}
              </p>
              <p class="mt-1 text-sm font-bold text-[#333]">
                {{ product.price }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Product1 from "@/assets/product_photo_i_want_you.jpeg";

const products = [
  {
    id: 1,
    name: "I want you",
    href: "#",
    imageSrc: Product1,
    imageAlt: "Front of men's Basic Tee in black.",
    price: "DKK 299",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus nec accumsan ex, sed rhoncus elit.",
  },
  {
    id: 2,
    name: "I want you",
    href: "#",
    imageSrc: Product1,
    imageAlt: "Front of men's Basic Tee in black.",
    price: "DKK 299",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus nec accumsan ex, sed rhoncus elit.",
  },
  {
    id: 3,
    name: "I want you",
    href: "#",
    imageSrc: Product1,
    imageAlt: "Front of men's Basic Tee in black.",
    price: "DKK 299",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus nec accumsan ex, sed rhoncus elit.",
  },
  // More products...
];
</script>
