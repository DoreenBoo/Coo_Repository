<template>
  <div class="hello" >
    <h1>{{ title }}</h1>
    <!-- 自定义按钮颜色 -->
<el-button class="custom-button"  plain>GetStart <el-icon><TopRight /></el-icon></el-button>
    
  </div>
</template>

<script >


export default {
  name: 'HelloWorld', // 这里是组件的名称
  props: {
    title: String
  },

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1{
  color:rgb(254, 67, 101);
   font-size: 200px;
   font-family: '三极泼墨体';
    font-weight: 300;/* 字体粗细 */
}

.custom-button {
  background-color: rgb(249, 205, 173); /* 默认背景颜色 */
  color: white;
  border-color: rgb(249, 205, 173); /* 默认边框颜色 */
  transition: background-color 0.3s, border-color 0.3s; /* 添加平滑过渡效果 */
  font-size: 40px; /* 设置字体大小 */
   padding: 30px 60px; /* 调整按钮的内边距来放大按钮 */
}

/* 鼠标悬停时的背景颜色 */
.custom-button:hover {
  background-color: rgb(254, 67, 101);
  border-color: rgb(254, 67, 101); /* 悬停时改变边框颜色 */
}




h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
