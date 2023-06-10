<script>
export default {
  data() {
    return {
      isScrolled: false,
      scrollHeight: 0,
    };
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      console.log(this.scrollHeight, "scroll");
      this.scrollHeight = window.pageYOffset;
      if (window.pageYOffset >= 200) {
        this.isScrolled = true;
      } else {
        this.isScrolled = false;
      }
    },
  },
};
</script>

<template>
  <section class="hero">
    <div class="container hero_container">
      <div class="hero_desc">
        <h2 class="hero_title">
          Универсальная платформа <br />
          Все что нужно, в одном
        </h2>
        <p class="hero_text">
          Платформа которая собрала в себе множество инструментов для
          профессиональной деятельности, начните прямо сейчас и получите все
          возможности
        </p>
        <button class="hero_btn">Начать сейчас</button>
      </div>
      <div :class="{ active: isScrolled }" class="hero_cycle-items-wrapper">
        <a href="#!" :class="{ active: isScrolled }" class="hero_cycle-item">
          📙 Онлайн обучение
        </a>
        <a href="#!" :class="{ active: isScrolled }" class="hero_cycle-item">
          💬 Cообшество экспертов
        </a>
        <a href="#!" :class="{ active: isScrolled }" class="hero_cycle-item">
          🧠 Психологическая диагностика
        </a>
        <a href="#!" :class="{ active: isScrolled }" class="hero_cycle-item">
          🎉 События
        </a>
        <a href="#!" :class="{ active: isScrolled }" class="hero_cycle-item">
          🧾 Сертификация
        </a>
        <a href="#!" :class="{ active: isScrolled }" class="hero_cycle-item">
          📊 Инвестирование проектов
        </a>
        <a href="#!" :class="{ active: isScrolled }" class="hero_cycle-item">
          💼 Вакансии и поиск работы
        </a>
      </div>
    </div>
    <div class="bckg_image">
      <img
        :class="{ active: isScrolled }"
        class="bckg_image-item"
        src="/images/back_circle.svg"
        alt=""
      />
    </div>
  </section>
</template>

<style>
.hero {
  /* padding-top: 120px; */
  position: relative;
  padding-bottom: 670px;
  overflow: visible;
}
.hero_container {
}
.hero_desc {
  padding-top: 145px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: rgba(255, 255, 255, 0.8);
  padding-bottom: 50px;
}
.hero_title {
  font-weight: 500;
  font-size: 68px;
  line-height: 130%;
  text-align: center;
  color: #181818;
  margin-bottom: 30px;
}
.hero_text {
  font-weight: 400;
  font-size: 18px;
  line-height: 150%;
  text-align: center;
  color: #5a5a5a;
  max-width: 760px;
  margin-bottom: 50px;
}
.hero_btn {
  background: #448fff;
  border-radius: 200px;
  padding: 16px 32px;
  font-weight: 500;
  font-size: 18px;
  line-height: 130%;
  color: #ffffff;
  border: 1px solid #448fff;
  transition: all 0.3s ease;
}
.hero_btn:hover {
  background-color: #ffffff;
  color: #448fff;
}
.bckg_image-item {
  position: absolute;
  top: 50px;
  left: 50%;
  transform: translateX(-50%) scale(1.1);
  z-index: -1;
  transition: all 0.3s ease;
}
.hero_cycle-items-wrapper {
  position: relative;
  width: 100%;
}
.bckg_image-item.active {
  animation-name: scaleAnimation;
  animation-duration: 5s;
  animation-iteration-count: infinite;
  animation-direction: alternate;
}
.hero_cycle-item {
  position: absolute;
  background: #ffffff;
  box-shadow: 0px 8px 29px -6px rgba(24, 57, 75, 0.15),
    0px 18px 86px -4px rgba(84, 123, 169, 0.18);
  border-radius: 16px;
  padding: 10px 20px;
  width: fit-content;
  transform: scale(0);
  transition: all 0.6s ease;
}
.hero_cycle-item:nth-child(1) {
  top: 60px;
  left: 0;
}
.hero_cycle-item:nth-child(2) {
  top: 255px;
  left: 280px;
}
.hero_cycle-item:nth-child(3) {
  top: 160px;
  right: 130px;
}
.hero_cycle-item:nth-child(4) {
  top: 350px;
  right: 100px;
}
.hero_cycle-item:nth-child(5) {
  top: 500px;
  left: 470px;
}
.hero_cycle-item:nth-child(6) {
  top: 600px;
  left: 35px;
}
.hero_cycle-item:nth-child(7) {
  top: 550px;
  right: 85px;
}
.hero_cycle-item.active {
  transform: scale(1) translateY(-100px);
  /* animation-name: scaleItems;
  animation-duration: 5s;
  animation-iteration-count: infinite;
  animation-direction: alternate; */
}
.hero_cycle-items-wrapper.active {
  animation-name: scaleItems;
  animation-duration: 5s;
  animation-iteration-count: infinite;
  animation-direction: alternate;
}
@keyframes scaleAnimation {
  0% {
    transform: translateX(-50%) rotate(0deg) scale(1.1);
  }
  50% {
    transform: translateX(-50%) rotate(180deg) scale(1);
  }
  100% {
    transform: translateX(-50%) rotate(360deg) scale(1.1);
  }
}
@keyframes scaleItems {
  0% {
    transform: rotate(5deg) scale(1.05);
  }
  50% {
    transform: rotate(0) scale(1);
  }
  100% {
    transform: rotate(-5deg) scale(1.05);
  }
}
</style>
