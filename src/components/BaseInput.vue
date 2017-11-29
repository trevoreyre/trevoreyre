<template>
  <input class='base-input' />
</template>

<script>
  export default {
    name: 'base-input'
  }
</script>

<style lang='scss' scoped>
  @import '~common/variables';

  .base-input {
    border: solid 1px $border-color;
    border-radius: $border-radius-s;
    padding: $spacing-s;
    font-family: inherit;
  }
</style>
