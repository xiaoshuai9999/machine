<template>
  <!--首页-->
  <div class="homepage-dv">
    <!--头部-->
    <div class="homepage-head-title">
      <span class="main-title">机房管理系统</span>
      <div class="title-menu-dv">
        <el-menu
          :default-active="current_index"
          class="el-menu-demo"
          mode="horizontal"
          background-color="#0b61d9"
          text-color="#c3d1e5"
          active-text-color="#ffffff">
          <el-menu-item v-for="(menu,index) in menus"
                        @click="goPage(menu,index)"
                        :key="menu.name"
                        :index="index+''">
            <span slot="title">{{menu.name}}</span>
          </el-menu-item>
        </el-menu>
      </div>
      <!--登录用户start-->
      <el-dropdown class="user-select-menu">
        <div class="user-info-dv">
          <img src="../assets/dwz/user-pic-demo.jpg" alt="" class="user-pic-i">
          <!--<i class="user-pic-i"></i>-->
          <span class="user-name-span">欢迎您，{{account}}</span>
        </div>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item v-if="isSsoLogin!=='true'"><div @click="showUpdatePasswordFlag = true;user = {}">修改密码</div></el-dropdown-item>
          <el-dropdown-item><div @click="logout">退出</div></el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <!--登录用户end-->
    </div>
    <!--主体start-->
    <router-view/>
    <!--主体end-->

    <!-- 修改密码start -->
    <el-dialog title="修改密码" :visible.sync="showUpdatePasswordFlag">
      <el-form :model="user" :rules="rules" ref="user" label-width="150px" size="medium">
        <el-form-item label="原始密码:" prop="password">
          <el-input v-model="user.password" type="password"></el-input>
        </el-form-item>
        <el-form-item label="新密码:" prop="newPassword">
          <el-input v-model="user.newPassword" type="password"></el-input>
        </el-form-item>
        <el-form-item label="确认新密码:" prop="newPassword1">
          <el-input v-model="user.newPassword1" type="password"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="showUpdatePasswordFlag = false">取 消</el-button>
        <el-button type="primary">确 定</el-button>
      </div>
    </el-dialog>
    <!-- 修改密码end -->
  </div>
</template>

<script>
  // import {updatePassword} from "../api/login"
  export default {
    data() {
      let validatePass1 = (rule, value, callback) => {
        if (value === "") {
          callback(new Error('请输入密码'));
        }
      };
      let validatePass2 = (rule, value, callback) => {
        if (value === "") {
          callback(new Error('请输入新密码'));
        }
      };

      let validatePass3 = (rule, value, callback) => {
        if (value === "") {
          callback(new Error('请再次输入新密码'));
        } else if (value !== this.user.newPassword) {
          callback(new Error('两次输入新密码不一致!'));
        } else {
          callback();
        }
      };
      return {
        user: {
          password: '',
          newPassword: '',
          newPassword1: '',
        },
        account: 'admin',//名称缩写
        showUpdatePasswordFlag: false,
        menus: [{name: "机房信息", path: "/machine-room", pkid: "1"},
          {name: "机器信息", path: "/machine-info", pkid: "2"},
          {name: "学生信息", path: "/student", pkid: "3"},
          {name: "上机管理", path: "/search-resource", pkid: "4"},
          {name: "收费管理", path: "/data-rule", pkid: "5"}
          ],
        rules: {
          password: [
            {validator: validatePass1, trigger: 'blur'}
          ],
          newPassword: [
            {validator: validatePass2, trigger: 'blur'}
          ],
          newPassword1: [
            {validator: validatePass3, trigger: 'blur'}
          ]
        },
        current_index: "0",
        isSsoLogin: false
      };
    },
    methods: {
      // modifyPassword() {
      //   let $this = this;
      //   let $md5 = $this.$md5($this.user.password);
      //   let userInfo = this.$storage.get("em_user_info");
      //
      //   if ($md5 != userInfo.password) {
      //     $this.showUpdatePasswordFlag = false;
      //     return this.$message({message: '原密码错误', type: 'warning'});
      //   }
      //
      //   if ($this.user.newPassword.indexOf(' ') !== -1) {
      //     return this.$message("新密码不能包含空格");
      //   }
      //
      //   let new$md5 = $this.$md5($this.user.newPassword);
      //   let user = {
      //     password: new$md5,
      //     pkid: userInfo.pkid
      //   }
      //   updatePassword(user).then(res => {
      //     this.$message.success({message: '修改成功!请重新登陆', type: 'warning'});
      //     this.logout();
      //   }).catch(error => {
      //     this.$message.error(error.response.data.exception_message);
      //   });
      // },
      logout() {
        this.$router.push("/");
      },
      go() {
        this.$router.push("/homepage");
      },
      goPage(menu, index) {
        this.$router.push(menu.path);
        this.current_index = index+"";
      }
    }
  };
</script>

<style scoped>
  .main-title {
    width: 150px;height: 30px;color: white;float: left;font-size: 24px;font-weight: bolder;
    margin-left: 15px;
  }
</style>
