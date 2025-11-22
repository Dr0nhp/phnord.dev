<template>
  <div id="homepage">
    <CardGrid
      :cards="[
        { title: 'WOD PB Tracker',
          description: 'Tracke deine Fortschritte bei WODs',
          link: '/tracker',
          linkText: 'Zum Tracker',
          external: false}
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