<template>
  <container class='grid-container' :size="size">
    <div class='grid'>
      <slot></slot>
    </div>
  </container>
</template>

<script>
  import {sizeValidator} from '~/common/propValidators'
  import Container from '~/components/Container'
  import GridCell from '~/components/GridCell'

  export default {
    name: 'grid',
    components: {
      Container,
      GridCell
    },
    props: {
      size: {
        type: String,
        default: 'medium',
        validator: sizeValidator
      }
    }
  }
</script>

<style lang='scss' scoped>
  @import '~common/variables';

  .grid-container {
    padding: $spacing-m;
  }

  .grid {
    margin: (-$spacing-m);
    display: flex;
    flex-flow: row wrap;
    align-items: stretch;
    justify-content: center;
  }
</style>
