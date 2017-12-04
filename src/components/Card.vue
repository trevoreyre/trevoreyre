<template>
  <div class='card'>
    <div class='image'>
      <slot name='image'></slot>
    </div>
    <div class='info'>
      <h2 class='title'>{{ title }}</h2>
      <slot></slot>
      <slot name='actions'></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'card',
    props: {
      title: {
        type: String,
        default: '',
        required: true
      }
    }
  }
</script>

<style lang='scss' scoped>
  @import '~common/variables';

  .card {
    position: relative;
    border-radius: $border-radius-s;
    overflow: hidden;
    background-color: $color-background-light;
    border: 1px solid $border-color;
  }

  .image img {
    display: block;
    width: 100%;
    height: auto;
  }

  .info {
    border-top: 1px solid $border-color;
    padding: $spacing-m;
    min-height: 196px;
  }

  .title {
    margin: 0 0 $spacing-m;
    font-size: 1.5rem;
    font-weight: 400;
    line-height: 2rem;
    color: $text-color-primary;
  }

  .info p {
    margin: $spacing-m 0;
    font-size: 1rem;
    line-height: 1.5;
  }

  .info p:last-child {
    margin-bottom: 0;
  }
</style>
