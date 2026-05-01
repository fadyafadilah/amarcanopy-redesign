<template>
  <section id="services" class="section-padding bg-white">
    <div class="container-custom">
      <div class="mx-auto max-w-2xl text-center">
        <p class="font-semibold text-amarRed">Layanan Kami</p>
        <h2 class="mt-3 text-4xl font-bold tracking-tight text-amarBlack">Jasa Pemasangan Canopy Jakarta Profesional & Bergaransi</h2>
        <p class="mt-6 text-lg leading-8 text-slate-600">Kami menyediakan layanan pemasangan canopy kain, membrane, dan awning gulung untuk rumah, toko, restoran, dan cafe di Jakarta dan sekitarnya dengan hasil rapi, kuat, dan bergaransi.</p>
      </div>

      <div class="mt-14 grid gap-6 md:grid-cols-3">
        <article v-for="service in services" :key="service.title" class="group rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-soft">
          <div class="mb-7 inline-flex rounded-2xl bg-red-50 p-4 text-amarRed">
            <component :is="service.icon" class="h-8 w-8" />
          </div>
          <h3 class="text-xl font-bold text-amarBlack">{{ service.title }}</h3>
          <p class="mt-4 leading-7 text-slate-600">{{ service.text }}</p>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup>
import { HomeModernIcon, BuildingStorefrontIcon, WrenchScrewdriverIcon } from '@heroicons/vue/24/outline'

const services = [
  { title: 'Canopy Kain', icon: HomeModernIcon, text: 'Jasa pemasangan canopy kain untuk rumah, toko, restoran, dan cafe dengan bahan berkualitas dan tahan cuaca' },
  { title: 'Tenda / Atap Membrane', icon: BuildingStorefrontIcon, text: 'Pemasangan Struktur modern untuk area carport, pool, dan komersial.' },
  { title: 'Awning Gulung & Reparasi', icon: WrenchScrewdriverIcon, text: 'Pemasangan, penggantian kain, dan perbaikan rangka.' }
]
</script>
