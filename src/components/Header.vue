<template>
    <header class="header">
      <div class="header-title">Movies</div>
      <div class="reg-area">
      <div class="sing-up">Sing up</div>
        <div class="sing-in">Sing in</div>
      </div>
    </header>
</template>

<script>
export default {
    name: 'Header',
    props: {},
};
</script>

<style lang="scss">
@mixin hover {
    cursor: pointer;
    color: rgb(180, 0, 0);
}

.header {
    padding-left: 62px;
    background-color: #f39121a9;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.24);
    border-radius: 20px;
    font-family: 'Monoton', cursive;
    font-size: 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .header-title{
      transition: 0.3s ease-in-out;
      &:hover{
        @include hover
      }
    }
    .reg-area{
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      width: 20%;
      .sing-up, .sing-in{
        font-family: 'Paytone One', sans-serif;
        font-size: 1rem;
        transition: 0.3s ease-in-out;
        &:hover{
          @include hover
        }
      }
    }
  }
</style>