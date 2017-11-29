<template>
  <div class='form-element-group'>
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'form-element-group'
  }
</script>

<style lang='scss' scoped>
  @import '~common/variables';
  @import '~common/mixins';

  .form-element-group {
    display: flex;
    flex-flow: row wrap;
  }

  .form-element-group > * {
    flex: 1;
    @include breakpoint('', '600px') {
      flex: 1 1 100%;
    }
  }
</style>
