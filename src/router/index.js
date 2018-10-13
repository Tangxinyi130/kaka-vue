import Vue from 'vue'
import Router from 'vue-router'

import Home from "@/components/home/Home.vue"
// import HomeLogin from "@/components/home/HomeLogin.vue"
import Postcards from "@/components/postcards/Postcards.vue"
import PostcardsSend from "@/components/postcards/PostcardsSend.vue"
import PostcardsReceive from "@/components/postcards/PostcardsReceive.vue"

import Wall from "@/components/wall/Wall.vue"
import Activity from "@/components/activity/Activity.vue"
import Login from "@/components/login/Login.vue"
import Register from "@/components/register/Register.vue"

import User from "@/components/user/User.vue"
import UserPersonal from "@/components/user/UserPersonal.vue"
import UserAboutme from "@/components/user/UserAboutme.vue"
import UserSend from "@/components/user/UserSend.vue"
import UserReceive from "@/components/user/UserReceive.vue"
import UserWall from "@/components/user/UserWall.vue"
import UserMap from "@/components/user/UserMap.vue"

Vue.use(Router)

export default new Router({
  mode: "history",
  routes: [
    {path: '/', name: 'Home', component: Home},
    {path: "/postcards", component: Postcards, children: [
        {path: "postcardssend", component: PostcardsSend},
        {path: "postcardsreceive", component: PostcardsReceive}
      ]
    },
    {path: "/wall", component: Wall},
    {path: "/activity", component: Activity},
    {path: "/login", component: Login},
    {path: "/register", component: Register},
    {path: "/user", component: User, children: [
        {path: ":id", component: UserPersonal},
        {path: ":id/aboutme", component: UserAboutme},
        {path: ":id/send", component: UserSend},
        {path: ":id/receive", component: UserReceive},
        {path: ":id/wall", component: UserWall},
        {path: ":id/map", component: UserMap}
      ]
    },
  ]
})
