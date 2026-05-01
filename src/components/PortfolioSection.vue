<template>
  <section id="portfolio" class="section-padding bg-amarSoft">
    <div class="container-custom">
      
      <!-- HEADER -->
      <div class="flex flex-col justify-between gap-6 md:flex-row md:items-end">
        <div>
          <p class="font-semibold text-amarRed">Portfolio</p>
          <h2 class="mt-3 text-4xl font-bold tracking-tight text-amarBlack">
            Project Terbaru Amar Canopy
          </h2>
        </div>
        <p class="max-w-xl text-slate-600">
          Kami telah mengerjakan berbagai proyek canopy untuk rumah tinggal, ruko, cafe, dan area komersial.
        </p>
      </div>

      <!-- GRID -->
      <div class="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

        <article
          v-for="item in portfolios"
          :key="item.title"
          class="group relative overflow-hidden rounded-3xl bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-soft"
        >
          
          <!-- IMAGE -->
          <div class="relative aspect-[4/3] overflow-hidden">
            <img
              :src="item.image"
              alt="portfolio"
              class="h-full w-full object-cover transition duration-700 group-hover:scale-110"
            />

            <!-- OVERLAY -->
            <div class="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition"></div>
          </div>

          <!-- CONTENT -->
          <div class="p-6">
            <p class="text-sm font-semibold text-amarRed">{{ item.category }}</p>

            <h3 class="mt-2 text-xl font-bold text-amarBlack">
              {{ item.title }}
            </h3>

            <p class="mt-2 text-xs text-slate-500">
              <MapPinIcon class="inline h-4 w-4" />
              {{ item.location }}
            </p>

            <p class="mt-3 text-sm leading-6 text-slate-600">
              {{ item.desc }}
            </p>
          </div>

        </article>

      </div>
    </div>
  </section>
</template>

<script setup>
import { MapPinIcon } from '@heroicons/vue/24/solid'
const portfolios = [
  {
    image: '/src/assets/Portfolio1.webp',
    category: 'Canopy Kain',
    title: 'Canopy Rumah Minimalis',
    location: 'Jakarta Selatan',
    desc: 'Pemasangan canopy kain dengan desain modern untuk area carport rumah.'
  },
  {
    image: '/src/assets/Portfolio2.webp',
    category: 'Membrane',
    title: 'Canopy Membrane Perumahan',
    location: 'Bandung',
    desc: 'Struktur membrane elegan untuk area outdoor cafe agar nyaman dan estetik.'
  },
  {
    image: '/src/assets/Portfolio3.webp',
    category: 'Awning',
    title: 'Awning Toko Ruko',
    location: 'Surabaya',
    desc: 'Awning gulung praktis untuk perlindungan panas dan hujan di area toko.'
  },
  {
    image: '/src/assets/Portfolio4.webp',
    category: 'Tenda Membrane',
    title: 'Tenda Membrane Kolam Renang',
    location: 'Depok',
    desc: 'Solusi canopy kain untuk area santai selesai berenang dengan desain modern dan tahan cuaca.'
  },
  {
    image: '/src/assets/Portfolio5.webp',
    category: 'Komersial',
    title: 'Area Parkir Kantor',
    location: 'Tangerang',
    desc: 'Pemasangan canopy besar untuk area parkir kantor dengan struktur kuat.'
  },
  {
    image: '/src/assets/Portfolio6.webp',
    category: 'Canopy Kain',
    title: 'Canopy Kain Belakang Rumah',
    location: 'Sukabumi',
    desc: 'Canopy kain untuk area belakang rumah sebagai tempat bersantai dengan desain minimalis.'
  }
]
</script>