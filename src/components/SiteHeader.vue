<template>
  <header class="site-header">
    <div class="site-header-inner">
      <nav class="header-menu">
        <ul class="menu-primary">
          <li class="menu-item">
            <nuxt-link to="/portfolio">Projects</nuxt-link>
          </li>
          <li class="menu-item">
            <nuxt-link to="/lab">Lab</nuxt-link>
          </li>
          <li class="menu-item">
            <nuxt-link to="/about/resume">Resume</nuxt-link>
          </li>
          <li class="menu-item">
            <nuxt-link to="#contact">Contact</nuxt-link>
          </li>
        </ul>
        <ul class="social">
          <li>
            <a href="mailto:trevoreyre@gmail.com" target="_blank">
              <icon-email></icon-email>
            </a>
          </li>
          <li>
            <a href="https://github.com/TrevorEyre" target="_blank">
              <icon-github></icon-github>
            </a>
          </li>
          <li>
            <a href="https://codepen.io/TrevorEyre" target="_blank">
              <icon-codepen></icon-codepen>
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/trevoreyre" target="_blank">
              <icon-linkedin></icon-linkedin>
            </a>
          </li>
        </ul>
      </nav>
    </div>
    <div class="site-header-background">
      <hero title="Trevor Eyre" subtitle="Front-end engineer"></hero>
    </div>
  </header>
</template>

<script>
  import Button from '~/components/Button'
  import ButtonGroup from '~/components/ButtonGroup'
  import Hero from '~/components/Hero'
  import IconCodepen from '~/components/icons/IconCodepen'
  import IconEmail from '~/components/icons/IconEmail'
  import IconGithub from '~/components/icons/IconGithub'
  import IconLinkedin from '~/components/icons/IconLinkedin'

  export default {
    name: 'site-header',
    components: {
      'te-button': Button,
      ButtonGroup,
      Hero,
      IconCodepen,
      IconEmail,
      IconGithub,
      IconLinkedin
    }
  }
</script>

<style lang='scss' scoped>
  @import '~common/variables';
  @import '~common/mixins';

  .site-header {
    margin-bottom: 0;
    height: 100vh;
    display: flex;
    align-items: center;
    text-align: left;
  }

  .site-header-inner {
    padding: $spacing-l;
    width: 100%;
    height: 100%;
    color: $text-color-primary-on-primary;
    display: flex;
    flex-flow: column nowrap;
    /* background: linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0) 80%, $color-background 100%); */
    z-index: 1;
  }

  .site-header-logo img {
    display: none;
    @include breakpoint(550px) {
      display: block;
      width: $logo-width;
      height: $logo-width;
      left: (-0.5 * $logo-width);
    }
  }

  .site-header-background {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    /* z-index: -1; */
    overflow: hidden;
  }

  .site-header-background svg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }


  /* Navigation */
  nav a {
    display: inline-block;
    color: $text-color-primary-on-primary;
    font-size: 1em;
    letter-spacing: 2px;
    line-height: 1;
    text-transform: uppercase;
    text-decoration: none;
    text-shadow: 0 1px 2px rgba(black, 0.2);
  }

  nav svg {
    fill: $text-color-primary-on-primary;
  }

  .header-menu {
    display: flex;
    align-items: center;
  }

  .menu-primary {
    margin: 0 auto 0 0;
    padding: 0;
    list-style: none;
  }

  .menu-primary li {
    display: inline-block;
  }

  .menu-primary a {
    display: inline-block;
    margin: 0;
    padding: $spacing-m;
  }

  .social {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  .social li {
    display: inline-block;
  }

  .social a {
    padding: $spacing-xs;
    margin: $spacing-xs;
    width: $spacing-l;
    height: $spacing-l;
  }
</style>
