<template>
  <div id='app'>
    <page-header title='Lab' theme='secondary' size='medium'>
      <p>A collection of code snippets and experiments.</p>
      <button-group align='center'>
        <te-button type='flat-inverse' theme='secondary'>
          See it on Codepen
        </te-button>
      </button-group>
    </page-header>
    <experiment-group></experiment-group>
  </div>
</template>

<script>
  import fetch from 'isomorphic-fetch'

  import { mapPenToExperiment } from '~/common/maps'
  import Button from '~/components/Button'
  import ButtonGroup from '~/components/ButtonGroup'
  import ExperimentGroup from '~/components/ExperimentGroup'
  import PageHeader from '~/components/PageHeader'

  export default {
    name: 'app',
    components: {
      'te-button': Button,
      ButtonGroup,
      ExperimentGroup,
      PageHeader
    },
    async fetch ({ store }) {
      const url = 'https://cpv2api.com/pens/public/trevoreyre?tag=featured'
      const res = await fetch(url)
      const json = await res.json()
      const experiments = json.data.map(mapPenToExperiment)
      store.commit('setExperiments', experiments)
    }
  }
</script>

<style lang='scss' scoped>
</style>
