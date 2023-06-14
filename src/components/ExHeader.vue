<script>
export default {
  data() {
    return {
      isScrolled: false,
    };
  },

  mounted() {
    window.addEventListener("mousewheel", this.handleScroll);
    window.addEventListener("scroll", this.handleScroll);
  },

  methods: {
    handleScroll(e) {
      if (window.pageYOffset > 120) {
        this.isScrolled = true;
      } else if (
        e.wheelDelta >= 0 &&
        window.pageYOffset < 120 &&
        window.pageYOffset != 0
      ) {
        this.isScrolled = true;
      } else {
        this.isScrolled = false;
      }
    },
  },
};
</script>

<template>
  <header class="header" :class="{ scrolled: isScrolled }">
    <div class="container header_container">
      <a href="/"><img src="/images/logo.svg" alt="logo" /></a>

      <div class="header_nav-list">
        <a class="header_nav-item" href="#hero">
          <p data-text="О нас" class="header_nav-item-txt">О нас</p>
        </a>

        <a class="header_nav-item" href="#modules">
          <p data-text="Модули" class="header_nav-item-txt">Модули</p>
        </a>
        <a class="header_nav-item" href="#news">
          <p data-text="Новости" class="header_nav-item-txt">Новости</p>
        </a>
        <a class="header_nav-item" href="#footer">
          <p data-text="Контакты" class="header_nav-item-txt">Контакты</p>
        </a>
      </div>

      <div class="header_login">
        <div class="header_lang">
          <img src="/images/lang_glob.svg" alt="language" />
          <p class="lang_text">Русский</p>
          <img src="/images/arrow_bottom.svg" alt="arrow" />
        </div>
        <a class="header_login-link" href="#!">Вход. Регистрация</a>
      </div>
    </div>
  </header>
</template>

<style>
.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 99;
  padding: 30px 0;
  background-color: #FFFFFF;
  backdrop-filter: blur(5px);
  width: 100%;
  transition: 0.3s;
}
.header_container {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.header_nav-list {
  display: flex;
  align-items: center;
  gap: 26px;
}
.header_nav-item-txt {
  transition: transform 0.3s;
  transform-origin: 50% 0;
  transform-style: preserve-3d;
  position: relative;
  display: inline-block;
  font-weight: 500;
  font-size: 16px;
  line-height: 130%;
  color: #181818;
}
.header_nav-item-txt::before {
  position: absolute;
  content: attr(data-text);
  transform: rotateX(-90deg);
  transform-origin: 50% 0;
  top: 100%;
  left: 0;
  width: 100%;
  height: 100%;
  color: #448fff;
}
.header_nav-item {
  padding: 2px;
}
.header_nav-item:hover .header_nav-item-txt {
  transform: rotateX(90deg);
}
.header_login {
  display: flex;
  align-items: center;
  gap: 120px;
}
.header_lang {
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
}
.lang_text {
  font-weight: 400;
  font-size: 16px;
  line-height: 130%;
  color: #5a5a5a;
}
.header_login-link {
  background: #ecf4ff;
  border: 1px solid #448fff;
  border-radius: 200px;
  padding: 16px 32px;
  font-weight: 500;
  font-size: 16px;
  line-height: 130%;
  color: #448fff;
  transition: all 0.3s ease;
}
.header_login-link:hover {
  opacity: 0.7;
  color: #448fff;
}
</style>
