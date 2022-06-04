<template>
  <Header />

  <Texture>
    <Split title="Custom Solutions For your Business">
      <template v-slot:extra-content>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis sit id
          nulla id sed tellus. Nisi, cum ipsum massa non, id. Nisi, sed mi id a
          vulputate tempor nisi. Aliquet ac elementum faucibus nec. Nibh vitae
          id diam adipiscing nam. Mi nibh quam massa accumsan. Tristique varius
          nisi tellus sed posuere amet risus ante. <br />
          Sit purus at ac id ut. Massa, lacus, sit sed non tortor at risus
          scelerisque quis. Amet lobortis mattis mi aliquet congue justo.
          Tincidunt vestibulum ut cursus ac porta erat faucibus nullam quisque.
          Quam mi, semper sed id et ipsum est. Sit nibh vestibulum, elementum
          molestie. Nulla scelerisque morbi nisl, tortor. Pretium at dui
          scelerisque quis.<br />
          Sit purus at ac id ut. Massa, lacus, sit sed non tortor at risus
          scelerisque quis. Amet lobortis mattis mi aliquet congue justo.
          Tincidunt vestibulum ut cursus ac porta erat faucibus nullam.
        </p>
      </template>
      <img
        src="@/assets/images/services-1.png"
        class="w-full h-full object-cover"
        alt="a hawk about to land"
      />
    </Split>

    <Container>
      <div
        class="
          flex flex-col
          items-center
          text-center
          relative
          p-12
          md:py-20
          bg-accent-darkest
        "
      >
        <h2 class="text-accent-lightest">Eliminate Liability</h2>
        <p class="text-accent-lightest max-w-4xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis sit id
          nulla id sed tellus. Nisi, cum ipsum massa non, id. Nisi, sed mi id a
          vulputate tempor nisi. Aliquet ac elementum faucibus nec. Nibh vitae
          id diam adipiscing nam. Mi nibh quam massa accumsan. Tristique varius
          nisi tellus sed posuere amet risus ante utate tempor nisi. Aliquet ac
          elementu.
        </p>
      </div>
    </Container>

    <Split title="why falconry is the most effective option" flip>
      <template v-slot:extra-content>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis sit id
          nulla id sed tellus. Nisi, cum ipsum massa non, id. Nisi, sed mi id a
          vulputate tempor nisi. Aliquet ac elementum faucibus nec. Nibh vitae
          id diam adipiscing nam. Mi nibh quam massa accumsan. Tristique varius
          nisi tellus sed posuere amet risus ante. <br />
          Sit purus at ac id ut. Massa, lacus, sit sed non tortor at risus
          scelerisque quis. Amet lobortis mattis mi aliquet congue justo.
          Tincidunt vestibulum ut cursus ac porta erat faucibus nullam quisque.
          Quam mi, semper sed id et ipsum est. Sit nibh vestibulum, elementum
          molestie. Nulla scelerisque morbi nisl, tortor. Pretium at dui
          scelerisque quis.<br />
          Sit purus at ac id ut. Massa, lacus, sit sed non tortor at risus
          scelerisque quis. Amet lobortis mattis mi aliquet congue justo.
          Tincidunt vestibulum ut cursus ac porta erat faucibus nullam.
        </p>
      </template>
      <img
        src="@/assets/images/services-2.png"
        class="w-full h-full object-cover"
        alt="a closeup of a hawks talons on a falconer glove"
      />
    </Split>
  </Texture>

  <NarrowCTA />
</template>

<script setup>
import Header from "@/components/base/Header.vue";
import Container from "@/components/layouts/Container.vue";
import Texture from "@/components/base/Texture.vue";
import Split from "@/components/layouts/Split.vue";
import NarrowCTA from "@/components/layouts/cta/NarrowCTA.vue";
</script>