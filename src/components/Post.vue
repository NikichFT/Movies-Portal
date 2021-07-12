<template>
    <div class = "movie">
            <!-- {commentView && <CommentView collectionComments = {collectionComments} setCollectionComments = {setCollectionComments} setcommentView = {setcommentView}  movie= { movie }/>} -->
            <div class='movie-logo' :style = "{ backgroundImage: `url(${movie.large_cover_image})` }"></div>
            <div class='movie-title'>
                <div class='title-text'>{{movie.title}}</div>
                <CommentButton movie />
            </div> 
            <div class='movie-description' :style = "{ backgroundImage: `url(${movie.background_image || movie.background_image_original})` }">{{movie.description_full}}</div>
            <div class='movie-year'>
                <div class='year'>{{movie.year}}</div>
            </div>
        </div>
</template>

<script>
import CommentButton from "./CommentButton"

export default {
    name: 'Post',
    props: {
        movie: Object
    },
    components: {
        CommentButton
    }
}
</script>

<style lang="scss">
@mixin flex-center {
  display: flex;
  justify-content: center;
  align-items: center;
}

.movie {
    position: relative;
    height: 260px;
    transition: all 0.3s ease-in-out;
    display: flex;
    flex-direction: row;
    background-size:1px 600px;
    background: rgb(238,174,202);
    background: linear-gradient(90deg, rgba(238,174,202,1) 0%, rgba(176,61,237,0.9752275910364145) 37%, rgba(218,143,168,1) 52%, rgba(255,214,108,1) 65%, rgba(250,250,250,1) 100%);
    border-radius: 0px 20px 20px 0;
    color: antiquewhite;
    transition: 0.5s ease-in-out;
    border-bottom: rgba(0, 0, 0, 0.466) 3px solid;
      &-logo{
        width: 10%;
        background-size: cover;
        border-radius: 0px 20px 20px 0px;
      }
      &-title{
        width: 20%;
        text-align: center;
        font-family: 'Paytone One', sans-serif;
        font-size: large;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        .title-text{
          width: 100%;
        }
      }
      &-description{
        width: 60%;
        background-size: cover;
        background-repeat: no-repeat;
        transition: ease-in-out 0.7s;
        &:hover{
          transform: matrix();;
        }
      }
      &-year{
        width: 10%;
        text-align: center;
        color: rgb(50, 0, 78);
        @include flex-center;
        .year{
          border: blueviolet 2px solid;border: blueviolet 2px solid;
          width: 50%;
          border-radius: 20px;
        }
      }
    // &:after {
    //     position: absolute;
    //     display: block;
    //     content: "";
    //     bottom: 0;
    //     left: 0;
    //     right: 0;
    //     width: 100%;
    //     height: 0px;
    //     background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #83fff5 58.85%);
    //     transition: all 0.2s ease-in;
    //   }
    &:hover {
        // background: rgb(238,174,202);
        // background: radial-gradient(circle, rgba(238,174,202,0) 0%, rgba(61,237,206,1) 100%);
        background-position: 150px;
      }
    &:hover .comment-button {
        opacity: 1;
      }
    &:hover:after{
        height: 94px;
      }
  }

@media screen and (min-width: 2560px){
  .movie{
    width: 425px;
    height: 425px;
  }
}
</style>


