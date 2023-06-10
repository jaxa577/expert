<script>
import mainHeader from "../components/ExHeader.vue";
import mainHero from "../components/ExHero.vue";
import mainModules from "../components/ExModules.vue";
import mainNews from "../components/ExLatests.vue";
import mainFooter from "../components/ExFooter.vue";
export default {
  components: {
    mainHeader,
    mainHero,
    mainModules,
    mainNews,
    mainFooter,
  },
};
</script>

<template>
  <mainHeader />
  <main>
    <mainHero />
    <mainModules />
    <mainNews />
  </main>
  <mainFooter />
</template>

<style>
body {
  background: #f7f8f9;
}
</style>
