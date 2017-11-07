<template>
  <div class='experiment-group'>
    <grid>
      <div
        class='experiment-container'
        v-for='experiment in experiments'
      >
        <experiment :experiment='experiment'></experiment>
      </div>
    </grid>
  </div>
</template>

<script>
  import orderedPens from '~/common/pens'
  import Experiment from '~/components/Experiment'
  import Grid from '~/components/Grid'

  export default {
    name: 'experiment-group',
    components: {
      Experiment,
      Grid
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

<style lang='scss' scoped>
  @import '~common/variables';
  @import '~common/mixins';

  .experiment-group {
    margin: 0 $spacing-m $spacing-l $spacing-m;
    @include breakpoint-desktop() {
      margin: 0 $spacing-m $spacing-xl $spacing-m;
    }
  }
</style>
