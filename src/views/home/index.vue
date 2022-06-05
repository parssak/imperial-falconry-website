<template>
  <Texture>
    <div class="relative">
      <!-- Just to add the green all the way to the right on large screens -->
      <div class="hidden absolute inset-0 lg:grid lg:grid-cols-2">
        <div class="bg-accent-darkest col-start-2"></div>
      </div>

      <div
        class="
          flex flex-col
          lg:grid lg:grid-cols-2 lg:min-h-screen
          -mt-20
          max-w-7xl
          mx-auto
          relative
        "
      >
        <div class="flex items-center relative lg:px-8">
          <div
            class="
              hidden
              lg:block
              absolute
              inset-y-0
              right-0
              w-48
              bg-accent-darkest
            "
          ></div>
          <img
            src="@/assets/images/hero.png"
            alt="hawk flying in a field"
            class="
              max-h-[50vh]
              relative
              w-full
              object-cover
              lg:max-h-full lg:w-full lg:h-auto
            "
          />
        </div>
        <div
          class="
            h-full
            bg-accent-darkest
            flex flex-col
            items-center
            justify-center
            py-12
            px-4
            sm:px-6
            lg:px-8
            text-center
            lg:text-left lg:items-start
          "
        >
          <h4 class="text-accent">Imperial Falconry Services Inc.</h4>
          <h1 class="text-accent-lightest leading-tight mb-4 max-w-2xl">
            Exceptional avian pest control solutions
          </h1>
          <p class="text-accent-lightest max-w-2xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
            iaculis justo, nullam tortor odio ornare pretium eu faucibus.
            Faucibus ultricies et, turpis lorem.
          </p>
          <router-link
            :to="{ name: 'services' }"
            class="btn btn-xl btn-light mt-8"
          >
            <span> Learn More </span>
          </router-link>
        </div>
      </div>
    </div>

    <Container>
      <div class="text-center py-12">
        <h4>Who We Are</h4>
        <h2>About IFSI</h2>
        <p class="max-w-2xl mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus massa
          tortor est, quam sed. Pellentesque scelerisque gravida auctor nibh eu
          id lacus. Auctor consequat risus amet mauris elementum leo non amet
          sollicitudin. Id sed enim vitae posuere morbi lobortis egestas
          molestie scelerisque.
        </p>
        <router-link :to="{ name: 'about' }" class="btn btn-xl mt-8">
          <span> Read More </span>
        </router-link>
      </div>
    </Container>

    <FullSplit :flipped="true" dark>
      <h4 class="text-accent">Our Services</h4>
      <h2 class="text-accent-lightest">What We Offer</h2>
      <p class="text-accent-lightest">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus massa
        tortor est, quam sed. Pellentesque scelerisque gravida auctor nibh eu id
        lacus. Auctor consequat risus amet mauris.
      </p>
      <router-link :to="{ name: 'services' }" class="btn btn-xl btn-light mt-8">
        <span> Learn More </span>
      </router-link>
      <template v-slot:right>
        <img
          src="@/assets/images/bird-1.png"
          class="w-full h-full object-cover"
          alt=""
        />
      </template>
    </FullSplit>
  </Texture>

  <Carousel />

  <Texture>
    <Container>
      <div class="grid lg:grid-cols-2 gap-8">
        <div v-for="(card, index) in cards" :key="card.title" class="group">
          <div class="w-full h-72 lg:h-80 overflow-hidden">
            <!-- scale-105 -->
            <img
              :src="card.imgSrc"
              alt=""
              class="w-full h-full object-cover transition duration-500"
              :id="`card-${index}`"
            />
          </div>

          <div class="text-center flex flex-col items-center mt-6">
            <h4>{{ card.subtitle }}</h4>
            <h2>{{ card.title }}</h2>
            <p>{{ card.description }}</p>
            <router-link
              :to="{ name: card.pathName }"
              class="btn btn-xl mt-6"
              @mouseenter="() => onCardHoverStart(index)"
              @mouseleave="() => onCardHoverEnd(index)"
            >
              <span>{{ card.buttonText }}</span>
            </router-link>
          </div>
          ``
        </div>
      </div>
    </Container>

    <div class="relative">
      <div class="absolute inset-x-0 bottom-0 h-32 bg-accent-darkest"></div>
      <Container>
        <div class="relative">
          <div class="absolute inset-0 w-full h-full overflow-hidden">
            <img
              src="@/assets/images/interested.png"
              class="w-full h-full object-cover transition-all duration-500"
              alt=""
              id="cta"
            />
          </div>
          <div class="grid md:grid-cols-2 gap-12 relative">
            <div
              class="
                absolute
                inset-0
                bg-gradient-to-r
                from-black/80
                via-black/30
                hidden
                md:block
              "
            />
            <div class="absolute inset-0 bg-black/60 block md:hidden" />
            <div class="flex flex-col justify-center relative p-12 md:py-32">
              <h4 class="text-accent-lightest">Contact Us</h4>
              <h2 class="text-accent-lightest">Interested In Our Services?</h2>
              <p class="text-accent-lightest">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus
                massa tortor est.
              </p>
              <router-link
                :to="{ name: 'contact' }"
                class="btn btn-xl btn-light mt-8"
                @mouseenter="() => onCTAHoverStart()"
                @mouseleave="() => onCTAHoverEnd()"
              >
                <span> Get In Touch </span>
              </router-link>
            </div>
          </div>
        </div>
      </Container>
    </div>
  </Texture>
</template>

<script setup>
import Container from "@/components/layouts/Container.vue";
import FullSplit from "@/components/layouts/FullSplit.vue";
import Carousel from "@/components/layouts/Carousel.vue";
import Texture from "@/components/base/Texture.vue";

const getImageURL = (name) => {
  return new URL(`../../assets/images/${name}`, import.meta.url).href;
};

const cards = [
  {
    subtitle: "Commercial Sites",
    title: "Industries We Serve",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus massa tortor est, quam sed. Pellentesque scelerisque gravida auctor nibh eu id lacus",
    pathName: "industries",
    imgSrc: getImageURL("airplane.png"),
    buttonText: "View Industries",
  },
  {
    subtitle: "Geographic Zones",
    title: "Areas We Serve",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus massa tortor est, quam sed. Pellentesque scelerisque gravida auctor nibh eu id lacus",
    pathName: "areas",
    imgSrc: getImageURL("crops.png"),
    buttonText: "View Areas",
  },
];

const onCardHoverStart = (index) => {
  const card = document.getElementById(`card-${index}`);
  card.classList.add("scale-105");
};

const onCardHoverEnd = (index) => {
  const card = document.getElementById(`card-${index}`);
  card.classList.remove("scale-105");
};

const onCTAHoverStart = () => {
  const cta = document.getElementById("cta");
  cta.classList.add("scale-105");
};

const onCTAHoverEnd = () => {
  const cta = document.getElementById("cta");
  cta.classList.remove("scale-105");
};
</script>
