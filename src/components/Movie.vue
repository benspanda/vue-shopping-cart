<template>
  <div class="card">
    <p class="card-label">Coming soon</p>
    <g-image :alt="title + ' Poster'" :src="image" />
    <div class="card-info">
      <h2>{{title}}</h2>
      <p>{{year}}</p>
      <div class="card-actions">
        <a href="" class="primary-button">Add to cart</a>
        <a href="">Details</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Movie',
  props: [
    'title',
    'year',
    'image',
  ],
  data () {
    return {
      message: 'Try change me!'
    }
  },
  methods: {
    onClick () {
      this.message = 'Here you go :)'
    }
  }
}
</script>