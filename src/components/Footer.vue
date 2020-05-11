<template>
  <footer id="footer">
    <div class="d-none d-md-block">
      <div class="container">
        <div class="footer-title">ОБСЛУЖИВАНИЕ КЛИЕНТОВ</div>
        <div class="top-footer-block">
          <div class="row">
            <div class="col-sm-4">
              <div class="hot-line">
                <div class="hl-text">Горячая линия</div>
                <div class="hl-phone">
                  <a href="tel:+998951993737 ">+998 (95) 199-37-37</a>
                </div>
                <div class="work-time">
                  Будни: с9:00 до 19:00 (Ташкентское время)
                </div>
              </div>
              <!--hot-line-->
            </div>
            <!--col-sm-4-->
            <div class="col-sm-5">
              <div class="footer-form">
                <a href="#">Форма обратной связи</a>
                <div class="ff-info">
                  свяжитесь с нами по контактной форме
                </div>
              </div>
              <!--footer-form-->
            </div>
            <!--col-sm-4-->
            <div class="col-sm-3">
              <div class="all-footer">
                <div class="silver-text">Узнать больше</div>
                <img src="images/soc-right.jpg" alt="" />
              </div>
              <!--all-footer-->
            </div>
            <!--col-sm-4-->
          </div>
          <!--row-->
          <hr />
        </div>
        <!--top-footer-block-->
        <div class="bottom-footer">
          <div class="row">
            <div class="col-sm-3">
              <div class="footer-nav">
                <div class="fn-title">Интернет магазин</div>
                <ul class="list-unstyled">
                  <li><a href="#">Центр поддержки Ason</a></li>
                  <li><a href="#">Статус заказа по номеру</a></li>
                  <li><a href="#">Оплата</a></li>
                  <li><a href="#">Условия возврата</a></li>
                  <li><a href="#">Условия доставки</a></li>
                  <li><a href="#">Как выбрать размер</a></li>
                  <li><a href="#">Как оформить заказ</a></li>
                </ul>
              </div>
              <!--footer-nav-->
            </div>
            <!--col-sm-3-->
            <div class="col-sm-9">
              <div class="row">
                <div class="col-sm-7">
                  <div class="row">
                    <div class="col-sm-6">
                      <div class="footer-nav">
                        <div class="fn-title">Магазины</div>
                        <ul class="list-unstyled">
                          <li><a href="#">Центр поддержки Ason</a></li>
                          <li><a href="#">Статус заказа по номеру</a></li>
                          <li><a href="#">Оплата</a></li>
                          <li><a href="#">Условия возврата</a></li>
                        </ul>
                      </div>
                      <!--footer-nav-->
                    </div>
                    <div class="col-sm-6">
                      <div class="footer-nav">
                        <div class="fn-title">Мой аккаунт</div>
                        <ul class="list-unstyled">
                          <li><a href="#">Центр поддержки Ason</a></li>
                          <li><a href="#">Статус заказа по номеру</a></li>
                          <li><a href="#">Оплата</a></li>
                        </ul>
                      </div>
                      <!--footer-nav-->
                    </div>
                  </div>
                </div>
                <div class="col-sm-5">
                  <div class="footer-rss">
                    <div class="fn-title">Новости</div>
                    <p>
                      Вы хотите плучать больше уведомлений об акциях и продажах?
                      Подпишитесь на нашу ссылку
                    </p>
                    <div class="input-group mb-15px">
                      <div class="input-group-prepend ">
                        <span
                          class="input-group-text"
                          id="validationTooltipUsernamePrepend"
                          >@</span
                        >
                      </div>
                      <input
                        type="text"
                        class="form-control"
                        id="validationTooltipUsername"
                        aria-describedby="validationTooltipUsernamePrepend"
                        required
                      />
                    </div>
                    <div class="fr-check">
                      <label class="check checked"
                        ><span class="checkbox"
                          ><input type="checkbox" name="12"
                        /></span>
                        Принимаю <a href="#">условия подписки</a></label
                      >
                    </div>
                    <a href="#" class="btn btn-primary">Подписаться</a>
                  </div>
                  <!--footer-rss-->
                </div>
                <!--col-sm-4-->
              </div>
              <!--row-->
              <div class="mobile-links">
                <a href="#"><img src="images/app-store.png" alt=""/></a>
                <a href="#"><img src="images/gp.png" alt=""/></a>
              </div>
            </div>
            <!--col-sm-9-->
          </div>
          <!--row-->
        </div>
        <!--bottom-footer-->
      </div>
      <!--container-->
    </div>
    <div class="d-md-none d-block">
      <div class="mobile-downloads">
        <div class="row align-items-center justify-content-center">
          <div class="col-6">
            <a href="#">
              <img src="images/appstore-d.png" alt="" class="img-fluid" />
            </a>
          </div>
          <!--col-sm-6-->
          <div class="col-6">
            <a href="#">
              <img src="images/google-play-d.png" alt="" class="img-fluid" />
            </a>
          </div>
          <!--col-sm-6-->
        </div>
        <!--row-->
      </div>
      <!--mobile-donwloads-->
      <div class="bottom-link-home">
        <a href="#">Перейти на основной сайт</a>
      </div>
      <!--bottom-link-home-->
    </div>
    <!--d-md-block-->
  </footer>
  <!--footer-->
</template>
<script>
export default {
  name: "Footer"
};
</script>
