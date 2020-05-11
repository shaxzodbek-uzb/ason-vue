<template>
  <div id="popup-register" class="popup-container">
    <div class="pop-header">
      <div class="poph-title">
        <i class="fa fa-user-circle-o" aria-hidden="true"></i> Регистрация
      </div>
    </div>
    <!--pop-header-->
    <div class="pop-middle">
      <div class="pop-input-text-top">
        <div class="row align-items-center justify-content-center mb-10px">
          <div class="col-sm-7">
            <div class="pitt-text">Войти с помощью аккаунта Ason</div>
          </div>
          <div class="col-sm-5">
            <div class="ca-block text-right">
              <a href="#" class="create-account">Создать аккаунт</a>
            </div>
          </div>
        </div>
        <!--row-->
      </div>
      <!--pop-input-text-top-->
      <input type="text" placeholder="Имя" class="form-control" />
      <input type="text" placeholder="Фамилия" class="form-control" />
      <input type="text" placeholder="E-mail" class="form-control" />
      <input type="text" placeholder="Password" class="form-control" />
      <div class="text-center">
        <div class="popup-checks mb-10px">
          <div class="pop-check">
            <label class="check checked">
              <span class="radio">
                <input type="radio" name="val" checked />
              </span>
              <span>Женщина</span>
            </label>
          </div>
          <div class="pop-check">
            <label class="check ">
              <span class="radio">
                <input type="radio" name="val" />
              </span>
              <span>Мужчина</span>
            </label>
          </div>
        </div>
        <button class="btn btn-orange mb-20px mr-none">
          Зарегестрироваться
        </button>
        <div class="pop-oferta">
          Нажимая на кнопку «Зарегистрироваться», вы подтверждаете свое согласие
          с условиями <a href="#">Публичной офферты</a> и
          <a href="#">Политикой конфиденциальности</a>
        </div>
      </div>
    </div>
    <!--pop-middle-->
  </div>
  <!--popup-container-->
</template>

<script>
export default {
  name: "Registration"
};
</script>

<style></style>
