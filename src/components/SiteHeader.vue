<template>
  <header class='site-header'>
    <div class='site-header-title-container'>
      <div class='site-header-title'>
        <h1>Trevor Eyre</h1>
        <h2>Web developer. Software Engineer.</h2>
      </div>
    </div>
    <div class='site-header-actions-container'>
      <div class='site-header-actions'>
        <button-group>
          <te-button href='#projects'
            type='flat-inverse'
            theme='secondary'
            target='_self'>
            View my work
          </te-button>
          <te-button href='#contact'
            type='flat-inverse'
            theme='secondary'
            target='_self'>
            Ask about your project
          </te-button>
        </button-group>
      </div>
    </div>
    <div class='site-header-logo'>
      <img src='/img/trevoreyre-logo.png'>
    </div>
    <div class='site-header-clip'></div>
    <div class='site-header-background'></div>
  </header>
</template>

<script>
  import Button from '~/components/Button'
  import ButtonGroup from '~/components/ButtonGroup'

  export default {
    name: 'site-header',
    components: {
      'te-button': Button,
      ButtonGroup
    }
  }
</script>

<style lang='scss' scoped>
  @import '~common/variables';
  @import '~common/mixins';

  .site-header {
    margin: 0 auto $spacing-l auto;
    text-align: left;
    @include breakpoint-desktop() {
      margin-bottom: $spacing-xl;
    }
  }

  .site-header h1 {
    line-height: 1;
    margin: 0 0 $spacing-m 0;
    color: $text-color-primary-on-primary;
  }

  .site-header h2 {
    margin: 0;
    font-weight: 300;
    line-height: 1;
    color: $text-color-secondary-on-secondary;
  }

  .site-header-title-container {
    display: flex;
    justify-content: flex-start;
    min-height: 45vh;
    margin-bottom: 10vh;
    @include breakpoint-tablet() {
      margin-bottom: 0;
    }
  }

  .site-header-title {
    padding: $spacing-l;
    width: 100%;
    background: $color-primary;
    color: $text-color-primary-on-primary;
    display: flex;
    flex-flow: column nowrap;
    text-align: center;
    justify-content: flex-start;
    @include breakpoint-tablet() {
      padding: $spacing-xl;
      width: 50%;
      text-align: left;
      justify-content: center;
    }
  }

  .site-header-actions-container {
    display: flex;
    justify-content: flex-end;
    min-height: 45vh;
    margin-top: 10vh;
    @include breakpoint-tablet() {
      margin-top: 0;
    }
  }

  .site-header-actions {
    padding: $spacing-l;
    width: 100%;
    background: $color-secondary;
    color: white;
    display: flex;
    flex-flow: row wrap;
    align-items: flex-end;
    justify-content: center;
    @include breakpoint-tablet() {
      padding: $spacing-xl;
      width: 50%;
      align-items: center;
    }
  }

  .site-header-actions .button {
    margin: 0 16px 16px 0;
  }

  .site-header-logo {
    width: 160px;
    height: 160px;
    position: absolute;
    top: calc(50% - 80px);
    left: calc(50% - 80px);
    z-index: 2;
  }

  .site-header-logo img {
    width: 100%;
  }

  .site-header-background {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url(https://source.unsplash.com/collection/905011/3200x1800) no-repeat center center fixed;
    background-size: cover;
    z-index: -1;
  }

  .site-header-clip {
    display: none;
  }

  @supports (clip-path: circle(90px at 50% 50%)) {
    .site-header-clip {
      display: block;
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: url(https://source.unsplash.com/collection/905011/3200x1800) no-repeat center center fixed;
      background-size: cover;
      z-index: 1;
      clip-path: circle(90px at 50% 50%);
    }
  }
</style>
