<script setup>
import Navbar from '@/components/Navbar.vue'
import ContactForm from '@/components/ContactForm.vue'
import Footer from '@/components/Footer.vue'
</script>

<template>
  <Navbar />
  <div class="w-full bg-black py-24 px-6 lg:px-24 lg:py-24 text-missor-primary">
    <div class="container mx-auto">
      <img
        src="../assets/equipe-missor.webp"
        alt=""
        class="w-11/12 lg:w-3/4 mx-auto rounded-2xl"
        v-motion-fade-visible
      />
    </div>
    <div class="pt-12">
      <ContactForm />
    </div>
  </div>
  <Footer />
</template>
