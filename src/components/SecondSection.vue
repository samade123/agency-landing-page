<template>
  <div class="second section">
    <div class="top">
      <div class="title left">Service we can help you</div>
      <div class="right">
        <span>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
          mollitia, molestiae quas vel sint commodi repudiandae consequuntur
          voluptatum laborum numquam blanditiis
        </span>
      </div>
    </div>

    <div class="bottom">
      <div class="left">
        <div class="icon"><i class="las la-desktop la-3x"></i></div>
        <div class="sub-title">Web design</div>
        <div class="content">
          Create a beutiful Agency website with Bolue that converts more
          visitors than any website.
        </div>
        <div class="link">
          Learn More
          <span>
            <i class="las la-external-link-square-alt"></i>
          </span>
        </div>
      </div>
      <div class="right">
        <div class="icon"><i class="las la-edit la-3x"></i></div>
        <div class="sub-title">Content Writing</div>
        <div class="content">
          Create a beutiful Agency website with Bolue that converts more
          visitors than any website.
        </div>
        <div class="link">
          Learn More
          <span>
            <i class="las la-external-link-square-alt"></i>
          </span>
        </div>
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
  name: "SecondSection",
  setup() {
    var tlThree = gsap.timeline({ delay: 0.07, smoothChildTiming: true });
    var tlFour = gsap.timeline({ delay: 0.07, smoothChildTiming: true });

    onMounted(() => {
      setTimeout(() => {
        tlThree.from([".second.section .left"], {
          x: -30, // any properties (not limited to CSS)
          opacity: 0,
          duration: 0.7, // seconds
          ease: "power1.inOut",
          yoyo: true,
          // delay: 0.5,
          stagger: 0.1,
        });
        tlFour.from([".second.section .right"], {
          x: 30, // any properties (not limited to CSS)
          opacity: 0,
          duration: 0.7, // seconds
          ease: "power1.inOut",
          yoyo: true,
          // delay: 0.5,
          stagger: 0.1,
        });

        tlThree.add(tlFour, "-=0.5");

        ScrollTrigger.create({
          trigger: ".second",
          start: "center bottom",
          endTrigger: ".second",
          animation: tlThree,
          markers: false,
          toggleActions: "play pause resume none",
          // once: true,
        });
      }, 50);
    });
  },
};
</script>

<style lang="scss" scoped >
@import "@/styles/theme.scss";

.second {
  background: var(--dynamic-background-color);
  color: var(--app-background-color);

  // width: min(1400px, 90vw);

  .top {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    place-items: center;
    width: 100%;
    grid-gap: 20px;

    width: min(1400px, 90vw);

    grid-gap: 20px 200px;

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
  }

  .bottom {
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    grid-template-rows: repeat(8, 1fr);
    grid-gap: 20px;
    width: min(1400px, 90vw);
    height: fit-content;
    place-items: center;

    // padding: 20px;
    // box-sizing: border-box;

    .left,
    .right {
      background: #fafafa;
      // background: blue;

      height: 100%;
      width: 100%;
      padding: 20px;
      box-sizing: border-box;

      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;
      grid-gap: 20px 30px;

      text-align: start;

      .icon {
        i {
          margin: 0 auto;
        }
      }

      .link {
        display: flex;
        flex-direction: row;
        grid-gap: 20px;
      }
    }

    .left {
      grid-column-start: 1;
      grid-column-end: 5;
      grid-row-start: 1;
      grid-row-end: 6;
    }

    .right {
      grid-column-start: 5;
      grid-column-end: 9;
      grid-row-start: 2;
      grid-row-end: 7;
    }
  }
}
</style>