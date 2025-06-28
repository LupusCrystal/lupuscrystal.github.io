<template>
  <div data-aos="zoom-in-up" class="w-full flex flex-col justify-center items-center">
    <details class="bg-gradient-to-b from-red-600 to-accent text-white rounded-lg m-1 md:m-2 p-4 w-full max-w-[84rem] group transition duration-200 md:hover:scale-105 ease-out md:active:scale-95">
      <summary class="text-3xl md:text-4xl font-bold">{{title}}</summary>
      <div class="text-2xl"><slot /></div>
    </details>
  </div>
</template>

<script setup>
defineProps(['title'])
</script>

<style>
details[open] summary ~ * {
  animation: sweep .5s ease-in-out;
}

@keyframes sweep {
  0%    {opacity: 0; margin-left: -10px}
  100%  {opacity: 1; margin-left: 0px}
}
</style>