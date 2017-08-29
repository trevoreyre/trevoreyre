<template>
  <div class='device-group'>
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'device-group'
  }
</script>

<style lang='scss' scoped>
  .device-group {
    width: 100%;
    position: relative;
  }

  .device-group::after {
    content: "";
    display: block;
    padding-top: 62.75%;
  }

  .device-group .device {
    position: absolute;
    bottom: 0;
  }

  .device-group .phone {
    margin: 0;
    left: 0;
    max-width: 15%;
    z-index: 2;
  }

  .device-group .tablet {
    margin: 0;
    right: 0;
    max-width: 30%;
    z-index: 1;
  }

  .device-group .desktop {
    left: 0;
    right: 0;
    margin: 0 5% 10.25%;
  }
</style>
