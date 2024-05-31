<script setup lang="ts">
import TheWelcome from '../components/TheWelcome.vue'
import Navbar from '@/components/Navbar.vue'
import ProductsList from '@/components/ProductsList.vue'
import History from '@/components/History.vue'
import Dream from '@/components/Dream.vue'
import Napoleon from '@/components/Napoleon.vue'
import Footer from '@/components/Footer.vue'
</script>

<template>
  <main>
    <Navbar />
    <TheWelcome />
    <ProductsList />
    <History />
    <Dream />
    <Napoleon />
    <Footer />
  </main>
</template>
