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

  export default {
    name: 'grid',
    components: {
      Container
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

  .grid > * {
    margin: $spacing-m;
    flex: 1 1 auto;
  }
</style>
