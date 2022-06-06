<script setup>
import { ref } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Pagination, Navigation } from "swiper";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/vue/outline";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const getImageURL = (name) => {
  return new URL(`../../assets/images/${name}`, import.meta.url).href;
};

const items = [
  {
    name: "Harris Hawk",
    image: getImageURL("hawk.png"),
    backgroundImage: getImageURL("hawk-bg.png"),
  },
  {
    name: "Bald Eagle",
    image: getImageURL("eagle.png"),
    backgroundImage: getImageURL("eagle-bg.png"),
  },
  {
    name: "Bald Eagle",
    image: getImageURL("eagle.png"),
    backgroundImage: getImageURL("eagle-bg.png"),
  },
];

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

// on change

const modules = [Pagination, Navigation];
</script>

<style>
.swiper-wrapper {
  width: 12rem;
}
</style>

<template>
  <div class="lg:pt-24 lg:pb-32 relative">
    <img
      v-for="(item, index) in items"
      :key="index"
      :src="item.image"
      class="w-full h-full object-cover absolute inset-0 transition-all"
      :class="
        index === activeIndex
          ? 'opacity-100 duration-100'
          : 'opacity-0  duration-300'
      "
    />
    <div class="absolute inset-0 bg-accent-darkest"></div>
    <section class="py-8 pl-4 sm:pl-6 relative">
      <div class="max-w-full lg:max-w-7xl lg:mx-auto 2xl:relative">
        <div class="md:pl-6 w-full grid h-full lg:grid-cols-3 gap-8">
          <div class="lg:py-32 sm:pr-6 lg:pr-12">
            <h4 class="text-accent">Meet Our Team</h4>
            <h2 class="text-accent-lightest">Our Birds</h2>
            <p class="text-accent-lightest">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus
              massa tortor est, quam sed. Pellentesque scelerisque gravida
              auctor nibh eu id lacus. Auctor consequat risus amet mauris.
            </p>
            <router-link
              class="btn btn-xl btn-light mt-8"
              :to="{ name: 'birds' }"
            >
              <span>Learn More</span>
            </router-link>
          </div>
          <div
            class="
              lg:w-3/5 lg:col-span-2
              relative
              lg:absolute lg:inset-y-0 lg:right-0
            "
          >
            <swiper
              :slidesPerView="1.2"
              :spaceBetween="32"
              :loop="true"
              :modules="modules"
              class="lg:h-full w-full"
              @slide-change="onSlideChange"
              @init="onSwiper"
            >
              <swiper-slide
                v-for="(item, index) in items"
                :key="index"
                class="relative select-none group"
              >
                <img
                  :src="item.backgroundImage"
                  alt=""
                  class="
                    h-96
                    w-full
                    lg:h-full
                    object-cover
                    select-none
                    absolute
                    inset-0
                  "
                />
                <img
                  :src="item.image"
                  alt=""
                  class="
                    h-96
                    w-full
                    relative
                    lg:h-full
                    object-cover
                    select-none
                    transition-all
                    duration-300
                    group-hover:opacity-0
                  "
                />

                <div
                  class="
                    select-none
                    absolute
                    inset-0
                    top-1/2
                    bg-gradient-to-t
                    from-black/80
                  "
                ></div>
                <div
                  class="
                    absolute
                    inset-0
                    flex flex-col
                    items-center
                    justify-end
                    select-none
                  "
                >
                  <h2 class="text-accent-lightest mb-16">
                    {{ item.name }}
                  </h2>
                </div>
              </swiper-slide>
            </swiper>
            <div class="absolute pointer-events-none inset-y-0 right-0 left-1/4 z-10 bg-gradient-to-l from-accent-darkest via-transparent hidden 2xl:block"></div>

            <!-- Buttons -->
            <div class="mt-8 flex space-x-6 items-center">
              <button
                class="
                  w-12
                  h-12
                  grid
                  place-items-center
                  border-accent border-2
                  transition
                  duration-200
                  z-10
                  hover:text-accent-darkest hover:bg-accent
                  text-accent
                "
                @click="prev"
              >
                <ArrowLeftIcon class="w-5 h-5" />
              </button>
              <button
                class="
                  w-12
                  h-12
                  grid
                  place-items-center
                  border-accent border-2
                  transition
                  duration-200
                  z-10
                  hover:text-accent-darkest hover:bg-accent
                  text-accent
                "
                @click="next"
              >
                <ArrowRightIcon class="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>