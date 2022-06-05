<template>
  <Header />

  <Texture>
    <Split title="About IFSI">
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
        src="@/assets/images/about.png"
        class="w-full h-full object-cover"
        alt="a hawk about to take flight from a falconers glove"
      />
    </Split>
  </Texture>

  <FullSplit flipped dark center leftClass="lg:py-96 xl:py-80">
    <h2 class="text-accent-lightest">How It Started</h2>
    <p class="text-accent-lightest">
      How It Started Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Turpis sit id nulla id sed tellus. Nisi, cum ipsum massa non, id. Nisi,
      sed mi id a vulputate tempor nisi. Aliquet ac elementum faucibus nec. Nibh
      vitae id diam adipiscing nam. Mi nibh quam massa accumsan. Tristique
      varius nisi tellus sed posuere amet risus ante.
      <br /><br />
      Sit purus at ac id ut. Massa, lacus, sit sed non tortor at risus
      scelerisque quis. Amet lobortis mattis mi aliquet congue justo. Tincidunt
      vestibulum ut cursus ac porta erat faucibus nullam quisque. Quam mi,
      semper sed id et ipsum est. Sit nibh vestibulum, elementum molestie.
    </p>
    <template v-slot:right>
      <img
        src="@/assets/images/how.png"
        class="w-full h-full object-cover"
        alt="falconer facing into the distance holding a hawk"
      />
    </template>
  </FullSplit>

  <Texture>
    <Container>
      <div class="text-center flex flex-col items-center py-12">
        <h2>About Michael</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis sit id
          nulla id sed tellus. Nisi, cum ipsum massa non, id. Nisi, sed mi id a
          vulputate tempor nisi. Aliquet ac elementum faucibus nec. Nibh vitae
          id diam adipiscing nam. Mi nibh quam massa accumsan. Tristique varius
          nisi tellus sed posuere amet risus ante. <br /><br />
          Sit purus at ac id ut. Massa, lacus, sit sed non tortor at risus
          scelerisque quis. Amet lobortis mattis mi aliquet congue justo.
          Tincidunt vestibulum ut cursus ac porta erat faucibus nullam quisque.
          Quam mi, semper sed id et ipsum est. Sit nibh vestibulum, elementum
          molestie. Nulla scelerisque morbi nisl, tortor. Pretium at dui
          scelerisque quis. <br /><br />
          Sit purus at ac id ut. Massa, lacus, sit sed non tortor at risus
          scelerisque quis. Amet lobortis mattis mi aliquet congue justo.
          Tincidunt vestibulum ut cursus ac porta erat faucibus nullam.
        </p>
      </div>
    </Container>
  </Texture>

  <NarrowCTA />
</template>

<script setup>
import Header from "@/components/base/Header.vue";
import Container from "@/components/layouts/Container.vue";
import Split from "@/components/layouts/Split.vue";
import Texture from "@/components/base/Texture.vue";
import FullSplit from "@/components/layouts/FullSplit.vue";
import NarrowCTA from "@/components/layouts/cta/NarrowCTA.vue";
</script>