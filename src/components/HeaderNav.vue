<template>
  <div class="wrapper" id="header-wrapper">
    <div class="left">Bolue</div>
    <div class="middle">
      <div class="nav-link" v-for="link in navLinks" :key="link.name">
        <span>{{ link.name }}</span>
      </div>
    </div>
    <div class="right" v-if="!setMobile">Contact Us</div>
  </div>
</template>

<script>
import { ref, watch } from "@vue/runtime-core";
import { useWindowSize } from "vue-window-size";

export default {
  name: "Header",
  props: {
    msg: String,
  },
  setup(props) {
    const { width, height } = useWindowSize();
    const setMobile = ref(false);

    const navLinks = [
      { name: "Home", active: true },
      { name: "Service", active: false },
      { name: "Testimonial", active: false },
    ];

    watch(
      width,
      (width) => {
        width < 600 ? (setMobile.value = true) : (setMobile.value = false);
      },
      { immediate: true }
    );

    return { navLinks, width, setMobile };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.wrapper {
  display: grid;
  place-items: center start;
  grid-template-columns: 2fr 4fr 1fr;
  width: 100%;

  user-select: none;

  .left {
    width: 100%;
    text-align: center;
  }

  .middle {
    // width: 100%;
    // width: min(1400px, 90vw);
    display: grid;
    place-items: start start;
    // grid-template-columns: repeat(7, 1fr);
    grid-template-columns: repeat(3, 1fr);

    grid-gap: 30px;

    user-select: none;
  }
}
</style>
