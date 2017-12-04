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
  .grid-cell {
    flex: 1 1 auto;
  }
</style>
