<template>
  <div class="card">
    <p class="card-label" v-if="!released">Coming soon</p>
    <g-image :alt="title + ' Poster'" :src="image" />
    <div class="card-info">
      <h2>{{title}}</h2>
      <p>${{price}} • {{year}} • {{genre}}</p>
      <div class="card-actions">
        <button @click="addToCart" class="primary-button" :class="{adding: adding}">
          <p v-if="!adding"><PlusIcon /> Add to cart</p>
          <p v-if="adding">Adding...</p>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import PlusIcon from '~/assets/images/plus.svg'
import { setTimeout } from 'timers';

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
    'genre',
  ],
  data() {
    return {
      message: 'Try change me!',
      adding: false
    }
  },
  methods: {
    addToCart() {
      if(this.adding) {
        return;
      }

      const _this = this
      _this.adding = true

      // pretending were waiting for a response from the server
      setTimeout(function() {
        _this.$emit('add-to-cart', {'title': _this.title, 'price': _this.price, 'image': _this.image, 'released': _this.released})
        _this.adding = false
      }, 1000)
    }
  }
}
</script>