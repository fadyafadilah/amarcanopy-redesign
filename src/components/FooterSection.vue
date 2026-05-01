<template>
  <footer class="bg-amarBlack text-white">
    <div class="container-custom border-t border-white/10 py-14">
      <div class="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
        
        <!-- BRAND -->
        <div class="lg:col-span-2">
          <h3 class="text-2xl font-extrabold">
            Amar <span class="text-amarRed">Canopy</span>
          </h3>

          <p class="mt-4 max-w-md leading-7 text-white/60">
            Penyedia jasa pemasangan canopy kain, tenda membrane, dan awning gulung
            untuk kebutuhan residential dan commercial di seluruh Indonesia.
          </p>

          <div class="mt-6 flex flex-wrap gap-3">
            <a
              href="https://wa.me/6281380109717"
              target="_blank"
              rel="noopener noreferrer"
              class="rounded-full bg-amarRed px-5 py-3 text-sm font-semibold text-white transition hover:bg-red-700"
            >
              Hubungi WhatsApp
            </a>

            <a
              href="https://www.google.com/maps/place/Amar+Canopy/data=!4m2!3m1!1s0x0:0x795fff234c9283c5?sa=X&ved=1t:2428&ictx=111"
              target="_blank"
              rel="noopener noreferrer"
              class="rounded-full border border-white/15 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white hover:text-amarBlack"
            >
              Lihat Maps
            </a>
          </div>
        </div>

        <!-- MENU -->
        <div>
          <h4 class="font-bold text-white">Navigasi</h4>
          <ul class="mt-4 space-y-3 text-sm text-white/60">
            <li><a href="#home" class="transition hover:text-white">Home</a></li>
            <li><a href="#services" class="transition hover:text-white">Layanan</a></li>
            <li><a href="#portfolio" class="transition hover:text-white">Portfolio</a></li>
            <li><a href="#about" class="transition hover:text-white">Tentang Kami</a></li>
          </ul>
        </div>

        <!-- CONTACT -->
        <div>
          <h4 class="font-bold text-white">Kontak</h4>
          <ul class="mt-4 space-y-3 text-sm text-white/60">
            <li>WhatsApp: 0813-8010-9717</li>
            <li>Instagram: @amarcanopy</li>
            <li>Area layanan: Seluruh Indonesia</li>
          </ul>
        </div>
      </div>

      <!-- MAP EMBED -->
      <div class="mt-12 overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-2">
        <iframe
          src="https://www.google.com/maps?q=Amar%20Canopy&output=embed"
          width="100%"
          height="320"
          style="border:0;"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          class="rounded-2xl"
        ></iframe>
      </div>

      <!-- BOTTOM -->
      <div class="mt-10 flex flex-col gap-4 border-t border-white/10 pt-6 text-sm text-white/50 md:flex-row md:items-center md:justify-between">
        <p>© {{ new Date().getFullYear() }} Amar Canopy. All rights reserved.</p>

        <div class="flex gap-4">
          <a
            href="https://www.instagram.com/amarcanopy"
            target="_blank"
            rel="noopener noreferrer"
            class="transition hover:text-white"
          >
            Instagram
          </a>
          <a
            href="https://wa.me/6281380109717"
            target="_blank"
            rel="noopener noreferrer"
            class="transition hover:text-white"
          >
            WhatsApp
          </a>
          <a
            href="https://www.google.com/maps/place/Amar+Canopy/data=!4m2!3m1!1s0x0:0x795fff234c9283c5?sa=X&ved=1t:2428&ictx=111"
            target="_blank"
            rel="noopener noreferrer"
            class="transition hover:text-white"
          >
            Google Maps
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>