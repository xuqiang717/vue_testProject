<template>
  <div id="user"> 
    <h1>这是创建的用户个人中心组件</h1>
    <h1>{{this.$route.params.userid}}</h1>
    <router-link to="/user/:userid/userInfo">用户资料</router-link>|
    <router-link to="/user/:userid/userOrder">订单信息</router-link>
    <router-view/>
  </div>
</template>

<style>
  #user {
    color: crimson;
  }
</style>