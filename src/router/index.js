import Vue from "vue";
import VueRouter from "vue-router";
import Router from "vue-router";

Vue.use(VueRouter);

export const constantRoutes = [
  {
    path: "/",
    name: "Index",
    component: () => import("../views/Index")
  },
  {
    path: "/product",
    name: "Product",
    component: () => import("../views/Product")
  },
  {
    path: "/home/:category_slug",
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

const createRouter = () =>
  new Router({
    // mode: 'history', // require service support
    scrollBehavior: () => ({ y: 0 }),
    routes: constantRoutes,
    linkExactActiveClass: "active",
    linkActiveClass: "active-inner"
  });

const router = createRouter();

// Creates a `nextMiddleware()` function which not only
// runs the default `next()` callback but also triggers
// the subsequent Middleware function.
function nextFactory(context, middleware, index) {
  const subsequentMiddleware = middleware[index];
  // If no subsequent Middleware exists,
  // the default `next()` callback is returned.
  if (!subsequentMiddleware) return context.next;

  return (...parameters) => {
    // Run the default Vue Router `next()` callback first.
    context.next(...parameters);
    // Then run the subsequent Middleware with a new
    // `nextMiddleware()` callback.
    const nextMiddleware = nextFactory(context, middleware, index + 1);
    subsequentMiddleware({ ...context, next: nextMiddleware });
  };
}

router.beforeEach((to, from, next) => {
  let middleware = [];
  try {
    for (const item of to.matched) {
      if (item.meta.middleware) {
        middleware = middleware.concat(
          Array.isArray(item.meta.middleware)
            ? item.meta.middleware
            : [item.meta.middleware]
        );
      }
    }
  } catch (error) {
    console.log(error);
  }
  if (middleware.length > 0) {
    const context = {
      from,
      next,
      router,
      to
    };
    const nextMiddleware = nextFactory(context, middleware, 1);
    return middleware[0]({ ...context, next: nextMiddleware });
  }
  return next();
});

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter();
  router.matcher = newRouter.matcher; // reset router
}

export default router;
