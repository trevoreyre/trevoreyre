<template>
  <div class='card'>
    <div v-if='href' class='image'>
      <a :href='href'
        :target="href.startsWith('/') ? null : '_blank'"
      >
        <slot name='image'></slot>
      </a>
    </div>
    <div v-else class='image'>
      <slot name='image'></slot>
    </div>
    <div class='info-container'>
      <h2 v-if='href' class='title'>
        <a :href='href'
          :target="href.startsWith('/') ? null : '_blank'"
        >
          {{ title }}
        </a>
      </h2>
      <h2 v-else class='title'>
        {{ title }}
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
    display: flex;
    flex-flow: column nowrap;
    overflow: hidden;
    background-color: $color-background-light;
    border: 1px solid $border-color;
  }

  .image img {
    display: block;
    width: 100%;
    height: auto;
    flex: 0 0 auto;
  }

  .info-container {
    border-top: 1px solid $border-color;
    padding: $spacing-m;
    min-height: 196px;
    flex: 1 0 auto;
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
    flex: 1 0 auto;
  }

  .info p {
    margin: $spacing-m 0;
    font-size: 1rem;
    line-height: 1.5;
  }

  .info p:first-child {
    margin-top: 0;
  }

  .info p:last-child {
    margin-bottom: 0;
  }

  .actions {
    margin: $spacing-m 0 0;
  }
</style>
