<template>
  <textarea class='base-textarea'></textarea>
</template>

<script>
  export default {
    name: 'base-textarea'
  }
</script>

<style lang='scss' scoped>
  @import '~common/variables';

  .base-textarea {
    border: solid 1px $border-color;
    border-radius: $border-radius-s;
    padding: $spacing-s;
    font-family: inherit;
    resize: vertical;
    transition: none;
  }
</style>
