<template>
  <div id="popoup" class="popup-container">
    <div class="pop-header">
      <div class="poph-title">
        <i class="fa fa-user-circle-o" aria-hidden="true"></i> Anmelden
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
      <input type="text" placeholder="E-mail" class="form-control" />
      <input type="text" placeholder="Password" class="form-control" />
      <div class="popup-buttons">
        <button class="btn btn-orange">Войти</button>
        <a href="#" class="pass-link">Passwort vergessen?</a>
      </div>
      <!--popup-buttons-->
      <hr />
      <div class="pop-socials">
        <div class="pops-text">Через соцсети (для новых пользователей)</div>
        <div class="pop-soc-list">
          <div class="row">
            <div class="col-sm-6">
              <a href="#"><img src="images/vk-big.png" alt=""/></a>
              <a href="#"><img src="images/google-big.png" alt=""/></a>
            </div>
            <div class="col-sm-6">
              <a href="#"><img src="images/fb-big.png" alt=""/></a>
              <a href="#"><img src="images/mail-big.png" alt=""/></a>
            </div>
            <!--col-sm-6-->
          </div>
          <!--row-->
        </div>
        <!--pop-soc-list-->
        <div class="pops-text">
          Я согласен(на) на обработку моих персональных данных. Подробнее
        </div>
      </div>
      <!--pop-socials-->
    </div>
    <!--pop-middle-->
  </div>
  <!--popup-container-->
</template>

<script>
export default {
  name: "Login"
};
</script>

<style></style>
