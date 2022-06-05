<template>
  <div class="bg-accent-darkest">
    <Container>
      <div class="max-w-5xl mx-auto">
        <div class="mb-5">
          <div class="h-96 w-full bg-accent-lightest">
            <img
              :src="post.imageSrc"
              class="w-full h-full object-cover"
              alt=""
            />
          </div>
          <caption class="w-full text-left mt-4 text-accent-lightest italic">
            Sagittis scelerisque nulla cursus in enim consectetur quam.
          </caption>
        </div>
        <div
          class="
            prose
            prose-p:leading-relaxed prose-p:text-accent-lightest
            prose-headings:font-serif prose-headings:text-accent-lightest
            prose-a:text-accent prose-a:underline
            max-w-full
          "
        >
          <h1 class="mb-3">{{ post.title }}</h1>
          <div class="flex items-center mb-6">
            <div>
              <p class="font-medium text-sm text-black">
                {{ post.author.name }}
              </p>
              <p class="text-sm">
                {{ post.date }}<span class="mx-1">&middot;</span
                >{{ post.readingTime }}
              </p>
            </div>
          </div>
          <a href="">This is a link</a>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
            aut molestias ipsa nesciunt dicta voluptate, vel explicabo velit
            quibusdam fugiat, consequuntur quos nam porro non, molestiae dolor
            perspiciatis! Ab hic mollitia, perferendis quas officia possimus
            beatae? Corrupti quaerat dolore vitae obcaecati inventore dolores
            quo sequi facere quasi cum quas, excepturi tenetur laboriosam
            dolorem cupiditate reprehenderit laborum, nostrum explicabo
            molestias nesciunt! Quam, accusamus. Ad itaque corrupti et. Neque
            vel molestias recusandae totam, quia, repudiandae iure sint enim
            perferendis officiis quaerat reiciendis id reprehenderit voluptatem.
            Fugiat enim id culpa impedit consequatur voluptate iste amet!
            Commodi facilis tempora laudantium molestias voluptates labore in!
            <br /><br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
            aut molestias ipsa nesciunt dicta voluptate, vel explicabo velit
            quibusdam fugiat, consequuntur quos nam porro non, molestiae dolor
            perspiciatis! Ab hic mollitia, perferendis quas officia possimus
            beatae? Corrupti quaerat dolore vitae obcaecati inventore dolores
            quo sequi facere quasi cum quas, excepturi tenetur laboriosam
            dolorem cupiditate reprehenderit laborum, nostrum explicabo
            molestias nesciunt! Quam, accusamus. Ad itaque corrupti et. Neque
            vel molestias recusandae totam, quia, repudiandae iure sint enim
            perferendis officiis quaerat reiciendis id reprehenderit voluptatem.
            Fugiat enim id culpa impedit consequatur voluptate iste amet!
            Commodi facilis tempora laudantium molestias voluptates labore in!
          </p>
        </div>
        <div class="flex justify-between mt-16">
          <button class="btn btn-xl btn-light"><span>Previous</span></button
          ><button class="btn btn-xl btn-light"><span>Next</span></button>
        </div>
      </div>
    </Container>
  </div>
</template>

<script setup>
import Header from "@/components/base/Header.vue";
import Container from "@/components/layouts/Container.vue";
import BlogContent from "@/components/layouts/blog/BlogContent.vue";

const getImageURL = (name) => {
  return new URL(`../../../assets/images/${name}`, import.meta.url).href;
};

const DEFAULT_ID = "post";
const DEFAULT_TITLE = "Avian pests and the risks they pose to your business";
const DEFAULT_DESCRIPTION =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto acesantium praesentium eius, ut atque fuga.";
const DEFAULT_AUTHOR = "Michael Thibert";
const DEFAULT_DATE = "Mar 16, 2020";
const DEFAULT_READ_TIME = "6 min read";
const DEFAULT_IMAGE_URL = getImageURL("avian.png");

const post = {
  id: DEFAULT_ID,
  title: DEFAULT_TITLE,
  description: DEFAULT_DESCRIPTION,
  author: DEFAULT_AUTHOR,
  date: DEFAULT_DATE,
  readingTime: DEFAULT_READ_TIME,
  imageSrc: DEFAULT_IMAGE_URL,
};
</script>