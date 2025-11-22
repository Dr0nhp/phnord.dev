<template>
  <div class="card-grid">
    <TestCard
        v-for="(card, index) in displayedCards"
        :key="card.id || index"
        :title="card.title"
        :description="card.description"
        :link="card.link"
        :linkText="card.linkText"
        :external="card.external"
    />
  </div>
</template>

<script>
import TestCard from '../components/CardElement.vue'

export default {
  components: {TestCard},

  props: {
    count: {
      type: Number,
      default: null
    },
    cards: {
      type: Array,
      default: () => []
    }
  },

  computed: {
    displayedCards() {
      if (this.count !== null) {
        return this.cards.slice(0, this.count)
      }
      return this.cards
    }
  }
}
</script>