<template>
  <div class="fourth section">
    <div class="title">How do we work?</div>
    <div class="content">
      <div class="one content-piece">
        <div class="top">
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
        <div class="top">
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
        <div class="top">
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
export default {};
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
    }
    grid-gap: max(15px, calc(5vw - 20px));
    .content-piece {
      flex: 1;

      display: flex;
      flex-direction: column;

      @media only screen and (max-width: 600px) {
        flex-direction: row;
      }

      grid-gap: 15px;

      .top {
        width: max(55px, 20vw);
        max-width: 350px;
        flex: 3;
        @media only screen and (max-width: 600px) {
          max-width: 100px;

          height: 80px;
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
        min-height: calc(110px + 0.5vw);

        margin-bottom: 50px;
        @media only screen and (max-width: 1400px) {
          min-height: calc(110px + 2vw);
        }
        @media only screen and (max-width: 900px) {
          min-height: calc(140px + 5vw);
        }

        @media only screen and (max-width: 600px) {
          min-height: auto;
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