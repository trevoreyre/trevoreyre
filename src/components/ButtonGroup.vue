<template>
  <div :class="['button-group', align]">
    <slot></slot>
  </div>
</template>

<script>
  import {alignValidator} from '~/common/propValidators'

  export default {
    name: 'button-group',
    props: {
      align: {
        type: String,
        default: 'left',
        validator: alignValidator
      }
    }
  }
</script>

<style lang='scss' scoped>
  @import '~common/variables';

  .button-group {
    margin: -$spacing-s;
    max-width: 100%;
    display: flex;
    flex-flow: row wrap;
  }

  .button-group > button,
  .button-group > a {
    margin: $spacing-s;
  }

  .left {
    justify-content: flex-start;
  }

  .center {
    justify-content: center;
  }

  .right {
    justify-content: flex-end;
  }
</style>
