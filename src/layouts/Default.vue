<template>
  <div class="layout">
    <header class="flex bg-white shadow-md p-3 z-40 relative">
      <div class="container mx-auto flex items-center">
        <strong>
          <g-link to="/">{{ $static.metaData.siteName }}</g-link>
        </strong>
        <nav class="ml-auto flex items-center">
          <g-link class="ml-6" to="/">Home</g-link>
          <g-link class="ml-6" to="/about">About</g-link>
          <g-link class="ml-6 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded" to="/about">Cart</g-link>
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
