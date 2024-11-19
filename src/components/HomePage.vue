<template>
  <div class="common-layout">
    <el-container>
      <el-header>
        Header
      </el-header>
      <el-container>

        <el-aside width="200px">
          Aside
        </el-aside>
        <el-container>

          <el-main>
              <el-carousel :interval="4000" type="card" height="200px">
    <el-carousel-item v-for="item in 6" :key="item">
      <h3 text="2xl" justify="center">{{ item }}</h3>
    </el-carousel-item>
  </el-carousel>
          </el-main>
          
          <el-footer>Footer</el-footer>
          
        </el-container>
      </el-container>
    </el-container>
  </div>

</template>


<script>
export default {
  name: 'HomePage'
};
</script>



<style scoped>

/* 走马灯style */
.el-carousel__item h3 {
  color: #475669;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
  text-align: center;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;    /* 后面要改成图片 */
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;   /* 后面要改成图片 */
}

</style>