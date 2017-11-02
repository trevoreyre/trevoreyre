<template>
  <card class='experiment'
    :style='{backgroundImage: `url(${experiment.image})`}'>
    <div class='info'>
      <h2 class='title'>{{ experiment.title }}</h2>
      <p class='description' v-html='experiment.details'></p>
    </div>
  </card>
</template>

<script>
  import Card from '~/components/Card'

  export default {
    name: 'experiment',
    components: {
      Card
    },
    props: {
      experiment: {
        type: Object,
        default: {
          title: '',
          details: '<p></p>',
          link: '#',
          image: ''
        },
        require: true
      }
    }
  }
</script>

<style lang='scss' scoped>
  @import '~common/variables';
  @import '~common/mixins';

  .experiment {
    margin: $spacing-m;
    width: 750px;
    overflow: hidden;
    background-position: top center;
    background-size: contain;
    background-repeat: no-repeat;
  }

  .experiment:hover .info,
  .experiment:hover .info:before {
    transform: translateY(0) translateZ(0);
  }

  .info {
    margin-top: 56.2%;
    border-top: 1px solid $border-color;
    background-color: #fff;
  }

  .title {
    margin: 0;
    padding: $spacing-l;
    line-height: 1;
    color: $text-color-primary;
  }

  .description {
    margin: 0;
    padding: 0 24px 24px;
    color: $text-color-primary;
  }
</style>
