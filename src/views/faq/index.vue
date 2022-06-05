<template>
  <Header />

  <Texture>
    <Container>
      <p class="max-w-4xl md:text-center md:mx-auto py-6">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae, aliquet
        diam, facilisi sed amet, arcu lorem cursus. Ultrices diam nec amet,
        nulla viverra vestibulum, aliquet tortor. Pellentesque vulputate
        pulvinar sit neque commodo hendrerit sed elementum.
      </p>

      <div class="grid gap-y-12 w-full mt-16">
        <Disclosure v-for="(faq, index) in faqs" :key="index" v-slot="{ open }">
          <div>
            <DisclosureButton
              class="
                bg-accent-darkest
                border border-accent-darkest
                w-full
                text-left
                px-8
                py-6
                flex
                justify-between
                items-center
                group
              "
            >
              <h3 class="text-accent-lightest mb-0">
                {{ faq.question }}
              </h3>
              <button
                class="
                  w-10
                  flex-shrink-0
                  ml-4
                  h-10
                  grid
                  place-items-center
                  border-accent border-2
                  transition
                  duration-200
                  z-10
                  group-hover:text-accent-darkest group-hover:bg-accent
                  text-accent
                "
                @click="prev"
              >
                <ArrowDownIcon
                  class="w-5 h-5 transform transition-all duration-200"
                  :class="open ? '-rotate-180' : ''"
                />
              </button>
            </DisclosureButton>
            <transition
              enter-active-class="transition duration-100 ease-out origin-top"
              enter-from-class="transform scale-y-50 opacity-0"
              enter-to-class="transform scale-y-100 opacity-100"
              leave-active-class="transition duration-75 ease-out origin-top"
              leave-from-class="transform scale-y-100 opacity-100"
              leave-to-class="transform scale-y-50 opacity-0"
            >
              <DisclosurePanel
                class="
                  bg-accent-lightest
                  border border-accent-darkest
                  text-left
                  px-8
                  py-6
                "
              >
                <p>{{ faq.answer }}</p>
              </DisclosurePanel>
            </transition>
          </div>
        </Disclosure>
      </div>
      <div class="mt-8 flex flex-col items-center">
        <p class="text-center">
          Don't see your question here? Send us a message!
        </p>
        <router-link class="btn btn-xl mt-8" :to="{ name: 'contact' }">
          <span> Ask a Question</span>
        </router-link>
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
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/vue";
import { ArrowDownIcon } from "@heroicons/vue/solid";

const DEFAULT_QUESTION =
  "What are the frequently asked questions related to these services?";

const DEFAULT_ANSWER =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Est maecenas pharetra turpis hendrerit.";

const faqs = [
  {
    question: DEFAULT_QUESTION,
    answer: DEFAULT_ANSWER,
  },
  {
    question: DEFAULT_QUESTION,
    answer: DEFAULT_ANSWER,
  },
  {
    question: DEFAULT_QUESTION,
    answer: DEFAULT_ANSWER,
  },
  {
    question: DEFAULT_QUESTION,
    answer: DEFAULT_ANSWER,
  },
  {
    question: DEFAULT_QUESTION,
    answer: DEFAULT_ANSWER,
  },
  {
    question: DEFAULT_QUESTION,
    answer: DEFAULT_ANSWER,
  },
  {
    question: DEFAULT_QUESTION,
    answer: DEFAULT_ANSWER,
  },
  {
    question: DEFAULT_QUESTION,
    answer: DEFAULT_ANSWER,
  },
];
</script>
