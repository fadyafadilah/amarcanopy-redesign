<template>
  <section class="section-padding bg-white">
    <div class="container-custom">
      <div class="mx-auto max-w-2xl text-center">
        <p class="font-semibold text-amarRed">Testimonial</p>
        <h2 class="mt-3 text-4xl font-bold tracking-tight text-amarBlack">
          Dipercaya pelanggan di berbagai kota
        </h2>
      </div>

      <div class="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <figure
          v-for="item in testimonials"
          :key="item.name"
          class="rounded-3xl bg-amarSoft p-8 transition hover:-translate-y-1 hover:shadow-soft"
        >
          <!-- Icon Profile -->
          <div class="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-white text-amarRed shadow-sm">
            <component :is="item.icon" class="h-6 w-6" />
          </div>

          <!-- Stars -->
          <div class="flex gap-1 text-amarRed">
            <StarIcon
              v-for="star in 5"
              :key="star"
              class="h-5 w-5"
            />
          </div>

          <blockquote class="mt-5 leading-7 text-slate-700">
            “{{ item.review }}”
          </blockquote>

          <figcaption class="mt-6">
            <p class="font-bold text-amarBlack">{{ item.name }}</p>
            <p class="mt-1 text-sm text-slate-500">{{ item.type }}</p>
          </figcaption>
        </figure>
      </div>
    </div>
  </section>
</template>

<script setup>
import {
  StarIcon,
  UserIcon,
  UserCircleIcon,
  BuildingStorefrontIcon,
  BuildingOffice2Icon
} from '@heroicons/vue/24/solid'

const testimonials = [
  {
    name: 'Bapak Andi',
    type: 'Pelanggan Rumah Tinggal',
    icon: UserIcon,
    review:
      'Pelayanan Amar Canopy sangat cepat dan hasil pemasangannya rapi. Canopy rumah jadi terlihat lebih modern dan nyaman.'
  },
  {
    name: 'Ibu Devi',
    type: 'Pelanggan Rumah Tinggal',
    icon: UserIcon,
    review:
      'Timnya profesional, komunikatif, dan hasil kerja sesuai dengan yang dijanjikan. Sangat puas dengan kualitasnya.'
  },
  {
    name: 'Filosofi Kopi Melawai',
    type: 'Cafe & Komersial',
    icon: BuildingStorefrontIcon,
    review:
      'Pemasangan canopy untuk area cafe membuat tampilan lebih menarik dan pelanggan jadi lebih nyaman saat berada di area outdoor.'
  },
  {
    name: 'Hotel Luminor Bogor',
    type: 'Hotel & Hospitality',
    icon: BuildingOffice2Icon,
    review:
      'Hasil pekerjaan rapi, kuat, dan sesuai kebutuhan area hotel. Proses pengerjaan juga tertata dan profesional.'
  }
]
</script>