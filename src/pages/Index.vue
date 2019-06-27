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
  data: function() {
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
    addToCart: function(data) {
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
    removeItem: function(title) {
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
        image: 'https://cdn3.movieweb.com/i/movie/EQe6vhaL6aTs28sa1ftJb5h20G09Ei/304:50/Aladdin.jpg'
      },
      {
        title: 'Annabelle Comes Home',
        price: 15.99,
        year: 2019,
        released: false,
        genre: 'Horror',
        image: 'https://cdn3.movieweb.com/i/movie/eCLfLIYzXjJRLbyeEVIxgR7IqCcSHI/304:50/Annabelle-Comes-Home.jpg'
      },
      {
        title: 'Arrival',
        price: 16.99,
        year: 2016,
        released: true,
        genre: 'Drama',
        image: 'https://cdn3.movieweb.com/i/movie/clquXpvMKVcic1FwpAoZLYpSxt7Pgd/384:50/Arrival.jpg'
      },
      {
        title: 'Deadpool 2',
        price: 11.99,
        year: 2018,
        released: true,
        genre: 'Comedy',
        image: 'https://cdn3.movieweb.com/i/movie/97DOpaTnrtV8OgMmFhBwlWNhEbBbre/304:50/Deadpool-2.jpg'
      },
      {
        title: 'Joker',
        price: 20.99,
        year: 2019,
        released: false,
        genre: 'Action',
        image: 'https://cdn3.movieweb.com/i/movie/Oiro1gjJCbQyRJmRHuDlIk9ZgGonde/304:50/Joker.jpg'
      },
      {
        title: 'The Lion King',
        price: 15.99,
        year: 2019,
        released: false,
        genre: 'Fantasy',
        image: 'https://cdn3.movieweb.com/i/movie/juAoW8O4A9oVYDgII5tpGiIazDz43N/304:50/The-Lion-King.jpg'
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
        image: 'https://cdn3.movieweb.com/i/movie/7TydZhcv636GUp4WmTAzyfUTkJmh9N/304:50/Venom.jpg'
      },
      {
        title: 'Zombieland Double Tap',
        price: 21.99,
        year: 2019,
        released: true,
        genre: 'Comedy',
        image: 'https://cdn3.movieweb.com/i/movie/K1SmOyqeKnqM2Lz5YjcbqAfhOeufzD/304:50/Zombieland-Double-Tap.jpg'
      },
    ]
  }
}
</script>