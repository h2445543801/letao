<template>
    <div class="user">
        <template>
            <el-table
                :data="userList"
                border
                style="width: 100%">
                <el-table-column
                type="selection"
                width="55">
                </el-table-column>
                <el-table-column
                prop="userName"
                label="用户名"
                width="180">
                </el-table-column>
                <el-table-column
                prop="phone"
                label="电话"
                width="180">
                </el-table-column>
                <el-table-column
                prop="state"
                label="状态">
                </el-table-column>

                 <el-table-column label="操作">
                    <template slot-scope="scope">
                        <el-button
                        size="mini"
                        @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
                        <el-button
                        size="mini"
                        type="danger"
                        @click="handleDelete(scope.$index, scope.row)">删除</el-button>
                    </template>
                 </el-table-column>
            </el-table>
        </template>

    </div>
</template>
<script>
import {UserList} from '@/api'
export default{
    data(){
        return{
            userList:[
                {
                userName:'',
                phone:'',
                state:''
            }
            ],
            page:0,
            pagesize:10
        }
    },
    methods:{
        handleEdit(){},
        handleDelete(){},
    }
}
</script>
<style lang="scss">

</style>
