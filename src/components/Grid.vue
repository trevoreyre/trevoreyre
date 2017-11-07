<template>
  <div class='grid'>
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'grid'
  }
</script>

<style lang='scss' scoped>
  @import '~common/variables';

  .grid {
    margin: (-$spacing-m);
    display: flex;
    flex-flow: row wrap;
    align-items: stretch;
    justify-content: center;
  }

  .grid > * {
    margin: $spacing-m;
  }
</style>
