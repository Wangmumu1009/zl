<template>
    <router-link to="/photo">

       <v-touch class="photo-detail"
                :style="{'background-image':'url('+photoList[index].src+')'}"
                @swipeleft="left" @swiperight="right">

       </v-touch>
    </router-link>
</template>

<script>
    import {mapState} from 'vuex';
    export default {
        data(){
            return {
               index:this.$route.params.index
            }
        },
        methods:{
            left(){
                this.index++;
                if (this.index == 24){
                    this.index = 0;
                }

            },
            right(){
                this.index--;
                if (this.index == -1) {
                    this.index = 23;
                }

            }
        },

        computed:mapState(['photoList'])
    }
</script>

<style scoped>
    .photo-detail{
        position: absolute;
        top:0;
        bottom:0;
        left:0;
        right:0;
        background-repeat: no-repeat;
        background-color: #000;
        background-size: contain;
        background-position: center;
    }


</style>