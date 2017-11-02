<template>
  <nuxt-link v-if='href && internal'
    :class="['button', size, theme, type]"
    :to='href'
  >
    <slot></slot>
  </nuxt-link>
  <a v-else-if='href'
    :class="['button', size, theme, type]"
    :href='href'
    target='_blank'
  >
    <slot></slot>
  </a>
  <button v-else
    :class="['button', size, theme, type]"
  >
    <slot></slot>
  </button>
</template>

<script>
  import {sizeValidator, themeValidator} from '~/common/propValidators'

  export default {
    name: 'te-button',
    props: {
      href: {
        type: String
      },
      internal: {
        type: Boolean,
        default: false
      },
      size: {
        type: String,
        default: 'medium',
        validator: sizeValidator
      },
      theme: {
        type: String,
        default: 'neutral',
        validator: themeValidator
      },
      type: {
        type: String,
        default: 'default',
        validator: value => (
          ['default', 'raised', 'flat', 'flat-inverse'].includes(value)
        )
      }
    }
  }
</script>

<style lang='scss' scoped>
  @import '~common/variables';

  .button {
    border-radius: $border-radius-s;
    border: 1px solid $color-background-low-contrast;
    padding: $spacing-m;
    max-width: 100%;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    text-align: center;
    line-height: 1;
    background: $color-background-low-contrast;
    color: $text-color-primary;
  }

  .button:hover {
    border-color: darken($color-background-low-contrast, 7);
    background: darken($color-background-low-contrast, 7);
    text-decoration: none;
    cursor: pointer;
  }

  .button > *:not(:last-child) {
    margin-right: $spacing-s;
  }

  .small {
    padding: $spacing-s;
  }

  .large {
    padding: $spacing-l;
  }

  .primary {
    border-color: $color-primary;
    background: $color-primary;
    color: $text-color-primary-on-primary;
  }

  .primary:hover {
    border-color: darken($color-primary, 7);
    background: darken($color-primary, 7);
  }

  .secondary {
    border-color: $color-secondary;
    background: $color-secondary;
    color: $text-color-primary-on-secondary;
  }

  .secondary:hover {
    border-color: darken($color-secondary, 7);
    background: darken($color-secondary, 7);
  }

  .raised {
    box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
      0px 2px 2px 0px rgba(0, 0, 0, 0.14),
      0px 1px 5px 0px rgba(0, 0, 0, 0.12);
  }

  .raised:hover {
    box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
      0px 4px 5px 0px rgba(0, 0, 0, 0.14),
      0px 1px 10px 0px rgba(0, 0, 0, 0.12);
  }

  .flat {
    background: transparent;
    border-color: $text-color-primary;
  }

  .flat:hover {
    border-color: $text-color-primary;
    background: $text-color-primary;
    color: $text-color-primary-on-contrast;
    fill: $text-color-primary-on-contrast;
  }

  .primary.flat {
    color: $color-primary;
    border-color: $color-primary;
  }

  .primary.flat:hover {
    background: $color-primary;
    color: $text-color-primary-on-primary;
  }

  .secondary.flat {
    color: $color-secondary;
    border-color: $color-secondary;
  }

  .secondary.flat:hover {
    background: $color-secondary;
    color: $text-color-primary-on-secondary;
  }

  .flat-inverse {
    border-color: $text-color-primary-on-contrast;
    background: transparent;
  }

  .flat-inverse:hover {
    border-color: $text-color-primary-on-contrast;
    background: $text-color-primary-on-contrast;
  }

  .neutral.flat-inverse {
    color: $text-color-primary-on-contrast;
  }

  .neutral.flat-inverse:hover {
    color: $text-color-primary;
  }

  .primary.flat-inverse:hover {
    color: $color-primary;
  }

  .secondary.flat-inverse:hover {
    color: $color-secondary;
  }
</style>
