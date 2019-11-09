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
    },
    created() {
      if (process.client) {
        console.log('process.client', process.client)
        if (window && window.netlifyIdentity) {
          console.log('netlifyIdentity.init')
          window.netlifyIdentity.on("init", user => {
            if (!user) {
              window.netlifyIdentity.on("login", () => {
                document.location.href = "/admin/";
              });
            }
          });
        }
      }
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

  a {
    color: $color-primary;
  }

  p,
  pre {
    font-size: 1em;
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
    height: auto;
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

  img {
    width: 100%;
  }
</style>
