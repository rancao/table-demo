<template>
  <div class="home">
    <p>xxx审核平台-列表页</p>
    <el-form
      :inline="true"
      label-position="top"
      :model="form"
      class="demo-form-inline"
    >
      <el-row :gutter="20">
        <el-col :span="6">
          <el-form-item label="任务名:">
            <el-input
              v-model="form.name"
              clearable
              placeholder="请输入"
            ></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item label="产品线:">
            <el-input
              v-model="form.productLine"
              clearable
              placeholder="请输入"
            ></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item label="行业:">
            <el-select v-model="form.industry" clearable placeholder="请选择">
              <el-option label="IT" value="IT"></el-option>
              <el-option label="制造业" value="制造业"></el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item label="活动区域:">
            <el-select v-model="form.region" clearable placeholder="请选择">
              <el-option label="区域一" value="区域一"></el-option>
              <el-option label="区域二" value="区域二"></el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="任务创建时间:">
            <el-date-picker
              v-model="form.dateValue"
              type="daterange"
              range-separator="至"
              start-placeholder="开始日期"
              end-placeholder="结束日期"
            />
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <div class="search-button">
            <el-form-item>
              <el-button type="primary" @click="onSubmit">搜索</el-button>
            </el-form-item>
          </div>
        </el-col>
      </el-row>
    </el-form>

    <el-table :data="tableData" border style="width: 100%">
      <el-table-column prop="name" label="任务名"> </el-table-column>
      <el-table-column prop="productLine" label="产品线"> </el-table-column>
      <el-table-column prop="industry" label="行业"> </el-table-column>
      <el-table-column prop="region" label="活动区域" width="300"> </el-table-column>
      <el-table-column prop="startDate" label="开始日期"> </el-table-column>
      <el-table-column prop="endDate" label="结束日期"> </el-table-column>
      <el-table-column fixed="right" label="操作" width="100">
        <template slot-scope="scope">
          <el-button type="text" size="small" @click="handleClick(scope.row)">审核</el-button>
          <el-button type="text" size="small" @click="handleDelete(scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <div
      v-if="total"
      class="pagination-box">
      <div class="total">
        共{{total}}条数据
      </div>
      <el-pagination
        :page-size="pageSize"
        :pager-count="11"
        layout="prev, pager, next"
        :total="total"
        @current-change="currentChange" 
        >
      </el-pagination>
    </div>
  </div>
</template>

<script>
import { getDate } from './data'
export default {
  data() {
    return {
      form: {
        name: "",
        productLine: "",
        region: "",
        industry: "",
        dateValue: "",
      },
      total: 0,
      tableData: [],
      dialogVisible: false,
      pageSize: 10,
      pageNo: 1
    };
  },
  mounted() {
    this.getData()
  },
  methods: {
    onSubmit() {
      this.getData()
    },
    currentChange(current){
      this.pageNo = current
      this.getData()
    },
    async getData(){
      try {
        const loading = this.$loading({
          lock: true,
          text: 'Loading',
          spinner: 'el-icon-loading',
          background: 'rgba(0, 0, 0, 0.7)'
        });
        let res = await this.simulateAsyncRequest(this.form, this.pageNo, this.pageSize)
        loading.close();
        if(res){
          this.tableData = res.data
          this.total = res.total
        }
      } catch (error) {
        this.$message({
          type: 'error',
          message: '返回失败'
        });
        console.log(error)
      }
    },
    handleClick(row) {
      this.$store.commit('idChange', row.userId)
      this.$router.push({
        name: 'detail'
      })
    },
    handleDelete(row){
      this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$message({
          type: 'success',
          message: `Id为${row.userId}数据删除成功!`
        });
        setTimeout(() => {
          this.getData()
        }, 500)
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        });          
      });
    },
    handleClose(done) {
      this.$confirm('确认关闭？')
        .then(_ => {
          done();
        })
        .catch(_ => {});
    },
    // 模拟异步请求
    simulateAsyncRequest(params, pageNo, pageSize) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          const response = getDate(params, pageNo, pageSize); 
          const error = null; 
          if (error) {
            reject(error); // 如果请求出错，则调用 reject 方法
          } else {
            resolve(response); // 如果请求成功，则调用 resolve 方法
          }
        }, 500); // 模拟请求的延迟时间，这里设置为1秒
      });
    }
  },
};
</script>
<style scoped>
.home {
  padding: 20px 40px;
  text-align: left;
  width: 100vw;
  box-sizing: border-box;
  overflow-x: hidden;
}
p{
  margin-top: 0;
  font-size: 16px;
  font-weight: 700;
  color: #303133;
}
.el-form-item,
.el-form-item__content,
.el-select,
.el-date-editor {
  width: 100%;
}
.search-button {
  text-align: right;
  position: absolute;
  top: 163px;
  right: 10px;
}
.pagination-box {
  display: flex;
  justify-content: space-between;
  margin-top: 15px;
  
}
</style>
