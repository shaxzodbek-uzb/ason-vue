<template>
  <section id="content">
    <div class="cart-container">
      <div class="container">
        <div class="row mb-30px">
          <div class="col-sm-8">
            <div class="shadow-container">
              <h3 class="mb-20px">Warenkorb (3 Artikel)</h3>
              <table class="table cart-table">
                <tr>
                  <td>
                    <div class="cart-single-block">
                      <div class="csb-image">
                        <img src="images/tmp/c1.jpg" alt="" />
                      </div>
                      <!--csb-image-->
                    </div>
                    <!--cart-single-block-->
                  </td>
                  <td>
                    <div class="csb-info">
                      <div class="csb-link">A.Kjrbede</div>
                      <div class="csb-subtitle">
                        WIVI - Sonnenbrille - gold-coloured/pink
                      </div>
                      <div class="csb-info-list">
                        <div class="csb-text">Farbe: gold</div>
                        <div class="csb-text">Grobe: One Size</div>
                      </div>
                      <div class="csb-bottom">
                        <a href="#" class="delete"
                          ><i class="fa fa-trash-o" aria-hidden="true"></i>
                          Удалить</a
                        >
                        <a href="#"
                          ><i class="fa fa-heart-o" aria-hidden="true"></i> В
                          избранное</a
                        >
                      </div>
                    </div>
                    <!--csb-info-->
                  </td>
                  <td>
                    <div class="cart-counts">
                      <select name="" id="" class="sel">
                        <option value="">1</option>
                        <option value="">1</option>
                        <option value="">1</option>
                        <option value="">1</option>
                        <option value="">1</option>
                      </select>
                      <div class="csb-price">29,95 $</div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div class="cart-single-block">
                      <div class="csb-image">
                        <img src="images/tmp/c1.jpg" alt="" />
                      </div>
                      <!--csb-image-->
                    </div>
                    <!--cart-single-block-->
                  </td>
                  <td>
                    <div class="csb-info">
                      <div class="csb-link">A.Kjrbede</div>
                      <div class="csb-subtitle">
                        WIVI - Sonnenbrille - gold-coloured/pink
                      </div>
                      <div class="csb-info-list">
                        <div class="csb-text">Farbe: gold</div>
                        <div class="csb-text">Grobe: One Size</div>
                      </div>
                      <div class="csb-bottom">
                        <a href="#" class="delete"
                          ><i class="fa fa-trash-o" aria-hidden="true"></i>
                          Удалить</a
                        >
                        <a href="#"
                          ><i class="fa fa-heart-o" aria-hidden="true"></i> В
                          избранное</a
                        >
                      </div>
                    </div>
                    <!--csb-info-->
                  </td>
                  <td>
                    <div class="cart-counts">
                      <select name="" id="" class="sel">
                        <option value="">1</option>
                        <option value="">1</option>
                        <option value="">1</option>
                        <option value="">1</option>
                        <option value="">1</option>
                      </select>
                      <div class="csb-price">29,95 $</div>
                    </div>
                  </td>
                </tr>
              </table>

              <!--table-->
              <div class="cart-question">
                <a href="#"
                  ><i class="fa fa-exclamation-circle" aria-hidden="true"></i>
                  Artikel im Warenkorb werden nicht reserviert.</a
                >
              </div>
            </div>
            <!--shadow-container-->
            <div class="row">
              <div class="col-sm-6">
                <div class="shadow-container">
                  <h4 class="mb-15px">Wir akzeptieren</h4>
                  <div class="text-block fs-13px">Пн 21.03-Вт 22.03</div>
                </div>
              </div>
            </div>
            <!--row-->
            <div class="row">
              <div class="col-sm-6">
                <div class="shadow-container">
                  <h4 class="mb-15px">Wir akzeptieren</h4>
                  <div class="text-block fs-13px">Пн 21.03-Вт 22.03</div>
                </div>
              </div>
            </div>
            <!--row-->
          </div>
          <!--col-sm-8-->
          <div class="col-sm-4">
            <div class="shadow-container">
              <h3 class="mb-20px">Gesamtsumme</h3>
              <div class="cart-price-container">
                <div class="cpc-block">
                  <div class="row">
                    <div class="col-sm-8">
                      <div class="cpc-text">Zwischensumme</div>
                    </div>
                    <div class="col-sm-4">
                      <div class="cpc-price">359,85 $</div>
                    </div>
                  </div>
                  <!--row-->
                </div>
                <!--cpc-block-->
                <div class="cpc-block">
                  <div class="row">
                    <div class="col-sm-8">
                      <div class="cpc-text">Lieferung</div>
                    </div>
                    <div class="col-sm-4">
                      <div class="cpc-price">gratis</div>
                    </div>
                  </div>
                  <!--row-->
                </div>
                <!--cpc-block-->
              </div>
              <!--cart-price-container-->
              <div class="cpc-block">
                <div class="row">
                  <div class="col-sm-9">
                    <div class="cpc-text">
                      <strong>Gesamtsumme (inkl. MwSt.)</strong>
                    </div>
                  </div>
                  <div class="col-sm-3">
                    <div class="cpc-price"><strong>359,85 $</strong></div>
                  </div>
                </div>
                <!--row-->
              </div>
              <!--cpc-block-->
              <router-link :to="{ name: 'Order' }" class="btn btn-orange w-100">
                Zur kasse
              </router-link>
            </div>
            <!--shadow-container-->
          </div>
          <!--col-sm-4-->
        </div>
        <!--row--->
        <div class="category-list">
          <h3>Dazu passt</h3>
          <div class="row">
            <div class="col-sm-3">
              <div class="cc-block">
                <a href="#1" class="wish-icon"
                  ><i class="fa fa-heart-o" aria-hidden="true"></i
                ></a>
                <a href="#" class="cc-image">
                  <img src="images/tmp/c4.jpg" alt="" />
                </a>
                <div class="cc-content">
                  <div class="row">
                    <div class="col-sm-7">
                      <a href="#" class="cc-title">Zara</a>
                      <div class="cc-category"><a href="#">Сникерсы</a></div>
                    </div>
                    <div class="col-sm-5">
                      <div class="cc-price">204,95 €</div>
                    </div>
                  </div>
                  <!--row-->
                </div>
                <!--cc-content-->
              </div>
            </div>
            <div class="col-sm-3">
              <div class="cc-block">
                <a href="#1" class="wish-icon"
                  ><i class="fa fa-heart-o" aria-hidden="true"></i
                ></a>
                <a href="#" class="cc-image">
                  <img src="images/tmp/c4.jpg" alt="" />
                </a>
                <div class="cc-content">
                  <div class="row">
                    <div class="col-sm-7">
                      <a href="#" class="cc-title">Zara</a>
                      <div class="cc-category"><a href="#">Сникерсы</a></div>
                    </div>
                    <div class="col-sm-5">
                      <div class="cc-price">204,95 €</div>
                    </div>
                  </div>
                  <!--row-->
                </div>
                <!--cc-content-->
              </div>
            </div>
            <div class="col-sm-3">
              <div class="cc-block">
                <a href="#1" class="wish-icon"
                  ><i class="fa fa-heart-o" aria-hidden="true"></i
                ></a>
                <a href="#" class="cc-image">
                  <img src="images/tmp/c4.jpg" alt="" />
                </a>
                <div class="cc-content">
                  <div class="row">
                    <div class="col-sm-7">
                      <a href="#" class="cc-title">Zara</a>
                      <div class="cc-category"><a href="#">Сникерсы</a></div>
                    </div>
                    <div class="col-sm-5">
                      <div class="cc-price">204,95 €</div>
                    </div>
                  </div>
                  <!--row-->
                </div>
                <!--cc-content-->
              </div>
            </div>
            <div class="col-sm-3">
              <div class="cc-block">
                <a href="#1" class="wish-icon"
                  ><i class="fa fa-heart-o" aria-hidden="true"></i
                ></a>
                <a href="#" class="cc-image">
                  <img src="images/tmp/c4.jpg" alt="" />
                </a>
                <div class="cc-content">
                  <div class="row">
                    <div class="col-sm-7">
                      <a href="#" class="cc-title">Zara</a>
                      <div class="cc-category"><a href="#">Сникерсы</a></div>
                    </div>
                    <div class="col-sm-5">
                      <div class="cc-price">204,95 €</div>
                    </div>
                  </div>
                  <!--row-->
                </div>
                <!--cc-content-->
              </div>
            </div>
          </div>
        </div>
      </div>
      <!--container-->
    </div>
    <!--cart-container-->
  </section>
  <!--content-->
</template>

<script>
export default {
  name: "Cart"
};
</script>

<style></style>
