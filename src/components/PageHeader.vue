<template>
  <header :class="['page-header', size, theme]">
    <h1 class='title'>{{ title }}</h1>
    <div class='description'>
      <slot></slot>
    </div>
  </header>
</template>

<script>
  import { sizeValidator, themeValidator } from '~/common/propValidators'

  export default {
    name: 'page-header',
    props: {
      title: {
        type: String,
        default: '',
        required: true
      },
      size: {
        type: String,
        default: 'small',
        validator: sizeValidator
      },
      theme: {
        type: String,
        default: 'neutral',
        validator: themeValidator
      }
    }
  }
</script>

<style lang='scss' scoped>
  @import '~common/variables';

  .page-header {
    background: $color-background;
    color: $text-color-primary;
    text-align: center;
  }

  .page-header .title,
  .page-header .description {
    color: $text-color-primary;
  }

  .page-header.primary {
    background: linear-gradient($color-primary, rgba($color-primary, 0.85)),
      url(https://source.unsplash.com/collection/905011/1600x900) center center / cover;
    color: $text-color-primary-on-primary;
    text-shadow: 0 1px 2px rgba(black, 0.2);
  }

  .page-header.primary .title,
  .page-header.primary .description {
    color: $text-color-primary-on-primary;
  }

  .page-header.secondary {
    background: linear-gradient($color-secondary, rgba($color-secondary, 0.85)),
      url(https://source.unsplash.com/collection/905011/1600x900) center center / cover;
    color: $text-color-primary-on-secondary;
    text-shadow: 0 1px 2px rgba(black, 0.2);
  }

  .page-header.secondary .title,
  .page-header.secondary .description {
    color: $text-color-primary-on-secondary;
  }

  .page-header.small {
    padding: $spacing-xl;
    min-height: 200px;
  }

  .page-header.medium {
    padding: $spacing-xxl;
    min-height: 400px;
  }

  .page-header.large {
    padding: $spacing-xxl;
    min-height: 95vh;
  }

  .title,
  .description {
    margin-left: auto;
    margin-right: auto;
    max-width: $breakpoint-tablet;
    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
  }
</style>
