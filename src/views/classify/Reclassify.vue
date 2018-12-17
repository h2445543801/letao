<template>
    <div class="reclassify">
          <el-button type="primary" round @click="addReClassify">添加品牌</el-button>
          <!-- 固定表头表格 -->
          <template>
            <el-table
                :data="reclassifyList"
                height="400"
                border
                style="width: 100%; margin-top:20px;">
                <el-table-column
                type="selection"
                width="55">
                </el-table-column>
                <el-table-column
                prop="id"
                label="品牌编号"
                width="180">
                </el-table-column>
                <el-table-column
                prop="brandName"
                label="品牌名称"
                width="180">
                </el-table-column>
                <el-table-column
                prop="brandLogo"
                label="品牌logo">
                <template slot-scope="scope">
                    <img :src="'http://127.0.0.1:3000'+scope.row.brandLogo" alt="">
                </template>
                </el-table-column>
                <el-table-column
                prop="categoryName"
                label="所属分类">
                </el-table-column>
            </el-table>
          </template>
          <!-- 添加品牌 -->
          <el-dialog title="添加分类" :visible.sync="adddialogFormVisible">
            <el-form :model="ReclassifyForm">
                <el-form-item label="请选择分类" >
                    <el-select v-model="ReclassifyForm.categoryId" placeholder="请选择分类">
                    <el-option :label="item.categoryName" :value="item.id" v-for='item in classifyList' :key="item.id"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="">
                     <el-input v-model="ReclassifyForm.brandName" auto-complete="off" placeholder="请输入品牌名称"></el-input>
                </el-form-item>
                <!-- 上传图片 -->
                <el-upload
                    class="upload-demo"
                    drag
                    action="http://127.0.0.1:3000/category/addSecondCategoryPic"
                    name="pic1"
                    :with-credentials = 'true'
                    :on-success = 'addSuccess'
                    multiple>
                    <i class="el-icon-upload"></i>
                    <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
                    <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
                </el-upload>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="adddialogFormVisible = false">取 消</el-button>
                <el-button type="primary" @click="addClassify()">确 定</el-button>
            </div>
          </el-dialog>
    </div>
</template>
<script>
import {ReclassifyList, classifyList, addClassify} from '@/api'
export default {
    data(){
        return{
            reclassifyList:[],
            classifyList:[],
            page:1,
            pageSize:10,
            adddialogFormVisible:false,
            ReclassifyForm:{
                categoryId:'',
                brandLogo:'',
                brandName:'',
                hot:1
            },
            
        }
    },
    methods:{
        // 渲染页面
        init(){
            ReclassifyList({page:this.page , pageSize:this.pageSize}).then(res => {
                // console.log(res,'123456');
                this.reclassifyList = res.rows
                this.brandLogo = res.rows.brandLogo
            })
        },
        // 点击弹出添加弹框
        addReClassify(){
            this.adddialogFormVisible = true
        // 获取一级分类
             classifyList({page:1 , pageSize: 10}).then(res => {
                // console.log(res,'090');
                this.classifyList= res.rows
                // console.log( this.classifyList.categoryName,'1');
            })
        },
        // 获取图片路径
        addSuccess(response, file, fileList){
            console.log(response,'1');
            
            this.ReclassifyForm.brandLogo =response.picAddr 
            console.log(this.ReclassifyForm.brandLogo)
            
        },
        // 添加分类
        addClassify(value){
            addClassify(this.ReclassifyForm).then(res => {
                console.log(res,'969696');
                if(res.success){
                    this.adddialogFormVisible = false
                    this.init()
                    this.$message.success('添加成功')
                }else {
                    this.$message.success('添加失败')
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
