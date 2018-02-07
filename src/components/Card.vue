<template>
  <div class='card'>
    <div class='image'>
      <slot name='image'></slot>
    </div>
    <div class='info-container'>
      <h2 class='title'>
        <span v-if='href'>
          <a :href='href'
            :target="href.startsWith('/') ? null : '_blank'"
          >
            {{ title }}
          </a>
        </span>
        <span v-else>
          {{ title }}
        </span>
      </h2>
      <div class='info'>
        <slot></slot>
      </div>
      <div class='actions'>
        <a class='action'
          v-for='action in actions'
          :key='action.href'
          :href='action.href'
          :target="action.href.startsWith('/') ? null : '_blank'"
        >
          {{ action.text }}
        </a>
      </div>
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
      },
      href: {
        type: String,
        default: '',
        required: false
      },
      actions: {
        type: Array,
        default: [],
        required: false
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

  .info-container {
    border-top: 1px solid $border-color;
    padding: $spacing-m;
    min-height: 196px;
    display: flex;
    flex-flow: column nowrap;
  }

  .title,
  .title a {
    margin: 0 0 $spacing-m;
    font-size: 1.5rem;
    font-weight: 400;
    line-height: 2rem;
    color: $text-color-primary;
    text-decoration: none;
  }

  .title a:hover {
    text-decoration: underline;
  }

  .info {
    flex: 1;
  }

  .info p {
    margin: $spacing-m 0;
    font-size: 1rem;
    line-height: 1.5;
  }

  .info p:last-child {
    margin-bottom: 0;
  }

  .actions {
    justify-self: flex-end;
  }
</style>
