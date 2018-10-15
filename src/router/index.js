import Vue from 'vue'
import Router from 'vue-router'

import Home from "@/components/home/Home.vue"
// import HomeLogin from "@/components/home/HomeLogin.vue"
import Postcards from "@/components/postcards/Postcards.vue"
import PostcardsSend from "@/components/postcards/PostcardsSend.vue"
import PostcardsReceive from "@/components/postcards/PostcardsReceive.vue"
import  PostcardsSendInterface from "@/components/postcards/PostcardsSendInterface.vue"
import   PostcardsReceiveUpload from "@/components/postcards/PostcardsReceiveUpload.vue"

import Wall from "@/components/wall/Wall.vue"
import Activity from "@/components/activity/Activity.vue"
import Login from "@/components/login/Login.vue"
import Register from "@/components/register/Register.vue"
import RegisterNumber from "@/components/register/RegisterNumber.vue"
import RegisterPassword from "@/components/register/RegisterPassword.vue"
import  RegisterSuccess from "@/components/register/RegisterSuccess.vue"
import User from "@/components/user/User.vue"

Vue.use(Router)

export default new Router({
  mode: "history",
  routes: [
    {path: '/', name: 'Home', component: Home},
    {path: "/postcards", component: Postcards, children: [
        {path: "postcardssend", component: PostcardsSend},
        {path: "postcardsreceive", component: PostcardsReceive},
        {path: "postcardssendinterface", component:PostcardsSendInterface},
        {path: "postcardsreceiveupload", component:PostcardsReceiveUpload},
      ]
    },
    {path: "/wall", component: Wall},
    {path: "/activity", component: Activity},
    {path: "/login", component: Login},
    {path: "/register", component: Register,children: [
        {path: "/registernumber", component:RegisterNumber},
        {path: "registerpassword", component:RegisterPassword},
        {path: "registersuccess", component:RegisterSuccess},
      ]},
    {path: "/user", component: User},
  ]
})
