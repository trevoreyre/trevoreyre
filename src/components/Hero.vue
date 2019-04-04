<template>
<div class="hero">
  <div class="title-container parallax" data-rellax-speed="-10">
    <h1 class="title">
      <template v-for="titleWord in titleWords">
        <span :key="titleWord" class="cap">{{ titleWord[0] }}</span>{{ titleWord.substr(1) }}
      </template>
    </h1>
    <h2 class="subtitle">
      {{ subtitle }}
    </h2>
  </div>
  <!-- <div class="sun parallax" data-rellax-speed="-8"></div> -->
  <hero-background></hero-background>
</div>
</template>

<script>
import Rellax from 'rellax'
import HeroBackground from '~/components/HeroBackground'

export default {
  name: 'hero',
  props: {
    title: {
      type: String
    },
    subtitle: {
      type: String
    }
  },
  computed: {
    titleWords: function () {
      return this.title.split(' ')
    }
  },
  mounted: function () {
    this.$nextTick(function () {
      Rellax('.parallax')
    })
  },
  components: {
    HeroBackground
  }
}
</script>

<style lang='scss' scoped>
  @import '~common/variables';
  @import '~common/mixins';

  .hero {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    /* background: linear-gradient(to top, #6a498f 100%, #cfa7c0 80%, #ba8da5 70%, #ba82a5 60% #926898 45%, #271638 0%) repeat-x 0 fixed; */
    /* background: linear-gradient(to bottom, #2d91c2, #1e528e); */
    background: radial-gradient(ellipse, #ccc9d4 0%, rgba(235,225,226,1) 100%);
  }

  .hero svg {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 3;
  }

  .sun {
    width: 200px;
    height: 200px;
    border-radius: 50%;
    background: linear-gradient(to bottom, #fff, #fff8a2);
    box-shadow: 0 0 250px 250px #fff8a27a;
    position: absolute;
    top: 35%;
    right: 25%;
    z-index: 1;
  }

  .title-container {
    z-index: 2;
  }

  .title {
    font-size: 120px;
    font-weight: 300;
    line-height: 1;
    margin: 120px 0 $spacing-m 0;
    color: $text-color-primary-on-primary;
    text-align: center;
    text-shadow: 0 1px 2px rgba(black, 0.2);
    text-transform: uppercase;
    @include breakpoint-tablet() {
      font-size: 200px;
    }
  }

  .title .cap {
    font-size: 168px;
    @include breakpoint-tablet() {
      font-size: 280px;
    }
  }

  .subtitle {
    font-size: 80px;
    font-weight: 400;
    line-height: 1;
    margin: 0;
    color: $text-color-primary-on-primary;
    text-align: center;
    text-shadow: 0 1px 2px rgba(black, 0.2);
    z-index: 1;
  }
</style>
