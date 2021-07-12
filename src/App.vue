<template>
  <div id="app">
    <Header />
    <Posts :currentMovies = "currentMovies"/>
    <Pagination :moviesPerPage="moviesPerPage" :totalMovies="moviePosts.length" :paginateControll="paginateControll"/>
  </div>
</template>

<script>
import Header from "./components/Header";
import Posts from "./components/Posts";
import fetchMovies from "./service/FetchMovies";
import Pagination from "./components/Pagination"

export default {
  name: "App",
  components: {
    Header,
    Posts,
    Pagination,
  },
  data() {
    return {
      currentMovies: [],
      moviePosts: [],
      currentPage: 1,
      moviesPerPage: 7,
    }
  },
  methods:{
    setCurrentMovies(){
      const lastMovieIndex = this.currentPage * this.moviesPerPage
      const firstMovieIndex = lastMovieIndex - this.moviesPerPage
      this.currentMovies = this.moviePosts.slice(firstMovieIndex, lastMovieIndex)
    },
    paginateControll(number){
      this.currentPage=number
      window.scrollTo(0,0)
    }
  },
  watch: {
    currentPage(){
      const lastMovieIndex = this.currentPage * this.moviesPerPage
      const firstMovieIndex = lastMovieIndex - this.moviesPerPage
      this.currentMovies = this.moviePosts.slice(firstMovieIndex, lastMovieIndex)
    }    
  },
  mounted(){
    return fetchMovies.getMovieList()
            .then((res) => {
                console.log('res', res.data.movies)
                this.moviePosts = [...this.moviePosts, ...res.data.movies]
                this.setCurrentMovies()
            })
            .catch(err => console.log(err))
  }
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Roboto&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Neucha&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Monoton&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Paytone+One&display=swap");

*{
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: 400;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-image: linear-gradient( 135deg, #F05F57 10%, #360940 100%);
  background-repeat: no-repeat;
}
</style>
