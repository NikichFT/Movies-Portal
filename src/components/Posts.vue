<template>
    <div class = "table" >
        <div class='table-header'>
            <div class='table__title'>Logo</div>
            <div class='table__title'>Title</div> 
            <div class='table__title'>Description</div>
            <div class='table__title'>Year</div>
        </div>
        <div class='table__items'> 
        <Post :key = "movie.id" :movie="movie" v-for="movie in currentMovies"/>
        </div> 
    </div>
</template>

<script>
import Post from "./Post";

export default {
    name: 'Posts',
    components: {
        Post
    },
    props: {
        currentMovies: Array,
    }
}
</script>

<style lang="scss">
.table {
    margin: 48px auto 48px;
    padding: 0;
    width: calc(100% - 124px);
    display: flex;
    flex-direction: column;
    list-style: none;
    .table-header{
      display: flex;
      flex-direction: row;
      height: 30px;
      background-color: rgba(72, 249, 255, 0.616);
      border-radius: 20px 20px 0 0;
      margin-bottom: 20px;
      :nth-child(1){
        width: 10%;
        border-radius: 20px 0 0px 0px;
      }
      :nth-child(2){
        width: 20%;
      }
      :nth-child(3){
        width: 60%;
      }
      :nth-child(4){
        width: 10%;
        border-radius: 0px 20px 0px 0px;
      }
    }
    
    &__title{
      display: flex;
      justify-content: center;
      border: 1px solid #dfdfdf;
    }
    &__items{
      width: 100%;
    }
  }

  // @media screen and (min-width: 2560px){
  //   .posts-grid{
  //     grid-template-columns: repeat(auto-fill, 425px);
  //   }
  // }
</style>