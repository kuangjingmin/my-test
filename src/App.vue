<!--
 * @Author: jingmin-kuang
 * @Date: 2023-03-11 13:11:15
 * @LastEditTime: 2023-05-22 16:33:06
 * @LastEditors: jingmin-kuang
 * @Description: 
-->
<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
    <!-- <HelloWorld /> -->
    <!-- <demo1Vue></demo1Vue> -->
    <!-- <echartsVue /> -->

    <!-- 路由出口 -->
    <!-- 路由匹配到的组件将渲染在这里 -->
    <router-view></router-view>
  </div>
</template>

<script>
// import demo1Vue from "./components/demo1.vue";
// import echartsVue from './components/echarts.vue';
// import HelloWorld from "./components/HelloWorld.vue";
export default {
  name: "App",
  components: {
    // HelloWorld,
    // demo1Vue,
    // echartsVue,
  },
};
</script>

<style>
body{
  margin: 0;
  padding: 0;
}
#app {
  width: 100vw;
  height: 100vh;
}
</style>
