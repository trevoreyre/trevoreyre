<template>
  <nuxt-link v-if='href && internal'
    :class="['button', size, theme, type]"
    :to='href'>
    <slot></slot>
  </nuxt-link>
  <a v-else-if='href'
    :class="['button', size, theme, type]"
    :href='href'
    target='_blank'>
    <slot></slot>
  </a>
  <button v-else
    :class="['button', size, theme, type]">
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
    display: inline-block;
    border-radius: $border-radius-s;
    border: 1px solid;
    max-width: 100%;
    text-decoration: none;
    text-align: center;
    line-height: 1;
  }

  .button.small {
    padding: $spacing-s;
  }

  .button,
  .button.medium {
    padding: $spacing-m;
  }

  .button.large {
    padding: $spacing-l;
  }

  .button,
  .button.neutral {
    border-color: $color-background-low-contrast;
    background: $color-background-low-contrast;
    color: $text-color-primary;
  }

  .button:hover,
  .button.neutral:hover {
    border-color: darken($color-background-low-contrast, 7);
    background: darken($color-background-low-contrast, 7);
    text-decoration: none;
    cursor: pointer;
  }

  .button.primary {
    border-color: $color-primary;
    background: $color-primary;
    color: $text-color-primary-on-primary;
  }

  .button.primary:hover {
    border-color: darken($color-primary, 7);
    background: darken($color-primary, 7);
  }

  .button.secondary {
    border-color: $color-secondary;
    background: $color-secondary;
    color: $text-color-primary-on-secondary;
  }

  .button.secondary:hover {
    border-color: darken($color-secondary, 7);
    background: darken($color-secondary, 7);
  }

  .button.raised {
    box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
      0px 2px 2px 0px rgba(0, 0, 0, 0.14),
      0px 1px 5px 0px rgba(0, 0, 0, 0.12);
  }

  .button.raised:hover {
    box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
      0px 4px 5px 0px rgba(0, 0, 0, 0.14),
      0px 1px 10px 0px rgba(0, 0, 0, 0.12);
  }

  .button.flat {
    background: transparent;
  }

  .button.neutral.flat {
    border-color: $text-color-primary;
  }

  .button.neutral.flat:hover {
    border-color: $text-color-primary;
    background: $text-color-primary;
    color: $text-color-primary-on-contrast;
  }

  .button.primary.flat {
    color: $color-primary;
  }

  .button.primary.flat:hover {
    border-color: $color-primary;
    background: $color-primary;
    color: $text-color-primary-on-primary;
  }

  .button.secondary.flat {
    color: $color-secondary;
  }

  .button.secondary.flat:hover {
    border-color: $color-secondary;
    background: $color-secondary;
    color: $text-color-primary-on-secondary;
  }

  .button.flat-inverse {
    border-color: $text-color-primary-on-contrast;
    background: transparent;
  }

  .button.flat-inverse:hover {
    border-color: $text-color-primary-on-contrast;
    background: $text-color-primary-on-contrast;
  }

  .button.neutral.flat-inverse {
    color: $text-color-primary-on-contrast;
  }

  .button.neutral.flat-inverse:hover {
    color: $text-color-primary;
  }

  .button.primary.flat-inverse:hover {
    color: $color-primary;
  }

  .button.secondary.flat-inverse:hover {
    color: $color-secondary;
  }
</style>
