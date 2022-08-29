<template>
  <div class="fourth section">
    <div class="title">How do we work?</div>
    <div class="content">
      <div class="one content-piece">
        <div
          class="top"
          :style="{
            backgroundImage: 'url(' + require('@/assets/image-7.webp') + ')',
          }"
        >
          <img src="../assets/image-7.webp" alt="" />
        </div>
        <div class="bottom">
          <div class="sub-title">User centred design</div>
          <div class="content">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
            mollitia, molestiae quas vel sint commodi
          </div>
        </div>
      </div>
      <div class="two content-piece">
        <div
          class="top"
          :style="{
            backgroundImage: 'url(' + require('@/assets/image-7.webp') + ')',
          }"
        >
          <img src="../assets/image-7.webp" alt="" />
        </div>
        <div class="bottom">
          <div class="sub-title">Scrum and agile movement</div>
          <div class="content">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
            mollitia, molestiae quas vel sint commodi
          </div>
        </div>
      </div>
      <div class="three content-piece">
        <div
          class="top"
          :style="{
            backgroundImage: 'url(' + require('@/assets/image-7.webp') + ')',
          }"
        >
          <img src="../assets/image-7.webp" alt="" />
        </div>
        <div class="bottom">
          <div class="sub-title">Continuous Integration</div>
          <div class="content">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
            mollitia, molestiae quas vel sint commodi
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { onMounted } from "@vue/runtime-core";
import { widthFunction } from "@/composable/Mobile";

gsap.registerPlugin(ScrollTrigger);

export default {
  name: "FourthSection",
  setup() {
    const { width, setMobile } = widthFunction();

    var tl = gsap.timeline({ delay: 0.07, smoothChildTiming: true });
    // var tlTwo = gsap.timeline({ delay: 0.07, smoothChildTiming: true });

    onMounted(() => {
      setTimeout(() => {
        var animation = setMobile.value
          ? {
              scaleX: 0.9, // any properties (not limited to CSS)
              // zIndex: 45,
              opacity: 0,
              duration: 0.9, // seconds
              ease: "power2.inOut",
              yoyo: true,
              // delay: 0.5,
              stagger: 0.2,
            }
          : {
              y: -40, // any properties (not limited to CSS)
              // opacity: 0,
              duration: 0.5, // seconds
              ease: "power1.inOut",
              yoyo: true,
              // delay: 0.5,
              stagger: 0.1,
            };

        tl.from(
          [
            ".fourth.section .content-piece",
            ".fourth.section .content-piece div",
          ],
          animation
        );

        ScrollTrigger.create({
          trigger: ".fourth",
          start: "center bottom",
          endTrigger: ".fourth",
          animation: tl,
          // markers: true,
          toggleActions: "play pause resume none",
          // once: true,
        });
      }, 50);
    });

    return { setMobile };
  },
};
</script>

<style lang="scss" scoped >
@import "@/styles/theme.scss";

.fourth.section {
  width: min(1400px, 90vw);
  color: var(--app-background-color);

  // padding: 0 0 25px 0;

  .content {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;

    @media only screen and (max-width: 600px) {
      flex-direction: column;
      grid-gap: 30px;
    }
    grid-gap: min(20px, calc(5vw - 20px));
    .content-piece {
      flex: 1;

      width: 100%;
      height: 100%;

      display: flex;
      flex-direction: column;

      @media only screen and (max-width: 600px) {
        flex-direction: row;
        width: 90vw;
      }

      grid-gap: 15px;

      .top {
        width: max(80px, 20vw);
        max-width: 350px;
        flex: 3;

        background-position: center top;
        background-repeat: no-repeat;
        background-size: contain;
        @media only screen and (max-width: 600px) {
          max-width: 100px;

          // min-heighZt: 80px;
        }
        height: 100%;
        img {
          width: 100%;
          object-fit: cover;
        }
      }

      .bottom {
        flex: 1;
        grid-gap: 10px;
        min-height: calc(110px + 0.7vw);
        width: max(100px, 20vw);
        @media only screen and (min-width: 600px) {
          margin-bottom: 50px;
        }
        @media only screen and (max-width: 1400px) {
          min-height: calc(110px + 2vw);
        }
        @media only screen and (max-width: 900px) {
          min-height: calc(170px + 10vw);
        }

        @media only screen and (max-width: 600px) {
          min-height: auto;
          // width: 90vw;
        }
        display: grid;
        text-align: start;

        .sub-title {
          font-size: calc(1.2em + 0.3vw);
          font-weight: 600;
        }

        .content {
          max-width: 100%;
        }
      }
    }
  }
}
</style>