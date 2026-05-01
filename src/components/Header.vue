<template>
  <header class="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-amarBlack/80 backdrop-blur-xl">
    <nav class="container-custom flex h-20 items-center justify-between px-6 lg:px-8">
      <a href="#" class="flex items-center gap-3">
        <img src="../assets/logo-amar-canopy.png" alt="Amar Canopy" class="h-11 w-auto rounded bg-white px-2 py-1" />
        <span class="text-sm font-bold tracking-wide text-white">AMAR CANOPY</span>
      </a>

      <button class="rounded-lg p-2 text-white md:hidden" @click="isOpen = !isOpen">
        <Bars3Icon v-if="!isOpen" class="h-7 w-7" />
        <XMarkIcon v-else class="h-7 w-7" />
      </button>

      <div class="hidden items-center gap-8 md:flex">
        <a v-for="item in menu" :key="item.href" :href="item.href" class="text-sm font-medium text-white/80 transition hover:text-white">
          {{ item.label }}
        </a>
        <a href="https://wa.me/6281380109717" class="rounded-full bg-amarRed px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-red-900/20 transition hover:bg-red-700">
          Konsultasi Gratis
        </a>
      </div>
    </nav>

    <div v-if="isOpen" class="border-t border-white/10 bg-amarBlack px-6 py-5 md:hidden">
      <a v-for="item in menu" :key="item.href" :href="item.href" class="block py-3 text-sm font-medium text-white/80" @click="isOpen = false">
        {{ item.label }}
      </a>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue'
import { Bars3Icon, XMarkIcon } from '@heroicons/vue/24/outline'

const isOpen = ref(false)
const menu = [
  { label: 'Home', href: '#home' },
  { label: 'Layanan', href: '#services' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Tentang', href: '#about' },
  { label: 'Kontak', href: '#contact' }
]
</script>
