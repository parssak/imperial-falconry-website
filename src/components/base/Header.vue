<template>
  <div class="relative">
    <div class="absolute inset-0">
      <img class="w-full h-full object-cover" :src="img" alt="" />
      <div
        class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60"
        aria-hidden="true"
      />
    </div>
    <Container>
      <div class="py-16 md:py-24 text-center">
        <h4 class="text-accent mb-3">{{ $route.meta.subtitle }}</h4>
        <h1 class="text-accent-lightest">
          {{ title ?? $route.meta.title }}
        </h1>
        <p v-if="description" class="mt-6 text-xl text-indigo-100 max-w-3xl">
          {{ description }}
        </p>
      </div>
    </Container>
  </div>
</template>

<script setup>
import Container from "@/components/layouts/Container.vue";
import { useRoute } from "vue-router";

const { title, description } = defineProps({
  title: String,
  description: String,
});

const getBannerImageURL = (name) => {
  return new URL(`../../assets/images/banner/${name}.png`, import.meta.url)
    .href;
};

const route = useRoute();
const img = getBannerImageURL(route.name);
</script>
