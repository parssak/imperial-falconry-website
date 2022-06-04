<script setup>
import { ref, defineProps } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Pagination, Navigation } from "swiper";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/vue/outline";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Split from "./Split.vue";

const getImageURL = (name) => {
  return new URL(`../../assets/images/${name}`, import.meta.url).href;
};

const items = [
  getImageURL("hawk.png"),
  getImageURL("hawk.png"),
  getImageURL("hawk.png"),
];

const { title, description, images } = defineProps({
  title: String,
  description: String,
  images: Array,
});

const swiperState = ref(null);

const onSwiper = (_swiper) => {
  swiperState.value = _swiper;
};

const next = () => {
  swiperState.value.slideNext();
};

const prev = () => {
  swiperState.value.slidePrev();
};

const activeIndex = ref(0);

const onSlideChange = (e) => {
  activeIndex.value = e.realIndex;
};

const modules = [Pagination, Navigation];
</script>

<style>
.swiper-wrapper {
  width: 12rem;
}
</style>

<template>
  <Split wide :title="title" :description="description">
    <div class="lg:absolute inset-0">
      <swiper
        :slidesPerView="1"
        :spaceBetween="32"
        :loop="true"
        :modules="modules"
        class="lg:h-full w-full absolute inset-0"
        @slide-change="onSlideChange"
        @init="onSwiper"
      >
        <swiper-slide
          v-for="(image, index) in images"
          :key="index"
          class="select-none"
        >
          <img
            :src="image"
            alt=""
            class="w-full h-full object-cover select-none"
          />
        </swiper-slide>
      </swiper>
      <div class="absolute inset-0 z-20 pointer-events-none">
        <div
          class="
            flex
            items-center
            absolute
            bottom-0
            right-0
            pointer-events-auto
          "
        >
          <button
            class="
              w-16
              h-16
              grid
              place-items-center
              border-accent border-2
              transition
              duration-200
              z-10
              text-accent-darkest
              bg-accent
            "
            @click="prev"
          >
            <ArrowLeftIcon class="w-6 h-6" />
          </button>
          <button
            class="
              w-16
              h-16
              grid
              place-items-center
              border-accent border-2
              transition
              duration-200
              z-10
              text-accent-darkest
              bg-accent
            "
            @click="next"
          >
            <ArrowRightIcon class="w-6 h-6" />
          </button>
        </div>
      </div>
    </div>
  </Split>
</template>