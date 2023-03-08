import VueRouter from "vue-router";
//引入组件
import Main from "../views/Main.vue";
import DataBase from "../views/DataBase.vue";
import DataShow from "../views/DataShow.vue";
//创建一个路由器
const router =  new VueRouter({
    routes:[          
        {path:'/',redirect:'/base',component:Main},
        {path:'/base',component:DataBase},
        {path:'/show',component:DataShow}

    ]
})

export default router