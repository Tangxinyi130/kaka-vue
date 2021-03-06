import Vue from 'vue'
import Router from 'vue-router'
import axios from 'axios'

import Home from "@/components/home/Home.vue"
// import HomeLogin from "@/components/home/HomeLogin.vue"
import Postcards from "@/components/postcards/Postcards.vue"
import PostcardsSend from "@/components/postcards/PostcardsSend.vue"
import  PostcardsSendInterface from "@/components/postcards/PostcardsSendInterface.vue"
import  PostcardsReceiveUpload from "@/components/postcards/PostcardsReceiveUpload.vue"
import PostcardsReceive from "@/components/postcards/PostcardsReceive.vue"
// import email from "@/components/postcards/email.vue"
import Wall from "@/components/wall/Wall.vue"
import WallPicture from "@/components/wall/Wallpicture.vue"
import WallPictureList from "@/components/wall/WallPictureList.vue"
import WallNewPicture from "@/components/wall/WallNewPicture.vue"

import Activity from "@/components/activity/Activity.vue"
import ActivityAllList from "@/components/activity/ActivityAllList.vue"

import Login from "@/components/login/Login.vue"
import Register from "@/components/register/Register.vue"
import newRegister from "@/components/register/newRegister.vue"
import err from "@/components/err.vue"

// import RegisterNumber from "@/components/register/RegisterNumber.vue"
// import RegisterPassword from "@/components/register/RegisterPassword.vue"
// import RegisterSuccess from "@/components/register/RegisterSuccess.vue"
import User from "@/components/user/User.vue"

import UserPersonal from "@/components/user/UserPersonal.vue"
import UserAboutme from "@/components/user/UserAboutme.vue"
import UserSend from "@/components/user/UserSend.vue"
import UserSendTest from "@/components/user/UserSendTest.vue"
import UserReceive from "@/components/user/UserReceive.vue"
import UserWall from "@/components/user/UserWall.vue"

import UserWallSend from "@/components/user/UserWallSend.vue"
import UserWallReceive from "@/components/user/UserWallReceive.vue"
import UserWallCollection from "@/components/user/UserWallCollection.vue"

import UserMap from "@/components/user/UserMap.vue"
import UserPic from "@/components/user/UserPic.vue"
import UserMyActivity from "@/components/user/UserMyactivity.vue"
import UserSearchcard from "@/components/user/UserSearchcard.vue"

//用户设置
import UserSet from "@/components/user/UserSet.vue"
import UserSetNew from "@/components/user/UserSetNew.vue"
import UserSetInfo from "@/components/user/UserSetInfo.vue"
import UserSetPwd from "@/components/user/UserSetPwd.vue"
import UserSetHeadpic from "@/components/user/UserSetHeadpic.vue"


import UserAttention from "@/components/user/UserAttention.vue"
import UserAttentionOthers from "@/components/user/UserAttentionOthers.vue"
import UserAttentionFans from "@/components/user/UserAttentionFans.vue"
import UserAttentionSearch from "@/components/user/UserAttentionSearch.vue"

import ActivityDetail from "@/components/activity/ActivityDetail.vue"
import ActivityConfire from "@/components/activity/ActivityConfire"
import ActivityPaySucess from "@/components/activity/ActivityPaySucess"



Vue.prototype.$ajax = axios
Vue.use(Router)

export default new Router({

  mode: "history",
  routes: [
    // {path: "/aaa", component: AAA},
    {path: '/', name: 'Home', component: Home},

    {path: "/postcards/:cardId", component: Postcards},

    {path: "/postcardssend", component: PostcardsSend},
    {path: "/postcardsreceive", component: PostcardsReceive},
    {path: "/postcardsreceiveupload", component:PostcardsReceiveUpload},
    {path: "/postcardssendinterface", component:PostcardsSendInterface},
    // {path: "/email", component:email},

    {path: "/wall", component: Wall,children:[
        {path:"",component:WallNewPicture},
        // {path:":page",component:WallPictureList},
        {path:"search/:city",component:WallNewPicture}
      ]},

    {path: "/activity", component: Activity,children:[
        {path: "", component: ActivityAllList},
        {path:':year/:month',component:ActivityAllList}
      ]},
    {path:'/activitydetail/:activityId',component:ActivityDetail},
    {path:'/activity/activityconfire',component:ActivityConfire,children:[
        // {path:'activitysucess',component:ActivityPaySucess}
      ]},
    {path:'/activity/activitysucess',component:UserMyActivity},
    {path: "/login", component: Login},
    {path: "/register", component: Register},
    {path: "/newregister", component:newRegister},
    // {path: "/login", component: Login},
    // {path: "/register", component: Register},
    //
    // {path: "/registernumber", component:RegisterNumber},
    // {path: "/registerpassword", component:RegisterPassword},
    // {path: "/registersuccess", component:RegisterSuccess},


    {path: "/user", component: User, children: [
        {path: ":id", component: UserPersonal},
        {path: ":id/aboutme", component: UserAboutme},
        // {path: ":id/send", component: UserSend, children: [
        //     {path: ":postcardId", component: UserPic}
        //   ]
        // },
        {path: ":id/send", component: UserSendTest, children: [
            {path: ":postcardId", component: UserPic}
          ]
        },
        {path: ":id/receive", component: UserReceive, children: [
            {path: ":postcardId", component: UserPic}
          ]
        },
        {path: ":id/wall", component: UserWall, children: [
            {path: "send", component: UserWallSend},
            {path: "receive", component: UserWallReceive},
            {path: "collection", component: UserWallCollection}
          ]
        },
        {path: ":id/map", component: UserMap},

      ]
    },
    {path: "/myactivity", component: UserMyActivity},
    {path: "/searchcard", component: UserSearchcard},

    //用户设置
    // {path: "/userset", component: UserSet},
    {path: "/userset", component: UserSetNew, children: [
        {path: "info", component: UserSetInfo},
        {path: "pwd", component: UserSetPwd},
        // {path: "headpic", component: UserSetHeadpic}
      ]
    },


    {path: "/attention/:id", component: UserAttention, children: [
        {path: "att", component: UserAttentionOthers},
        {path: "fan", component: UserAttentionFans},
        {path: "search/:name", component: UserAttentionSearch}
      ]
    },
    {path:'*',component:err}
  ]
})
