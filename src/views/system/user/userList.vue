<template>
    <div class="user-list-box">
        <el-form :inline="isInlineFormItem" size="small" style="text-align: left">
            <el-form-item label="员工名称">
                <el-input placeholder="员工名称"></el-input>
            </el-form-item>
            <el-form-item label="员工编码">
                <el-input placeholder="员工编码"></el-input>
            </el-form-item>
            <el-form-item label="入职日期">
                <el-date-picker
                        v-model="entryDateRange"
                        type="daterange"
                        range-separator="至"
                        start-placeholder="开始日期"
                        end-placeholder="结束日期">
                </el-date-picker>
            </el-form-item>
            <el-form-item>
                <el-button type="primary">搜索</el-button>
            </el-form-item>
        </el-form>
        <div class="table-bar-box">
            <el-button type="primary" icon="el-icon-delete" size="small">批量删除</el-button>
            <el-button type="primary" icon="el-icon-plus" size="small" @click="userAdd">添加员工</el-button>
            <el-button icon="el-icon-refresh" circle @click="queryTable" size="small"></el-button>
        </div>
        <el-table
                :data="tableData"
                border
                style="width: 100%"
                stripe
                v-loading="isLoading">
            <el-table-column
                    prop="userCode"
                    label="员工编码">
            </el-table-column>
            <el-table-column
                    prop="name"
                    label="员工姓名">
            </el-table-column>
            <el-table-column
                    prop="age"
                    label="年龄">
            </el-table-column>
            <el-table-column
                    prop="sex"
                    label="性别">
            </el-table-column>
            <el-table-column
                    prop="profession"
                    label="专业">
            </el-table-column>
            <el-table-column
                    prop="education"
                    label="学历">
            </el-table-column>
            <el-table-column
                    prop="orgName"
                    label="部门名称">
            </el-table-column>
            <el-table-column
                    prop="postName"
                    label="岗位名称">
            </el-table-column>
            <el-table-column
                    prop="roleName"
                    label="角色名称">
            </el-table-column>
            <el-table-column
                    prop="certificate"
                    label="技能">
            </el-table-column>
            <el-table-column
                    label="操作"
                    width="150">
                <template slot-scope="scope">
                    <el-button @click="handleClick(scope.row)" type="text" size="mini">查看</el-button>
                    <el-button type="text" size="mini">编辑</el-button>
                    <el-button type="text" size="mini">删除</el-button>
                </template>
            </el-table-column>
        </el-table>
        <el-pagination
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
                :current-page="currentPage"
                :page-sizes="pageSizes"
                :page-size="pageSize"
                layout="total, sizes, prev, pager, next, jumper"
                :total="total"
                style="text-align: right;margin:10px 0;">
        </el-pagination>
    </div>

</template>

<script>
    import axios from 'axios';
    import store from '@/store'

    export default {
        name: "userList",
        data(){
            return {
                isLoading:true,
                tableData:store.state.tableData,
                currentPage:1,
                pageSizes:[5,10,20],
                pageSize:5,
                total:0,
                entryDateRange:'',
                isInlineFormItem:true
            }
        },
        created: function(){//在渲染html之前调用
            this.queryTable();
        },
        mounted() {//在渲染html之后调用
            // $('.user-list-box').css({
            //     'min-height':window.innerHeight-100
            // });
        },
        methods:{
            queryTable(){
                this.isLoading=true;
                // axios.get('/api/staff/getStaffs.do',{
                //     params:{
                //         pageNo:this.currentPage,
                //         pageSize:this.pageSize
                //     }
                // }).then(res => {
                //     console.log(res)
                //     this.tableData=res.data.data;
                //     this.total=res.data.totalCount;
                //     this.isLoading=false;
                // });

                //模拟接口查询
                this.total=this.tableData.length;
                this.isLoading=false;
            },
            handleSizeChange(val) {
                this.pageSize=val;
                this.queryTable();
            },
            handleCurrentChange(val) {
                this.currentPage=val;
                this.queryTable();
            },
            userAdd(){
                this.$router.push('/userAdd');
            }
        }
    }



</script>

<style>
    .user-list-box{
        margin: 10px;
        background: #fff;
        -webkit-border-radius: 10px;
        -moz-border-radius: 10px;
        border-radius: 10px;
        padding: 10px;
    }
    .el-table td, .el-table th{
        padding: 5px 0!important;
    }
    .table-bar-box{
        margin: 10px 0;
        text-align: right;
    }
</style>