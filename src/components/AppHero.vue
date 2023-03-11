<template>
  <section class="hero relative flex items-center w-full md:grid grid-cols-2 gap-4 px-4">
    <div
      class="flex flex-col gap-y-2 justify-center text-center items-center md:items-start md:text-left"
    >
      <h1 class="text-3xl font-bold capitalize leading-tight mb-2">
        Get Your Hands on the Latest Must-Haves with Our Online Shopping Destination!
      </h1>
      <p class="text-sm">
        Fast Shipping, Easy Returns, and Secure Checkout - Shop with Confidence Today!
      </p>
      <button
        class="capitalize font-semibold border-2 w-max py-1 px-3 flex items-center justify-center gap-2 text-lg bg-black text-white"
      >
        <span>buy now</span> <Font-awesome-icon icon="fa-solid fa-tag" />
      </button>
    </div>
    <div class="h-full place-items-center overflow-y-hidden object-cover hidden md:flex">
      <img src="../assets/display.jpg" class="w-full h-full" />
    </div>
  </section>
</template>

<script setup lang="ts"></script>

<style scoped>
section.hero {
  height: calc(100vh - 60px);
}
</style>
