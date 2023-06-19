<script>
import mainHeader from "../components/ExHeader.vue";
import mainFooter from "../components/ExFooter.vue";
import mainHero from "../components/ExVacancyHero.vue";
export default {
  components: {
    mainHeader,
    mainFooter,
    mainHero,
  },
};
</script>

<template>
  <mainHeader />

  <main>
    <mainHero />
  </main>

  <mainFooter />
</template>

<style></style>
