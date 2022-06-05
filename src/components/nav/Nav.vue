<template>
  <Popover class="sticky left-0 top-0 w-full z-50 bg-accent-darkest shadow">
    <div
      v-if="showAnnouncement"
      class="
        bg-accent
        py-3
        flex
        items-center
        lg:justify-center
        relative
        pl-4
        pr-12
      "
    >
      <div class="lg:flex items-center justify-center">
        <p class="text-base text-black">Announcement Text Placeholder</p>
        <button class="lg:ml-6 uppercase font-medium flex items-center">
          Learn More <ArrowRightIcon class="w-4 h-4 ml-2" />
        </button>
      </div>
      <button class="grid items-center absolute right-4" @click="toggleAlert">
        <XIcon class="w-6 h-6" />
      </button>
    </div>
    <div class="px-4 sm:px-6 lg:px-8">
      <div
        class="
          flex
          justify-between
          items-center
          lg:justify-start lg:space-x-5
          max-w-7xl
          mx-auto
        "
      >
        <div class="flex justify-start items-center lg:w-0 flex-1">
          <router-link :to="{ name: 'home' }">
            <span class="sr-only">Imperial Falconry Services Inc.</span>
            <div class="flex items-center">
              <img
                class="h-9 w-auto flex items-center"
                src="@/assets/logo.png"
                alt="Imperial Falconry Services Inc."
              />
            </div>
          </router-link>
        </div>
        <div class="-mr-2 -my-2 py-6 lg:hidden">
          <PopoverButton
            class="
              p-2
              inline-flex
              items-center
              justify-center
              transition
              text-accent
              hover:bg-accent hover:text-accent-darkest
            "
          >
            <span class="sr-only">Open menu</span>
            <MenuIcon class="h-6 w-6" aria-hidden="true" />
          </PopoverButton>
        </div>
        <PopoverGroup as="nav" class="hidden lg:flex space-x-px">
          <NavItem
            v-for="item in navigation"
            :route="item"
            :path="item.path"
            :key="item.label"
            :dropdownItems="item.dropdownItems"
          >
            {{ item.label }}
          </NavItem>
        </PopoverGroup>
      </div>
    </div>

    <transition
      enter-active-class="duration-200 ease-out"
      enter-from-class="opacity-0 scale-95"
      enter-to-class="opacity-100 scale-100"
      leave-active-class="duration-100 ease-in"
      leave-from-class="opacity-100 scale-100"
      leave-to-class="opacity-0 scale-95"
    >
      <PopoverPanel
        focus
        class="
          absolute
          top-0
          inset-x-0
          z-10
          p-2
          transition
          transform
          origin-top-right
          lg:hidden
        "
      >
        <div class="ring-1 ring-black ring-opacity-5 bg-accent-darkest">
          <div class="pt-5 pb-6 px-5">
            <div class="flex items-center justify-between">
              <router-link :to="{ name: 'home' }">
                <img
                  class="h-9 w-auto"
                  src="@/assets/logo.png"
                  alt="Imperial Falconry Services Inc."
                />
              </router-link>
              <div class="-mr-2">
                <PopoverButton
                  class="
                    p-2
                    inline-flex
                    items-center
                    justify-center
                    transition
                    text-accent
                    hover:bg-accent hover:text-accent-darkest
                  "
                >
                  <span class="sr-only">Close menu</span>
                  <XIcon class="h-6 w-6" aria-hidden="true" />
                </PopoverButton>
              </div>
            </div>
            <div class="mt-6">
              <nav class="grid">
                <PopoverButton class="space-y-px">
                  <router-link
                    v-for="item in navigation"
                    :key="item.label"
                    :to="{ name: item.name }"
                    class="nav-item-mobile"
                  >
                    <span class="nav-item-mobile__text">{{ item.label }}</span>
                  </router-link>
                </PopoverButton>
              </nav>
            </div>
          </div>
        </div>
      </PopoverPanel>
    </transition>
  </Popover>
  <!-- <div class="mb-20 pb-1" /> -->
</template>

<script>
import NavItem from "@/components/nav/NavItem.vue";
import { navigation } from "@/data";
import {
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from "@headlessui/vue";
import { MenuIcon, XIcon, ArrowRightIcon } from "@heroicons/vue/outline";

export default {
  components: {
    Popover,
    PopoverButton,
    PopoverGroup,
    PopoverPanel,
    MenuIcon,
    XIcon,
    NavItem,
    ArrowRightIcon,
  },
  setup() {
    return { navigation };
  },
  data() {
    // Set showAnnouncement to true if you want to preview the alert
    return { showAnnouncement: false, top: true };
  },
  watch: {
    // listen for route change
    $route() {
      if (this.$route.name !== "home") {
        this.top = false;
      } else {
        this.top = window.scrollY < 50;
      }
    },
  },
  methods: {
    toggleAlert() {
      this.showAnnouncement = !this.showAnnouncement;
    },
  },
};
</script>
