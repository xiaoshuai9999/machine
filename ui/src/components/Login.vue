<template>
  <div class="login-container">
    <el-form ref="form" :model="form" label-width="80px" class="login-form">
      <h2 class="login-title">机房管理系统</h2>
      <el-form-item label="用户名">
        <el-input v-model="form.username"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input type="password" v-model="form.pwd" @keyup.enter.native="login"></el-input>
      </el-form-item>
      <el-button type="primary" @click="login">登录</el-button>
    </el-form>

  </div>
</template>
<script>
  import {login} from '../api/login'
  export default {
    name: "login",
    data() {
      return {
        form: {
          username: "",
          pwd: ""
        }
      };
    },
    methods: {
      login() {
        let that = this;
        login(that.form).then(res =>{
          console.log(res.data);
          that.$router.push({
            path: '/index'
          })
        })
        console.log("submit!");
      }
    }
  };
</script>

<style acoped>
  .login-form {
    width: 350px;
    margin: 160px auto; /* 上下间距160px，左右自动居中*/
    background-color: rgba(255, 255, 255, 0.8); /* 透明背景色 */
    padding: 30px;
    border-radius: 20px; /* 圆角 */
  }

  /* 背景 */
  .login-container {
    position: absolute;
    width: 100%;
    height: 100%;
    background: url("../assets/dwz/login.jpg");
    background-size: cover;
  }

  /* 标题 */
  .login-title {
    color: #303133;
    text-align: center;
    font-size: 25px;
    font-weight: bold;
    margin-bottom: 15px;
  }
</style>
