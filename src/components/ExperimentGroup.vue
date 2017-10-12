<template>
  <div>
    <grid>
      <div v-for='experiment in experiments'>
        <a :href='experiment.link' target='_blank'>
          <experiment :experiment='experiment'></experiment>
        </a>
      </div>
    </grid>
  </div>
</template>

<script>
  import pens from '~/common/pens'
  import Grid from '~/components/Grid'
  import Experiment from '~/components/Experiment'

  export default {
    name: 'experiment-group',
    components: {
      Grid,
      Experiment
    },
    computed: {
      experiments () {
        const experiments = this.$store.state.experiments
        return pens.map(id => {
          return experiments.filter(experiment => experiment.id === id)[0]
        })
      }
    }
  }
</script>

<style scoped>
  a {
    text-decoration: none;
  }
</style>
