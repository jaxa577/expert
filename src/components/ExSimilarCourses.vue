<script>
import courseCard from "./ExCourseCard.vue";

export default {
  components: {
    courseCard,
  },
  data() {
    return {
      courses: [
        {
          name: "Графический дизайн",
          image: "image1.png",
          ownerImage: "owner.png",
          ownerName: "Real Soft Academy",
          ownerStatus: "Компания",
          materials: "10",
          rating: "4.5",
          cost: "100 000",
          link: "/about_course",
        },
        {
          name: "Графический дизайн",
          image: "image1.png",
          ownerImage: "owner.png",
          ownerName: "Real Soft Academy",
          ownerStatus: "Компания",
          materials: "10",
          rating: "4.5",
          cost: "100 000",
          link: "/about_course",
        },
        {
          name: "Графический дизайн",
          image: "image1.png",
          ownerImage: "owner.png",
          ownerName: "Real Soft Academy",
          ownerStatus: "Компания",
          materials: "10",
          rating: "4.5",
          cost: "100 000",
          link: "/about_course",
        },
        {
          name: "Графический дизайн",
          image: "image1.png",
          ownerImage: "owner.png",
          ownerName: "Real Soft Academy",
          ownerStatus: "Компания",
          materials: "10",
          rating: "4.5",
          cost: "100 000",
          link: "/about_course",
        },
        {
          name: "Графический дизайн",
          image: "image1.png",
          ownerImage: "owner.png",
          ownerName: "Real Soft Academy",
          ownerStatus: "Компания",
          materials: "10",
          rating: "4.5",
          cost: "100 000",
          link: "/about_course",
        },
        {
          name: "Графический дизайн",
          image: "image1.png",
          ownerImage: "owner.png",
          ownerName: "Real Soft Academy",
          ownerStatus: "Компания",
          materials: "10",
          rating: "4.5",
          cost: "100 000",
          link: "/about_course",
        },
        {
          name: "Графический дизайн",
          image: "image1.png",
          ownerImage: "owner.png",
          ownerName: "Real Soft Academy",
          ownerStatus: "Компания",
          materials: "10",
          rating: "4.5",
          cost: "100 000",
          link: "/about_course",
        },
        {
          name: "Графический дизайн",
          image: "image1.png",
          ownerImage: "owner.png",
          ownerName: "Real Soft Academy",
          ownerStatus: "Компания",
          materials: "10",
          rating: "4.5",
          cost: "100 000",
          link: "/about_course",
        },
      ],
      currentPagination: 1,
    };
  },
  methods: {
    changePagination(nextPage) {
      this.currentPagination = nextPage;
    },
  },
};
</script>

<template>
  <section class="sCourses">
    <div class="container sCourse_container">
      <div class="catalogue_right">
        <div class="catalogue_course-list">
          <courseCard
            v-for="(card, index) in courses"
            :key="`courseCards${index}`"
            :name="card.name"
            :image="card.image"
            :ownerImage="card.ownerImage"
            :ownerName="card.ownerName"
            :ownerStatus="card.ownerStatus"
            :materials="card.materials"
            :rating="card.rating"
            :cost="card.cost"
            :link="card.link"
          />
        </div>
        <div class="catalogue_pagination">
          <div
            v-for="item in 5"
            @click="changePagination(item)"
            :class="{ active: currentPagination == item }"
            class="catalogue_pagination-item"
          >
            {{ item }}
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style>
.catalogue_right {
  width: 100%;
}
.catalogue_search {
  position: relative;
  display: flex;
  margin-bottom: 30px;
}
.catalogue_search-input {
  border: none;
  outline: none;
  background: none;
  width: 100%;
  background: #ffffff;
  border: 1px solid rgba(90, 90, 90, 0.1);
  box-shadow: 0px 8px 28px -6px rgba(24, 39, 75, 0.12),
    0px 18px 88px -4px rgba(24, 39, 75, 0.14);
  border-radius: 18px;
  padding: 16px 48px 16px 20px;
  font-weight: 400;
  font-size: 18px;
  line-height: 150%;
  color: #5a5a5a;
}
.catalogue_search-btn {
  position: absolute;
  right: 16px;
  top: 50%;
  transform: translateY(-50%);
}
.catalogue_course-list {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}
.catalogue_pagination {
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-top: 50px;
}
.catalogue_pagination-item {
  display: flex;
  align-items: center;
  justify-content: center;
  background: #ecf4ff;
  border-radius: 200px;
  width: 41px;
  height: 49px;
  font-weight: 500;
  font-size: 18px;
  color: #448fff;
  cursor: pointer;
  transition: all 0.3s ease;
}
.catalogue_pagination-item:hover {
  opacity: 0.8;
}
.catalogue_pagination-item.active {
  background: #448fff;
  color: #ffffff;
}
</style>
