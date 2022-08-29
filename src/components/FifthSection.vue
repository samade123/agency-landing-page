<template>
  <div class="fifth section wrapper">
    <div class="fifth section">
      <div class="title">What people are saying about us</div>
      <div class="content">
        <div class="slider">
          <div class="content-piece">
            <div class="top">
              <div class="photo top-left"></div>
              <div class="top-right">
                <div class="sub-top">Shirtin Salto</div>
                <div class="sub-bottom">Owner - Hotel Indah</div>
              </div>
            </div>

            <div class="bottom">
              'It was so easy to get started with Bolue. After working with
              them, we started seeing resultswithin weeks. It's awesome'
            </div>
          </div>

          <div class="content-piece">
            <div class="top">
              <div class="photo top-left"></div>
              <div class="top-right">
                <div class="sub-top">Shirtin Salto</div>
                <div class="sub-bottom">Owner - Hotel Indah</div>
              </div>
            </div>

            <div class="bottom">
              'It was so easy to get started with Bolue. After working with
              them, we started seeing resultswithin weeks. It's awesome'
            </div>
          </div>

          <div class="content-piece">
            <div class="top">
              <div class="photo top-left"></div>
              <div class="top-right">
                <div class="sub-top">Shirtin Salto</div>
                <div class="sub-bottom">Owner - Hotel Indah</div>
              </div>
            </div>

            <div class="bottom">
              'It was so easy to get started with Bolue. After working with
              them, we started seeing resultswithin weeks. It's awesome'
            </div>
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

gsap.registerPlugin(ScrollTrigger);

export default {
  name: "FifthSection",
  setup() {
    var tl = gsap.timeline({ delay: 0.07, smoothChildTiming: true });
    var tlTwo = gsap.timeline({ delay: 0.07, smoothChildTiming: true });

    onMounted(() => {
      setTimeout(() => {
        tl.from([".fifth.section .slider .content-piece"], {
          x: 300, // any properties (not limited to CSS)
          // opacity: 0,
          duration: 1, // seconds
          ease: "power1.inOut",
          // yoyo: true,
          // delay: 0.5,
          stagger: 0.2,
        });

        // tlTwo.from([".fifth.section .slider .content-piece"], {
        //   y: 50, // any properties (not limited to CSS)
        //   opacity: 0,
        //   duration: 1, // seconds
        //   ease: "power1.inOut",
        //   // yoyo: true,
        //   // delay: 0.5,
        //   stagger: 0.2,
        // });

        // tl.add(tlTwo, "-=0.1");

        ScrollTrigger.create({
          trigger: ".fifth",
          start: "center bottom",
          endTrigger: ".fifth",
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

<style lang="scss" scoped >
@import "@/styles/theme.scss";

.fifth {
  &.wrapper {
    background: #fafafa;
    width: 100%;
  }
  width: min(1400px, 90vw);
  color: var(--app-background-color);

  .slider {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-auto-rows: minmax(min-content, max-content);

    grid-gap: 15px;

    max-width: min(1400px, 90vw);

    overflow-x: scroll;
  }

  .content-piece {
    height: 250px;
    width: 300px;

    // width: 250px

    background: var(--dynamic-background-color);

    display: grid;
    grid-template-rows: auto 1fr;
    grid-gap: 10px;

    padding: 10px;
    box-sizing: border-box;
    .top {
      width: 100%;
      display: grid;
      grid-template-columns: auto 1fr;
      grid-gap: 10px;

      .photo {
        height: 40px;
        width: 40px;
        border-radius: 50%;
        background: black;
      }

      .top-right {
        display: grid;

        justify-self: start;
        text-align: start;
      }
    }

    .bottom {
      padding: 10px;
      box-sizing: border-box;
      display: grid;
      place-items: center;

      line-height: 1.8em;
      font-weight: light;

      font-style: italic;

      color: #000a;
    }
    margin-bottom: 50px;
  }
}
</style>