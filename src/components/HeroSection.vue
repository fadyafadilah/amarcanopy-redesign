<template>
  <section id="home" class="relative isolate min-h-screen bg-amarBlack pt-28 text-white">
    <!-- Background effect -->
    <div
      class="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,rgba(229,9,9,.35),transparent_36%),linear-gradient(135deg,rgba(255,255,255,.08),transparent_45%)]">
    </div>

    <div class="container-custom grid min-h-[calc(100vh-7rem)] items-center gap-12 px-6 py-16 lg:grid-cols-2 lg:px-8">

      <!-- LEFT CONTENT -->
      <div>
        <p
          class="mb-5 inline-flex rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-medium text-white/85 backdrop-blur opacity-0 animate-fadeUp">
          Canopy Kain • Membrane • Awning Gulung
        </p>

        <h1
          class="max-w-3xl text-4xl font-extrabold tracking-tight sm:text-6xl lg:text-6xl opacity-0 animate-fadeUp delay-200">
          Jasa Pemasangan Canopy Kain, Membrane & Awning Gulung Jakarta Selatan
        </h1>

        <p
          class="mt-6 max-w-xl text-lg leading-8 text-white/70 opacity-0 animate-fadeUp delay-400">
          Spesialis canopy rumah dan komersial dengan hasil rapi, kuat, dan bergaransi. Melayani Jakarta dan sekitarnya.
        </p>

        <div class="mt-9 flex flex-col gap-4 sm:flex-row opacity-0 animate-fadeUp delay-600">
          <a
            href="https://wa.me/6281380109717"
            class="rounded-full bg-amarRed px-7 py-4 text-center font-semibold text-white shadow-xl shadow-red-950/30 transition hover:bg-red-700">
            Konsultasi Gratis Sekarang
          </a>

          <a
            href="#portfolio"
            class="rounded-full border border-white/15 px-7 py-4 text-center font-semibold text-white transition hover:bg-white hover:text-amarBlack">
            Lihat Portfolio
          </a>
        </div>
      </div>

      <!-- RIGHT IMAGE SLIDER -->
      <div class="relative opacity-0 animate-fadeUp delay-800">
        <div class="absolute -left-8 -top-8 h-48 w-48 rounded-full bg-amarRed blur-3xl opacity-30"></div>

        <div
          class="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/10 p-4 shadow-soft backdrop-blur">

          <div class="relative aspect-[4/5] overflow-hidden rounded-[1.5rem]">

            <!-- SLIDES -->
            <img
              v-for="(slide, index) in slides"
              :key="index"
              :src="slide"
              class="absolute inset-0 h-full w-full object-cover transition-opacity duration-700"
              :class="index === current ? 'opacity-100 animate-kenburns' : 'opacity-0'"
            />

            <!-- OVERLAY -->
            <div class="absolute inset-0 bg-black/30"></div>

            <!-- TEXT OVER IMAGE -->
            <div class="relative flex h-full flex-col justify-end p-8 text-white">
              <span class="text-sm font-bold text-white">AMAR CANOPY</span>
              <h2 class="mt-2 text-3xl font-bold">Canopy Berkualitas</h2>
              <p class="mt-3 text-sm text-white/80">
                Spesialis canopy kain, membrane, dan awning gulung untuk rumah dan komersial di Jakarta dan Sekitarnya.
              </p>
            </div>

            <!-- DOT INDICATOR -->
            <div class="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
              <span
                v-for="(slide, index) in slides"
                :key="index"
                class="h-2 w-2 rounded-full bg-white/50"
                :class="index === current ? 'bg-amarRed' : ''">
              </span>
            </div>

          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const slides = [
  '/src/assets/hero1.webp',
  '/src/assets/hero2.webp',
  '/src/assets/Awning-Gulung-White.webp',
]

const current = ref(0)
let interval = null

const nextSlide = () => {
  current.value = (current.value + 1) % slides.length
}

onMounted(() => {
  interval = setInterval(nextSlide, 4000)
})

onUnmounted(() => {
  clearInterval(interval)
})
</script>