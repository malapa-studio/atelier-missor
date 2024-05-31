<template>
  <h3
    class="text-3xl lg:text-6xl text-center font-bold animate__animated animate__fadeInUp animate__slow"
  >
    Contactez-nous
  </h3>
  <div class="w-full flex flex-col lg:flex lg:flex-row justify-around pt-8 lg:pt-16">
    <div class="lg:w-1/3 text-lg lg:text-xl" v-motion-fade-visible>
      <h5 class="text-xl lg:text-3xl font-bold">Une question ?</h5>
      <p class="mt-2">Nous sommes joignables:</p>
      <p class="mt-2">Par téléphone du lundi au vendredi au 07 49 91 61 59</p>
      <p>Par e-mail à contact@ateliermissor.com</p>
      <div class="w-ful text-lg lg:text-xl mt-10" v-motion-fade-visible>
        <h5 class="text-3xl font-bold">Recrutement</h5>
        <p class="mt-2">
          Nous sommes toujours à la recherche de nouvelles personnes dévouées et motivées pour
          accomplir de grandes choses.
        </p>
        <p class="mt-4">Stage possible également.</p>
        <p class="mt-4">
          Envoyez une candidature vidéo à recrutement@ateliermissor.com, nous en prendrons
          connaissance et vous recontacterons.
        </p>
        <p class="mt-4">Merci de ne pas venir à nos locaux sans rendez-vous.</p>
      </div>
    </div>
    <div class="mt-12 lg:mt-0 lg:w-1/3 text-missor-primary">
      <label class="form-control w-full max-w-xs" v-motion-fade-visible>
        <div class="label">
          <span class="label-text text-missor-primary text-xl">Nom</span>
        </div>
        <input
          type="text"
          placeholder="Votre nom"
          class="input border-missor-primary bg-black text-missor-primary focus:border-missor-primary w-full max-w-xs text-lg"
        />
      </label>
      <label class="form-control w-full max-w-xs mt-6" v-motion-fade-visible>
        <div class="label">
          <span class="label-text text-missor-primary text-xl">Email</span>
        </div>
        <input
          type="text"
          placeholder="votre@email.com"
          class="input border-missor-primary bg-black text-missor-primary focus:border-missor-primary w-full max-w-xs text-lg"
        />
      </label>
      <label class="form-control max-w-md mt-6" v-motion-fade-visible>
        <div class="label">
          <span class="label-text text-missor-primary text-xl">Message</span>
        </div>
        <textarea
          class="textarea textarea-bordered h-40 bg-black border border-missor-primary text-lg"
          placeholder="Votre message.."
        ></textarea>
      </label>
      <button
        class="btn btn-lg bg-missor-primary text-black border-missor-primary hover:bg-black hover:text-missor-primary mt-6"
        v-motion-fade-visible
      >
        Soumettre
      </button>
    </div>
  </div>
</template>
