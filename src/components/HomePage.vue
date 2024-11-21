<template>
<div class="common-layout">
    <el-container style="height: 800px; border: 1px solid #eee;">
      <el-header class="header">
        <el-menu
    :default-active="activeIndex"
    class="el-menu-demo"
    mode="horizontal"
    @select="handleSelect"
  >
    <el-menu-item index="1">HomePage</el-menu-item>
    <el-sub-menu index="2">
      <template #title>Workspace</template>
      <el-menu-item index="2-1">item one</el-menu-item>
      <el-menu-item index="2-2">item two</el-menu-item>
      <el-menu-item index="2-3">item three</el-menu-item>
      <el-sub-menu index="2-4">
        <template #title>item four</template>
        <el-menu-item index="2-4-1">item one</el-menu-item>
        <el-menu-item index="2-4-2">item two</el-menu-item>
        <el-menu-item index="2-4-3">item three</el-menu-item>
      </el-sub-menu>
    </el-sub-menu>
    <!-- 搜索框 -->
    <el-menu-item index="3" >    <el-input
      v-model="input2"
      style="width: 240px"
      placeholder="Search"
      :prefix-icon="Search"
    /></el-menu-item>
    <el-menu-item index="4">Orders</el-menu-item>
  </el-menu>
      </el-header>



      <el-container>
        <el-aside width="200px" >
  <el-menu
        default-active="2"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
      >
        <el-sub-menu index="1">
          <template #title>
            <el-icon><location /></el-icon>
            <span>Navigator One</span>
          </template>
          <el-menu-item-group title="Group One">
            <el-menu-item index="1-1">item one</el-menu-item>
            <el-menu-item index="1-2">item two</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group title="Group Two">
            <el-menu-item index="1-3">item three</el-menu-item>
          </el-menu-item-group>
          <el-sub-menu index="1-4">
            <template #title>item four</template>
            <el-menu-item index="1-4-1">item one</el-menu-item>
          </el-sub-menu>
        </el-sub-menu>
        <el-menu-item index="2">
          <el-icon><icon-menu /></el-icon>
          <span>Navigator Two</span>
        </el-menu-item>
        <el-menu-item index="3" disabled>
          <el-icon><document /></el-icon>
          <span>Navigator Three</span>
        </el-menu-item>
        <el-menu-item index="4">
          <el-icon><setting /></el-icon>
          <span>Navigator Four</span>
        </el-menu-item>
      </el-menu>
        </el-aside>
        <el-container>
          
          <el-main>
      <el-carousel :interval="4000" type="card" height="200px">
    <el-carousel-item v-for="item in 6" :key="item">
      <h3 text="2xl" justify="center">{{ item }}</h3>
    </el-carousel-item>
  </el-carousel>
          </el-main>

          <!-- 播放器 -->
          <el-footer>
            <div  class="footer" >

            </div>
          </el-footer>
        </el-container>


      </el-container>
    </el-container>
  </div>
</template>


<script >
export default {
  name: 'HomePage'
};
</script>

<style scoped>
.container{
    display: flex; /* 启用 Flex 布局 */
    flex-direction: column;
    border-radius: 20px; /* 矩形边角圆润 */
    
}
.page-aside{
  width: 200px;
  height: 600px;
  border-radius: 20px; /* 矩形边角圆润 */
}
.page-main{
  width: 1200px;
  border-radius: 20px; /* 矩形边角圆润 */
}

/*
header 
 */
.header{
  padding: 0; /* 去掉默认的内边距 */
}

.el-menu-demo {
  width:100%;
  border-radius: 20px; /* 菜单本身也可以带些圆角 */
  padding: 0 10px;
}

/* 
Aside 
*/

.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 700px;
  border-radius: 20px; /* 矩形边角圆润 */
  margin-top: 20px;
}

/*
footer
*/
.el-footer {
  padding: 0; /* 去掉默认内边距 */
}


/* 
.footer{
  width: 100%;
  height: 100px;
  background-color: white;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 20px; 
}
 */




/* 走马灯style */
.el-carousel__item h3 {
  color: #475669;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
  text-align: center;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
.button-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.el-row {
  margin-bottom: 20px;
}

.el-row:last-child {
  margin-bottom: 0;
}

.el-col {
  border-radius: 4px;
}

.grid-content {
  border-radius: 4px;
  min-height: 36px;
}


.niceButton {
  /* 让按钮宽度填满列 */
  width: 100%;
  background-color: rgb(254, 67, 101);
  border: none;
  border-radius: 12px;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  /* display: inline-block; */
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  transition-duration: 0.4s;
  -webkit-transition-duration: 0.4s;
}

.niceButton:hover {
  box-shadow: 0 12px 16px 0 rgba(0, 0, 0, .24),
    0 17px 50px 0 rgba(0, 0, 0, .19);
}
</style>