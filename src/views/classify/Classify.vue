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
            })
        },
        addClassify(){
            this.adddialogFormVisible = true
        },
        addSubmit(){
            classifyForm(this.addform).then(res => {
                // console.log(res,'9999');
                this.adddialogFormVisible = false
                if(res.success){
                    this.addform.categoryName = this.classifyList.categoryName
                    this.init()
                }
            })
        }
        
    },
    mounted(){
        this.init()
    }
}
</script>
<style lang="scss">
</style>
