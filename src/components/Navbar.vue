<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const hasScrolled = ref(false)
const menuOpen = ref(false)
function toggleMenu() {
  menuOpen.value = !menuOpen.value
}

function checkScroll() {
  hasScrolled.value = window.scrollY > 0
}

onMounted(() => {
  window.addEventListener('scroll', checkScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', checkScroll)
})
</script>
<template>
  <div
    class="navbar fixed top-0 z-[9999] text-missor-primary"
    :class="{ 'bg-transparent': !hasScrolled, 'bg-black': hasScrolled }"
  >
    <div class="flex justify-between items-center w-full relative">
      <a class="btn btn-ghost text-2xl hover:bg-transparent" href="/">Atelier Missor</a>
      <div class="drawer felx justify-end">
        <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
        <div class="drawer-content flex flex-col items-center justify-center">
          <!-- Page content here -->
          <label for="my-drawer-2" class="btn btn-ghost drawer-button lg:hidden"
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16m-7 6h7"
              /></svg
          ></label>
        </div>
        <div class="drawer-side">
          <label for="my-drawer-2" aria-label="close sidebar" class="drawer-overlay"></label>
          <ul class="menu p-4 w-80 min-h-full bg-black text-missor-primary">
            <a class="btn btn-ghost text-2xl hover:bg-transparent" href="/">Atelier Missor</a>
            <div class="divider"></div>
            <li>
              <a class="hover:underline hover:underline-offset-8 text-xl" href="/products"
                >Nos bustes</a
              >
            </li>
            <li>
              <a class="hover:underline hover:underline-offset-8 text-xl">Notre histoire</a>
            </li>
            <li>
              <a class="hover:underline hover:underline-offset-8 text-xl">Contact</a>
            </li>
            <li class="flex">
              <button class="btn btn-ghost btn-circle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button>
            </li>
            <li>
              <div tabindex="0" role="button" class="btn btn-ghost btn-circle">
                <div class="indicator">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="hidden md:flex flex-none">
      <ul class="menu menu-horizontal mr-24 text-lg">
        <li>
          <a class="hover:underline hover:underline-offset-8" href="/products">Nos bustes</a>
        </li>
        <li>
          <a class="hover:underline hover:underline-offset-8">Notre histoire</a>
        </li>
        <li>
          <a class="hover:underline hover:underline-offset-8" href="/contact">Contact</a>
        </li>
        <li class="ml-6 flex">
          <button class="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
        </li>
        <li>
          <div tabindex="0" role="button" class="btn btn-ghost btn-circle">
            <a href="/cart">
              <div class="indicator">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
            </a>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<style>
.navbar {
  transition: background-color 0.3s ease-in-out;
}
</style>
