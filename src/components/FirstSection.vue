<template>
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
</template>

<script>
export default {};
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

    width: min(1400px, 90vw);

    grid-gap: 20px min(200px, 30vw);

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
      font-size: 2.7em;
      flex: 2;
    }

    .right {
      flex: 1;
      min-width: 160px;
    }
  }
}
</style>