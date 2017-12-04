<template>
  <card class='experiment' :title='experiment.title'>
    <div slot='image' class='image-container'>
      <img slot='image'
        :src='experiment.image'
        width='400'
        height='225'
      >
    </div>
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
  .experiment {
    width: 100%;
    max-width: 368px;
    height: 100%;
  }

  .image-container {
    padding-bottom: 56.25%;
    height: 0;
    overflow: hidden;
    background: #eee;
  }

  .image-container img {
    position: absolute;
    top: 0;
    left: 0;
  }
</style>
