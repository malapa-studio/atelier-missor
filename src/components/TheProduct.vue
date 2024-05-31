<template>
  <div class="flex-col lg:flex lg:flex-row justify-center gap-24 p-6 lg:p-12">
    <div class="shrink-0">
      <img src="../assets/marcaurel-missor.webp" class="rounded-2xl" v-motion-fade-visible />
    </div>
    <div class="flex flex-col gap-6 lg:gap-12" v-motion-fade-visible>
      <h4
        class="text-missor-primary text-3xl lg:text-5xl text-center lg:text-left mt-6 lg:mt-0"
        v-motion-fade-visible
      >
        Buste de Marc Aurèle en bronze
      </h4>
      <div class="flex flex-row items-baseline">
        <p class="text-2xl lg:text-4xl font-bold">€480,00 EUR</p>
        <p class="font-bold ml-16 text-sm lg:text-md">Livraison gratuite - paiement en 4 fois</p>
      </div>
      <div class="flex flex-row">
        <label class="form-control w-full max-w-xs">
          <div class="label">
            <span class="label-text text-xl text-missor-primary">Quantité</span>
          </div>
          <input
            type="number"
            placeholder="..."
            class="input w-1/2 bg-black border border-missor-primary focus:border focus:border-missor-primary"
            min="1"
            value="1"
          />
        </label>
      </div>
      <div class="flex flex-col gap-12">
        <button
          class="btn sm:btn-sm md:btn-md lg:btn-lg bg-black text-missor-primary border border-missor-primary hover:bg-missor-primary hover:text-black hover:border-black"
        >
          Ajouter au panier
        </button>
        <button
          class="sm:hidden md:block -mt-8 btn sm:btn-sm md:btn-md lg:btn-lg bg-missor-primary text-black border border-missor-primary hover:bg-black hover:text-missor-primary hover:border-missor-primary hover:opacity-90"
        >
          Payer via PayPal
        </button>
        <p class="-mt-8 text-center underline text-missor-primary">Plus de moyen de paiement</p>
      </div>
      <div class="py-6 lg:py-12">
        <p class="text-xl">Buste de Marc Aurèle en bronze Coulé à la cire perdue.</p>
        <p class="text-xl">Fait main en France.</p>
      </div>
      <div class="lg:py-12">
        <p class="text-xl">Dimension: 16x11x7 cm</p>
        <p class="text-xl">Poids: 1.5 kg</p>
        <p class="text-xl">
          Expédition incluse, des frais de douane peuvent s'appliquer hors Union Européenne.
        </p>
      </div>
    </div>
  </div>
</template>
