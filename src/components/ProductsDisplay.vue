<template>
  <section class="flex flex-col items-center">
    <AppHeading title="products" size="text-xl" class="text-center my-4" />

    <section class="flex flex-wrap gap-x-4 gap-y-6 justify-center">
      <article v-for="product in products" :key="product.id">
        <ProductCard :product="product" />
      </article>
    </section>
  </section>
</template>

<script setup lang="ts">
import { getProducts } from '@/composables/useAxios'
import { ref, onMounted } from 'vue'
import ProductCard from './products/ProductCard.vue'
import AppHeading from './AppHeading.vue'
import imageURL from '@/assets/stake-meals.jpg'

interface Product {
  category: string
  description: string
  id: number
  image: string
  price: number
  rating: {
    rate: number
    count: number
  }
  title: string
}

// let products = ref<Product[] | null>(null)
let products = ref<Product[] | null>([
  {
    category: 'food',
    description: 'very delicios steak meal',
    id: 231,
    image: imageURL,
    price: 2.99,
    rating: {
      rate: 5,
      count: 200
    },
    title: 'german steak'
  }
])
console.log(products.value)
onMounted(async () => {
  try {
    const data = await getProducts('https://fakestoreapi.com/products')
    products.value = await data
  } catch (error) {
    console.log(error)
  }
})
</script>
