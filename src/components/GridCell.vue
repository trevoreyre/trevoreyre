<template>
  <div class='grid-cell'>
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'grid-cell'
  }
</script>

<style lang='scss' scoped>
  @import '~common/variables';

  .grid-cell {
    margin: $spacing-m;
    flex: 1 0 auto;
  }
</style>
