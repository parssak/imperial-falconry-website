<template>
  <Header />

  <Texture>
    <Container>
      <p class="max-w-4xl md:text-center md:mx-auto">
        The type of raptor that we assign to your work site is based on the size
        of your site, severity of the avian pest pressure, potential hazards,
        the suitable application of each raptor species (based on flight
        characteristics), and raptor availability. Although we operate on a
        first come first serve basis, we guarantee we will have a raptor or
        raptors capable of fulfilling your needs.
      </p>
    </Container>
    <SplitCarousel
      v-for="(bird, index) in birds"
      :key="index"
      :title="bird.name"
      :description="bird.description"
      :images="bird.images"
    />
  </Texture>

  <NarrowCTA />
</template>

<script setup>
import Header from "@/components/base/Header.vue";
import Container from "@/components/layouts/Container.vue";
import Texture from "@/components/base/Texture.vue";
import SplitCarousel from "@/components/layouts/SplitCarousel.vue";
import NarrowCTA from "@/components/layouts/cta/NarrowCTA.vue";

const getImageURL = (name) => {
  return new URL(`../../assets/images/${name}`, import.meta.url).href;
};

const DEFAULT_DESCRIPTION =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consectetur egestas velit quam nisi, ullamcorper. Eu cursus integer porttitor bibendum. Gravida id dapibus consequat eget nibh. Maecenas hendrerit congue vulputate sem ut et, sed. Leo proin sit egestas justo morbi at tempus id amet. Quis amet, in bibendum proin arcu, egestas. Varius porttitor risus nibh mattis magna morbi. Sed fermentum non auctor vitae viverra quis mi. Magnis faucibus eu sed integer. Id turpis sit vestibulum felis sagittis ac. Lacinia vitae mattis neque turpis in at.";
const birds = [
  {
    name: "Hawks",
    description: DEFAULT_DESCRIPTION,
    images: [
      getImageURL("hawk.png"),
      getImageURL("hawk.png"),
      getImageURL("hawk.png"),
    ],
  },
  {
    name: "Eagles",
    description: DEFAULT_DESCRIPTION,
    images: [
      getImageURL("eagle.png"),
      getImageURL("eagle.png"),
      getImageURL("eagle.png"),
    ],
  },
  {
    name: "Falcons",
    description: DEFAULT_DESCRIPTION,
    images: [
      getImageURL("falcon.png"),
      getImageURL("falcon.png"),
      getImageURL("falcon.png"),
    ],
  },
];
</script>