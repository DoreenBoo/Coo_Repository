<template>
  <el-container>
    <el-header>
      <el-row :gutter="15">
        <!-- 分类 -->
        <el-col :span="6">
          <button class="niceButton">分类</button>
  
        </el-col>

        <!-- 搜索 -->
        <el-col :span="6">
          <button class="niceButton">搜索</button>
        </el-col>

        <!-- 主页 -->
        <el-col :span="6">
          <button class="niceButton">主页</button>
        </el-col>

        <!-- 我 -->
        <el-col :span="6">
          <button class="niceButton">我的</button>
        </el-col>
      </el-row>
    </el-header>

    <el-main>
      <!-- 走马灯 -->
        <el-carousel :interval="4000" type="card" height="200px">
    <el-carousel-item v-for="item in 6" :key="item">
      <h3 text="2xl" justify="center">{{ item }}</h3>
    </el-carousel-item>
  </el-carousel>

    </el-main>

    <el-footer>Footer</el-footer>
  </el-container>
</template>



<script>
export default {
  name: 'HomePage'
};
</script>



<style scoped>
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