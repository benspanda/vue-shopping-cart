<template>
  <Layout>
    
    <!-- <div class="bg-white rounded-lg p-6"> -->
      <!-- Learn how to use images here: https://gridsome.org/docs/images -->
      <!-- <g-image alt="Example image" src="~/favicon.png" width="135" />
      
      <h1>Hello, world!</h1>
    </div> -->
   
    <div class="intro section">
      <div class="container">
        <h1>Explore Movies</h1>
        <p>Checkout our entire catalogue of movies</p>
      </div>
    </div>
    <div class="section movies">
      <div class="container">
        <div class="sidebar">
          <div class="sidebar-menu">
            <h3>Sort</h3>
            <a href="" class="active">Latest</a>
            <a href="">Popular</a>
            <a href="">Available</a>
            <a href="">Coming Soon</a>
          </div>
          <div class="sidebar-menu">
            <h3>Genres</h3>
            <a href="" class="active">All</a>
            <a href="">Comedy</a>
            <a href="">Drama</a>
            <a href="">Horror</a>
          </div>
        </div>
        <div class="content">
          <div class="cards">
            <Movie v-for="movie in movies" :key="movie.id" :title="movie.title" :year="movie.year" :image="movie.image" />
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
      movies: []
    }
  },
  metaInfo: {
    title: 'Hello, world!'
  },
  components: {
    Movie
  },
  created() {
    // pretending were getting the data loaded from an api
    this.movies = [
      {
        id: 1,
        title: 'Shawshank Redemption',
        year: 1994,
        released: true,
        genre: 'drama',
        description: 'Andy Dufresne (Tim Robbins) is sentenced to two consecutive life terms in prison for the murders of his wife and her lover and is sentenced to a tough prison. However, only Andy knows he didn\'t commit the crimes.',
        image: 'https://goodmovieslist.com/article-images/best-drama-movies.jpg'
      },
      {
        id: 2,
        title: 'Arrival',
        year: 2016,
        released: true,
        genre: 'drama',
        description: 'Taking place after alien crafts land around the world, an expert linguist is recruited by the military to determine whether they come in peace or are a threat.',
        image: 'https://cdn3.movieweb.com/i/movie/clquXpvMKVcic1FwpAoZLYpSxt7Pgd/384:50/Arrival.jpg'
      },
      {
        id: 3,
        title: 'Annabelle Comes Home',
        year: 2019,
        released: false,
        genre: 'horror',
        description: '',
        image: 'https://cdn3.movieweb.com/i/movie/eCLfLIYzXjJRLbyeEVIxgR7IqCcSHI/304:50/Annabelle-Comes-Home.jpg'
      },
      {
        id: 4,
        title: 'The Lion King',
        year: 2019,
        released: false,
        genre: 'fantasy',
        description: 'A live-action adaptation of the classic Disney animated movie.',
        image: 'https://cdn3.movieweb.com/i/movie/juAoW8O4A9oVYDgII5tpGiIazDz43N/304:50/The-Lion-King.jpg'
      },
      {
        id: 5,
        title: 'Venom',
        year: 2018,
        released: true,
        genre: 'action',
        description: 'A potential "Spider-Man" spinoff, Sony is developing the project, based on the villain who appeared in "Spider-Man 3" and is hoping the character could serve as an antidote to the aging "Spider-Man" franchise in the way that Fox has used Wolverine to add longevity to its "X-Men" franchise.',
        image: 'https://cdn3.movieweb.com/i/movie/7TydZhcv636GUp4WmTAzyfUTkJmh9N/304:50/Venom.jpg'
      },
      {
        id: 6,
        title: 'Joker',
        year: 2019,
        released: false,
        genre: 'action',
        description: 'This Joker origin story is said to be taking place during the 80s in Gotham City.',
        image: 'https://cdn3.movieweb.com/i/movie/Oiro1gjJCbQyRJmRHuDlIk9ZgGonde/304:50/Joker.jpg'
      },
      {
        id: 7,
        title: 'Zombieland Double Tap',
        year: 2019,
        released: true,
        genre: 'comedy',
        description: 'Sony has closed deals with Polone and helmer Ruben Fleischer to return for a 3D sequel to the original. The studio is currently in talks with stars Woody Harrelson and Jesse Eisenberg to reprise their roles as a pair of post-apocalyptic survivors.',
        image: 'https://cdn3.movieweb.com/i/movie/K1SmOyqeKnqM2Lz5YjcbqAfhOeufzD/304:50/Zombieland-Double-Tap.jpg'
      },
      {
        id: 8,
        title: 'Deadpool 2',
        year: 2018,
        released: true,
        genre: 'comedy',
        description: 'In September 2015, Kinberg commented on the possibility of a sequel for Deadpool: "we were talking about the sequel while we were making the movie just because when you make a film like this that\'s from a serialized source material, you hope that it\'s the first of many". By the release of Deadpool, Fox had already greenlit the sequel, with Reese and Wernick returning to write, and Miller being looked at to return as director.',
        image: 'https://cdn3.movieweb.com/i/movie/97DOpaTnrtV8OgMmFhBwlWNhEbBbre/304:50/Deadpool-2.jpg'
      },
    ]
  }
}
</script>

<style>

</style>
