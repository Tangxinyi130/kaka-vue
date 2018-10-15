import Vue from 'vue'
import Router from 'vue-router'

import Home from "@/components/home/Home.vue"
// import HomeLogin from "@/components/home/HomeLogin.vue"
import Postcards from "@/components/postcards/Postcards.vue"
import PostcardsSend from "@/components/postcards/PostcardsSend.vue"
import  PostcardsSendInterface from "@/components/postcards/PostcardsSendInterface.vue"
import  PostcardsReceiveUpload from "@/components/postcards/PostcardsReceiveUpload.vue"
import PostcardsReceive from "@/components/postcards/PostcardsReceive.vue"


import Wall from "@/components/wall/Wall.vue"
import Activity from "@/components/activity/Activity.vue"
import Login from "@/components/login/Login.vue"
import Register from "@/components/register/Register.vue"
import RegisterNumber from "@/components/register/RegisterNumber.vue"
import RegisterPassword from "@/components/register/RegisterPassword.vue"
import RegisterSuccess from "@/components/register/RegisterSuccess.vue"
import User from "@/components/user/User.vue"

import UserPersonal from "@/components/user/UserPersonal.vue"
import UserAboutme from "@/components/user/UserAboutme.vue"
import UserSend from "@/components/user/UserSend.vue"
import UserReceive from "@/components/user/UserReceive.vue"
import UserWall from "@/components/user/UserWall.vue"
import UserWallPic from "@/components/user/UserWallPic.vue"
import UserMap from "@/components/user/UserMap.vue"
import UserPic from "@/components/user/UserPic.vue"
import UserMyActivity from "@/components/user/UserMyactivity.vue"
import UserSearchcard from "@/components/user/UserSearchcard.vue"
import UserSet from "@/components/user/UserSet.vue"
import UserAttention from "@/components/user/UserAttention.vue"
import UserAttentionOthers from "@/components/user/UserAttentionOthers.vue"
import ActivityDetail from "@/components/activity/ActivityDetail"
import ActivityConfire from "@/components/activity/ActivityConfire"


Vue.use(Router)

export default new Router({
  mode: "history",
  routes: [
    {path: '/', name: 'Home', component: Home},
    {path: "/postcards", component: Postcards, children: [
        {path: "postcardssend", component: PostcardsSend},
        {path: "postcardsreceive", component: PostcardsReceive},
        {path: "postcardsreceiveupload", component:PostcardsReceiveUpload},
        {path: "postcardssendinterface", component:PostcardsSendInterface},
      ]
    },
    {path: "/wall", component: Wall},
    {path: "/activity", component: Activity},
    {path:'/activity/activitydetail',component:ActivityDetail},
    {path:'/activity/activityconfire',component:ActivityConfire},
    {path: "/login", component: Login},
    {path: "/register", component: Register},

    {path: "/registernumber", component:RegisterNumber},
    {path: "/registerpassword", component:RegisterPassword},
    {path: "/registersuccess", component:RegisterSuccess},


    {path: "/user", component: User, children: [
        {path: ":id", component: UserPersonal},
        {path: ":id/aboutme", component: UserAboutme},
        {path: ":id/send", component: UserSend, children: [
            {path: ":postcardId", component: UserPic}
          ]
        },
        {path: ":id/receive", component: UserReceive, children: [
            {path: ":postcardId", component: UserPic}
          ]
        },
        {path: ":id/wall", component: UserWall, children: [
            {path: "send", component: UserWallPic},
            {path: "receive", component: UserWallPic},
            {path: "collection", component: UserWallPic}
          ]
        },
        {path: ":id/map", component: UserMap},

      ]
    },
    {path: "/myactivity", component: UserMyActivity},
    {path: "/searchcard", component: UserSearchcard},
    {path: "/userset", component: UserSet},
    {path: "/attention/:id", component: UserAttention, children: [
        {path: "att", component: UserAttentionOthers},
        {path: "fan", component: UserAttentionOthers}
      ]
    },
  ]
})
