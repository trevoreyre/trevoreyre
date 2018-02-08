<template>
  <div class='experiment-group'>
    <grid size='large'>
      <slot></slot>
    </grid>
  </div>
</template>

<script>
  import Grid from '~/components/Grid'

  export default {
    name: 'experiment-group',
    components: {
      Grid
    }
  }
</script>

<style lang='scss' scoped>
</style>
