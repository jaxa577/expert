<script>
export default {
  data() {
    return {
      isScrolled: false,
      scrollHeight: 0,
      heroList: [
        {
          name: "Онлайн обучение",
          link: "/courses",
        },
        {
          name: "Cообшество экспертов",
          link: "#!",
        },
        {
          name: "Психологическая диагностика",
          link: "#!",
        },
        {
          name: "События",
          link: "#!",
        },
        {
          name: "Сертификация",
          link: "#!",
        },
        {
          name: "Инвестирование проектов",
          link: "#!",
        },
        {
          name: "Вакансии и поиск работы",
          link: "#!",
        },
      ],
    };
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
    window.addEventListener("wheel", this.handleScroll);
    this.heroEl();
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    heroEl() {
      // console.log(this.$refs.heroItem[0]);
      for (let index = 0; index < this.heroList.length; index++) {
        // const element = this.heroList[index];
        setTimeout(() => {
          console.log(this.$refs.heroItem[index]);
          if (this.isScrolled) {
            this.$refs.heroItem[index].classList.add("active");
          } else {
            this.$refs.heroItem[index].classList.remove("active");
          }
          // element.classList.add("active");
        }, index * 350);
      }
    },
    handleScroll() {
      // console.log(this.scrollHeight, "scroll");
      this.scrollHeight = window.pageYOffset;
      if (window.pageYOffset >= 200) {
        this.heroEl();
        this.isScrolled = true;
      } else {
        this.isScrolled = false;
        this.heroEl();
      }
    },
  },
};
</script>

<template>
  <section :class="{ active: isScrolled }" class="hero">
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
        <a
          v-for="(item, index) in heroList"
          ref="heroItem"
          :href="item.link"
          class="hero_cycle-item"
        >
          <img :src="`images/hero${index + 1}.svg`" alt="" />
          {{ item.name }}
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
  padding-bottom: 550px;
  overflow: hidden;
}
.hero_container {
}
.hero_desc {
  padding-top: 145px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: linear-gradient(
    180deg,
    #f7f8f9 58.72%,
    rgba(247, 248, 249, 0.5) 100%
  );
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
  transform: translateX(-50%) scale(3);
  z-index: -1;
  opacity: 0.2;
  transition: all 0.7s ease-in-out;
}
.hero_cycle-items-wrapper {
  position: relative;
  width: 100%;
}
.bckg_image-item.active {
  transform: translateX(-50%) scale(1);
  opacity: 1;
  /* animation-name: scaleAnimation;
  animation-duration: 5s;
  animation-iteration-count: infinite;
  animation-direction: alternate; */
}
.hero.active {
  overflow: visible;
}
.hero_cycle-item {
  position: absolute;
  background: #ffffff;
  box-shadow: 0px 8px 29px -6px rgba(24, 57, 75, 0.15),
    0px 18px 86px -4px rgba(84, 123, 169, 0.18);
  border-radius: 16px;
  padding: 10px 20px;
  width: fit-content;
  transition: all 0.5s;
  transform: scale(0);
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
  animation-duration: 3s;
  animation-iteration-count: infinite;
  animation-direction: alternate; */
}
.hero_cycle-items-wrapper.active {
  animation-name: scaleItems;
  animation-duration: 3s;
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
    transform: scale(1.05);
  }
  50% {
    transform: scale(1);
  }
  100% {
    transform: scale(1.05);
  }
}
</style>
