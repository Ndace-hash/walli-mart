<template>
  <div class="flex justify-center items-center flex-col gap-2">
    <div class="wrapper"></div>
    <span class="text-center font-semibold text-sm">Gathering items for you ...</span>
  </div>
</template>

<script setup></script>

<style scoped>
.wrapper {
  width: 40px;
  height: 40px;
  position: relative;
}

.wrapper::before,
.wrapper::after {
  content: '';
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  animation: rotation 2000ms infinite linear;
  /* animation-name: scaling;
  animation-duration: 1000ms;
  animation-iteration-count: infinite;
  animation-timing-function: linear; */
}

.wrapper::before {
  border-top: 3px solid black;
}
.wrapper::after {
  border-bottom: 3px solid black;
}

@keyframes rotation {
  from {
    tranform: rotateZ(0deg);
  }
  to {
    transform: rotateZ(360deg);
  }
}

@keyframes scaling {
  0% {
    transform: scaleZ(1);
  }
  25% {
    transform: scaleZ(0.75);
  }
  50% {
    transform: scaleZ(1);
  }
  75% {
    transform: scaleZ(1.25);
  }
  100% {
    transform: scaleZ(1);
  }
}
</style>
