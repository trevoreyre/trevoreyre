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
    box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2),
      0px 5px 8px 0px rgba(0, 0, 0, 0.14),
      0px 1px 14px 0px rgba(0, 0, 0, 0.12);
  }

  .image img {
    display: block;
  }

  .image::after {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.15);
    transition: background 0.3s ease;
  }

  .card:hover .image::after {
    background: rgba(0, 0, 0, 0);
  }

  .info {
    border-top: 1px solid $border-color;
    padding: $spacing-m;
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
