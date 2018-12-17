<template>
  <div class="user">
    <template>
      <el-table
        :data="userList"
        border
        style="width: 100%"
      >
        <el-table-column
          type="selection"
          width="55"
        >
        </el-table-column>
        <el-table-column
          prop="username"
          label="用户名"
          width="180"
        >
        </el-table-column>
        <el-table-column
          prop="mobile"
          label="电话"
          width="300"
        >
        </el-table-column>
        <el-table-column
          prop="isDelete"
          label="状态"
        >
        <template slot-scope='scope'>
            <span>{{scope.row.isDelete | isDeleteForm }}</span>
        </template>
        </el-table-column>

        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button
              size="mini"
              type="danger"
              @click="userStatus(scope.row.id, scope.row)"
              :class='{"btnActive":toggleStatus===false}'
            >{{toggleStatus?'禁用':'启用'}}</el-button>
          </template>
        </el-table-column>
      </el-table>
    </template>
    <el-pagination
      layout="total"
      :total="total">
    </el-pagination>
  </div>
</template>
<script>
import {UserList, UserStatus} from '@/api'
export default{
    data(){
        return{
            userList:[
                {
                username:'',
                mobile:'',
                isDelete:''
            }
            ],
            page:1,
            pagesize:10,
            toggleStatus:true,
            total:0
        }
    },
    methods:{
        userStatus(id,row){
            console.log(row,'2222');
            this.toggleStatus = !this.toggleStatus
            // console.log(this.toggleStatus,'123333');
            if(this.toggleStatus){
                this.userList[0].isDelete = 1
                this.$message({
                    message:'已启用',
                    type:'success'
                })
            }else {
                this.userList[0].isDelete = 0
                this.$message({
                    message:'已禁用',
                    type:'error'
                })
            }
            UserStatus({id:id,isDelete:row.isDelete}).then(res => {
            })
        },
        initList(){
            UserList({params:{page:this.page, pagesize:this.pagesize}}).then(res => {
                // console.log(res,'112');
                this.toggleStatus = !!res.rows[0].isDelete
                this.userList = res.rows
                this.total = res.page
            })
        }
    },
    mounted(){
        this.initList()
    },
    // 拦截器
    filters: {
        isDeleteForm (isDelete){
            if(isDelete === 1){
                return '已启用'
            }else if (isDelete === 0){
                return '已禁用'
            }
        }
    }
}
</script>
<style lang="scss">
.btnActive{
    background-color: skyblue;
    border: 1px solid skyblue;
}
</style>
