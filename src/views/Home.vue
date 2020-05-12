<template>
  <section id="content">
    <div class="top-block mb-50px">
      <div class="top-carousel owl-carousel">
        <div class="item">
          <div
            class="tc-block"
            style="background-image: url('images/tmp/t1.jpg');"
          >
            <a href="#" class="tc-img"><img src="images/tmp/t1.jpg" alt=""/></a>
            <div class="tc-white">
              <div class="tc-title">Легкие куртки и ветровки</div>
              <a href="#" class="more">Подробнее</a>
            </div>
          </div>
          <!--tc-block-->
        </div>
        <!--item-->
      </div>
    </div>
    <!--top-block-->
    <div class="container">
      <div class="catalog-container">
        <h3 class="mb-35px">Каталог</h3>
        <div class="catalog-carousel owl-carousel">
          <div class="item" v-for="item in sub_categories" :key="item.name">
            <div class="cc-block">
              <router-link :to="{ name: 'Category' }" class="cc-image">
                <img :src="item.image" alt="" />
              </router-link>
              <router-link :to="{ name: 'Category' }" class="cc-title">
                {{ item.name }}
              </router-link>
            </div>
            <!--cc-block-->
          </div>
        </div>
        <!--owl-carousel-->
      </div>
      <!--catalog-container-->
      <div class="block-container mb-35px">
        <h3 class="mb-25px">Пуховики и зимние куртки</h3>
        <a href="#" class="btn btn-white mb-35px"
          >Посмотреть <i class="fa fa-long-arrow-right" aria-hidden="true"></i
        ></a>
        <a href="#" class="big-image"
          ><img src="images/tmp/p1.jpg" alt="" class="img-fluid"
        /></a>
      </div>
      <!--catalog-container-->
      <div class="block-container">
        <h3 class="mb-25px">Сникерсы</h3>
        <a href="#" class="btn btn-white mb-35px">
          Посмотреть <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
        </a>
        <div class="catalog-carousel owl-carousel">
          <div class="item">
            <div class="cc-block">
              <a href="#1" class="wish-icon"
                ><i class="fa fa-heart-o" aria-hidden="true"></i
              ></a>
              <router-link :to="{ name: 'Product' }" class="cc-image">
                <img src="images/tmp/c4.jpg" alt="" />
              </router-link>
              <div class="cc-content">
                <div class="row">
                  <div class="col-sm-7">
                    <router-link :to="{ name: 'Product' }" class="cc-title">
                      Zara
                    </router-link>
                    <div class="cc-category">
                      <router-link :to="{ name: 'Product' }">
                        Сникерсы
                      </router-link>
                    </div>
                  </div>
                  <div class="col-sm-5">
                    <div class="cc-price">204,951 €</div>
                  </div>
                </div>
                <!--row-->
              </div>
              <!--cc-content-->
            </div>
            <!--cc-block-->
          </div>
          <!--item-->
        </div>
        <!--owl-carousel-->
      </div>
      <!--catalog-container-->
      <div class="block-container mb-35px">
        <h3>Еще больше товаров!</h3>
        <h5>Самые низкие цены на товар</h5>
        <a href="#" class="big-image"
          ><img src="images/tmp/e1.jpg" alt="" class="img-fluid"
        /></a>
      </div>
      <!--catalog-container-->
      <div class="block-container">
        <div class="catalog-carousel owl-carousel">
          <div class="item">
            <div class="cc-block">
              <a href="#1" class="wish-icon"
                ><i class="fa fa-heart-o" aria-hidden="true"></i
              ></a>
              <router-link :to="{ name: 'Product' }" class="cc-image">
                <img src="images/tmp/c4.jpg" alt="" />
              </router-link>
              <div class="cc-content">
                <div class="row">
                  <div class="col-sm-7">
                    <router-link :to="{ name: 'Product' }" class="cc-title">
                      Zara
                    </router-link>
                    <div class="cc-category">
                      <router-link :to="{ name: 'Product' }"
                        >Сникерсы</router-link
                      >
                    </div>
                  </div>
                  <div class="col-sm-5">
                    <div class="cc-price">204,95 €</div>
                  </div>
                </div>
                <!--row-->
              </div>
              <!--cc-content-->
            </div>
            <!--cc-block-->
          </div>
          <!--item-->
        </div>
        <!--owl-carousel-->
      </div>
      <!--catalog-container-->
      <div class="block-container mb-50px">
        <h3 class="mb-25px">Bleib auf dem Laufen</h3>
        <div class="row">
          <div
            class="col-sm-3 col-6"
            v-for="item in sub_categories_1"
            :key="item.name"
          >
            <div class="bc-block">
              <router-link :to="{ name: 'Category' }" class="bc-img">
                <img :src="item.image" alt="" />
              </router-link>
              <router-link :to="{ name: 'Category' }" class="bc-title">
                {{ item.name }}
              </router-link>
            </div>
            <!--bc-block-->
          </div>
          <!--col-sm-3-->
        </div>
        <!--row-->
      </div>
      <!--block-container-->
      <div class="block-container more-block mb-35px">
        <h3>Еще больше товаров!</h3>
        <h5>Самые низкие цены на товар</h5>
        <div class="relative-container">
          <a href="#" class="big-image"
            ><img src="images/tmp/m1.jpg" alt="" class="img-fluid"
          /></a>
          <div class="tc-white">
            <div class="tc-silver-title">Nuenhenen der Wotnche</div>
            <div class="tc-title">Легкие куртки и ветровки</div>
            <a href="#" class="more">Подробнее</a>
          </div>
        </div>
      </div>
      <!--catalog-container-->
      <div class="block-container mb-65px">
        <h3>Платья</h3>
        <a href="#" class="btn btn-white mb-35px">
          Посмотреть <i class="fa fa-long-arrow-right" aria-hidden="true"></i
        ></a>
        <div class="row">
          <div class="col-sm-4 col-6">
            <div class="cc-block">
              <a href="#1" class="wish-icon"
                ><i class="fa fa-heart-o" aria-hidden="true"></i
              ></a>
              <router-link :to="{ name: 'Product' }" class="cc-image">
                <img src="images/tmp/c4.jpg" alt="" />
              </router-link>
              <div class="cc-content">
                <div class="row">
                  <div class="col-sm-7">
                    <router-link :to="{ name: 'Product' }" class="cc-title">
                      Zara
                    </router-link>
                    <div class="cc-category">
                      <router-link :to="{ name: 'Product' }"
                        >Сникерсы</router-link
                      >
                    </div>
                  </div>
                  <div class="col-sm-5">
                    <div class="cc-price">204,95 €</div>
                  </div>
                </div>
                <!--row-->
              </div>
              <!--cc-content-->
            </div>
            <!--cc-block-->
          </div>
        </div>
        <!--row-->
      </div>
      <!--block-container-->
      <div class="block-container">
        <h3 class="mb-25px">Сникерсы</h3>
        <a href="#" class="btn btn-white mb-35px"
          >Посмотреть <i class="fa fa-long-arrow-right" aria-hidden="true"></i
        ></a>
        <div class="catalog-carousel owl-carousel">
          <div class="item">
            <div class="cc-block">
              <a href="#1" class="wish-icon"
                ><i class="fa fa-heart-o" aria-hidden="true"></i
              ></a>
              <router-link :to="{ name: 'Product' }" class="cc-image">
                <img src="images/tmp/c4.jpg" alt="" />
              </router-link>
              <div class="cc-content">
                <div class="row">
                  <div class="col-sm-7">
                    <router-link :to="{ name: 'Product' }" class="cc-title"
                      >Zara</router-link
                    >
                    <div class="cc-category">
                      <router-link :to="{ name: 'Product' }"
                        >Сникерсы</router-link
                      >
                    </div>
                  </div>
                  <div class="col-sm-5">
                    <div class="cc-price">204,95 €</div>
                  </div>
                </div>
                <!--row-->
              </div>
              <!--cc-content-->
            </div>
            <!--cc-block-->
          </div>
          <!--item-->
          <div class="item">
            <div class="cc-block">
              <a href="#" class="wish-icon"
                ><i class="fa fa-heart-o" aria-hidden="true"></i
              ></a>
              <router-link :to="{ name: 'Product' }" class="cc-image">
                <img src="images/tmp/c4.jpg" alt="" />
              </router-link>
              <div class="cc-content">
                <div class="row">
                  <div class="col-sm-7">
                    <router-link :to="{ name: 'Product' }" class="cc-title"
                      >Zara</router-link
                    >
                    <div class="cc-category">
                      <router-link :to="{ name: 'Product' }"
                        >Сникерсы</router-link
                      >
                    </div>
                  </div>
                  <div class="col-sm-5">
                    <div class="cc-price">204,95 €</div>
                  </div>
                </div>
                <!--row-->
              </div>
              <!--cc-content-->
            </div>
            <!--cc-block-->
          </div>
          <!--item-->
        </div>
        <!--owl-carousel-->
      </div>
      <!--catalog-container-->
      <div
        class="bottom-block"
        style="background-image: url('images/tmp/bottom1.jpg');"
      >
        <img src="images/tmp/bottom1.jpg" alt="" />
        <div class="bb-abs">
          <div class="row">
            <div class="col-sm-6">
              <h2>Personliches Styling</h2>
              <div class="bb-subtitle">Neuee Looks von Experten</div>
              <a href="#" class="btn btn-orange">In de n Warenkorb</a>
            </div>
            <!--col-sm-6-->
          </div>
          <!--row-->
        </div>
        <!--bb-abs-->
      </div>
      <!--bottom-block-->
      <div class="bottom-content">
        <div class="bc-cont mb-40px">
          <h3>
            Damenmode im Winter<br />
            Unsere Trends für die Saison
          </h3>
          <p>
            Bei den großartigen neuen Stoffen, Farben und Details wird es um
            jedes Fashion-Herz augenblicklich warm. Ob Sonne, Regen, Wind oder
            Schnee: Mit dem richtigen Styling bist du für jedes Wetter
            gewappnet. Und diese drei Musts für angesagte Winter Looks geben die
            nötigen Impulse:
          </p>
          <p>Denim Darling: Der Stoff aus dem Modeträume gemacht sind</p>
          <p>
            Einfach immer im Trend: Jeans-Stoffe. Der blaue Mode-Evergreen
            beweist sich auch im Winter als Allrounder. Denim punktet in der
            Übergangszeit in zahllosen Varianten: ob klassisch in Form von
            Jacken oder lässigen Kleidern. Die Farbpalette umfasst
            unterschiedliche Waschungen von Blau über Grau bis hin zu Schwarz.
            Für jeden Style findest du das richtige Piece – ob rockig im Used
            Look
          </p>
        </div>
        <div class="fpt-list mb-45px">
          <h5>Top Marken</h5>
          <div class="row">
            <div class="col-sm-2">
              <ul class="list-unstyled">
                <li><a href="#">Abercrombie & Fitch</a></li>
                <li><a href="#">Abercrombie & Fitch</a></li>
                <li><a href="#">Abercrombie & Fitch</a></li>
                <li><a href="#">Abercrombie & Fitch</a></li>
                <li><a href="#">Abercrombie & Fitch</a></li>
                <li><a href="#">Abercrombie & Fitch</a></li>
                <li><a href="#">Abercrombie & Fitch</a></li>
                <li><a href="#">Abercrombie & Fitch</a></li>
                <li><a href="#">Abercrombie & Fitch</a></li>
              </ul>
            </div>
            <div class="col-sm-2">
              <ul class="list-unstyled">
                <li><a href="#">Abercrombie & Fitch</a></li>
                <li><a href="#">Abercrombie & Fitch</a></li>
                <li><a href="#">Abercrombie & Fitch</a></li>
              </ul>
            </div>
            <div class="col-sm-2">
              <ul class="list-unstyled">
                <li><a href="#">Abercrombie & Fitch</a></li>
                <li><a href="#">Abercrombie & Fitch</a></li>
                <li><a href="#">Abercrombie & Fitch</a></li>
                <li><a href="#">Abercrombie & Fitch</a></li>
                <li><a href="#">Abercrombie & Fitch</a></li>
                <li><a href="#">Abercrombie & Fitch</a></li>
              </ul>
            </div>
            <div class="col-sm-2">
              <ul class="list-unstyled">
                <li><a href="#">Abercrombie & Fitch</a></li>
                <li><a href="#">Abercrombie & Fitch</a></li>
                <li><a href="#">Abercrombie & Fitch</a></li>
                <li><a href="#">Abercrombie & Fitch</a></li>
                <li><a href="#">Abercrombie & Fitch</a></li>
                <li><a href="#">Abercrombie & Fitch</a></li>
              </ul>
            </div>
            <div class="col-sm-2">
              <ul class="list-unstyled">
                <li><a href="#">Abercrombie & Fitch</a></li>
                <li><a href="#">Abercrombie & Fitch</a></li>
                <li><a href="#">Abercrombie & Fitch</a></li>
                <li><a href="#">Abercrombie & Fitch</a></li>
                <li><a href="#">Abercrombie & Fitch</a></li>
                <li><a href="#">Abercrombie & Fitch</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--container-->
  </section>
</template>

<script>
export default {
  name: "Home",
  components: {},
  data: () => {
    return {
      sub_categories: [
        {
          name: "Брюки",
          image: "images/tmp/c1.jpg"
        },
        {
          name: "Верхняя одежда",
          image: "images/tmp/c2.jpg"
        },
        {
          name: "Джинсы",
          image: "images/tmp/c3.jpg"
        },
        {
          name: "Туфли",
          image: "images/tmp/c4.jpg"
        }
      ],
      sub_categories_1: [
        {
          name: "Брюки",
          image: "images/tmp/bc1.jpg"
        },
        {
          name: "Верхняя одежда",
          image: "images/tmp/bc2.jpg"
        },
        {
          name: "Джинсы",
          image: "images/tmp/bc3.jpg"
        },
        {
          name: "Туфли",
          image: "images/tmp/bc4.jpg"
        }
      ]
    };
  },
  mounted() {
    this.$nextTick(() => {
      window.$(".top-carousel").owlCarousel({
        animateOut: "fadeOut",
        animateIn: "fadeIn",
        items: 1,
        smartSpeed: 800,
        margin: 0,
        nav: false,
        dots: false,
        autoplay: true,
        loop: true
      });
    });
    window.$(".catalog-carousel").owlCarousel({
      items: 4,
      smartSpeed: 800,
      margin: 33,
      nav: true,
      navText: [
        '<i class="fa fa-chevron-left" aria-hidden="true"></i>',
        '<i class="fa fa-chevron-right" aria-hidden="true"></i>'
      ],
      dots: false,
      autoplay: false,
      loop: true,
      responsive: {
        0: {
          items: 2
        },
        768: {
          items: 4
        }
      }
    });
  }
};
</script>
