<template>
   <ul class="footer" :style="{background:bgColor}">
       <li v-for="menu in menuList" @click="changeBg(menu)">
           <router-link :to="menu.path"> {{menu.name}}</router-link>
       </li>
   </ul>
</template>
<script>
    import {mapState} from 'vuex';
    export default {
        props:['menuList'],
        data(){
            return{
            }
        },
        methods:{
            changeBg(menu){
                this.$store.dispatch('changeBg',menu)//在这里调用，在store里定义
            }
        },
        computed:mapState(['bgColor']),
    }
</script>

<style lang="scss">
    .footer{
        height: 1rem;
        width: 100%;
        color: white;
        position: fixed;
        bottom: 0;
        line-height: 1rem;
        display: flex;
        li{
            flex-grow: 1;
            text-align: center;
            a{
                color: #CCCCCC;
                outline: none;
                &.router-link-active{
                    color: white;
                }
            }
        }

    }
</style>