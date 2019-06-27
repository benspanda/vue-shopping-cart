<template>
  <div class="cart-item">
    <g-image alt="" :src="image" />
    <div class="cart-item-details">
      <h3>{{title}}</h3>
      <div class="cart-items-actions">
        <a href="">Remove</a>
      </div>
    </div>
    <p class="cart-item-price">${{price}}</p>
  </div>
</template>

<script>
import PlusIcon from '~/assets/images/plus.svg'

export default {
  components: {
    PlusIcon
  },
  name: 'CartItem',
  props: [
    'price',
    'title',
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