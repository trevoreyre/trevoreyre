<template>
  <label class='base-label'>
    <slot></slot>
  </label>
</template>

<script>
  export default {
    name: 'base-label'
  }
</script>

<style lang='scss' scoped>
  @import '~common/variables';

  .base-label {
    margin-bottom: $spacing-xs;
    font-size: 1em;
    line-height: 1;
  }
</style>
