<template>
  <div id='app'>
    <nav-button href='/' open></nav-button>
    <page-header title='Lab' theme='primary' size='medium'>
      <p>A collection of code snippets and experiments.</p>
      <button-group align='center'>
        <te-button type='flat-inverse'
          theme='primary'
          href='https://codepen.io/TrevorEyre'
        >
          See it on Codepen
        </te-button>
      </button-group>
    </page-header>
    <section>
      <container size='large'>
        <experiment-group>
          <grid-cell class='experiment-container'
            v-for='experiment in experiments'
            :key='experiment.id'
          >
            <experiment :experiment='experiment'></experiment>
          </grid-cell>
        </experiment-group>
      </container>
    </section>
  </div>
</template>

<script>
  import pens from '~/common/pens'
  import Button from '~/components/Button'
  import ButtonGroup from '~/components/ButtonGroup'
  import Container from '~/components/Container'
  import Experiment from '~/components/Experiment'
  import ExperimentGroup from '~/components/ExperimentGroup'
  import GridCell from '~/components/GridCell'
  import NavButton from '~/components/NavButton'
  import PageHeader from '~/components/PageHeader'

  export default {
    name: 'app',
    components: {
      'te-button': Button,
      ButtonGroup,
      Container,
      Experiment,
      ExperimentGroup,
      GridCell,
      NavButton,
      PageHeader
    },
    computed: {
      experiments () {
        return pens
      }
    }
  }
</script>

<style lang='scss' scoped>
  @import '~common/variables';

  .experiment-container {
    max-width: $experiment-width;
  }
</style>
