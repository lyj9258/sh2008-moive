<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <!-- 插槽（坑） -->
      <slot></slot>
    </div>
  </div>
</template>
<script>
import Swiper from "swiper";
import "swiper/swiper-bundle.min.css";
export default {
  mounted() {
    this.$nextTick(() => {
      new Swiper(".swiper-container", {
        slidesPerView: 4,
      });
    });
  },
};
</script>
<style lang="scss" scpoed>
.swiper-wrapper {
  height: 140px;
  background: rgb(255, 255, 255);
  margin: 0;
  padding-left: 10px;
  list-style: none;
}
</style>