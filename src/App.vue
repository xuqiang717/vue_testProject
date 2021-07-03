<template>
  <div id="nav">
    <router-link to="/">首页</router-link> |
    <router-link to="/about">关于</router-link> |
    <router-link v-bind:to="'/user/'+userid">我的</router-link>
  </div>
  <router-view/>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      userid: 'xuqiang'
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
