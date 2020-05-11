import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/first-page",
    name: "FirstPage",
    component: () => import("../views/FirstPage")
  },
  {
    path: "/single",
    name: "Single",
    component: () => import("../views/Single")
  },
  {
    path: "/",
    name: "Home",
    component: () => import("../views/Home")
  },
  {
    path: "/brands",
    name: "Brands",
    component: () => import("../views/Brands")
  },
  {
    path: "/cabinet",
    name: "Cabinet",
    component: () => import("../views/Cabinet")
  },
  {
    path: "/cart",
    name: "Cart",
    component: () => import("../views/Cart")
  },
  {
    path: "/category",
    name: "Category",
    component: () => import("../views/Category/Index")
  },
  {
    path: "/vacancy",
    name: "Vacancy",
    component: () => import("../views/Vacancy")
  },
  {
    path: "/why-we",
    name: "WhyWe",
    component: () => import("../views/WhyWe")
  },
  {
    path: "/contact-us",
    name: "ContactUs",
    component: () => import("../views/ContactUs")
  },
  {
    path: "/order",
    name: "Order",
    component: () => import("../views/Order")
  }
];

const router = new VueRouter({
  routes
});

export default router;
