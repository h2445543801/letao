<template>
    <div class="login">
    <div class="container">
      <el-form :model="loginForm"  class="demo-ruleForm"  :rules="rules" ref="loginForm" >
          <img src="../assets/images/monkey.png" alt="" class="avatar">
        <el-form-item prop="username">
          <el-input v-model="loginForm.username" prefix-icon="myicon myicon-user " placeholder="用户"></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input v-model="loginForm.password" prefix-icon="myicon myicon-key" placeholder="密码" type="password"></el-input>
        </el-form-item>
        <el-button type="primary" class="login-btn" @click="login">登录</el-button>
      </el-form>
    </div>
    </div>
</template>
<script>
import {Login} from '@/api'
export default {
    data(){
        return{
            loginForm:{
                password:'',
                username:''
            },
      rules: {
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' }
        ]
      }
        }
    },
    methods:{
        login(){
           Login(this.loginForm).then(res => {
            //    console.log(res);
               if(res.success ){
                   this.$message({
                    message: '恭喜你,成功登入',
                    type: 'success'
                    });
                    this.$router.push({name:'Home'})
               }else{
                   this.$message({
                    message: '警告,输入有误',
                    type: 'warning'
                    });
               }
           })
        }
    }
}
</script>
<style lang="scss" scoped>
.login {
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: skyblue;

  .container {
    position: absolute;
    left: 0;
    right: 0;
    width: 400px;
    padding: 0px 40px 15px 40px;
    margin: 200px auto;
    background: white;
    .avatar {
      position: relative;
      left: 50%;
      width: 120px;
      height: 120px;
      margin-left: -60px;
      margin-top: -60px;
      box-sizing: border-box;
      border-radius: 50%;
      border: 10px solid #fff;
      box-shadow: 0 1px 5px #ccc;
      overflow: hidden;
    }
    .login-btn {
      width: 100%;
    }
  }
}
</style>
