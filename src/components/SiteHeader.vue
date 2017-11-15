<template>
  <header class='site-header'>
    <div class='site-header-inner'>
      <div class='site-header-title'>
        <h1>Trevor Eyre</h1>
        <h2>Web developer. Software Engineer.</h2>
      </div>
      <nav class='header-menu'>
        <ul class='menu-primary'>
          <li class='menu-item'>
            <a href='/'>Home</a>
          </li>
          <li class='menu-item'>
            <a href='/lab'>Lab</a>
          </li>
          <li class='menu-item'>
            <a href='/about/resume'>Resume</a>
          </li>
          <li class='menu-item'>
            <a href='#contact'>Contact</a>
          </li>
        </ul>
        <ul class='social'>
          <li>
            <a href='mailto:trevoreyre@gmail.com' target='_blank'>
              <icon-email></icon-email>
            </a>
          </li>
          <li>
            <a href='https://github.com/TrevorEyre' target='_blank'>
              <icon-github></icon-github>
            </a>
          </li>
          <li>
            <a href='https://codepen.io/TrevorEyre' target='_blank'>
              <icon-codepen></icon-codepen>
            </a>
          </li>
          <li>
            <a href='https://www.linkedin.com/in/trevoreyre' target='_blank'>
              <icon-linkedin></icon-linkedin>
            </a>
          </li>
        </ul>
      </nav>
    </div>
    <div class='site-header-logo'>
      <img src='/img/trevoreyre-logo.png'>
    </div>
    <div class='site-header-background'></div>
  </header>
</template>

<script>
  import Button from '~/components/Button'
  import ButtonGroup from '~/components/ButtonGroup'
  import IconCodepen from '~/components/icons/IconCodepen'
  import IconEmail from '~/components/icons/IconEmail'
  import IconGithub from '~/components/icons/IconGithub'
  import IconLinkedin from '~/components/icons/IconLinkedin'

  export default {
    name: 'site-header',
    components: {
      'te-button': Button,
      ButtonGroup,
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
    height: 500px;
    display: flex;
    align-items: center;
    text-align: left;
  }

  .site-header-inner {
    padding: $spacing-xl ($spacing-xl + (0.5 * $logo-width)) $spacing-xl $spacing-xl;
    min-width: 50%;
    height: 100%;
    background: radial-gradient(circle at center right, transparent, transparent ((0.5 * $logo-width) + $spacing-m), rgba($color-primary, 0.9) 96px, rgba($color-primary, 0.9));
    color: white;
    display: flex;
    flex-flow: column nowrap;
  }

  .site-header-title {
    margin-bottom: auto;
  }

  .site-header-title h1 {
    font-size: 72px;
    font-weight: 300;
    line-height: 1;
    margin: 0 0 $spacing-m 0;
    color: $text-color-primary-on-primary;
  }

  .site-header-title h2 {
    font-size: 24px;
    font-weight: 300;
    line-height: 1;
    margin: 0;
    color: $text-color-secondary-on-primary;
  }

  .site-header-logo img {
    width: $logo-width;
    height: $logo-width;
    left: (-0.5 * $logo-width);
  }

  .site-header-background {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url(https://source.unsplash.com/collection/905011/1600x900) no-repeat center center fixed;
    background-size: cover;
    z-index: -1;
  }


  /* Navigation */
  nav a {
    display: inline-block;
    color: white;
    font-size: 1em;
    text-transform: uppercase;
    letter-spacing: 2px;
    line-height: 1;
    text-decoration: none;
  }

  nav svg {
    fill: white;
  }

  .menu-primary {
    margin: 0 (-$spacing-m) 0;
    padding: 0;
    list-style: none;
    display: flex;
    align-items: center;
  }

  .menu-primary a {
    display: block;
    margin: 0;
    padding: $spacing-m;
  }

  .social {
    margin: 0 (-2 * $spacing-xs) (-2 * $spacing-xs);
    padding: 0;
    list-style: none;
  }

  .social li {
    display: inline-block;
  }

  .social a {
    padding: $spacing-xs;
    margin: $spacing-xs;
    width: 32px;
    height: 32px;
  }
</style>
