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
      <input
        type="text"
        placeholder="E-mail"
        class="form-control"
        autocomplete="username email"
        v-model="loginForm.username"
      />
      <input
        type="password"
        placeholder="Password"
        class="form-control"
        autocomplete="curent-password"
        v-model="loginForm.password"
      />
      <div class="popup-buttons">
        <button class="btn btn-orange" @click="handleLogin">Войти</button>
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
import { validUsername } from "@/utils/validate";
import { mapActions } from "vuex";
export default {
  name: "Login",
  data() {
    const validateUsername = (rule, value, callback) => {
      if (!validUsername(value)) {
        callback(new Error("Please enter the correct user name"));
      } else {
        callback();
      }
    };
    const validatePassword = (rule, value, callback) => {
      if (value.length < 6) {
        callback(new Error("The password can not be less than 6 digits"));
      } else {
        callback();
      }
    };
    return {
      loginForm: {
        username: "admin@ason.com",
        password: "admin"
      },
      loginRules: {
        username: [
          { required: true, trigger: "blur", validator: validateUsername }
        ],
        password: [
          { required: true, trigger: "blur", validator: validatePassword }
        ]
      },
      loading: false,
      passwordType: "password",
      redirect: undefined
    };
  },
  watch: {
    $route: {
      handler: function(route) {
        this.redirect = route.query && route.query.redirect;
      },
      immediate: true
    }
  },
  methods: {
    ...mapActions({ login: "user/login", getUserInfo: "user/getInfo" }),
    handleLogin() {
      // console.log('submit', this.$refs.loginForm.validate())
      // this.$refs.loginForm.validate(valid => {
      //   if (valid) {
      this.loading = true;
      this.login(this.loginForm)
        .then(() => {
          this.$router.push({ path: this.redirect || "/" });
          this.loading = false;
          this.$toaster.success("Success.");
          this.getUserInfo();
        })
        .catch(() => {
          this.loading = false;
        });
      // } else {
      //   console.log('error submit!!')
      //   return false
      // }
      // })
    }
  }
};
</script>
