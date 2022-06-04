<template>
  <footer class="bg-accent-darkest" aria-labelledby="footer-heading">
    <h2 id="footer-heading" class="sr-only">Footer</h2>
    <div class="max-w-7xl mx-auto py-10 pb-8 px-4 sm:px-6 lg:px-8">
      <div class="grid md:grid-cols-2 xl:grid-cols-5 gap-8">
        <div class="xl:col-span-2">
          <router-link :to="{ name: 'home' }">
            <img class="w-auto" src="@/assets/logo.png" alt="Company Name" />
          </router-link>
        </div>
        <div>
          <h3
            class="
              mb-3
              font-semibold
              text-lg
              uppercase
              font-serif
              tracking-wider
              text-accent-lightest
            "
          >
            Navigation
          </h3>
          <div class="space-y-1">
            <router-link
              v-for="route in navigation"
              :key="route.label"
              class="
                block
                text-accent-lightest
                hover:text-accent
                font-semibold
                w-max
                transition
                capitalize
              "
              :to="route.path"
              >{{ route.label }}</router-link
            >
          </div>
        </div>
        <div>
          <h3
            class="
              mb-3
              font-semibold
              text-lg
              uppercase
              font-serif
              tracking-wider
              text-accent-lightest
            "
          >
            Contact
          </h3>
          <div>
            <address class="not-italic text-accent-lightest mb-4">
              Imperial Falconry Services Inc. <br />
              PO Box 20012 Kincardine Mall PO <br />
              Kincardine, Ontario <br />
              N2Z 2G0<br />
            </address>
            <a
              href="tel:+226-930-4575"
              class="
                text-accent-lightest
                flex
                items-center
                w-max
                hover:text-accent
                mb-2
              "
            >
              <img src="@/assets/icons/phone.svg" class="w-4 h-4 mr-2" alt="" />
              <span>226-930-4575</span>
            </a>
            <a
              href="mailto:info@imperialfalconry.com"
              class="
                text-accent-lightest
                flex
                items-center
                w-max
                hover:text-accent
              "
            >
              <img src="@/assets/icons/mail.svg" class="w-4 h-4 mr-2" alt="" />
              <span>info@imperialfalconry.com</span></a
            >
          </div>
        </div>
        <div>
          <h3
            class="
              mb-3
              font-semibold
              text-lg
              uppercase
              font-serif
              tracking-wider
              text-accent-lightest
            "
          >
            Connect
          </h3>
          <div class="space-x-4 flex items-center">
            <a href="#" target="_blank">
              <img src="@/assets/icons/facebook.svg" class="w-6 h-6" alt="" />
            </a>
            <a href="#" target="_blank">
              <img src="@/assets/icons/instagram.svg" class="w-6 h-6" alt="" />
            </a>
            <a href="#" target="_blank">
              <img src="@/assets/icons/linkedin.svg" class="w-6 h-6" alt="" />
            </a>
          </div>
        </div>
      </div>
      <div
        class="
          mt-8
          pt-8
          border-t border-accent
          md:flex md:items-center md:justify-between
        "
      >
        <p class="text-base text-accent-lightest">
          Imperial Falconry Services Inc. &copy; 2022
        </p>
      </div>
    </div>
  </footer>
</template>

<script>
import { navigation } from "@/data";

export default {
  setup() {
    return { navigation };
  },
};
</script>
