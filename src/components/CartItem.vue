<template>
  <div class="flex gap-4 border-2 mx-4 w-max pr-48 rounded-md relative">
    <span class="absolute right-6 top-2 text-lg" @click="removeFromCart(Item.id)"
      ><Font-awesome-icon icon="fa-solid fa-times-circle" />
    </span>
    <div class="w-60 rounded-md overflow-hidden">
      <img :src="Item.image" :alt="Item.title" />
    </div>
    <div class="py-2">
      <h3 class="font-extrabold capitalize text-lg w-40">{{ Item.title }}</h3>
      <p class="font-medium text-base my-4">${{ Item.price }}</p>
      <div>
        <p class="sr-only">quantity</p>
        <div class="flex items-center justify-start gap-6">
          <button class="border-2 py-1 px-3 rounded-lg" @click="quantity++">
            <Font-awesome-icon icon="fa-solid fa-plus" />
          </button>
          <span>{{ quantity }}</span>
          <button
            class="border-2 py-1 px-3 rounded-lg"
            @click="quantity > 1 ? quantity-- : (quantity = 1)"
          >
            <Font-awesome-icon icon="fa-solid fa-minus" />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import store from '@/store'
export default {
  data() {
    return {
      quantity: 1
    }
  },
  props: ['Item'],
  methods: {
    removeFromCart(id: number) {
      store.cart = store.cart.filter((item) => item.id !== id)
      localStorage.setItem('cart', JSON.stringify(store.cart))
    }
  }
}
</script>
