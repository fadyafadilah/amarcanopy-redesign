<template>
  <div class="fixed bottom-6 right-6 z-50">
    <div v-if="showPopup" class="mb-4 w-72 rounded-3xl border border-slate-200 bg-white p-5 shadow-soft">
      <div class="flex items-start justify-between gap-4">
        <div>
          <p class="font-bold text-amarBlack">Butuh konsultasi?</p>
          <p class="mt-2 text-sm leading-6 text-slate-600">Konsultasi gratis dengan Tim Amar Canopy.</p>
        </div>
        <button class="text-slate-400 hover:text-slate-700" @click="showPopup = false">×</button>
      </div>
      <a href="https://wa.me/6281380109717" target="_blank" class="mt-4 flex items-center justify-center rounded-full bg-green-500 px-5 py-3 text-sm font-bold text-white hover:bg-green-600">
        Chat WhatsApp
      </a>
    </div>
    <button @click="showPopup = !showPopup" class="flex h-16 w-16 items-center justify-center rounded-full bg-green-500 text-2xl text-white shadow-xl shadow-green-950/20 transition hover:scale-105 hover:bg-green-600">
      <ChatBubbleLeftRightIcon class="h-8 w-8" />
    </button>
  </div>
</template>

<script setup>
import { ChatBubbleLeftRightIcon } from '@heroicons/vue/24/solid'
import { ref } from 'vue'
const showPopup = ref(true)
</script>
