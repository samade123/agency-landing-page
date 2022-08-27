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
export default {};
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