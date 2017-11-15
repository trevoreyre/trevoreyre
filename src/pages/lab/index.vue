<template>
  <div id='app'>
    <nav-button href='/' open></nav-button>
    <page-header title='Lab' theme='primary' size='medium'>
      <p>A collection of code snippets and experiments.</p>
      <button-group align='center'>
        <te-button type='flat-inverse' theme='primary'>
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
  import NavButton from '~/components/NavButton'
  import PageHeader from '~/components/PageHeader'

  export default {
    name: 'app',
    components: {
      'te-button': Button,
      ButtonGroup,
      ExperimentGroup,
      NavButton,
      PageHeader
    },
    async fetch ({ store }) {
      let page = 1
      let json = '{}'
      let experiments = []
      while (json.error === undefined) {
        const url = `http://cpv2api.com/collection/XjyazW?page=${page}`
        const res = await fetch(url)
        json = await res.json()
        if (!json.error && json.data) {
          experiments = experiments.concat(json.data.map(mapPenToExperiment))
          page += 1
        }
      }
      store.commit('setExperiments', experiments)
    }
  }
</script>

<style lang='scss' scoped>
</style>
