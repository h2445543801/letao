<template>
    <div class="classify">
        <el-button type="primary" round @click="addClassify">添加分类</el-button>
        <template>
            <el-table
                :data="classifyList"
                border
                style="width: 100% ; margin-top:20px;">
                 <el-table-column
                type="selection"
                width="55">
                </el-table-column>
                <el-table-column
                prop="id"
                label="分类的编号">
                </el-table-column>
                 <el-table-column
                prop="categoryName"
                label="分类名称">
                </el-table-column>
            </el-table>
        </template>
        <el-dialog title="添加分类" :visible.sync="adddialogFormVisible">
            <el-form :model="addform">
                <el-form-item label="活动名称" >
                <el-input v-model="addform.categoryName" auto-complete="off"></el-input>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="adddialogFormVisible = false">取 消</el-button>
                <el-button type="primary" @click="addSubmit">确 定</el-button>
            </div>
        </el-dialog>
        <!-- 分页 -->
        <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :page-size="pageSize"
        layout="total, prev, pager, next"
        :total="total">
        </el-pagination>
    </div>
</template>
<script>
import {classifyList, classifyForm} from '@/api'
export default {
    data(){
        return{
            classifyList:[],
            page:1,
            pageSize:10,
            total:0,
            adddialogFormVisible:false,
            addform:{
                categoryName:''
            }
        }
    },
    methods:{
        init(){
            classifyList({page:this.page,pageSize:this.pageSize}).then(res => {
                // console.log(res,'999');
                this.classifyList = res.rows
                this.total = res.total
                this.pageSize = res.size

            })
        },
        addClassify(){
            this.adddialogFormVisible = true
        },
        // 添加分类
        addSubmit(){
            classifyForm(this.addform).then(res => {
                // console.log(res,'9999');
                this.adddialogFormVisible = false
                if(res.success){
                    this.addform.categoryName = this.classifyList.categoryName
                    this.init()
                     this.$message({
                        message:'添加成功',
                        type:'success'
                    })
                }
            })
        },
        handleSizeChange(val){
            // console.log(123);
        },
        handleCurrentChange(val){
            // console.log(val,'2231');
            this.page = val
            this.init()
        }
        
    },
    mounted(){
        this.init()
    }
}
</script>
<style lang="scss">
</style>
