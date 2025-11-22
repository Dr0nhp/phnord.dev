<template>
  <div class="card">
    <h2 class="card__title">{{ title }}</h2>
    <p class="card__description">{{ description }}</p>
    <a
        v-if="link"
        :href="link"
        :target="external ? '_blank' : '_self'"
        :rel="external ? 'noopener noreferrer' : ''"
        class="card__link interactive"
    >
      {{ linkText }}
    </a>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    description: String,
    link: {
      type: String,
      required: false,
      default: null
    },
    linkText: String,
    external: {
      type: Boolean,
      default: false
    }
  }
}
</script>