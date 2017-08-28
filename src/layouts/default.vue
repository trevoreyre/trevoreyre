<template>
  <div>
    <nuxt/>
    <site-footer></site-footer>
  </div>
</template>

<script>
  import SiteFooter from '~/components/SiteFooter'

  export default {
    components: {
      SiteFooter
    }
  }
</script>

<style lang='scss'>
  @import '~common/variables';
  @import '~common/mixins';
  @import '~common/normalize';

  * {
    box-sizing: border-box;
    position: relative;
    transition: all .3s ease;
  }

  html {
      height: 100%;
      font-size: $font-size;
  }

  body {
    min-height: 100%;
    display: flex;
    flex-direction: column;
    background: $color-background;
    font-family: $font-stack;
    color: $text-color-primary;
    font-weight: 400;
    line-height: 1.45;
  }

  main {
      flex: 1;
  }

  h1, h2, h3, h4 {
    margin: 1.414em 0 0.5em;
    font-weight: inherit;
    line-height: 1.2;
  }

  h1 {
    margin-top: 0;
    font-size: 2.618em;
    color: $color-primary;
    @include breakpoint-tablet() {
      font-size: 4.236em;
      font-weight: 300;
    }
  }

  h2 {
    font-size: 1.618em;
    color: $color-primary;
  }

  h3 {
    font-size: 1.3em;
    @include breakpoint-tablet() {
      font-size: 1.618em;
    }
  }

  p,
  pre {
    margin-bottom: 1.3em;
    line-height: 1.618;
    @include breakpoint-tablet() {
      font-size: 1.3em;
    }
  }

  ul {
    margin-bottom: 1.3em;
    padding: 0 0 0 1.5em;
  }

  li {
    font-size: 1em;
    line-height: 1.618;
    @include breakpoint-tablet() {
      font-size: 1.3em;
    }
  }

  small,
  .font_small {
    font-size: 0.618em;
  }

  /* Nav */
  #nav-main {
      width: 200px;
      height: 100%;
      position: fixed;
      left: -200px;
      z-index: 2;
      background: $color-primary;
      transition: all 0.3s;
  }

  #nav-main.open {
      left: 0;
  }

  #nav-main ul {
      padding: 40px 0 0 0;
      list-style: none;
  }

  #nav-main li {
      margin: 16px 24px;
  }

  #nav-main a {
      color: $text-color-primary-on-contrast;
  }

  section {
    margin: 0 auto $spacing-l auto;
    padding: 0 $spacing-s;
    @include breakpoint-desktop() {
      padding: 0 $spacing-l;
      margin-bottom: $spacing-xl;
    }
  }

  article > section:last-of-type {
    border-bottom: none;
    margin-bottom: 0;
  }

  img {
    width: 100%;
  }

  .container {
    max-width: $breakpoint-desktop;
    margin: 0 auto;
  }

  .container.medium {
    max-width: $breakpoint-tablet;
  }

  .container.small {
    max-width: 600px;
  }

  .container.left {
    margin: 0;
  }

  .services-list {
    display: flex;
  }

  .services-list ul {
    flex: 1;
  }

  header {
    text-align: center;
    margin: 0 auto $spacing-l auto;
    @include breakpoint-desktop() {
      margin-bottom: $spacing-xl;
    }
  }

  .project {
    margin-top: 50px;
  }

  .project-summary {
    display: flex;
    flex-direction: column;
    @include breakpoint-tablet() {
      flex-direction: row;
      align-items: center;
    }
  }

  .project-summary-image {
    min-height: 250px;
    flex: 2;
  }

  .project-summary-description {
    flex: 1;
  }

  .project-summary > *:first-child {
    margin-bottom: $spacing-l;
    @include breakpoint-tablet() {
      margin-bottom: 0;
      margin-right: $spacing-xl;
    }
  }

  .project-logo {
    width: auto;
    max-width: 100%;
  }

  .actions > * {
    margin: 0 $spacing-m $spacing-m 0;
  }

  .actions > *:last-child {
    margin-right: 0;
  }

  footer .actions {
    text-align: center;
  }

  #services-actions {
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    text-align: center;
    margin-bottom: $spacing-l;
  }

  img {
    width: 100%;
  }

  .device {
    border-radius: 2vw;
    position: relative;
    box-sizing: border-box;
    background: #fff;
    box-shadow: inset 0 4px 7px 1px #fff,
      inset 0 -5px 20px rgba(173, 186, 204, .25),
      0 2px 6px rgba(0, 21, 64, .14),
      0 10px 20px rgba(0, 21, 64, .05);
  }

  .device img {
    border-radius: 4px;
    border: 1px solid rgba(0, 0, 0, .24);
  }

  .device::before,
  .device::after {
    content: "";
    display: block;
    position: absolute;
    background: #fff;
    box-shadow: inset 0 4px 7px 1px #fff,
      inset 0 -5px 20px rgba(173, 186, 204, .25),
      0 2px 6px rgba(0, 21, 64, .14),
      0 10px 20px rgba(0, 21, 64, .05);
  }

  .phone,
  .tablet {
    padding: 2.6vw .75vw;
    @include breakpoint-tablet() {
      padding: 20px 5.9px;
      border-radius: 13px;
    }
  }

  .phone.landscape,
  .tablet.landscape {
    padding: .75vw 3vw;
  }

  .laptop {
    margin-left: 12%;
    margin-right: 12%;
    margin-bottom: 2.5%;
    border-radius: 1vw;
    padding: 1.35%;
  }

  .desktop {
    margin-bottom: 11%;
    border-radius: 1vw;
    padding: 1.5%;
  }


  // Phone speaker
  .phone::before {
    border-radius: 50px;
    margin: 0 auto;
    left: 0;
    right: 0;
    top: 1.15vw;
    width: 20%;
    height: 0.3vw;
    box-shadow: inset 0 0 3px 1px rgba(0, 0, 0, .12);
    @include breakpoint-tablet() {
      top: 8.85px;
      width: 22px;
      height: 2.3px;
    }
  }

  .phone.landscape::before {
    margin: auto 0;
    left: 1.3vw;
    top: 0;
    bottom: 0;
    width: 0.3vw;
    height: 20%;
  }


  // Phone and tablet buttons
  .phone::after,
  .tablet::after {
    border-radius: 100%;
    margin: 0 auto;
    left: 0;
    right: 0;
    bottom: .4vw;
    width: 2.2vw;
    height: 2.2vw;
    box-shadow: inset 0 0 5px 1px rgba(0, 0, 0, .12);
    @include breakpoint-tablet() {
      width: 17.5px;
      height: 17.5px;
      bottom: 4px;
    }
  }

  .phone.landscape::after,
  .tablet.landscape::after{
    margin: auto 0;
    left: calc(100% - 2.5vw);
    top: 0;
    bottom: 0;
  }


  // Tablet camera
  .tablet::before {
    border-radius: 100%;
    margin: 0 auto;
    left: 0;
    right: 0;
    top: .925vw;
    width: .75vw;
    height: .75vw;
    background: #eee;
    box-shadow: inset 0 0 3px 1px rgba(0, 0, 0, .12);
    @include breakpoint-tablet() {
      width: 5px;
      height: 5px;
      top: 7.5px;
    }
  }

  .tablet.landscape::before {
    margin: auto 0;
    left: .925vw;
    top: 0;
    bottom: 0;
  }


  // Bottom of laptop
  .laptop::after {
    border-radius: 4px 4px 48px 48px;
    left: -15%;
    bottom: -4%;
    width: 130%;
    height: 7%;
  }


  // Desktop arm
  .desktop::before {
    margin: 0 auto;
    left: 0;
    right: 0;
    bottom: -18%;
    width: 20%;
    height: 20%;
    background: #fafafa;
    z-index: -1;
  }


  // Bottom of desktop stand
  .desktop::after {
    border-radius: 4px 4px 24px 24px;
    margin: 0 auto;
    left: 0;
    right: 0;
    bottom: -19.5%;
    width: 34%;
    height: 2%;
  }


  // Phone, tablet, and desktop together
  .device-collection {
    width: 100%;
    position: relative;
  }

  .device-collection::after {
    content: "";
    display: block;
    padding-top: 62.75%;
  }

  .device-collection .device {
    position: absolute;
    bottom: 0;
  }

  .device-collection .phone {
    margin: 0;
    left: 0;
    max-width: 15%;
    z-index: 2;
  }

  .device-collection .tablet {
    margin: 0;
    right: 0;
    max-width: 30%;
    z-index: 1;
  }

  .device-collection .desktop {
    left: 0;
    right: 0;
    margin: 0 5% 10.25%;
  }
</style>
