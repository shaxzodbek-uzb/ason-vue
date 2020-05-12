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
                <div class="registration-container">
                  <div class="register-b">
                    <i class="fa fa-user" aria-hidden="true"></i>
                    <a href="#popup-register" class="fancy">Регистрация</a>
                  </div>
                  <div>
                    <i class="fa fa-sign-in" aria-hidden="true"></i>
                    <a href="#popoup" class="fancy">Логин</a>
                  </div>
                </div>
                <!--registration-container-->
                <div class="language-container">
                  <ul class="list-unstyled">
                    <li><span>Ru</span></li>
                    <li><a href="#">En</a></li>
                  </ul>
                </div>
                <!--language-container-->
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
                  <li>
                    <router-link :to="{ name: 'Home' }">Damen</router-link>
                  </li>
                  <li>
                    <router-link :to="{ name: 'Home' }">Herren</router-link>
                  </li>
                  <li>
                    <router-link :to="{ name: 'Home' }">Kinder</router-link>
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
                <a href="#" class="wish-link">
                  <i class="fa fa-heart-o" aria-hidden="true"></i>
                  <div class="w-text">Избранное</div>
                </a>
                <router-link :to="{ name: 'Cart' }" class="cart-link">
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
                  <li>
                    <a href="#/category">Get the Look</a>
                    <div class="second-menu">
                      <div class="row">
                        <div class="col-sm-6">
                          <h6>Категории</h6>
                          <div class="row">
                            <div class="col-sm-4">
                              <ul class="list-unstyled">
                                <li><a href="#/category">Adidas</a></li>
                                <li>
                                  <a href="#/category">Banana Republic</a>
                                </li>
                                <li><a href="#/category">Baon</a></li>
                                <li><a href="#/category">Befree</a></li>
                                <li><a href="#/category">Betsy</a></li>
                                <li>
                                  <a href="#/category">Calvin Klein Jeans</a>
                                </li>
                                <li>
                                  <a href="#/category">Dorothy Perkins</a>
                                </li>
                                <li><a href="#/category">GAP</a></li>
                              </ul>
                            </div>
                            <!--col-sm-4-->
                            <div class="col-sm-4">
                              <ul class="list-unstyled">
                                <li><a href="#/category">Adidas</a></li>
                                <li>
                                  <a href="#/category">Banana Republic</a>
                                </li>
                                <li><a href="#/category">Baon</a></li>
                                <li><a href="#/category">Befree</a></li>
                                <li><a href="#/category">Betsy</a></li>
                                <li>
                                  <a href="#/category">Calvin Klein Jeans</a>
                                </li>
                                <li>
                                  <a href="#/category">Dorothy Perkins</a>
                                </li>
                                <li><a href="#/category">GAP</a></li>
                              </ul>
                            </div>
                            <!--col-sm-4-->
                            <div class="col-sm-4">
                              <ul class="list-unstyled">
                                <li><a href="#/category">Adidas</a></li>
                                <li>
                                  <a href="#/category">Banana Republic</a>
                                </li>
                                <li><a href="#/category">Baon</a></li>
                                <li><a href="#/category">Befree</a></li>
                                <li><a href="#/category">Betsy</a></li>
                                <li>
                                  <a href="#/category">Calvin Klein Jeans</a>
                                </li>
                                <li>
                                  <a href="#/category">Dorothy Perkins</a>
                                </li>
                                <li><a href="#/category">GAP</a></li>
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
                    <!--second-menu-->
                  </li>
                  <li>
                    <a href="#/category">Neu</a>
                    <div class="second-menu">
                      <div class="row">
                        <div class="col-sm-6">
                          <h6>Категории</h6>
                          <div class="row">
                            <div class="col-sm-4">
                              <ul class="list-unstyled">
                                <li><a href="#/category">Adidas</a></li>
                                <li>
                                  <a href="#/category">Banana Republic</a>
                                </li>
                                <li><a href="#/category">Baon</a></li>
                                <li><a href="#/category">Befree</a></li>
                                <li><a href="#/category">Betsy</a></li>
                                <li>
                                  <a href="#/category">Calvin Klein Jeans</a>
                                </li>
                                <li>
                                  <a href="#/category">Dorothy Perkins</a>
                                </li>
                                <li><a href="#/category">GAP</a></li>
                              </ul>
                            </div>
                            <!--col-sm-4-->
                            <div class="col-sm-4">
                              <ul class="list-unstyled">
                                <li><a href="#/category">Adidas</a></li>
                                <li>
                                  <a href="#/category">Banana Republic</a>
                                </li>
                                <li><a href="#/category">Baon</a></li>
                                <li><a href="#/category">Befree</a></li>
                                <li><a href="#/category">Betsy</a></li>
                                <li>
                                  <a href="#/category">Calvin Klein Jeans</a>
                                </li>
                                <li>
                                  <a href="#/category">Dorothy Perkins</a>
                                </li>
                                <li><a href="#/category">GAP</a></li>
                              </ul>
                            </div>
                            <!--col-sm-4-->
                            <div class="col-sm-4">
                              <ul class="list-unstyled">
                                <li><a href="#/category">Adidas</a></li>
                                <li>
                                  <a href="#/category">Banana Republic</a>
                                </li>
                                <li><a href="#/category">Baon</a></li>
                                <li><a href="#/category">Befree</a></li>
                                <li><a href="#/category">Betsy</a></li>
                                <li>
                                  <a href="#/category">Calvin Klein Jeans</a>
                                </li>
                                <li>
                                  <a href="#/category">Dorothy Perkins</a>
                                </li>
                                <li><a href="#/category">GAP</a></li>
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
                    <!--second-menu-->
                  </li>
                  <li><a href="#/category">Bekleidung</a></li>
                  <li><a href="#/category">Schuhe</a></li>
                  <li><a href="#/category">Sport</a></li>
                  <li><a href="#/category">Accessoires </a></li>
                  <li><a href="#/category">Beauty</a></li>
                  <li><a href="#/category">Premium</a></li>
                  <li><a href="#/category">Marken</a></li>
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
            <div class="col">
              <a href="#" class="heart-icon"
                ><i class="fa fa-heart-o" aria-hidden="true"></i
              ></a>
            </div>
            <div class="col">
              <a href="#" class="cart-mobile"
                ><i class="fa fa-shopping-cart" aria-hidden="true"></i
              ></a>
            </div>
          </div>
          <!--row-->
        </div>
      </div>
      <!--header-top-mobile-->
      <div class="header-bottom-mobile">
        <div class="container">
          <ul class="row">
            <li class="col"><a href="#">Мужчинам</a></li>
            <li class="col active"><a href="#">Женщинам</a></li>
            <li class="col"><a href="#">Детям</a></li>
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

export default {
  name: "Header",
  components: { Login, Registration },
  mounted() {
    window.$(".fancy").fancybox();
  }
};
</script>
