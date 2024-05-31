<template>
  <div class="py-10 lg:py-20 grid grid-cols-1 lg:grid lg:grid-cols-3">
    <div class="flex justify-center md:hidden" v-motion-fade-visible>
      <a href="/products">
        <button
          class="btn sm:btn-sm md:btn-md lg:btn-lg bg-missor-primary text-black border border-black hover:bg-black hover:text-missor-primary hover:border-missor-primary"
        >
          Découvrez nos bustes
        </button>
      </a>
    </div>
    <div
      class="flex-col justify-center hover:scale-125 hover:cursor-pointer ease-in duration-200"
      v-motion-slide-visible-bottom
    >
      <img src="../assets/napoleon-missor.webp" class="rounded-2xl mx-auto w-72" />
      <h3 class="text-center">Buste Napoléon Bronze</h3>
    </div>
    <div
      class="flex-col justify-center hover:scale-125 hover:cursor-pointer ease-in duration-200"
      v-motion-slide-visible-bottom
    >
      <img src="../assets/jeannedarcbronze-missor.webp" class="rounded-2xl mx-auto w-72" />
      <h3 class="text-center">Buste Jeanne d'Arc Bronze</h3>
    </div>
    <div
      class="flex-col justify-center hover:scale-125 hover:cursor-pointer ease-in duration-200"
      v-motion-slide-visible-bottom
    >
      <img src="../assets/dosto-missor.webp" class="rounded-2xl mx-auto w-72" />
      <h3 class="text-center">Buste Dostoïevski Bronze</h3>
    </div>
  </div>
  <div class="flex justify-center" v-motion-fade-visible>
    <a href="/products">
      <button
        class="btn sm:btn-sm md:btn-md lg:btn-lg bg-missor-primary text-black border border-black hover:bg-black hover:text-missor-primary hover:border-missor-primary"
      >
        Découvrez nos bustes
      </button>
    </a>
  </div>
</template>
