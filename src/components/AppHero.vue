<template>
  <section class="hero relative w-full grid grid-cols-2 gap-4 pl-4">
    <div class="flex flex-col gap-y-2 justify-center">
      <h1 class="text-5xl font-bold capitalize leading-tight mb-2">
        Get the best from a small budget.
      </h1>
      <p>lorem jfhfjsdj jdfslkdfj dsjfsjdise jdfskdflksi jfskdjfsie</p>
      <button
        class="capitalize font-semibold border-2 w-max py-1 px-3 flex items-center justify-center gap-2 text-base"
      >
        <span>buy now</span> <Font-awesome-icon icon="fa-solid fa-tag" />
      </button>
    </div>
    <div class="h-full flex place-items-center overflow-y-hidden object-cover">
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
