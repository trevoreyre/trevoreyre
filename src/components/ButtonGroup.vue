<template>
  <div class='button-group'>
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'button-group'
  }
</script>

<style lang='scss' scoped>
  @import '~common/variables';

  .button-group {
    max-width: 100%;
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
  }

  .button-group > button,
  .button-group > a {
    margin: $spacing-s;
  }
</style>
