<template>
  <header id="header">
    <div class="d-none d-md-block">
      <div class="header-top">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-sm-4">
              <div class="header-help">
                <i class="fa fa-exclamation-circle" aria-hidden="true"></i>
                <router-link :to="{ name: 'ContactUs' }">
                  Помощь и контакт
                </router-link>
              </div>
            </div>
            <!--col-sm-4-->
            <div class="offset-sm-3 col-sm-5">
              <div class="header-right">
                <div class="registration-container mx-0">
                  <div class="register-b" v-show="!login">
                    <i class="fa fa-user" aria-hidden="true"></i>
                    <a href="#popup-register" class="fancy">Регистрация</a>
                  </div>
                  <div v-show="!login">
                    <i class="fa fa-sign-in" aria-hidden="true"></i>
                    <a href="#popoup" class="fancy">Логин</a>
                  </div>
                  <div v-if="login" @click="logout()">
                    <i class="fa fa-sign-in" aria-hidden="true"></i>
                    <a>{{ user.name }}</a>
                  </div>
                </div>
                <!--registration-container-->
              </div>
              <!--header-right-->
            </div>
            <!--col-sm-5-->
          </div>
          <!--row-->
        </div>
        <!--container-->
      </div>
      <!--header-top-->
      <div class="header-middle">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-sm-4">
              <div class="middle-list">
                <ul class="list-unstyled">
                  <li v-for="item in main_categories" :key="item.id">
                    <router-link
                      :to="{
                        name: 'Home',
                        params: { category_slug: item.slug }
                      }"
                    >
                      {{ item.title }}
                    </router-link>
                  </li>
                </ul>
              </div>
              <!--middle-list-->
            </div>
            <!--col-sm-4-->
            <div class="col-sm-4">
              <div class="logo">
                <router-link :to="{ name: 'Home' }" class="mobile-logo">
                  <img src="images/logo.jpg" alt="" class="img-fluid" />
                </router-link>
              </div>
            </div>
            <!--col-sm-4-->
            <div class="col-sm-4">
              <div class="middle-right">
                <div class="language-container">
                  <ul class="list-unstyled">
                    <li><span>Ru</span></li>
                    <li><a href="#">En</a></li>
                  </ul>
                </div>
                <a href="#" class="wish-link" v-if="login">
                  <i class="fa fa-heart-o" aria-hidden="true"></i>
                  <div class="w-text">Избранное</div>
                </a>
                <router-link
                  :to="{ name: 'Cart' }"
                  class="cart-link"
                  v-if="login"
                >
                  <i class="fa fa-shopping-cart" aria-hidden="true"></i>
                  <div class="w-text">Корзина</div>
                  <div class="cart-count">2</div>
                </router-link>
              </div>
            </div>
            <!--col-sm-4-->
          </div>
          <!--row-->
        </div>
        <!--container-->
      </div>
      <!--header-middle-->
      <div class="header-bottom">
        <div class="container">
          <div class="row align-items-start">
            <div class="col-sm-8">
              <div class="header-nav">
                <ul class="list-unstyled">
                  <li v-for="item in categories" :key="item.id">
                    <a href="#/category">{{ item.title }}</a>
                    <div class="second-menu" v-if="item.children">
                      <div class="row">
                        <div class="col-sm-6">
                          <h6>Категории</h6>
                          <div class="row">
                            <div class="col-sm-4">
                              <ul class="list-unstyled">
                                <li
                                  v-for="item in sliceCategoryies(
                                    item.children.list,
                                    1
                                  )"
                                  :key="item.id"
                                >
                                  <a href="#/category">{{ item.title }}</a>
                                </li>
                              </ul>
                            </div>
                            <!--col-sm-4-->
                            <div class="col-sm-4">
                              <ul class="list-unstyled">
                                <li
                                  v-for="item in sliceCategoryies(
                                    item.children.list,
                                    2
                                  )"
                                  :key="item.id"
                                >
                                  <a href="#/category">{{ item.title }}</a>
                                </li>
                              </ul>
                            </div>
                            <!--col-sm-4-->
                            <div class="col-sm-4">
                              <ul class="list-unstyled">
                                <li
                                  v-for="item in sliceCategoryies(
                                    item.children.list,
                                    3
                                  )"
                                  :key="item.id"
                                >
                                  <a href="#/category">{{ item.title }}</a>
                                </li>
                              </ul>
                              <a href="#/category" class="orange-link"
                                >все категории ...</a
                              >
                            </div>
                            <!--col-sm-4-->
                          </div>
                          <!--row-->
                        </div>
                        <div class="col-sm-3">
                          <h6>Бренды</h6>
                          <ul class="list-unstyled">
                            <li><a href="#/category">Adidas</a></li>
                            <li><a href="#/category">Banana Republic</a></li>
                            <li><a href="#/category">Baon</a></li>
                            <li><a href="#/category">Befree</a></li>
                            <li><a href="#/category">Betsy</a></li>
                            <li><a href="#/category">Calvin Klein Jeans</a></li>
                            <li><a href="#/category">Dorothy Perkins</a></li>
                            <li><a href="#/category">GAP</a></li>
                          </ul>
                        </div>
                        <div class="col-sm-3">
                          <a href="#/category" class="right-menu-banner">
                            <img
                              src="images/menu1.jpg"
                              alt=""
                              class="img-fluid mb-20px"
                            />
                            <div class="rmb-text text-center">
                              <div class="rmb-title">Скидки до 50%</div>
                              <p>по промокоду на обувь</p>
                            </div>
                          </a>
                        </div>
                        <!--col-sm-3-->
                      </div>
                      <!--row-->
                    </div>
                  </li>
                </ul>
              </div>
              <!--header-nav-->
            </div>
            <!--col-sm-8-->
            <div class="col-sm-4">
              <div class="header-search clearfix">
                <input
                  placeholder="Serach your clothes....."
                  type="text"
                  class="form-control"
                />
                <button class="btn-search">
                  <i class="fa fa-search" aria-hidden="true"></i>
                </button>
              </div>
              <!--header-search-->
            </div>
          </div>
          <!--row-->
        </div>
        <!--container-->
      </div>
      <!--header-bottom-->
    </div>
    <div class="d-block d-md-none">
      <div class="header-top-mobile">
        <div class="container">
          <div class="row align-items-center">
            <div class="col">
              <a href="#" class="toggle-menu"
                ><i class="fa fa-bars" aria-hidden="true"></i
              ></a>
            </div>
            <div class="col">
              <a href="#" class="mobile-search-icon"
                ><i class="fa fa-search" aria-hidden="true"></i
              ></a>
            </div>
            <div class="col">
              <router-link :to="{ name: 'Home' }" class="mobile-logo">
                <img src="images/logo.jpg" alt="" />
              </router-link>
            </div>
            <div class="col" v-if="login">
              <a href="#" class="heart-icon"
                ><i class="fa fa-heart-o" aria-hidden="true"></i
              ></a>
            </div>
            <div class="col" v-if="login">
              <router-link :to="{ name: 'Cart' }" class="cart-mobile">
                <i class="fa fa-shopping-cart" aria-hidden="true"></i>
              </router-link>
            </div>
          </div>
          <!--row-->
        </div>
      </div>
      <!--header-top-mobile-->
      <div class="header-bottom-mobile">
        <div class="container">
          <ul class="row">
            <li class="col" v-for="item in main_categories" :key="item.id">
              <router-link
                :to="{ name: 'Home', params: { category_slug: item.slug } }"
                >{{ item.name }}</router-link
              >
            </li>
          </ul>
        </div>
      </div>
      <!--header-bottom-mobile-->
    </div>
    <!--d-md-none-->
    <Login />
    <Registration />
  </header>
  <!--header-->
</template>
<script>
import Login from "./popup/Login.vue";
import Registration from "./popup/Registration.vue";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "Header",
  components: { Login, Registration },
  computed: {
    ...mapGetters({
      main_categories: "category/getMain",
      login: "user/IS_AUTH",
      user: "user/USER"
    })
  },
  watch: {
    login: {
      handler: function(val) {
        if (val) {
          this.setupJQuery();
        }
      },
      immediate: true
    },

    $route: {
      handler: function(route) {
        if (route.params.category_slug) {
          let query = {
            parent: this.$route.params.category_slug,
            with_child: true
          };
          this.categoryList(query)
            .then(res => {
              this.categories = res.data.categories.list;
            })
            .catch(err => {
              console.log(err);
            });
          this.setupJQuery();
        }
      },
      immediate: true
    }
  },
  data() {
    return {
      categories: []
    };
  },
  mounted() {
    this.setupJQuery();
    this.categoryList().catch(err => {
      console.log(err);
    });
  },
  methods: {
    ...mapActions({ categoryList: "category/list", logout: "user/logout" }),
    setupJQuery() {
      setTimeout(function() {
        window.$(".fancy").fancybox();
        window.$(".fancybox-close").click();
        window.$(".header-nav ul li").on({
          mouseenter: function() {
            window
              .$(this)
              .find(".second-menu")
              .slideDown(200);
          },
          mouseleave: function() {
            window
              .$(this)
              .find(".second-menu")
              .slideUp(100);
          }
        });
      }, 2000);
    },
    sliceCategoryies(list, count) {
      return list ? list.slice((count - 1) * 8, count * 8 - 1) : [];
    }
  }
};
</script>
