<template>
  <section class="px-4 sm:px-6 lg:px-8 py-4 bg-accent">
    <div class="max-w-full lg:max-w-7xl lg:mx-auto">
      <div class="relative w-full flex flex-col md:flex-row md:justify-between items-center text-center md:text-left">
        <h2 class="mb-0 text-xl">
          interested in our services? contact us for a free consultation
        </h2>
        <router-link :to="{ name: 'contact' }" class="btn btn-hover-dark btn-xl mt-4 md:mt-0 md:ml-2">
          <span>Contact Us</span>
        </router-link>
      </div>
    </div>
  </section>
</template>