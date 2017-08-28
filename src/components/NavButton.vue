<template>
  <nuxt-link :to='href'>
    <button :class="['nav-button', {open: open}]">
      <span>Back</span>
    </button>
  </nuxt-link>
</template>

<script>
  export default {
    name: 'nav-button',
    props: {
      href: {
        type: String
      },
      open: {
        type: Boolean,
        default: false
      }
    }
  }
</script>

<style lang='scss' scoped>
  @import '~common/variables';

  /* Variables */
  $button-width: 56px;
  $button-height: 56px;
  $bar-thickness: 2px;
  $button-pad: 18px;
  $button-bar-space: 4px;
  $button-transistion-duration: 0.3s;

  /* Nav button. Nav button animation credit: Nick Salloum
  http://callmenick.com/post/animating-css-only-hamburger-menu-icons */
  .nav-button {
    display: block;
    position: fixed;
    top: 8px;
    left: 8px;
    z-index: 3;
    overflow: hidden;
    margin: 0;
    padding: 0;
    width: $button-width;
    height: $button-height;
    font-size: 0;
    text-indent: -9999px;
    background: $color-primary;
    appearance: none;
    box-shadow: 0 1px 1.5px 0 rgba(0,0,0,.12),0 1px 1px 0 rgba(0,0,0,.24);
    border-radius: 50%;
    border: none;
    cursor: pointer;
    transition: background $button-transistion-duration,
      box-shadow $button-transistion-duration;
  }

  .nav-button:focus {
    outline: none;
  }

  .nav-button span {
    display: block;
    position: absolute;
    top: ($button-height / 2) - ($bar-thickness / 2);
    left: $button-pad;
    right: $button-pad;
    height: $bar-thickness;
    background: #fff;
  }

  .nav-button span::before,
  .nav-button span::after {
    position: absolute;
    display: block;
    left: 0;
    width: 100%;
    height: $bar-thickness;
    background-color: #fff;
    content: "";
  }

  .nav-button span::before {
    top: -$bar-thickness - $button-bar-space;
  }

  .nav-button span::after {
    bottom: -$bar-thickness - $button-bar-space;
  }

  /* Nav button animation */
  .nav-button span {
    transition: transform $button-transistion-duration;
  }

  .nav-button span::before {
    transform-origin: top right;
    transition: transform $button-transistion-duration,
      width $button-transistion-duration,
      top $button-transistion-duration;
  }

  .nav-button span::after {
    transform-origin: bottom right;
    transition: transform $button-transistion-duration,
      width $button-transistion-duration,
      bottom $button-transistion-duration;
  }

  /* Menu open */
  .nav-button.open {
    box-shadow: none;
  }

  .nav-button.open span {
    transform: rotate(180deg);
  }

  .nav-button.open span::before,
  .nav-button.open span::after {
    width: 50%;
  }

  .nav-button.open span::before {
    top: 0;
    transform: translateX($button-width/2 - $button-pad + $bar-thickness)
      translateY($bar-thickness/2) rotate(45deg);
  }

  .nav-button.open span::after {
    bottom: 0;
    transform: translateX($button-width/2 - $button-pad + $bar-thickness)
      translateY(-$bar-thickness/2) rotate(-45deg);
  }
</style>
