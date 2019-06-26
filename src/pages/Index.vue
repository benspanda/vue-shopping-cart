<template>
  <Layout>
    
    <!-- <div class="bg-white rounded-lg p-6"> -->
      <!-- Learn how to use images here: https://gridsome.org/docs/images -->
      <!-- <g-image alt="Example image" src="~/favicon.png" width="135" />
      
      <h1>Hello, world!</h1>
    </div> -->
   
    <div class="mx-auto flex flex-col items-center bg-gray-200 py-20">
      <h1 class="text-4xl text-gray-600">Our Products</h1>
      <p class="text-gray-500">All of the products in our portfolio</p>
    </div>
    <div class="mx-auto flex container">
      <div class="flex flex-col w-56">
        <h3 class="text-xl mt-10">Sort</h3>
        <div class="flex flex-col p-2">
          <a href="">Latest</a>
          <a href="">Popular</a>
          <a href="">Available</a>
          <a href="">Coming Soon</a>
        </div>
      </div>
      <div class="flex flex-col flex-1">
        <div class="">
          <g-image alt="Example image" src="~/favicon.png" width="135" />
          <div class="">
            <h2>Title</h2>
            <p>2019</p>
          </div>
        </div>
      </div>
    </div>

  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'Hello, world!'
  }
}
</script>

<style>

</style>
