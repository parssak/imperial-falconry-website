<template>
  <div class="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
    <div class="relative bg-accent-lightest">
      <h2 class="sr-only">Contact us</h2>

      <div
        class="
          grid grid-cols-1
          lg:grid-cols-3
          overflow-hidden
          border border-accent-darkest
        "
      >
        <!-- Contact information -->
        <div
          class="
            relative
            overflow-hidden
            py-10
            px-6
            bg-accent-darkest
            sm:px-10
            xl:p-12
          "
        >
          <h2 class="text-accent-lightest">Contact information</h2>
          <address class="not-italic text-accent-lightest mb-4 mt-8">
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
              mb-4
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
              mb-6
            "
          >
            <img src="@/assets/icons/mail.svg" class="w-4 h-4 mr-2" alt="" />
            <span>info@imperialfalconry.com</span></a
          >
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

        <!-- Contact form -->
        <div class="py-10 px-6 sm:px-10 lg:col-span-2 xl:p-12">
          <h2>Send us a message</h2>
          <form
            action="#"
            method="POST"
            class="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8"
          >
            <div>
              <label
                for="first-name"
                class="block text-sm font-medium text-gray-900"
                >First name</label
              >
              <div class="mt-1">
                <input
                  type="text"
                  name="first-name"
                  id="first-name"
                  autocomplete="given-name"
                />
              </div>
            </div>
            <div>
              <label
                for="last-name"
                class="block text-sm font-medium text-gray-900"
                >Last name</label
              >
              <div class="mt-1">
                <input
                  type="text"
                  name="last-name"
                  id="last-name"
                  autocomplete="family-name"
                />
              </div>
            </div>
            <div>
              <label for="email" class="block text-sm font-medium text-gray-900"
                >Email</label
              >
              <div class="mt-1">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autocomplete="email"
                />
              </div>
            </div>
            <div>
              <div class="flex justify-between">
                <label
                  for="phone"
                  class="block text-sm font-medium text-gray-900"
                  >Phone</label
                >
              </div>
              <div class="mt-1">
                <input
                  type="text"
                  name="phone"
                  id="phone"
                  autocomplete="tel"
                  aria-describedby="phone-optional"
                />
              </div>
            </div>
            <div class="sm:col-span-2">
              <label
                for="subject"
                class="block text-sm font-medium text-gray-900"
                >Subject</label
              >
              <div class="mt-1">
                <input
                  type="text"
                  name="subject"
                  id="subject"
                  autocomplete="subject"
                />
              </div>
            </div>
            <div class="sm:col-span-2">
              <div class="flex justify-between">
                <label
                  for="message"
                  class="block text-sm font-medium text-gray-900"
                  >Message</label
                >
              </div>
              <div class="mt-1">
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  aria-describedby="message-max"
                />
              </div>
            </div>
            <div class="sm:col-span-2 sm:flex sm:justify-end">
              <button type="submit" class="mt-2 btn btn-xl">
                <span>Submit</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { MailIcon, PhoneIcon } from "@heroicons/vue/outline";
export default {
  name: "Contact Section",
  components: {
    MailIcon,
    PhoneIcon,
  },
};
</script>
