<template>
  <Header />

  <Texture>
    <Container>
      <p class="max-w-4xl md:text-center md:mx-auto">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae, aliquet
        diam, facilisi sed amet, arcu lorem cursus. Ultrices diam nec amet,
        nulla viverra vestibulum, aliquet tortor. Pellentesque vulputate
        pulvinar sit neque commodo hendrerit sed elementum.
      </p>
      <div class="grid sm:grid-cols-2 lg:grid-cols-3 mt-16 gap-x-8 gap-y-12">
        <div
          v-for="(area, index) in areas"
          :key="index"
          class="flex flex-col items-center"
        >
          <img :src="area.icon" class="w-16 h-16" alt="" />
          <h3 class="text-center mt-4">
            {{ area.name }}
          </h3>
          <p class="text-center">{{ area.description }}</p>
        </div>
      </div>
    </Container>
  </Texture>

  <NarrowCTA />
</template>

<script setup>
import Header from "@/components/base/Header.vue";
import Container from "@/components/layouts/Container.vue";
import Texture from "@/components/base/Texture.vue";
import NarrowCTA from "@/components/layouts/cta/NarrowCTA.vue";

const getIconURL = (name) => {
  return new URL(`../../assets/icons/${name}`, import.meta.url).href;
};

const DEFAULT_DESCRIPTION =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Est maecenas pharetra turpis hendrerit.";

const areas = [
  {
    name: "large-scale farming",
    description: DEFAULT_DESCRIPTION,
    icon: getIconURL("farming.svg"),
  },
  {
    name: "Vineyards",
    description: DEFAULT_DESCRIPTION,
    icon: getIconURL("grape.svg"),
  },
  {
    name: "Large-scale Construction ",
    description: DEFAULT_DESCRIPTION,
    icon: getIconURL("construction.svg"),
  },
  {
    name: "Retail Centers",
    description: DEFAULT_DESCRIPTION,
    icon: getIconURL("shopping-cart.svg"),
  },
  {
    name: "Large-scale Mining sites",
    description: DEFAULT_DESCRIPTION,
    icon: getIconURL("mining.svg"),
  },
  {
    name: "Landfills",
    description: DEFAULT_DESCRIPTION,
    icon: getIconURL("trash-2.svg"),
  },
  {
    name: "Factories",
    description: DEFAULT_DESCRIPTION,
    icon: getIconURL("settings.svg"),
  },
  {
    name: "Power Plants",
    description: DEFAULT_DESCRIPTION,
    icon: getIconURL("zap.svg"),
  },
  {
    name: "Airports",
    description: DEFAULT_DESCRIPTION,
    icon: getIconURL("airplane.svg"),
  },
  {
    name: "Beaches",
    description: DEFAULT_DESCRIPTION,
    icon: getIconURL("life-buoy.svg"),
  },
  {
    name: "Resorts and Hotels",
    description: DEFAULT_DESCRIPTION,
    icon: getIconURL("briefcase.svg"),
  },
  {
    name: "Golf Courses",
    description: DEFAULT_DESCRIPTION,
    icon: getIconURL("flag.svg"),
  },
];
</script>