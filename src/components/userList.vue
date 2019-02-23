<template>
    <div class="user-list-box">
        <el-table
                :data="tableData"
                border
                style="width: 100%"
                stripe>
            <el-table-column
                    prop="staffName"
                    label="员工名称">
            </el-table-column>
            <el-table-column
                    prop="staffCode"
                    label="员工编码">
            </el-table-column>
            <el-table-column
                    prop="orgName"
                    label="部门">
            </el-table-column>
            <el-table-column
                    prop="postName"
                    label="岗位">
            </el-table-column>
            <el-table-column
                    prop="roleName"
                    label="角色">
            </el-table-column>
        </el-table>
    </div>

</template>

<script>
    import axios from 'axios';

    export default {
        name: "userList",
        data(){
            return {
                  tableData:[]
            }
        },
        created: function(){//在渲染html之前调用
            axios.get('/api/staff/getStaffs.do?pageNo=1&pageSize=10&page=1&rows=10&_=1550825347777').then(res => {
                console.log(res)
                this.tableData=res.data.data;
            });
        },
        mounted() {//在渲染html之后调用
        }
    }



</script>

<style>
    .user-list-box{
        margin: 10px;
    }
    .el-table td, .el-table th{
        padding: 5px 0!important;
    }
</style>