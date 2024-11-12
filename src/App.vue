<template>
<img alt="Vue logo" style="width: 20px; position: fixed; bottom: 20px; right: 20px;" src="./assets/images/icon.png">
  <HelloWorld title="MusicShare "/>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'


export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>

  <style>

  body {
    background-image: url("./assets/images/icon.png"); /* 替换为图片路径 */
     background-size: 400px;
      background-repeat: no-repeat;/* 不重复 */
    background-color: rgb(252, 157, 154); /* 替换成你想要的颜色 */
  }


  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
  </style>
