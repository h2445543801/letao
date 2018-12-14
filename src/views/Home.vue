<template>
  <div class="home">
    <el-container>
      <el-aside style="width:200px;">
        <el-menu
          default-active="2"
          class="el-menu-vertical-demo"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
          v-model="isCollapse"
        >
        <div class="homeImg">
            <img src="../assets/images/my_logo.jpg" alt="">
            <span>张学友</span>
        </div>
        <!-- 1 -->
          <el-submenu index="1">
            <template slot="title">
                <i class="el-icon-location"></i>
                <span>用户管理</span>
            </template>
            <el-menu-item-group>
                <el-menu-item index="1-1">
                    <i class="el-icon-menu"></i>
                    <span>用户管理</span>
                </el-menu-item>
                <el-menu-item index="1-2">
                    <i class="el-icon-menu"></i>
                    <span>用户管理</span>
                </el-menu-item>
            </el-menu-item-group>
         </el-submenu>
            <!-- 2 -->
         <el-submenu index="2">
            <template slot="title">
                <i class="el-icon-news"></i>
                <span>分类管理</span>
            </template>
            <el-menu-item-group>
                <el-menu-item index="2-1">
                    <i class="el-icon-menu"></i>
                    <span>一级分类管理</span>
                </el-menu-item>
                <el-menu-item index="2-2">
                    <i class="el-icon-menu"></i>
                    <span>二级分类管理</span>
                </el-menu-item>
            </el-menu-item-group>
         </el-submenu>
           <!-- 3 -->
         <el-menu-item index="3">
            <i class="el-icon-sold-out"></i>
            <span slot="title">商品管理</span>
         </el-menu-item>
        </el-menu>
      </el-aside>
      <el-container>
        <el-header>
            <span  class="myicon myicon-menu toggle-btn" @click="isCollapse == !isCollapse"></span>
        </el-header>
        <el-main>Main</el-main>
      </el-container>
    </el-container>

  </div>
</template>
<script>
export default {
  data() {
    return {
        isCollapse: false
    };
  }
};
</script>
<style lang="scss">
.home{
    width: 100%;
    .el-menu{
        .homeImg{
        background-color: #243443;
        height: 100%;
        padding-top: 30px;
        padding-bottom: 46px;
        span{
            position: relative;
            left: -24px;
            top:25px;
            color: #a9b0c2;
        }
        img {
        position: relative;
        left: 50px;
        width: 90px;
        height:90px;
        box-sizing: border-box;
        border-radius: 50%;
        border: 5px solid #888;
        box-shadow: 0 1px 2px #ccc;
        overflow: hidden;
        }
           }
    }
.el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 626px;
  }
.toggle-btn {
    padding: 0 15px;
    margin-left: -20px;
    font-size: 36px;
    color: skyblue;
    cursor: pointer;
    line-height: 60px;
   
}
}
</style>
