<template>
  <Header />

  <Texture>
    <Container>
      <div
        class="
          max-w-xl
          mx-auto
          grid
          gap-8
          lg:gap-y-9 lg:grid-cols-3 lg:max-w-none
        "
      >
        <router-link
          v-for="(post, index) in posts"
          :key="index"
          class="flex flex-col overflow-hidden group"
          :to="{ name: 'post', params: { id: post.id } }"
        >
          <div class="flex-shrink-0 h-64 overflow-hidden">
            <img
              class="
                w-full
                h-full
                object-cover
                transition
                duration-300
                group-hover:scale-105
              "
              :src="post.imageSrc"
              alt=""
            />
          </div>
          <div
            class="
              p-6
              bg-accent-lightest
              border
              transition
              group-hover:bg-accent
              border-accent-darkest
              group-hover:border-accent
            "
          >
            <h3>{{ post.title }}</h3>
            <p>
              {{ post.description }}
            </p>
            <h4 class="mt-4 mb-0">{{ post.author }}</h4>
            <p class="text-sm">{{ post.date }} · {{ post.readingTime }}</p>
          </div>
        </router-link>
      </div>
      <div
        class="mt-16 border-t border-accent-darkest md:flex items-center py-6"
      >
        <p>
          Showing <span class="font-bold">1</span> to
          <span class="font-semibold">30</span> of
          <span class="font-semibold">99</span> posts
        </p>
        <button class="btn btn-xl ml-auto md:mt-0 mt-4">
          <span> Previous </span>
        </button>
        <button class="btn btn-xl ml-3">
          <span> Next </span>
        </button>
      </div>
    </Container>
  </Texture>
</template>

<script setup>
import Header from "@/components/base/Header.vue";
import Container from "@/components/layouts/Container.vue";
import Texture from "@/components/base/Texture.vue";

const getImageURL = (name) => {
  return new URL(`../../assets/images/${name}`, import.meta.url).href;
};

const DEFAULT_ID = "post";
const DEFAULT_TITLE = "Avian pests and the risks they pose to your business";
const DEFAULT_DESCRIPTION =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto acesantium praesentium eius, ut atque fuga.";
const DEFAULT_AUTHOR = "Michael Thibert";
const DEFAULT_DATE = "Mar 16, 2020";
const DEFAULT_READ_TIME = "6 min read";
const DEFAULT_IMAGE_URL = getImageURL("avian.png");

const posts = [
  {
    id: DEFAULT_ID,
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    author: DEFAULT_AUTHOR,
    date: DEFAULT_DATE,
    readingTime: DEFAULT_READ_TIME,
    imageSrc: DEFAULT_IMAGE_URL,
  },
  {
    id: DEFAULT_ID,
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    author: DEFAULT_AUTHOR,
    date: DEFAULT_DATE,
    readingTime: DEFAULT_READ_TIME,
    imageSrc: DEFAULT_IMAGE_URL,
  },
  {
    id: DEFAULT_ID,
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    author: DEFAULT_AUTHOR,
    date: DEFAULT_DATE,
    readingTime: DEFAULT_READ_TIME,
    imageSrc: DEFAULT_IMAGE_URL,
  },
];
</script>