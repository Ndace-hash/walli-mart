<template>
  <section class="flex flex-col items-center" id="products">
    <AppHeading title="products" size="text-xl" class="text-center my-4" />
    <AppLoader v-if="isLoading" />
    <section class="flex flex-wrap gap-x-4 gap-y-6 justify-center" v-else>
      <h3 v-if="error" class="text-[#f31122] font-semibold capitalize">{{ error }}</h3>
      <article v-for="product in productsWithQuantity" :key="product.id" v-else>
        <ProductCard :product="product" />
      </article>
    </section>
  </section>
</template>

<script setup lang="ts">
import { getProducts } from '@/composables/useAxios'
import { ref, onMounted, computed } from 'vue'
import ProductCard from './products/ProductCard.vue'
import AppHeading from './AppHeading.vue'
import imageURL from '@/assets/stake-meals.jpg'
import type { Product } from '@/types/utils'
import AppLoader from './AppLoader.vue'
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
const isLoading = ref(false)
const error = ref<string | null>(null)

const productsWithQuantity = computed(() => {
  if (products.value !== null) {
    return products.value.map((item) => ({
      ...item,
      quantity: 1
    }))
  }
  return null
})
console.log(products.value)
onMounted(async () => {
  isLoading.value = true
  try {
    const data = await getProducts('https://fakestoreapi.com/products')
    products.value = await data
    isLoading.value = false
  } catch (err) {
    error.value = 'Something went wrong!'
    isLoading.value = false
    throw new Error('Something went wrong!')
  }
})
</script>
