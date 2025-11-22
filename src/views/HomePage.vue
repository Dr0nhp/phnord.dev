<template>
  <div id="homepage">
    <CardGrid
        :cards="[
        { title: 'WOD PB Tracker', description: 'Tracke deine Fortschritte bei WODs' },
        { title: 'Title 2', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. 2' },
        { title: 'Title 3', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. 3' },
        { title: 'Title 4', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. 4' },
        { title: 'Title 5', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. 5' }
      ]"
    />
  </div>
</template>

<script>
import CardGrid from '../components/CardGrid.vue'

export default {
  components: {CardGrid}
}
</script>