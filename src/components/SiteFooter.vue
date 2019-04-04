<template>
  <footer class='site-footer'>
  </footer>
</template>

<script>
  export default {
    name: 'site-footer'
  }
</script>

<style lang='scss'>
  @import '~common/variables';

  .site-footer {
    padding: $spacing-m;
    width: 100%;
    background: $color-primary;
    color: $text-color-primary-on-primary;
    text-align: center;
  }

  .copyright {
    margin: 0;
  }
</style>
