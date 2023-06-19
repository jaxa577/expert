import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/ExHome.vue";
import Courses from "../views/EXCourseCatalogue.vue";
import CoursesInfo from "../views/EXCourseInfo.vue";
import VacanyResume from "../views/ExVacancyResume.vue";
import VacanyInfo from "../views/ExVacancyInfo.vue";
import Test from "../views/EXTest.vue";
import login from "../views/ExLogin.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/courses",
      name: "courses",
      component: Courses,
    },
    {
      path: "/about_course",
      name: "about_course",
      component: CoursesInfo,
    },
    {
      path: "/vacancy_resume",
      name: "vacancy_resume",
      component: VacanyResume,
    },
    {
      path: "/about_vacancy",
      name: "about_vacancy",
      component: VacanyInfo,
    },
    {
      path: "/psyco_test",
      name: "psyco_test",
      component: Test,
    },
    {
      path: "/login",
      name: "login",
      component: login,
    },
  ],
});

export default router;
