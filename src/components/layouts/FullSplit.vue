<script setup>
const { flipped, leftClass, rightClass, dark, center } = defineProps({
  flipped: Boolean,
  leftClass: String,
  rightClass: String,
  center: Boolean,
  dark: Boolean,
});
</script>

<template>
  <main
    class="lg:relative"
    :class="[dark ? 'bg-accent-darkest lg:bg-transparent' : '']"
  >
    <div
      class="lg:absolute inset-x-0"
      :class="[
        center ? 'inset-y-12' : 'bottom-0 top-12',
        dark && 'bg-accent-darkest',
      ]"
    ></div>
    <div
      :class="`${leftClass} mx-auto max-w-7xl w-full pt-16 pb-20 lg:py-64 lg:flex relative ${
        flipped && 'justify-end'
      }
      `"
    >
      <div
        class="
          px-4
          lg:w-1/2
          sm:px-8
          xl:pr-16
          lg:absolute lg:flex lg:flex-col lg:justify-center
        "
        :class="[
          center ? 'lg:inset-y-12' : 'lg:bottom-0 lg:top-12',
          flipped ? 'lg:pl-16' : 'lg:pr-16',
        ]"
      >
        <slot>
          <h2>Lorem Ipsum</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet,
            molestiae!
          </p>
        </slot>
      </div>
    </div>
    <div
      :class="`
        ${rightClass}
        relative
        w-full
        h-72
        lg:absolute lg:inset-y-0 ${
          flipped ? 'lg:left-0' : 'lg:right-0'
        } lg:w-1/2 lg:h-full
      `"
    >
      <slot name="right">
        <div class="absolute inset-0 w-full h-full bg-black bg-opacity"></div>
      </slot>
    </div>
  </main>
</template>
