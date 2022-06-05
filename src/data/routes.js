export const ROUTES_SOURCE = [
  {
    path: "/",
    label: "home",
    name: "home",
    component: () => import("@/views/home/index.vue"),
    meta: { title: "Home" }
  },
  {
    path: "/about",
    label: "about us",
    name: "about",
    component: () => import("@/views/about/index.vue"),
    meta: { title: "About Us", subtitle: "Imperial Falconry Services Inc." }
  },
  {
    path: "/services",
    label: "services",
    name: "services",
    component: () => import("@/views/services/index.vue"),
    meta: { title: "What We Offer", subtitle: "Services" }
  },
  {
    path: "/birds",
    label: "Our Birds",
    name: "birds",
    component: () => import("@/views/birds/index.vue"),
    meta: { title: "Our Birds", subtitle: "Meet The Team" }
  },
  {
    path: "/industries",
    label: "industries",
    name: "industries",
    component: () => import("@/views/industries/index.vue"),
    meta: { title: "Industries We Serve", subtitle: "Commercial Sites" }
  },
  {
    path: "/areas",
    label: "areas",
    name: "areas",
    component: () => import("@/views/areas/index.vue"),
    meta: { title: "Areas We Serve", subtitle: "Geographical Zones" }
  },
  {
    path: "/faq",
    label: "FAQ",
    name: "faq",
    component: () => import("@/views/faq/index.vue"),
    meta: { title: "Frequently Asked Questions", subtitle: "Find The Answers To Your Questions" }
  },
  {
    path: "/blog",
    label: "blog",
    name: "blog",
    component: () => import("@/views/blog/index.vue"),
    meta: { title: "Our Blog", subtitle: "Ideas, Thoughts, And Insights" }
  },
  {
    path: "/blog/:id",
    label: "post",
    name: "post",
    component: () => import("@/views/blog/post/index.vue"),
    hidden: true,
    meta: { title: "Post" }
  },
  {
    path: "/contact",
    label: "contact us",
    name: "contact",
    component: () => import("@/views/contact/index.vue"),
    meta: { title: "contact us", subtitle: "Get In Touch" }
  }
];
