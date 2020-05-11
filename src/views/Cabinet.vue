<template>
  <section id="content" class="pt-5">
    <div class="cabinet-container">
      <div class="container">
        <div class="row">
          <div class="col-sm-2">
            <div class="cabinet-left-block">
              <div
                class="nav flex-column nav-pills"
                id="v-pills-tab"
                role="tablist"
                aria-orientation="vertical"
              >
                <a
                  class="nav-link active"
                  id="v-pills-home-tab"
                  data-toggle="pill"
                  href="#v-pills-home"
                  role="tab"
                  aria-controls="v-pills-home"
                  aria-selected="true"
                  >Мои заказы</a
                >
                <a
                  class="nav-link"
                  id="v-pills-profile-tab"
                  data-toggle="pill"
                  href="#v-pills-profile"
                  role="tab"
                  aria-controls="v-pills-profile"
                  aria-selected="false"
                  >Dream Box</a
                >
                <a
                  class="nav-link"
                  id="v-pills-messages-tab"
                  data-toggle="pill"
                  href="#v-pills-messages"
                  role="tab"
                  aria-controls="v-pills-messages"
                  aria-selected="false"
                  >Premiere</a
                >
                <a
                  class="nav-link"
                  id="v-pills-settings-tab"
                  data-toggle="pill"
                  href="#v-pills-settings"
                  role="tab"
                  aria-controls="v-pills-settings"
                  aria-selected="false"
                  >Мои данные</a
                >
                <a
                  class="nav-link"
                  id="v-pills-settings-tab"
                  data-toggle="pill"
                  href="#v-pills-settings"
                  role="tab"
                  aria-controls="v-pills-settings"
                  aria-selected="false"
                  >Мои адреса</a
                >
                <a
                  class="nav-link"
                  id="v-pills-settings-tab"
                  data-toggle="pill"
                  href="#v-pills-settings"
                  role="tab"
                  aria-controls="v-pills-settings"
                  aria-selected="false"
                  >Мои размеры</a
                >
              </div>
            </div>
            <!--cabinet-left-block-->
          </div>
          <!--col-sm-1-->
          <div class="col-sm-10">
            <div class="tab-content" id="v-pills-tabContent">
              <div
                class="tab-pane fade show active"
                id="v-pills-home"
                role="tabpanel"
                aria-labelledby="v-pills-home-tab"
              >
                <div class="cabinet-block">
                  <div class="cabinet-top">
                    <h6>ЗДРАВСТВУЙТЕ, Buyer!</h6>
                    <h6>ЭТОТ РАЗДЕЛ СОЗДАН СПЕЦИАЛЬНО ДЛЯ ВАС</h6>
                  </div>
                  <!--cabinet-top-->
                  <div class="cb-content mb-45px">
                    <h6>
                      Сохраняйте понравившиеся Вам товары и проверяйте их
                      наличие
                    </h6>
                    <p>
                      Из обзора учетной записи пользователя можно просматривать
                      последние операции и редактировать данные учетной записи
                      пользователя. Выберите одну из приведенных ниже ссылок,
                      чтобы просмотреть или отредактировать информацию.
                    </p>
                  </div>
                  <!--cb-content-->
                  <div class="cb-form">
                    <div class="row">
                      <div class="col-sm-6">
                        <div class="cb-input">
                          <div class="row">
                            <div class="col-sm-8">
                              <label for="">Фамилия, Имя, Отчество</label>
                            </div>
                            <div class="col-sm-4">
                              <a href="#" class="edit-link">редактировать</a>
                            </div>
                          </div>
                          <!--row-->
                          <input type="text" class="form-control" />
                        </div>
                        <div class="cb-input">
                          <div class="row">
                            <div class="col-sm-8">
                              <label for="">Email</label>
                            </div>
                            <div class="col-sm-4">
                              <a href="#" class="edit-link">редактировать</a>
                            </div>
                          </div>
                          <!--row-->
                          <input type="text" class="form-control" />
                        </div>
                        <div class="cb-input">
                          <div class="row">
                            <div class="col-sm-8">
                              <label for="">Пол</label>
                            </div>
                            <div class="col-sm-4">
                              <a href="#" class="edit-link">редактировать</a>
                            </div>
                          </div>
                          <!--row-->
                          <div class="border-block">
                            <div class="cab-male">
                              <a href="#" class="active">Женский</a>
                              <a href="#">Мужской</a>
                            </div>
                          </div>
                          <!--border-block-->
                        </div>
                      </div>
                      <!--col-sm-6-->
                      <div class="col-sm-6">
                        <div class="cb-input">
                          <div class="row">
                            <div class="col-sm-8">
                              <label for="">Пароль</label>
                            </div>
                            <div class="col-sm-4">
                              <a href="#" class="edit-link">редактировать</a>
                            </div>
                          </div>
                          <!--row-->
                          <input type="text" class="form-control" />
                        </div>
                        <div class="cb-input">
                          <div class="row">
                            <div class="col-sm-8">
                              <label for="">Телефон</label>
                            </div>
                            <div class="col-sm-4">
                              <a href="#" class="edit-link">редактировать</a>
                            </div>
                          </div>
                          <!--row-->
                          <input type="text" class="form-control" />
                        </div>
                        <div class="cb-input">
                          <div class="row">
                            <div class="col-sm-8">
                              <label for="">Социальные сети</label>
                            </div>
                            <div class="col-sm-4">
                              <a href="#" class="edit-link">редактировать</a>
                            </div>
                          </div>
                          <!--row-->
                          <div class="border-block mb-10px">
                            <div class="cab-socials">
                              <a href="#"
                                ><i
                                  class="fa fa-facebook"
                                  aria-hidden="true"
                                ></i
                              ></a>
                              <a href="#"
                                ><i
                                  class="fa fa-linkedin"
                                  aria-hidden="true"
                                ></i
                              ></a>
                              <a href="#"
                                ><i
                                  class="fa fa-google-plus"
                                  aria-hidden="true"
                                ></i
                              ></a>
                            </div>
                          </div>
                          <a href="#" class="silver-links">Добавить</a>
                          <a href="#" class="silver-links">Удалить</a>
                        </div>
                      </div>
                      <!--col-sm-6-->
                    </div>
                    <!--row-->
                  </div>
                  <!--cb-form-->
                </div>
                <!--cabinet-block-->
              </div>
              <div
                class="tab-pane fade"
                id="v-pills-profile"
                role="tabpanel"
                aria-labelledby="v-pills-profile-tab"
              >
                ...
              </div>
              <div
                class="tab-pane fade"
                id="v-pills-messages"
                role="tabpanel"
                aria-labelledby="v-pills-messages-tab"
              >
                ...
              </div>
              <div
                class="tab-pane fade"
                id="v-pills-settings"
                role="tabpanel"
                aria-labelledby="v-pills-settings-tab"
              >
                ...
              </div>
            </div>
          </div>
          <!--col-sm-10-->
        </div>
        <!--row-->
      </div>
      <!--container-->
    </div>
    <!--cabinet-container-->
  </section>
  <!--content-->
</template>

<script>
export default {
  name: "Cabinet"
};
</script>

<style></style>
