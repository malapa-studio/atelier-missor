<script setup>
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'
</script>

<template>
  <Navbar />
  <div class="hero min-h-screen bg-black text-missor-primary py-24 lg:py-0">
    <div class="hero-content text-center">
      <div class="max-w-2xl">
        <h3 class="text-6xl font-bold">FAQ</h3>
        <div class="text-left">
          <div class="py-6">
            <p class="text-xl font-bold">Quel est le délai d'expédition ?</p>
            <p>
              Le délai d'expédition est variable selon le type de buste. Pour les commandes
              spéciales, le temps de traitement est indiqué par mail à la réception de la commande.
              Nous essayons de vous envoyer au plus vite vos commande.
            </p>
          </div>
          <div class="py-6">
            <p class="text-xl font-bold">
              Ma commande est un cadeau d'anniversaire, arrivera-t-elle à temps ?
            </p>
            <p>
              Oui, faites nous part de la date par les notes lors de la prise de commande ou via le
              formulaire de contact et nous ferons le nécessaire pour que vous la receviez à temps.
            </p>
            <p>Nous pouvons si vous le souhaitez inclure une note manuscrite.</p>
          </div>
          <div class="py-6">
            <p class="text-xl font-bold">Faites-vous des finitions spéciales ?</p>
            <p>
              Oui, nous pouvons faire des finitions spéciales. Envoyez-nous un mail à
              contact@ateliermissor.com et nous vous ferons parvenir un devis.
            </p>
          </div>
          <div class="py-6">
            <p class="text-xl font-bold">Recrutez-vous ?</p>
            <p>
              Vous pouvez envoyer une candidature vidéo à recrutement@ateliermissor.com. Nous sommes
              ouvert à tous profils
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <Footer />
</template>
