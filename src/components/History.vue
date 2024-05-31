<template>
  <div class="hero min-h-screen bg-black text-missor-primary">
    <div class="hero-content flex-col gap-2 lg:gap-24 lg:flex-row-reverse">
      <div class="text-center">
        <h3 class="text-3xl lg:text-6xl font-bold" v-motion-fade-visible>Notre Histoire</h3>
        <p class="py-4 lg:py-6 text-lg lg:text-xl" v-motion-fade-visible>
          Notre atelier est né à Nice il y a trois ans.<br />
          Missor commençait la sculpture à trente ans, et avec ses amis, il ouvrait un atelier pour
          les produire en nombre.
        </p>
        <p class="py-4 text-lg lg:text-xl" v-motion-fade-visible>
          Petit à petit, l'atelier se mettait à rêver. Et si nous construisions des statues
          monumentales pour les villes . Et si nous reprenions ce rêve de civilisation, qui avait
          été abandonné ?
        </p>
      </div>
      <div class="shrink-0 w-full max-w-lg rounded-2xl">
        <img src="../assets/history-missor.webp" class="rounded-2xl" v-motion-fade-visible />
      </div>
    </div>
  </div>
</template>
