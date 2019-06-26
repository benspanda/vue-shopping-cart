<template>
  <div class="layout">
    <header>
      <div class="container">
        <h1 class="header-logo">
          <g-link to="/">{{ $static.metaData.siteName }}</g-link>
        </h1>
        <nav class="header-menu">
          <g-link to="/">Home</g-link>
          <g-link to="/about">About</g-link>
          <g-link class="cart-link primary-button" to="/about">Cart</g-link>
        </nav>
      </div>
    </header>
    <slot/>
  </div>
</template>

<static-query>
query {
  metaData {
    siteName
  }
}
</static-query>

<style>

</style>
