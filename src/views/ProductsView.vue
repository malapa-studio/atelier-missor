<script setup>
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'
</script>

<template>
  <Navbar />
  <div class="hero min-h-screen bg-black text-[#f5e1a4]">
    <div class="container pt-24 pb-6 lg:py-24">
      <h2 class="text-3xl lg:text-6xl font-bold text-center animate__animated animate__fadeInUp">
        Tous nos bustes
      </h2>
      <div
        class="py-4 lg:py-20 grid grid-cols-1 lg:grid lg:grid-cols-3 gap-12 lg:gap-20 items-center"
      >
        <div
          class="flex-col justify-center hover:scale-125 hover:cursor-pointer ease-in duration-200 animate__animated animate__fadeIn animate__slower"
        >
          <img src="../assets/marcaurel-missor.webp" class="rounded-2xl mx-auto w-72" />
          <h3 class="text-center mt-4">Petit buste de Marc Aurèle en bronze</h3>
        </div>
        <div
          class="flex-col justify-center hover:scale-125 hover:cursor-pointer ease-in duration-200 animate__animated animate__fadeIn animate__slower"
        >
          <img src="../assets/petit-napoleon-missor.webp" class="rounded-2xl mx-auto w-72" />
          <h3 class="text-center mt-4">Petit buste de Napoléon en bronze</h3>
        </div>
        <div
          class="flex-col justify-center hover:scale-125 hover:cursor-pointer ease-in duration-200 animate__animated animate__fadeIn animate__slower"
        >
          <img src="../assets/dosto-missor.webp" class="rounded-2xl mx-auto w-72" />
          <h3 class="text-center mt-4">Buste de Dostoïevski en bronze</h3>
        </div>
        <div
          class="flex-col justify-center hover:scale-125 hover:cursor-pointer ease-in duration-200 animate__animated animate__fadeIn animate__slower"
        >
          <img src="../assets/hugo-missor.webp" class="rounded-2xl mx-auto w-72" />
          <h3 class="text-center mt-4">Buste d'Hugo en bronze</h3>
        </div>
        <div
          class="flex-col justify-center hover:scale-125 hover:cursor-pointer ease-in duration-200 animate__animated animate__fadeIn animate__slower"
        >
          <img src="../assets/jeannedarcbronze-missor.webp" class="rounded-2xl mx-auto w-72" />
          <h3 class="text-center mt-4">Buste de Jeanne d'Arc en bronze</h3>
        </div>
        <div
          class="flex-col justify-center hover:scale-125 hover:cursor-pointer ease-in duration-200 animate__animated animate__fadeIn animate__slower"
        >
          <img src="../assets/grand-marcaurel-missor.webp" class="rounded-2xl mx-auto w-72" />
          <h3 class="text-center mt-4">Buste de Marc Aurèle en bronze</h3>
        </div>
        <div
          class="flex-col justify-center hover:scale-125 hover:cursor-pointer ease-in duration-200 animate__animated animate__fadeIn animate__slower"
        >
          <img src="../assets/napoleon-grand-missor.webp" class="rounded-2xl mx-auto w-72" />
          <h3 class="text-center mt-4">Buste de Napoléon en bronze</h3>
        </div>
      </div>
    </div>
  </div>
  <Footer />
</template>
