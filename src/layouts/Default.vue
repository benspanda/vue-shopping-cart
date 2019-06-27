<template>
  <div class="layout">
    <header>
      <div class="container">
        <h1 class="header-logo">
          <g-link to="/">{{ $static.metaData.siteName }}</g-link>
        </h1>
        <nav class="header-menu">
          <button class="cart-link primary-button hide" @click="toggleCart">
            <CartIcon /> Cart
            <p class="cart-count" v-if="Object.keys(this.cart).length">{{ Object.keys(this.cart).length }}</p>
          </button>
        </nav>
      </div>
    </header>
    <div class="cart-wrapper" v-if="!cartHide" :class="{ active: cartActive }">
      <div class="cart-background" @click="toggleCart"></div>
      <div class="cart">
        <h2>Cart</h2>
        <p v-if="!Object.keys(this.cart).length" class="cart-empty-message">Your cart is empty</p>
        <div class="cart-items">
          <CartItem 
            v-for="item in cart" 
            :key="item.title" 
            :title="item.title" 
            :price="item.price" 
            :image="item.image" 
            :released="item.released" 
            v-on:remove-item="removeItem"
          />
        </div>
        <button class="checkout-button" href="">Checkout</button>
      </div>
    </div>
    <slot v-on:add-to-cart="addToCart" />
  </div>
</template>

<static-query>
query {
  metaData {
    siteName
  }
}
</static-query>

<script>
import CartItem from '~/components/CartItem.vue'
import CartIcon from '~/assets/images/shopping-cart.svg'
import { setTimeout } from 'timers'

var trans = false // true when menu animating

export default {
  props: [
    'cart'
  ],
  methods: {
    addToCart: function(data) {
      console.log('added to cart')
      console.log(data)
    }
  },
  components: {
    CartIcon,
    CartItem
  },
  data() {
    return {
      cartActive: false,
      cartHide: true
    }
  },
  methods: {
    toggleCart() {
      const _this = this
      
      // wait for set timeout to finish to prevent vars from getting out of sync
      if(!trans) {
        trans = true
        var disableScrollClass = 'disable-scroll'
        if(_this.cartActive) {
          setTimeout(function(){
            _this.cartHide = true
            trans = false
          }, 500)
          _this.cartActive = false

          // enable scrolliing
          var el = document.querySelectorAll('body')[0]
          el.classList.remove(disableScrollClass)
        } else {
          _this.cartHide = false
          setTimeout(function(){
            _this.cartActive = true
            trans = false
          }, 0);

          // disable scrolling
          var el = document.querySelectorAll('body')[0]
          el.classList.add(disableScrollClass)
        }
      }
    },
    removeItem(title) {
      this.$emit('remove-item', title)
    }
  }
}
</script>