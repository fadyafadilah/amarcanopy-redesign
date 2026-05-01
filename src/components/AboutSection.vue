<template>
  <section id="about" class="section-padding bg-amarBlack text-white">
    <div class="container-custom grid gap-12 lg:grid-cols-2 lg:items-center">

      <!-- IMAGE SLIDER -->
      <div class="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/10 p-4 shadow-soft">
        
        <div class="relative aspect-square overflow-hidden rounded-[1.5rem]">

          <!-- BLUR BACKGROUND -->
          <img
            :src="slides[current]"
            class="absolute inset-0 h-full w-full object-cover blur-2xl scale-110 opacity-40"
          />

          <!-- MAIN IMAGES -->
          <img
            v-for="(slide, index) in slides"
            :key="index"
            :src="slide"
            alt="Tentang Amar Canopy"
            class="absolute inset-0 h-full w-full object-contain transition-opacity duration-700"
            :class="index === current ? 'opacity-100' : 'opacity-0'"
          />

          <!-- OVERLAY -->
          <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>

          <!-- TEXT
          <div class="absolute bottom-6 left-6 right-6">
            <p class="text-sm font-semibold text-red-300">AMAR CANOPY</p>
            <h3 class="mt-2 text-2xl font-bold">
              Canopy Kain, Membrane & Awning Gulung
            </h3>
          </div> -->

          <!-- DOT INDICATOR -->
          <div class="absolute bottom-5 right-6 flex gap-2">
            <span
              v-for="(slide, index) in slides"
              :key="index"
              class="h-2 w-2 rounded-full bg-white/40"
              :class="index === current ? 'bg-amarRed' : ''"
            ></span>
          </div>

        </div>
      </div>

      <!-- CONTENT -->
      <div>
        <p class="font-semibold text-red-500">Tentang Amar Canopy</p>

        <h2 class="mt-3 text-4xl font-bold tracking-tight lg:text-5xl">
          Mitra Pemasangan Canopy untuk kebutuhan residensial dan komersial.
        </h2>

        <p class="mt-5 leading-8 text-white/70">
          Amar Canopy adalah penyedia jasa pemasangan canopy kain, tenda/atap membrane,
          dan awning gulung untuk kebutuhan rumah tinggal, ruko, cafe, hotel, kantor,
          hingga area komersial di berbagai wilayah Indonesia.
        </p>

        <!-- STATS -->
        <div class="mt-8 grid gap-4 sm:grid-cols-3">
          <div
            v-for="stat in stats"
            :key="stat.label"
            class="rounded-2xl border border-white/10 bg-white/5 p-5"
          >
            <div class="text-3xl font-extrabold text-white">{{ stat.value }}</div>
            <div class="mt-1 text-sm text-white/60">{{ stat.label }}</div>
          </div>
        </div>

        <!-- BUTTON -->
        <div class="mt-9 flex flex-col gap-4 sm:flex-row">
          <a
            href="https://www.instagram.com/amarcanopy"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center justify-center rounded-full bg-amarRed px-7 py-4 font-semibold text-white shadow-xl shadow-red-950/30 transition hover:bg-red-700"
          >
            Lihat Instagram
          </a>

          <a
            href="#portfolio"
            class="inline-flex items-center justify-center rounded-full border border-white/15 px-7 py-4 font-semibold text-white transition hover:bg-white hover:text-amarBlack"
          >
            Lihat Portfolio
          </a>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const slides = [
  '/images/About1.webp',
  '/images/About2.webp',
  '/images/About3.webp'
]

const current = ref(0)
let interval = null

const nextSlide = () => {
  current.value = (current.value + 1) % slides.length
}

onMounted(() => {
  interval = setInterval(nextSlide, 3500)
})

onUnmounted(() => {
  clearInterval(interval)
})

const stats = [
  { value: '10+', label: 'Tahun pengalaman' },
  { value: '500+', label: 'Project selesai' },
  { value: '100%', label: 'Bergaransi' }
]
</script>