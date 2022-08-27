<template>
  <div class="home">
    <HeaderNav />
    <div class="first section">
      <div class="top">
        <div class="title">A fully integrated digital agency</div>
        <div class="right">
          <span>
            Create a beutiful Agency website with Bolue that converts more
            visitors than any website.
          </span>
          <span>Explore More</span>
        </div>
      </div>
      <img alt="Vue logo" src="../assets/image-4.webp" />
    </div>

    <div class="second section">
      <div class="top">
        <div class="title">Service we can help you</div>
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
          <div class="title">Web design</div>
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
          <div class="title">Content Writing</div>
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
        <div class="right">
          <img alt="Vue logo" src="../assets/image-2.webp" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HeaderNav from "@/components/HeaderNav.vue";

export default {
  name: "HomeView",
  components: {
    HeaderNav,
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

.section {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  grid-gap: 3em 30px;
  padding: 50px 0 0 0;
  width: 100%;

  // width: min(1400px, 90vw);

  img {
    width: min(900px, 90vw);
  }
}

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

    .title {
      padding: 10px;
      box-sizing: border-box;
      font-size: 2.5em;
      flex-wrap: wrap;
      flex: 2;
    }

    .right {
      flex: 1;
    }
  }
}

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

    .title {
      font-size: 2.4em;
      flex-wrap: wrap;
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
    justify-content: center;

    flex: 5;

    // @media only screen and (max-width: 600px) {
      padding: 30px;
    // }

    .title {
      font-size: 1.8em;
      font-weight: 700;
      text-align: start;
      margin-bottom: 30px;

      // width: 100%;
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
