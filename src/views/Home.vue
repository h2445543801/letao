<template>
    <div class="home">
      <el-container>
        <el-aside width="auto">
           <div class="logo"></div>
           <el-menu
           :router='true'
           :collapse="isCollapse"
            :unique-opened='uo'
            class="el-menu-admin"
            @open="handleOpen"
            @close="handleClose"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b">
          <!-- 1 -->
          <el-menu-item index="/user">
            <i class="el-icon-location"></i>
            <span slot="title">用户管理</span>
          </el-menu-item>
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
            <span class="myicon myicon-menu toggle-btn" @click='isCollapse = !isCollapse '></span>
            <span><a href="#">退出</a></span>
          </el-header>
          <el-main>
            <!-- 真正展示嵌套路由内容的区域 -->
            <router-view></router-view>
          </el-main>
        </el-container>
      </el-container>
    </div>
</template>
<script>
export default {
  data () {
    return {
      isCollapse: false,
      uo: true,
      menuList: []
    }
  },
  methods: {
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>
<style lang="scss" scoped>
.home {
  height: 100%;
  .el-menu-admin:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }
  .el-container {
    height: 100%;
  }
  .el-aside {
    background-color: #545c64;
  }
  .el-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #545c64;
  }
  .logo {
    height:200px;   
    background: url(../assets/images/my_logo.jpg);
    background-size: cover;
    background-color: #f1f1f1;
  }
  .toggle-btn {
    padding: 0 15px;
    margin-left: -20px;
    font-size: 36px;
    color: white;
    cursor: pointer;
    line-height: 60px;
    &:hover {
      background-color: #4292CF;
    }
  }
  .system-title {
    font-size: 28px;
    color: white;
  }
}
</style>
