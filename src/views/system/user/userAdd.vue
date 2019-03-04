<template>
        <div class="useradd-box">
        <h2 class="useradd-title">员工添加</h2>
        <el-form  :model="user" ref="userForm" :rules="userFormRules" :inline="isInlineFormItem" label-position="right" label-width="150px" style="width: 725px;" size="small">
            <el-row>
                <el-col :span="12">
                    <el-form-item label="员工编码" prop="userCode">
                        <el-input placeholder="员工编码" v-model="user.userCode"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="员工姓名" prop="name">
                        <el-input placeholder="员工姓名" v-model="user.name"></el-input>
                    </el-form-item>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="12" style="text-align: left">
                    <el-form-item label="性别" prop="sex">
                        <el-radio-group v-model="user.sex">
                            <el-radio label="男"></el-radio>
                            <el-radio label="女"></el-radio>
                        </el-radio-group>
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="年龄" prop="age">
                        <el-input placeholder="年龄" v-model="user.age"></el-input>
                    </el-form-item>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="12">
                    <el-form-item label="专业" prop="profession">
                        <el-input placeholder="专业" v-model="user.profession"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="最高学历" prop="education">
                        <el-select label="请选择学历" style="width: 200px;" v-model="user.education">
                            <el-option label="专科" value="专科"></el-option>
                            <el-option label="本科" value="本科"></el-option>
                            <el-option label="硕士" value="硕士"></el-option>
                            <el-option label="博士" value="博士"></el-option>
                        </el-select>
                    </el-form-item>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="24" style="text-align: left">
                    <el-form-item label="证书" prop="certificate">
                        <el-checkbox-group v-model="user.certificate">
                            <el-checkbox label="英语四级" value=""></el-checkbox>
                            <el-checkbox label="英语六级" value=""></el-checkbox>
                            <el-checkbox label="英语八级" value=""></el-checkbox>
                            <el-checkbox label="驾驶证" value=""></el-checkbox>
                            <el-checkbox label="计算机二级" value=""></el-checkbox>
                        </el-checkbox-group>
                    </el-form-item>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="12">
                    <el-form-item label="部门" prop="orgName">
                        <el-input placeholder="部门" v-model="user.orgName"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="岗位" prop="postName">
                        <el-input placeholder="岗位" v-model="user.postName"></el-input>
                    </el-form-item>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="12">
                    <el-form-item label="角色" prop="roleName">
                        <el-input placeholder="角色" v-model="user.roleName"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="12">

                </el-col>
            </el-row>
            <el-row>
                <el-col :span="24" style="text-align: right;padding-right: 10px">
                    <el-button>重&nbsp;&nbsp;置</el-button>
                    <el-button type="primary" @click="submit('userForm')">添&nbsp;&nbsp;加</el-button>
                </el-col>
            </el-row>
        </el-form>
    </div>
</template>

<script>
    import store from '@/store';

    export default {
        name: "userAdd",
        store,
        data(){
            return{
                user:{
                    userCode:'',
                    name:'',
                    age:'',
                    sex:'',
                    profession:'',
                    education:'',
                    orgName:'',
                    postName:'',
                    roleName:'',
                    certificate:[]
                },
                isInlineFormItem:true,
                userFormRules:{
                    userCode:[
                        {required:true,message:'员工编码必填',trigger:'blur'}
                    ],
                    name:[
                        {required:true,message:'员工姓名必填',trigger:'blur'}
                    ]
                }
            }
        },
        methods:{
            submit(formName){
                this.$refs[formName].validate((isValid)=>{
                    if (isValid){
                        store.state.tableData.push($.extend(true,{},this.user));
                        this.$refs[formName].resetFields();
                        this.$message.success('添加成功');
                    } else {
                        this.$message.error('表单填写有误');
                    }
                });

            }
           /* submit:function (formName) {
                this.$message.success('添加成功');
                this.$refs[formName].resetFields();
            }*/
        }
    }
</script>

<style scoped>
    .useradd-box{
        margin: 10px;
        background: #fff;
        padding: 20px 0 50px 0;
        -webkit-border-radius: 10px;
        -moz-border-radius: 10px;
        border-radius: 10px;
    }
    .useradd-title{
        text-align: left;
        padding-left: 80px;
        margin: 20px 0;
    }
</style>