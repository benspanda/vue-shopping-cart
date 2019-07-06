<template>
  <Layout :cart="cart" v-on:remove-item="removeItem">
    <div class="intro section">
      <div class="container">
        <h1>Explore Movies</h1>
        <p>Checkout our tiny catalogue of movies</p>
      </div>
    </div>
    <div class="section movies">
      <div class="container">
        <div class="content">
          <div class="cards">
            <Movie 
              v-for="movie in movies" 
              v-on:add-to-cart="addToCart" 
              :key="movie.title" 
              :title="movie.title" 
              :price="movie.price" 
              :year="movie.year" 
              :image="movie.image" 
              :genre="movie.genre" 
              :released="movie.released" 
            />
          </div>
        </div>
      </div>
    </div>
  </Layout>
</template>

<script>
import Movie from '~/components/Movie.vue'

export default {
  data() {
    return {
      cart: {}
    }
  },
  metaInfo: {
    title: 'Catalogue',
  },
  components: {
    Movie
  },
  methods: {
    addToCart(data) {
      if(this.cart[data.title]) {
        this.$toasted.error(data.title + ' has already been added to your cart', { 
          theme: 'bubble', 
          position: 'top-right', 
          duration : 3000
        });
      } else {
        this.$set(this.cart, data.title, data)
        this.$toasted.success(data.title + ' has been added to your cart', { 
          theme: 'bubble', 
          position: 'top-right', 
          duration : 3000
        });
      }
    },
    removeItem(title) {
      this.$delete(this.cart, title)
      this.$toasted.success(title + ' has been removed from your cart', { 
        theme: 'bubble', 
        position: 'top-right', 
        duration : 3000
      });
    }
  },
  created() {
    // pretending were getting the data loaded from an api
    this.movies = [
      {
        title: 'Aladdin',
        price: 25.99,
        year: 2019,
        released: true,
        genre: 'Action',
        image: 'https://m.media-amazon.com/images/M/MV5BMjQ2ODIyMjY4MF5BMl5BanBnXkFtZTgwNzY4ODI2NzM@._V1_.jpg'
      },
      {
        title: 'Annabelle Comes Home',
        price: 15.99,
        year: 2019,
        released: false,
        genre: 'Horror',
        image: 'http://www.movienewsletters.net/photos/NZL_289656R1.jpg'
      },
      {
        title: 'Arrival',
        price: 16.99,
        year: 2016,
        released: true,
        genre: 'Drama',
        image: 'https://ca.movieposter.com/posters/archive/main/231/MPW-115998'
      },
      {
        title: 'Deadpool 2',
        price: 11.99,
        year: 2018,
        released: true,
        genre: 'Comedy',
        image: 'https://cdn.traileraddict.com/content/20th-century-fox/deadpool-2-poster-9.jpg'
      },
      {
        title: 'Joker',
        price: 20.99,
        year: 2019,
        released: false,
        genre: 'Action',
        image: 'https://www.dccomics.com/sites/default/files/imce/2019/04-APR/JokerPoster1200_5ca3c435318d42.29270548.jpg'
      },
      {
        title: 'The Lion King',
        price: 15.99,
        year: 2019,
        released: false,
        genre: 'Fantasy',
        image: 'https://d13ezvd6yrslxm.cloudfront.net/wp/wp-content/images/Image-from-iOS-700x1037.jpg'
      },
      {
        title: 'Shawshank Redemption',
        price: 18.99,
        year: 1994,
        released: true,
        genre: 'Drama',
        image: 'https://goodmovieslist.com/article-images/best-drama-movies.jpg'
      },
      {
        title: 'Venom',
        price: 3.99,
        year: 2018,
        released: true,
        genre: 'Action',
        image: 'https://images-na.ssl-images-amazon.com/images/I/518jo3Xlf8L.jpg'
      },
      {
        title: 'Zombieland Double Tap',
        price: 21.99,
        year: 2019,
        released: true,
        genre: 'Comedy',
        image: 'https://images-na.ssl-images-amazon.com/images/I/51XXo-R0pcL.jpg'
      },
    ]
  }
}
</script>