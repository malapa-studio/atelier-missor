<script setup lang="ts">
import backgroundImage from '../assets/banniere-missor.webp'
</script>

<template>
  <div class="hero min-h-screen" :style="{ backgroundImage: `url(${backgroundImage})` }">
    <div class="hero-overlay bg-opacity-30"></div>
    <div class="hero-content text-center text-neutral-content">
      <div class="max-w-md">
        <h1 class="mb-5 text-6xl font-bold animate__animated animate__fadeInUp animate__slow">
          Atelier Missor
        </h1>
        <h2 class="text-2xl italic animate__animated animate__fadeIn animate__slower">
          Bustes en bronze fait en France
        </h2>
      </div>
    </div>
  </div>
</template>
