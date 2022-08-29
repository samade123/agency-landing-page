<template>
  <div class="home">
    <HeaderNav />
    <FirstSection />
    <SecondSection />
    <ThirdSection />
    <FourthSection />
    <FifthSection />

    <div class="last section wrapper">
      <div class="last section">
        <div class="title-wrapper">
          <div class="title">Want to grow your Business?</div>
          <div class="title">We should talk!</div>
        </div>

        <div class="chat bordered">
          let's chat <i class="las la-external-link-alt"></i>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HeaderNav from "@/components/HeaderNav.vue";
import FirstSection from "@/components/FirstSection.vue";
import SecondSection from "@/components/SecondSection.vue";
import ThirdSection from "@/components/ThirdSection.vue";
import FourthSection from "@/components/FourthSection.vue";
import FifthSection from "@/components/FifthSection.vue";

export default {
  name: "HomeView",
  components: {
    HeaderNav,
    FirstSection,
    SecondSection,
    ThirdSection,
    FourthSection,
    FifthSection,
  },
};
</script>

<style lang="scss" scoped>
@import "@/styles/theme.scss";

.home {
  display: grid;

  grid-template-rows: repeat(auto-fit, minmax(70px, 1fr)); //controls height

  place-items: center;
}

.last.section {
  display: grid;
  place-items: center;
  grid-gap: 50px;

  width: min(1400px, 100vw);
  height: 100%;

  padding: 50px 0;

  justify-content: center;
  &.wrapper {
    place-items: center;
    width: 100%;
    grid-template-columns: 1fr;
  }

  .title-wrapper {
    display: grid;
    place-items: center;
    text-align: center;
    grid-gap: 10px;

    .title {
      width: fit-content;

    }
  }

  .chat.bordered {
    border: solid white 1px;
    padding: 15px;
    border-radius: 23px;
  }
  // grid-gap: px;

  // box-sizing: border-box;

  background: var(--app-background-color);
}
</style>
