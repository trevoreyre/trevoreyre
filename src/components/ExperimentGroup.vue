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
  import orderedPens from '~/common/pens'
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
        let orderedExperiments = []
        orderedPens.forEach(id => {
          let foundPen = experiments.filter(experiment => experiment.id === id)
          if (foundPen.length === 1) {
            orderedExperiments.push(foundPen[0])
          }
        })
        experiments.forEach(experiment => {
          if (!orderedPens.includes(experiment.id)) {
            orderedExperiments.push(experiment)
          }
        })
        return orderedExperiments
      }
    }
  }
</script>

<style scoped>
  a {
    text-decoration: none;
  }
</style>
