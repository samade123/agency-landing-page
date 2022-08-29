<template>
  <div class="first section">
    <div class="top">
      <div class="title" id="first-title">
        A fully integrated digital agency
      </div>
      <div class="right" id="first-right">
        <span>
          Create a beutiful Agency website with Bolue that converts more
          visitors than any website.
        </span>
        <span class="bordered"
          >Explore More <i class="las la-external-link-alt"></i
        ></span>
      </div>
    </div>
    <img alt="Vue logo" id="first-image" src="../assets/image-4.webp" />
  </div>
</template>

<script>
import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
import { onMounted } from "@vue/runtime-core";
export default {
  name: "FirstSection",
  setup() {
    var tl = gsap.timeline({ delay: 0.07, smoothChildTiming: true });
    var tlTwo = gsap.timeline({ delay: 0.07, smoothChildTiming: true });

    onMounted(() => {
      tl.from(["#header-wrapper div, #header-wrapper div div"], {
        // selector text, Array, or object
        y: -50, // any properties (not limited to CSS)
        // scaleX: 0, // any properties (not limited to CSS)
        opacity: 0,
        duration: 0.4, // seconds
        ease: "power1.inOut",
        yoyo: true,
        delay: 0.5,
        stagger: 0.1,
      });
      tl.from("#first-title", {
        // selector text, Array, or object
        x: -50, // any properties (not limited to CSS)
        // scaleX: 0, // any properties (not limited to CSS)
        opacity: 0,
        duration: 0.4, // seconds
        ease: "power1.inOut",
        yoyo: true,
      });
      tlTwo.from("#first-right span", {
        // selector text, Array, or object
        x: 50, // any properties (not limited to CSS)
        // scaleX: 0, // any properties (not limited to CSS)
        opacity: 0,
        duration: 0.4, // seconds
        ease: "power1.inOut",
        stagger: 0.1,
        yoyo: true,
      });

      tlTwo.from("#first-image", {
        // selector text, Array, or object
        y: 50, // any properties (not limited to CSS)
        // scaleX: 0, // any properties (not limited to CSS)
        opacity: 0,
        duration: 0.4, // seconds
        ease: "power1.inOut",
        yoyo: true,
      });

      tl.add(tlTwo, "-=0.5");
    });
  },
};
</script>
<style lang="scss" scoped>
@import "@/styles/theme.scss";

.first {
  background: linear-gradient(
    0deg,
    var(--dynamic-background-color) 15%,
    #ffed4b00 15%
  );

  .top {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    place-items: center;
    width: 100%;

    @media only screen and (max-width: 700px) {
      flex-direction: column;
      // width: 90vw;
    }

    width: min(1400px, 90vw);

    grid-gap: 20px 10px;
    // grid-gap: 20px min(200px, 30vw);

    .right,
    div.title {
      // max-width: 300px;
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;
      grid-gap: 20px 30px;
      flex: 4;

      text-align: start;
    }

    .title {
      // padding: 10px;
      font-size: 2.7em;
      flex: 2;

      // width: max(350px, 60vw);
    }

    .right {
      flex: 1;
      min-width: 200px;
    }
  }
}
</style>