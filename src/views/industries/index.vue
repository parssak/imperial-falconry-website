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
      <div class="flex flex-wrap justify-center mt-16">
        <div
          v-for="(industry, index) in industries"
          :key="index"
          class="
            flex flex-col
            items-center
            lg:w-1/2
            xl:w-1/3
            px-4
            pb-8
            lg:pb-12
          "
        >
          <img
            :src="industry.imageSrc"
            class="w-full h-52 object-cover"
            alt=""
          />
          <h3 class="text-center mt-6">
            {{ industry.name }}
          </h3>
          <p class="text-center">{{ industry.description }}</p>
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

const getImageURL = (name) => {
  return new URL(`../../assets/images/${name}`, import.meta.url).href;
};

const DEFAULT_DESCRIPTION =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Est maecenas pharetra turpis hendrerit ac, leo. Facilisis quam odio nisl eget nisi, nulla maecenas libero et.";

const industries = [
  {
    name: "Agriculture",
    description: DEFAULT_DESCRIPTION,
    imageSrc: getImageURL("crops.png"),
  },
  {
    name: "Service",
    description: DEFAULT_DESCRIPTION,
    imageSrc: getImageURL("service.png"),
  },
  {
    name: "Construction",
    description: DEFAULT_DESCRIPTION,
    imageSrc: getImageURL("construction.png"),
  },
  {
    name: "Manufacturing",
    description: DEFAULT_DESCRIPTION,
    imageSrc: getImageURL("manufacturing.png"),
  },
  {
    name: "Aviation",
    description: DEFAULT_DESCRIPTION,
    imageSrc: getImageURL("airplane.png"),
  },
  {
    name: "Energy",
    description: DEFAULT_DESCRIPTION,
    imageSrc: getImageURL("energy.png"),
  },
  {
    name: "Waste Management",
    description: DEFAULT_DESCRIPTION,
    imageSrc: getImageURL("waste-management.png"),
  },
  {
    name: "Hospitality",
    description: DEFAULT_DESCRIPTION,
    imageSrc: getImageURL("hospitality.png"),
  },
];
</script>