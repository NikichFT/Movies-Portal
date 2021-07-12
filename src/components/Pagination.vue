<template>
    <div class="pagination">
        <a class="page-num" v-for="number in pageNum" :key="number" href='!#' @click.prevent="paginateControll(number)">
                {{number}}
            </a>
    </div>
</template>

<script>
export default {
    name: 'Pagination',
    props: {
        moviesPerPage: Number,
        totalMovies: Number,
        paginateControll: Function,
    },
    data(){
        return {
            
        }
    },
    methods: {

    },
    computed: {
        pageNum(){
            const pageNum=[]
            for (let i=1; i <= Math.ceil(this.totalMovies / this.moviesPerPage);i++){
                pageNum.push(i)
            }
            return pageNum;
        }
    },
    mounted(){
        
    }
}
</script>

<style lang="scss">
.pagination{
    display: flex;
    flex-direction: row;
    justify-content: center;
    background: rgb(238,174,202);
    background: linear-gradient(180deg, rgba(238,174,202,1) 0%, rgba(229,165,150,0) 0%, rgba(143,218,197,1) 42%, rgba(255,214,108,1) 55%, rgba(250,250,250,0) 100%);
    margin: 48px auto 48px;
    padding: 0;
    font-family: 'Monoton', cursive;
    font-size: 30px;
    .page-num{
        width: 20px;
        transition: 0.3s ease-in-out;
        &:hover{
            color: rgb(180, 0, 0);
        }
        &:active{
            color: rgb(180, 0, 0);
        }
        text-decoration: none;
    }
}
</style>