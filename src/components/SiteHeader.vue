<template>
  <header class="site-header">
    <div class="site-header-inner">
      <div class="site-header-title">
        <h1>Trevor Eyre</h1>
        <h2>Senior Front-end Software Engineer</h2>
        <p>Remote (Idaho)</p>
        <a href="tel:+12086316741" target="_blank">
          208.631.6741
        </a>
        <a href="mailto:trevoreyre@gmail.com" target="_blank">
          trevoreyre@gmail.com
        </a>
        <p></p>
      </div>
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
            <a aria-label="Phone" href="tel:+12086316741" target="_blank">
              <icon-phone></icon-phone>
            </a>
          </li>
          <li>
            <a
              aria-label="Email"
              href="mailto:trevoreyre@gmail.com"
              target="_blank"
            >
              <icon-email></icon-email>
            </a>
          </li>
          <li>
            <a
              aria-label="GitHub"
              href="https://github.com/TrevorEyre"
              target="_blank"
            >
              <icon-github></icon-github>
            </a>
          </li>
          <li>
            <a
              aria-label="LinkedIn"
              href="https://www.linkedin.com/in/trevoreyre"
              target="_blank"
            >
              <icon-linkedin></icon-linkedin>
            </a>
          </li>
        </ul>
      </nav>
    </div>
    <div class="site-header-logo">
      <img src="/img/trevoreyre-logo.png" />
    </div>
    <div class="site-header-background"></div>
  </header>
</template>

<script>
import Button from "~/components/Button";
import ButtonGroup from "~/components/ButtonGroup";
import IconCodepen from "~/components/icons/IconCodepen";
import IconEmail from "~/components/icons/IconEmail";
import IconGithub from "~/components/icons/IconGithub";
import IconLinkedin from "~/components/icons/IconLinkedin";
import IconPhone from "~/components/icons/IconPhone";

export default {
  name: "site-header",
  components: {
    "te-button": Button,
    ButtonGroup,
    IconCodepen,
    IconEmail,
    IconGithub,
    IconLinkedin,
    IconPhone
  }
};
</script>

<style lang="scss" scoped>
@import "~common/variables";
@import "~common/mixins";

.site-header {
  margin-bottom: $spacing-xxl;
  height: 500px;
  display: flex;
  align-items: center;
  text-align: left;
}

.site-header-inner {
  padding: $spacing-l $spacing-m;
  min-width: 50%;
  height: 100%;
  background: rgba($color-primary, 0.9);
  color: $text-color-primary-on-primary;
  display: flex;
  flex-flow: column nowrap;
  @include breakpoint(550px) {
    padding: $spacing-l ($spacing-m + (0.5 * $logo-width)) $spacing-l $spacing-m;
    background: radial-gradient(
      circle at center right,
      transparent,
      transparent ((0.5 * $logo-width) + $spacing-m),
      rgba($color-primary, 0.9) ((0.5 * $logo-width) + $spacing-m),
      rgba($color-primary, 0.9)
    );
  }
  @include breakpoint-tablet() {
    padding: $spacing-xl ($spacing-xl + (0.5 * $logo-width)) $spacing-xl
      $spacing-xl;
  }
}

.site-header-title {
  margin-bottom: auto;
}

.site-header-title h1 {
  font-size: 64px;
  font-weight: 300;
  line-height: 1;
  margin: 0 0 $spacing-m 0;
  color: $text-color-primary-on-primary;
  text-shadow: 0 1px 2px rgba(black, 0.2);
  @include breakpoint-tablet() {
    font-size: 72px;
  }
}

.site-header-title h2 {
  font-size: 24px;
  font-weight: 300;
  line-height: 1;
  margin: 0 0 $spacing-l 0;
  color: $text-color-secondary-on-primary;
  text-shadow: 0 1px 2px rgba(black, 0.2);
}

.site-header-title p,
.site-header-title a {
  font-size: 20px;
  font-weight: 300;
  line-height: 1;
  margin: $spacing-s 0;
  color: $text-color-secondary-on-primary;
  text-shadow: 0 1px 2px rgba(black, 0.2);
}

.site-header-title a {
  display: block;
  text-decoration: none;
}

.site-header-title a:hover {
  text-decoration: underline;
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
  background: url(https://source.unsplash.com/collection/905011/1600x900)
    no-repeat center center fixed;
  background-size: cover;
  z-index: -1;
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

.menu-primary {
  margin: 0 (-$spacing-m) 0;
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
  width: $spacing-l;
  height: $spacing-l;
}
</style>
