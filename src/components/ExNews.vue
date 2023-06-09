<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
</script>

<template>
  <section>
    <swiper
      :slides-per-view="3"
      :space-between="50"
      @swiper="onSwiper"
      @slideChange="onSlideChange"
    >
      <swiper-slide>Slide 1</swiper-slide>
      <swiper-slide>Slide 2</swiper-slide>
      <swiper-slide>Slide 3</swiper-slide>
      ...
    </swiper>
  </section>
</template>

<style></style>
