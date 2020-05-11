<template>
  <section id="content" class="pt-5">
    <div class="text-center">
      <h1 class="mb-40px">Оформление Заказа</h1>
    </div>
    <div class="cart-container">
      <div class="container">
        <div class="row mb-30px">
          <div class="col-sm-8">
            <div class="shadow-container">
              <h4 class="mb-20px">Страна доставки</h4>
              <div class="row">
                <div class="col-sm-8">
                  <div id="flag" data-input-name="country"></div>
                </div>
              </div>
              <!--row-->
            </div>
            <!--shadow-container-->
            <div class="shadow-container">
              <h4 class="mb-20px">Адрес электронной почты</h4>
              <div class="zakaz-email">company1234@gmail.com</div>
            </div>
            <!--shadow-container-->
            <div class="shadow-container">
              <h4 class="mb-20px">Адрес доставки</h4>
              <div class="zakaz-form">
                <div class="form-group">
                  <label for="">Имя</label>
                  <input type="text" class="form-control" />
                </div>
                <div class="form-group">
                  <label for="">Фамилия</label>
                  <input type="text" class="form-control" />
                </div>
                <div class="form-group">
                  <label for="">Мобильный телефон</label>
                  <input type="text" class="form-control" />
                </div>
                <div class="form-group">
                  <label for="">Адрес</label>
                  <input type="text" class="form-control" />
                </div>
                <div class="form-group">
                  <label for="">Город</label>
                  <input type="text" class="form-control" />
                </div>
              </div>
            </div>
            <!--shadow-container-->
            <div class="shadow-container d-none d-md-block">
              <h4 class="mb-20px">Способы оплаты</h4>
              <div class="so-container">
                <div class="so"><img src="images/yad.png" alt="" /></div>
                <div class="so"><img src="images/webmoney.png" alt="" /></div>
                <div class="so"><img src="images/maestro.png" alt="" /></div>
                <div class="so"><img src="images/visa.png" alt="" /></div>
                <div class="so"><img src="images/paypal.png" alt="" /></div>
              </div>
            </div>
            <!--shadow-container-->
            <div class="zakaz-buttons d-none d-md-block">
              <div class="row align-items-center">
                <div class="col-sm-4">
                  <a href="#" class="btn btn-default bordered">Заказать</a>
                </div>
                <div class="col-sm-8">
                  <p>
                    Размещая заказ, вы принимаете наши Правила и условия,
                    Политику конфиденциальности и Политику возврата товаров.
                  </p>
                </div>
              </div>
              <!--row-->
            </div>
          </div>
          <!--col-sm-8-->
          <div class="col-sm-4">
            <div class="shadow-container">
              <div class="row">
                <div class="col-sm-7 col-7">
                  <h4 class="mb-20px">Количество товаров - 3</h4>
                </div>
                <div class="col-sm-5 col-5">
                  <div class="edit-zakaz"><a href="#">Изменить</a></div>
                </div>
              </div>
              <div class="zakaz-right-list">
                <div class="single-zrl mb-35px">
                  <div class="row">
                    <div class="col-sm-5 col-5">
                      <div class="szrl-image">
                        <img
                          class="img-fluid "
                          src="images/tmp/c1.jpg"
                          alt=""
                        />
                      </div>
                    </div>
                    <!--col-sm-4-->
                    <div class="col-sm-7 col-7">
                      <div class="szrl-price">1 790,00 руб.</div>
                      <div class="szrl-brand">A.Kjrbede</div>
                      <div class="szrl-info">
                        Длинный лонгслив с сетчатой тделкой ASOS DESIG…
                      </div>
                      <div class="szrl-bottom">
                        <div class="szrl-color">Черный</div>
                        <div class="szrl-color">XL</div>
                      </div>
                      <div class="szrl-number">Кол-во: <span>1</span></div>
                    </div>
                  </div>
                  <!--row-->
                </div>
                <!--single-zrl-->
                <div class="single-zrl mb-35px">
                  <div class="row">
                    <div class="col-sm-5 col-5">
                      <div class="szrl-image">
                        <img
                          class="img-fluid "
                          src="images/tmp/c1.jpg"
                          alt=""
                        />
                      </div>
                    </div>
                    <!--col-sm-4-->
                    <div class="col-sm-7 col-7">
                      <div class="szrl-price">1 790,00 руб.</div>
                      <div class="szrl-brand">A.Kjrbede</div>
                      <div class="szrl-info">
                        Длинный лонгслив с сетчатой тделкой ASOS DESIG…
                      </div>
                      <div class="szrl-bottom">
                        <div class="szrl-color">Черный</div>
                        <div class="szrl-color">XL</div>
                      </div>
                      <div class="szrl-number">Кол-во: <span>1</span></div>
                    </div>
                  </div>
                  <!--row-->
                </div>
                <!--single-zrl-->
                <div class="single-zrl">
                  <div class="row">
                    <div class="col-sm-5 col-5">
                      <div class="szrl-image">
                        <img
                          class="img-fluid "
                          src="images/tmp/c1.jpg"
                          alt=""
                        />
                      </div>
                    </div>
                    <!--col-sm-4-->
                    <div class="col-sm-7 col-7">
                      <div class="szrl-price">1 790,00 руб.</div>
                      <div class="szrl-brand">A.Kjrbede</div>
                      <div class="szrl-info">
                        Длинный лонгслив с сетчатой тделкой ASOS DESIG…
                      </div>
                      <div class="szrl-bottom">
                        <div class="szrl-color">Черный</div>
                        <div class="szrl-color">XL</div>
                      </div>
                      <div class="szrl-number">Кол-во: <span>1</span></div>
                    </div>
                  </div>
                  <!--row-->
                </div>
                <!--single-zrl-->
              </div>
              <!--zakaz-right-list-->
            </div>
            <!--shadow-container-->
            <div class="shadow-container">
              <div class="row mb-15px">
                <div class="col-sm-6 col-6">
                  <div class="zb-p">Итого</div>
                </div>
                <!--col-sm-6-->
                <div class="col-sm-6 col-6">
                  <div class="zb-p">4 970,00 руб.</div>
                </div>
                <!--col-sm-6-->
              </div>
              <!--row-->
              <div class="row">
                <div class="col-sm-6 col-6">
                  <div class="zb-p"><span>Всего к оплате:</span></div>
                </div>
                <!--col-sm-6-->
                <div class="col-sm-6 col-6">
                  <div class="zb-p"><span>4 970,00 руб.</span></div>
                </div>
                <!--col-sm-6-->
              </div>
              <!--row-->
            </div>
            <!--shadow-container-->
            <div class="shadow-container d-md-none d-block">
              <h4 class="mb-20px">Способы оплаты</h4>
              <div class="owl-carousel filter-carousel ">
                <div class="so item"><img src="images/yad.png" alt="" /></div>
                <div class="so item">
                  <img src="images/webmoney.png" alt="" />
                </div>
                <div class="so item">
                  <img src="images/maestro.png" alt="" />
                </div>
                <div class="so item"><img src="images/visa.png" alt="" /></div>
                <div class="so item">
                  <img src="images/paypal.png" alt="" />
                </div>
              </div>
            </div>
            <!--shadow-container-->
            <div class="zakaz-buttons d-md-none d-block">
              <div class="row align-items-center">
                <div class="col-sm-4">
                  <a href="#" class="btn btn-default bordered mb-20px"
                    >Заказать</a
                  >
                </div>
                <div class="col-sm-8">
                  <p>
                    Размещая заказ, вы принимаете наши Правила и условия,
                    Политику конфиденциальности и Политику возврата товаров.
                  </p>
                </div>
              </div>
              <!--row-->
            </div>
          </div>
          <!--col-sm-4-->
        </div>
        <!--row--->
      </div>
      <!--container-->
    </div>
    <!--cart-container-->
  </section>
  <!--content-->
</template>

<script>
export default {
  name: "Order"
};
</script>

<style></style>
