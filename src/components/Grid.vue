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

<style scoped>
  .grid {
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
  }
</style>
