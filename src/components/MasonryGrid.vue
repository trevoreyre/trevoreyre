<template>
  <div class='masonry-grid'>
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'masonry-grid'
  }
</script>

<style lang='scss' scoped>
  @import '~common/variables';

  .masonry-grid {
    column-width: 296px;
    column-gap: $spacing-l;
  }

  .masonry-grid > * {
    margin-bottom: $spacing-l;
    break-inside: avoid;
  }
</style>
