<template>
  <div class="detail">
    <el-descriptions class="margin-top" title="xxx审核平台-审核页" :column="3" border>
      <el-descriptions-item>
        <template slot="label">
          <i class="el-icon-user"></i>
          用户名
        </template>
        {{ userInfo.username }}
      </el-descriptions-item>
      <el-descriptions-item>
        <template slot="label">
          <i class="el-icon-mobile-phone"></i>
          用户id
        </template>
        {{ userInfo.userId }}
      </el-descriptions-item>
      <el-descriptions-item>
        <template slot="label">
          <i class="el-icon-location-outline"></i>
          公司网站
        </template>
        {{ userInfo.webAddress }}
      </el-descriptions-item>
      <el-descriptions-item>
        <template slot="label">
          <i class="el-icon-mobile-phone"></i>
          资质
        </template>
        {{ userInfo.qualifications }}
      </el-descriptions-item>
      <el-descriptions-item>
        <template slot="label">
          <i class="el-icon-mobile-phone"></i>
          一级行业
        </template>
        {{ userInfo.industry }}
      </el-descriptions-item>
      <el-descriptions-item>
        <template slot="label">
          <i class="el-icon-mobile-phone"></i>
          二级行业
        </template>
        {{ userInfo.subIndustry }}
      </el-descriptions-item>
      <el-descriptions-item>
        <template slot="label">
          <i class="el-icon-tickets"></i>
          用户类型
        </template>
        <el-tag size="small">{{ userInfo.userType }}</el-tag>
      </el-descriptions-item>
      <el-descriptions-item>
        <template slot="label">
          <i class="el-icon-office-building"></i>
          批注
        </template>
        {{ userInfo.annotations }}
      </el-descriptions-item>
    </el-descriptions>
    <div class="button-box">
      <el-button type="primary" @click="handlePass">通过所选</el-button>
      <el-button type="primary"  @click="handleRe">拒绝所选</el-button>
      <el-button type="primary"  @click="handleReAc">拒绝账户</el-button>
      <el-button type="primary"  @click="handleShelve">搁置</el-button>
      <el-button type="primary"  @click="handleNext">下一个任务</el-button>
    </div>
    <el-table
      ref="multipleTable"
      border
      :span-method="objectSpanMethod"
      :data="tableData"
      tooltip-effect="dark"
      style="width: 100%"
      @selection-change="handleSelectionChange"
    >
      <el-table-column
        type="selection"
        width="55">
      </el-table-column>
      <el-table-column
        prop="title"
        label="标题"
        width="160">
      </el-table-column>
      <el-table-column
        prop="desc"
        label="描述"
      >
      </el-table-column>
      <el-table-column
        prop="imgs"
        label="图片"
        width="150"
      >
        <template slot-scope="scope">
          <span
            v-for="(item, index) in scope.row.imgs"
            :key="item+index"
          >
            <img class="image-logo" :src="item" alt="">
          </span>
        </template>
      </el-table-column>
      <el-table-column
        label="操作"
        width="120">
        <template slot-scope="scope">
          <el-button type="text" size="small" @click="handleClick(scope.row)" >通过</el-button>
          <el-button type="text" size="small" @click="handlerefuse(scope.row)" >拒绝</el-button>
        </template>
      </el-table-column>
      <el-table-column
        prop="address"
        label="落地页"
        width="320">
        <template slot-scope="scope">
          <span v-if="scope.$index === 0">
            <div>{{iframUrl}}</div>
            <div class="web-box">
              <iframe :src="iframUrl" frameborder="0"></iframe>
            </div>
          </span>
        </template>
      </el-table-column>
      <el-table-column
        label="落地页"
        width="120">
        <template slot-scope="scope">
          <span v-if="scope.$index === 0">
            <el-button type="text" size="small" @click="handleClick1(scope.row)">通过</el-button>
            <el-button type="text" size="small" @click="handlerefuse1(scope.row)">拒绝</el-button>
          </span>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { getDetail } from './data'
import { get } from 'lodash'
export default {
  data() {
    return {
      userInfo: {},
      multipleSelection: [],
      iframUrl: 'https://ant.design/index-cn',
      tableData: [],
    };
  },
  computed:{
    selectId() {
      console.log('this.$store.state.selectId',this.$store.state.selectId)
      return this.$store.state.selectId || 0;
    },
  },
  mounted(){
    this.getDetailInfo(this.selectId)
  },
  methods: {
    handlePass(){
      if(this.checkSelect()){
        let ids = this.multipleSelection.map(ele => {
          return ele.id
        })
        this.$message({
          type: 'success',
          message: '通过成功!，向后端传递数据id为' + ids.toString()
        });
      }
    },
    handleRe(){
      if(this.checkSelect()){
        let ids = this.multipleSelection.map(ele => {
          return ele.id
        })
        this.$message({
          type: 'info',
          message: '拒绝成功!，向后端传递数据id为' + ids.toString()
        });
      }
    },
    handleReAc(){
      this.$message({
        type: 'info',
        message: '拒绝成功!，拒绝的用户id为'+ this.userInfo.userId
      });
    },
    handleShelve(){
      if(this.checkSelect()){
        let ids = this.multipleSelection.map(ele => {
          return ele.id
        })
        this.$confirm('信息搁置!，搁置id为' + ids.toString(), '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.handleNext()
        }).catch(() => {       
          this.$message({
            type: 'error',
            message: '返回失败'
          });  
        });
      }
    },
    handleNext(){
      this.$refs.multipleTable.clearSelection();
      this.getDetailInfo(this.selectId, true)
    },
    checkSelect(){
      if(!this.multipleSelection.length){
        this.$message({
          type: 'info',
          message: '未选中任何数据'
        });
        return false
      }
      return true
    },
    handleClick(row) {
      this.$message({
        type: 'success',
        message: '通过成功!，向后端传递数据id为' + row.id
      });
      console.log(row);
    },
    handleClick1(row) {
      this.$message({
        type: 'success',
        message: '通过成功!，向后端传递数据落地页url' + this.iframUrl
      });
    },
    handlerefuse(row){
      this.$message({
        type: 'info',
        message: '拒绝成功!，向后端传递数据id为' + row.id
      });
      console.log(row);
    },
    handlerefuse1(row){
      this.$message({
        type: 'info',
        message: '拒绝成功!，向后端传递数据id为' + this.iframUrl
      });
    },
    handleSelectionChange(val) {
      this.multipleSelection = val;
    },
    objectSpanMethod({ row, column, rowIndex, columnIndex }) {
      if (columnIndex === 5 || columnIndex === 6) {
        return {
          rowspan: 100,
          colspan: 1
        };
      }
    },
    async getDetailInfo(id, isNext){
      try {
        const loading = this.$loading({
          lock: true,
          text: 'Loading',
          spinner: 'el-icon-loading',
          background: 'rgba(0, 0, 0, 0.7)'
        });
        console.log('id: id, next:isNext', id, isNext)
        let res = await this.simulateAsyncRequest({id: id, next:isNext})
        loading.close();
        if(res){
          this.userInfo = res.userInfo
          this.tableData = res.tableData
          this.$store.commit('idChange', get(res, 'userInfo.id', ''))
        }
      } catch (error) {
        console.log(error)
      }
    },
    // 模拟异步请求
    simulateAsyncRequest(params) {
      console.log('params',params)
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          const response = getDetail(params); 
          const error = null; 
          if (error) {
            reject(error); // 如果请求出错，则调用 reject 方法
          } else {
            console.log('response',response)
            resolve(response); // 如果请求成功，则调用 resolve 方法
          }
        }, 500); // 模拟请求的延迟时间，这里设置为1秒
      });
    }
  },
};
</script>
<style scoped>
.detail{
  padding: 20px 40px;
  text-align: left;
  width: 100vw;
  box-sizing: border-box;
  overflow-x: hidden;
}
.button-box{
  margin: 15px 0;
  display: flex;
  justify-content: space-between;
}
.image-logo {
  margin: 0 5px;
  height: 40px;
  width: 40px;
  padding: 5px;
  border: 1px solid black;
}
.web-box {
  width: 100%;
  max-height: 700px;
}
iframe {
  width: 300px;
  height: 500px;
  background: #fff;
}
</style>
