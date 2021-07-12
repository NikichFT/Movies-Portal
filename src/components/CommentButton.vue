<template>
    <button title="Make a comment" class="comment-button" @click="commentMovie('e, movie.id')"></button>
</template>

<script>
export default {
    name: 'CommentButton',
    methods:{
        commentMovie(){
            this.$emit('commentMovie')
        }
    }
}
</script>

<style lang="scss">
.comment-button {
    opacity: 0;
    padding: 0;
    width: 60px !important;
    height: 60px;
    outline: none;
    border: none;
    background-color: transparent;
    background-image: url('../imgs/comment.svg');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    background-position: 0 0;
    transition: all 0.3s ease-in-out;
    border-radius: 30px;
    cursor: pointer;
    &:hover {
        background-color: #fff;
      }
  }
</style>