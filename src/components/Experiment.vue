<template>
  <card class='experiment' :title='experiment.title'>
    <img slot='image' :src='experiment.image'>
    <p v-if='experiment.details' v-html='experiment.details'></p>
    <button-group slot='actions'>
      <te-button
        :href='experiment.link'
        theme='primary'
      >
        Check it out
      </te-button>
    </button-group>
  </card>
</template>

<script>
  import Button from '~/components/Button'
  import ButtonGroup from '~/components/ButtonGroup'
  import Card from '~/components/Card'

  export default {
    name: 'experiment',
    components: {
      'te-button': Button,
      ButtonGroup,
      Card
    },
    props: {
      experiment: {
        type: Object,
        default: () => ({
          title: '',
          details: '<p></p>',
          link: '#',
          image: ''
        }),
        require: true
      }
    }
  }
</script>

<style lang='scss' scoped>
  @import '~common/variables';
  @import '~common/mixins';

  .experiment {
    width: 100%;
    max-width: 400px;
    height: 100%;
  }
</style>
