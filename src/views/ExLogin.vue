<script>
import mainHeader from "../components/ExHeader.vue";
import mainFooter from "../components/ExFooter.vue";
export default {
  components: {
    mainHeader,
    mainFooter,
  },
};
</script>

<template>
  <mainHeader />

  <main>
    <section class="login">
      <div class="container login_container">
        <div class="login_tab">
          <div class="login_top">
            <h2 class="login_title active">Вход</h2>
            <h2 class="login_title">Регистрация</h2>
          </div>
          <div class="login_inputs">
            <div class="login_input-item">
              <label for="login">Логин</label>
              <input type="text" name="login" id="login" />
            </div>
            <div class="login_input-item">
              <label for="login_password">Логин</label>
              <input type="password" name="password" id="login_password" />
            </div>
          </div>
          <button class="login_btn">Войти</button>
          <div class="login_or-line">
            <span class="login_line"></span>
            Или
            <span class="login_line"></span>
          </div>
          <div class="login_options">
            <button class="login_btn-item login_eri">
              <img src="/images/eri.png" alt="" />
              Вход через ЭЦП
            </button>
            <button class="login_btn-item login_goole">
              <img src="/images/google.svg" alt="" />
              Вход через Google
            </button>
            <button class="login_btn-item login_facebook">
              <img src="/images/facebook.svg" alt="" />
              Вход через Facebook
            </button>
          </div>
        </div>
      </div>
    </section>
  </main>

  <mainFooter />
</template>

<style>
.login {
  padding-top: 110px;
  padding-bottom: 90px;
}

.login_container {
  display: flex;
  justify-content: center;
}
.login_tab {
  background: #ffffff;
  box-shadow: 0px 8px 28px -6px rgba(24, 39, 75, 0.12),
    0px 18px 88px -4px rgba(24, 39, 75, 0.14);
  border-radius: 25px;
  max-width: 525px;
  width: 100%;
  padding: 40px 30px;
}
.login_top {
  display: flex;
  align-items: center;
  gap: 20px;
  justify-content: center;
  margin-bottom: 25px;
}
.login_title {
  font-weight: 500;
  font-size: 28px;
  line-height: 130%;
  color: #181818;
  opacity: 0.2;
}
.login_title.active {
  opacity: 1;
}
.login_inputs {
  display: flex;
  flex-direction: column;
  gap: 25px;
  padding: 25px 0;
  border-bottom: 2px solid #f7f8f9;
  border-top: 2px solid #f7f8f9;
}
.login_input-item {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.login_input-item input {
  border: none;
  outline: none;
  background: none;
  background: #f7f8f9;
  border-radius: 14px;
  padding: 14px 20px;
  border: 1px solid transparent;
  transition: all 0.3s ease;
  font-size: 16px;
  line-height: 150%;
  color: #5a5a5a;
}
.login_input-item input:focus {
  border: 1px solid #448fff;
}
.login_btn {
  margin: 25px 0;
  background: #448fff;
  border-radius: 14px;
  padding: 16px 0;
  width: 100%;
  font-weight: 500;
  font-size: 18px;
  line-height: 130%;
  color: #ffffff;
  border: 1px solid transparent;
  transition: all 0.3s ease;
}
.login_btn:hover {
  background: transparent;
  border: 1px solid #448fff;
  color: #448fff;
}
.login_or-line {
  display: flex;
  align-items: center;
  gap: 10px;
}
.login_line {
  display: block;
  width: 100%;
  height: 2px;
  background: #f7f8f9;
}
.login_options {
  display: flex;
  flex-direction: column;
  gap: 25px;
}
.login_btn-item {
  display: flex;
  align-items: center;
  gap: 10px;
  width: 100%;
  padding: 16px 0;
  font-weight: 500;
  font-size: 18px;
  line-height: 130%;
  color: #181818;
  background: #ffffff;
  border-radius: 14px;
  transition: all 0.3s ease;
}
.login_btn-item:hover {
  opacity: 0.6;
}
.login_facebook {
  border: 1px solid #44a5ff;
}
.login_goole {
  border: 1px solid #fbbc05;
}
.login_eri {
  border: 1px solid #00c68e;
}
</style>
