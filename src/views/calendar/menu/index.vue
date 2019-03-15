<template>
    <div>
        <div class="menu">
            <ul>
                <li v-for="(item, index) in menu" :key="index" class="item">
                    <router-link :to="item.route">
                        <div class='icon'></div>
                        <div>{{item.name}}</div>
                    </router-link>
                </li>
            </ul>
        </div>
        <div class="menu2">
            <ul>
                <li v-for="(item, index) in index_middle" :key="index" class="item">
                    {{item.name}}
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import request from "@/utils/request"

export default {
    name: 'Menu',
    data(){
        return{
            menu:[],
            index_middle:[]
        }
    }, 
    created(){
      this.fnGetData()
    }, 
    methods:{
        fnGetData(){
            request.get('/home/menu').then(response=>{
                this.menu = response.data.result.index_top
                this.index_middle = response.data.result.index_middle
            })
        }
    }
}
</script>


<style>
.menu{
    margin-top:.8rem;
    background:#015496;
    padding:.3rem;
}
ul{
 display:flex;
 width:100%;
 font-size:.3rem;
 text-align:center;
 flex-wrap: wrap;

}
a{
 color:#fff;
 text-decoration:none;
 display:inline-block;
 width:100%;
}
.icon{
    background:url('./img/addUser.svg') no-repeat;
    background-size:.64rem .64rem;
    height:.64rem;
    width:.64rem;
    margin:.3rem auto;
}
.menu li:nth-child(2) .icon{
    background:url('./img/calendar.svg') no-repeat;
}
.menu li:nth-child(3) .icon{
    background:url('./img/tool.svg') no-repeat;
}
.menu li:nth-child(4) .icon{
    background:url('./img/chart.svg') no-repeat;
}
.item{
    width:25%
}
</style>