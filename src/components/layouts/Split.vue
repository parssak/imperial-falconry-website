<script>
import Container from "@/components/layouts/Container.vue";

export default {
  components: { Container },
  props: {
    title: {
      type: String,
    },
    description: {
      type: String,
    },
    flip: {
      type: Boolean,
      default: false,
    },
    dark: {
      type: Boolean,
      default: false,
    },
    wide: {
      type: Boolean,
      default: false,
    },
  },
  setup() {
    const getImageUrl = (name) => {
      return new URL(`../../assets/${name}`, import.meta.url).href;
    };
    return {
      getImageUrl,
    };
  },
};
</script>

<style>
.split-img-wrapper img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>

<template>
  <Container :class="dark && 'bg-accent-dark'">
    <div class="grid gap-8 md:gap-12 lg:grid-cols-2">
      <section :class="[flip && `lg:order-1`, wide ? 'lg:py-24' : 'lg:py-12']">
        <h2 :class="dark && 'text-white'" class="leading-tight">{{ title }}</h2>
        <p :class="dark && 'text-white'" class="font-light text-lg">
          <span v-html="description"></span>
        </p>
        <slot name="extra-content"></slot>
      </section>
      <section class="relative">
        <slot>
          <img :src="getImageUrl('images/bird-1.png')" />
        </slot>
      </section>
    </div>
  </Container>
</template>
