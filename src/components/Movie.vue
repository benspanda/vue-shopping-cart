<template>
  <div class="card">
    <p class="card-label" v-if="!released">Coming soon</p>
    <g-image :alt="title + ' Poster'" :src="image" />
    <div class="card-info">
      <h2>{{title}}</h2>
      <p>{{year}}</p>
      <div class="card-actions">
        <button @click="$emit('add-to-cart', {'title': title, 'price': price, 'image': image})" class="primary-button"><PlusIcon /> Add to cart</button>
        <a href="">Details</a>
      </div>
    </div>
  </div>
</template>

<script>
import PlusIcon from '~/assets/images/plus.svg'

export default {
  components: {
    PlusIcon
  },
  name: 'Movie',
  props: [
    'price',
    'title',
    'year',
    'released',
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