<template>
  <section id="content" class="pt-5">
    <div class="container">
      <div class="top-contact-form-block">
        <div class="row">
          <div class="col-sm-6"></div>
          <!--col-sm-6-->
          <div class="col-sm-3">
            <h4>Контакты</h4>
            <div class="cc-phone">
              <div><a href="tel:+1234501000">+ (123) 450-10-00</a></div>
              <div><a href="tel:+1234501000">+ (123) 470-30-00</a></div>
            </div>
            <div class="cc-email">
              <a href="mailto:example@example.com">example@example.com</a>
            </div>
            <div class="cc-address">
              Москва, ул. Летниковская, д.10, стр.5, Россия
            </div>
          </div>
          <!--col-sm-3-->
          <div class="col-sm-3">
            <h4>График работы</h4>
            <div class="cc-grafik">
              <div><span>Пн - Пт:</span> 10:00 - 19:00</div>
              <div>Обед: 13:00 - 14:00</div>
              <div><span>Вс.</span> - Выходной</div>
            </div>
            <a href="#" class="btn btn-default bordered">Оставить заявку</a>
          </div>
          <!--col-sm-3-->
        </div>
        <!--row-->
      </div>
      <!--top-contact-form-block-->
      <div class="contact-form-block">
        <div class="cfb-title">Связаться с нами</div>
        <form action="">
          <div class="form-file">
            <div class="upload-btn-wrapper">
              <button class="btn btn-orange">Загрузить резюме</button>
              <input type="file" name="myfile" />
            </div>
            <span>Максимум 1 файл размером не более 10 МБ</span>
          </div>
          <div class="row">
            <div class="col-sm-6">
              <div class="form-group">
                <label for="">Фамилия, Имя, Отчество</label>
                <input type="text" class="form-control" />
              </div>
              <!--form-group-->
            </div>
            <!--col-sm-6-->
            <div class="col-sm-6">
              <div class="form-group">
                <label for="">Тема сообщения</label>
                <input type="text" class="form-control" />
              </div>
              <!--form-group-->
            </div>
            <!--col-sm-6-->
            <div class="col-sm-6">
              <div class="form-group">
                <label for="">E-mail</label>
                <input type="text" class="form-control" />
              </div>
              <!--form-group-->
              <div class="form-group">
                <label for="">Телефон</label>
                <input type="text" class="form-control" />
              </div>
              <!--form-group-->
            </div>
            <!--col-sm-6-->
            <div class="col-sm-6">
              <div class="form-group">
                <label for="">Дополнительная информация</label>
                <textarea
                  name=""
                  id=""
                  cols="30"
                  rows="10"
                  class="form-control"
                ></textarea>
              </div>
              <!--form-group-->
            </div>
            <!--col-sm-6-->
          </div>
          <!--row-->
          <button type="submit" class="btn btn-default bordered">
            Отправить
          </button>
        </form>
      </div>
      <!--contact-form-block-->
    </div>
    <!--container-->
  </section>
  <!--content-->
</template>

<script>
export default {
  name: "ContactUs"
};
</script>

<style></style>
