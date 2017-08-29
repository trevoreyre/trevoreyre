<template>
  <div :class="['container', size]">
    <slot></slot>
  </div>
</template>

<script>
  import {sizeValidator} from '~/common/propValidators'

  export default {
    name: 'container',
    props: {
      size: {
        type: String,
        default: 'medium',
        validator: sizeValidator
      }
    }
  }
</script>

<style lang='scss' scoped>
  @import '~common/variables';

  .container {
    margin: 0 auto;
  }

  .small {
    max-width: 600px;
  }

  .medium {
    max-width: $breakpoint-tablet;
  }

  .large {
    max-width: $breakpoint-desktop;
  }

  .container.left {
    margin: 0;
  }
</style>
