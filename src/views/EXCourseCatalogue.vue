<script>
import mainHeader from "../components/ExHeader.vue";
import mainFooter from "../components/ExFooter.vue";
import mainBanner from "../components/ExBanner.vue";
export default {
  components: {
    mainHeader,
    mainFooter,
    mainBanner,
  },
};
</script>

<template>
  <mainHeader />
  <mainBanner
    currentPage="Поиск Вакансий/Резюме"
    title="Находите вакансии и резюме на разные позиции "
    firstLink="#!"
    secondLink="#!"
    firstLinkText="Начать поиск Вакансий/Резюме"
    secondLinkText="Опубликовать Вакансий/Резюме "
    bannerImage="briefcase.svg"
    class="banner-item"
  />

  <mainFooter />
</template>

<style>
.banner-item {
  padding-top: 140px;
}
</style>
