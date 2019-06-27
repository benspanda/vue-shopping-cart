<template>
  <div class="cart-item">
    <g-image alt="" :src="image" />
    <div class="cart-item-details">
      <h3>{{title}}</h3>
      <p class="cart-item-preorder-label" v-if="!released">Pre-order</p>
      <div class="cart-items-actions">
        <a href="#remove" @click="removeItem">Remove</a>
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
    'released'
  ],
  data () {
    return {
      message: 'Try change me!'
    }
  },
  methods: {
    removeItem(e) {
      e.preventDefault()
      this.$emit('remove-item', this.title)
    }
  }
}
</script>