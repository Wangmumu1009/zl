<template>
    <div class="movie">
        <div>
            <ul>
                <MovieList v-for="movie in movieList" :movie="movie" @click.native="getDetail(movie)"></MovieList>
            </ul>
            <div class="loading" v-show="isShow">
                <img src="../../assets/img/loading.gif" alt="">
            </div>
            <div v-show="isEnd">
                已经到底了
            </div>

        </div>
    </div>
</template>
<script>
    import Axios from 'axios';
    import MovieList from '@/views/movie/MovieList.vue';
    export default {
        data(){
            return {
                movieList:[],
                isShow:false,
                isEnd:false,

            }
        },
        created(){
            this.getData();
            // Axios.get('/movie.json')
            //     .then(res=>{
            //         this.movieList = res.data.subjects;
            //         console.log(this.movieList);
            //     });
            window.onscroll= ()=> {
                var scrollTop = document.documentElement.scrollTop;
                var scrollHeight = document.documentElement.scrollHeight;
                var clientHeight = document.documentElement.clientHeight;
                if (scrollTop + clientHeight == scrollHeight && !this.isEnd){
                    this.isShow = true;
                    this.getData();
                }
            }
        },
        methods:{
            getData(){
                Axios.get('https://bird.ioliu.cn/v1?url=https://api.douban.com/v2/movie/in_theaters?start='+this.movieList.length+'&count=5')
                 .then((res)=>{
                     this.movieList = [...this.movieList,...res.data.subjects];
                     this.isShow = false;
                     if(res.data.subjects.length < 5){
                         this.isEnd = true;
                     }
                 });

                // Axios.get('/movie.json')
                //     .then((res)=>{
                //         var arr = res.data.subjects.slice(this.movieList.length,this.movieList.length+5);
                //         this.movieList = [...this.movieList,...arr];
                //         this.isShow = false;
                //         if(arr.length < 5){
                //             this.isEnd = true;
                //         }
                //     });
            },
            getDetail(movie){
                this.$router.push('/movie-detail/'+movie.id)

            }

        },
        components:{
            MovieList,
        }
    }
</script>

<style lang="scss">
    .movie li{
        display: flex;
        padding: 10px;
        .movie-img{
            flex-grow: 1;
            width: 0;
        }
        .movie-desc{
            flex-grow: 3;
            width: 0;
            margin-left: 25px;
            .aver{
                color: orange;
            }
        }
        .loading{
            text-align: center;
        }
    }


</style>
