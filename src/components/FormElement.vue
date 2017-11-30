<template>
  <div class='form-element'>
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'form-element'
  }
</script>

<style lang='scss' scoped>
  @import '~common/variables';

  .form-element {
    margin: 0 $spacing-m $spacing-l $spacing-m;
    display: flex;
    flex-flow: column nowrap;
  }
</style>
