<script setup>
import Navbar from '@/components/Navbar.vue'
import CartContent from '@/components/CartContent.vue'
import Footer from '@/components/Footer.vue'
</script>

<template>
  <Navbar />
  <div class="hero min-h-screen bg-black text-missor-primary py-12 lg:py-0">
    <div class="hero-content text-center border border-red-500 w-5/6">
      <div class="w-full">
        <h3 class="text-3xl lg:text-6xl font-bold">Votre panier</h3>
        <CartContent />
      </div>
    </div>
  </div>
  <Footer />
</template>
