<template>
  <div class="third section wrapper">
    <div class="third section">
      <div class="left">
        <div class="content">
          <div class="title">
            <div>Dedicated to your success</div>
          </div>
          <div class="content-div">
            <span><i class="las la-check-double"></i></span> Fast & Easy to
            Create a website
          </div>
          <div class="content-div">
            <span><i class="las la-check-double"></i></span>Beuatiful UI
            elements to build page
          </div>
          <div class="content-div">
            <span><i class="las la-check-double"></i></span>Super speed page
            loading with smooth animations on sections
          </div>
        </div>
      </div>
      <div
        class="right"
        :style="{
          backgroundImage: 'url(' + require('@/assets/image-2.webp') + ')',
        }"
      >
        <!-- <img alt="Vue logo" src="../assets/image-2.webp" /> -->
      </div>
    </div>
  </div>
</template>

<script>
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { onMounted } from "@vue/runtime-core";

gsap.registerPlugin(ScrollTrigger);

export default {
  name: "ThirdSection",
  setup() {
    var tl = gsap.timeline({ delay: 0.07, smoothChildTiming: true });
    var tlTwo = gsap.timeline({ delay: 0.07, smoothChildTiming: true });

    onMounted(() => {
      setTimeout(() => {
        tl.from([".third.section .left div"], {
          x: -20, // any properties (not limited to CSS)
          opacity: 0,
          duration: 0.7, // seconds
          ease: "power1.inOut",
          yoyo: true,
          // delay: 0.5,
          stagger: 0.2,
        });
        tlTwo.from([".third.section .right"], {
          x: 20, // any properties (not limited to CSS)
          opacity: 0,
          duration: 0.7, // seconds
          ease: "power1.inOut",
          yoyo: true,
          // delay: 0.5,
        });

        tl.add(tlTwo, "-=0.5");

        ScrollTrigger.create({
          trigger: ".third",
          start: "center bottom",
          endTrigger: ".third",
          animation: tl,
          // markers: true,
          toggleActions: "play pause resume none",
          // once: true,
        });
      }, 50);
    });
  },
};
</script>

<style lang="scss" scoped>
@import "@/styles/theme.scss";

.third {
  display: flex;
  flex-direction: row;

  // @media only screen and (max-width: 600px) {
  //   flex-direction: column;
  // }
  flex-wrap: wrap;
  grid-gap: 50px;

  width: min(1400px, 100vw);
  height: 100%;

  justify-content: center;
  &.wrapper {
    place-items: center;
    width: 100%;
    grid-template-columns: 1fr;
  }

  padding: 0;
  // box-sizing: border-box;

  background: var(--app-background-color);
  .left {
    display: grid;
    place-items: center;
    width: 100%;
    margin: 0 auto;
    padding: 0 30px;
    box-sizing: border-box;
    text-align: start;
    align-items: center;
    justify-content: start;

    flex: 5;

    @media only screen and (max-width: 1400px) {
      padding: 5vw;
    }

    .title {
      margin-bottom: 30px;
    }

    .content {
      display: flex;
      flex-direction: column;
      // grid-gap: 30px;

      text-align: left;

      .content-div {
        display: flex;
        grid-gap: 10px;
        margin-bottom: 15px;
      }
    }
  }
  .right {
    height: 100%;
    width: 100%;
    flex: 3;

    background-position: center top;
    background-repeat: no-repeat;
    background-size: cover;

    // @media only screen and (max-width: 600px) {
    //   flex: 1;
    // }
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
}
</style>