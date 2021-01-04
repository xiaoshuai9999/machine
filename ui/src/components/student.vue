<template>
  <div>
    <el-breadcrumb style="line-height: 2;margin-top: 15px;margin-left:20px;float: left">
      <el-input style="width: 200px"
                placeholder="请输入学生姓名"
                prefix-icon="el-icon-search"
                v-model="searchForm.name"
                clearable
                @keydown="listAllStudent"
      >
      </el-input>
      <el-input style="width: 200px"
                placeholder="请输入学号"
                prefix-icon="el-icon-search"
                clearable
                v-model="searchForm.no"
                @keydown="listAllStudent"
      >
      </el-input>
      <el-button type="primary" icon="el-icon-search" @click="listAllStudent">搜索</el-button>
    </el-breadcrumb>
    <div style="float: right; margin-right: 20px;margin-top: 15px;">
      <el-button type="primary" plain @click="">新增学生</el-button>
    </div>

    <div style="margin: 15px 20px">
      <el-table
        :data="stuList"
        style="width: 100%"
      >
        <el-table-column
          type="index"
          label="序号"
          width="100"
        >
        </el-table-column>
        <el-table-column
          prop="name"
          label="姓名"
        >
        </el-table-column>
        <el-table-column
          prop="no"
          label="学号"
        >
        </el-table-column>
        <el-table-column
          prop="sex"
          label="性别"
        >
        </el-table-column>
        <el-table-column
          prop="major"
          label="专业"
        >
        </el-table-column>
        <el-table-column
          prop="grade"
          label="年级"
        >
        </el-table-column>
        <el-table-column
          prop="clbum"
          label="班级"
        >
        </el-table-column>
        <el-table-column
          prop="year"
          label="入学年份"
        >
        </el-table-column>
        <el-table-column
          label="操作"
        >
          <template slot-scope="scope" >
            <el-button icon="el-icon-search" circle></el-button>
            <el-button type="primary" icon="el-icon-edit" circle></el-button>
            <el-button type="danger" icon="el-icon-delete" circle></el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-pagination
        layout="total,prev, pager, next,jumper"
        :current-page.sync="pageNum"
        :total="stuList.length"
        :page-size="10">
      </el-pagination>
    </div>
  </div>
</template>

<script>
  import {listAll} from '../api/student'
  export default {
    name: 'student',
    data() {
      return {
        stuList: [],
        pageNum: 1,
        searchForm: {
          name: "",
          no: ""
        }
      }
    },
    created() {
      this.listAllStudent();
    },
    methods: {
      listAllStudent() {
        let that = this;
        listAll(that.searchForm).then(res =>{
          console.log(res.data)
          that.stuList = res.data;
         })
      }

    }
  }
</script>

<style scoped>
  .hello {
    position: fixed;
    top: 50%;
    left: 50%;
    margin-top: -120px;
    margin-left: -520px;
    height: 240px;
    width: 1024px;
    text-align: center;
  }

  .welcome_tip {
    background-image: -webkit-linear-gradient(left, #42b983, #0e4a30, #42b983);
    background-image: -moz-linear-gradient(left, #42b983, #0e4a30, #42b983);
    background-image: -ms-linear-gradient(left, #42b983, #0e4a30, #42b983);
    background-image: -o-linear-gradient(left, #42b983, #0e4a30, #42b983);
    background-image: linear-gradient(to right, #42b983, #0e4a30, #42b983);
    color: transparent;
    -webkit-background-clip: text;
    background-clip: text;
    font-size: 90px;
    font-family: fantasy;
  }

  .powered {
    position: fixed;
    bottom: 10px;
    right: 10px;
    font-family: fantasy;
    color: rgb(127, 140, 141);
  }

</style>
