<template>
    <div class="top-bar-box">
        <img class="logo" src="@/assets/img/v-logo.png" alt="">
        <ul class="bar-list">
            <li class="bar-item">
                <a href="" class="bar-link">
                    <i class="icon-bell bar-icon"></i>
                    <span class="bar-msg-box">0</span>
                </a>
            </li>
            <li class="bar-item">
                <el-popover
                    width="75">
                    <ul class="user-setting-list">
                        <li class="user-setting-item"><a href="javascript:;" class="user-setting-link">修改密码</a></li>
                        <li class="user-setting-item"><a href="javascript:;" class="user-setting-link">基本信息</a></li>
                    </ul>
                    <a href="javascript:;" class="bar-link" slot="reference">
                        <i class="icon-user bar-icon"></i>
                        <span class="bar-text">liguanghua</span>
                    </a>
                </el-popover>
            </li>
            <li class="bar-item">
                <a href="" class="bar-link">
                    <i class="icon-exit bar-icon"></i>
                    <span class="bar-text">退出</span>
                </a>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "topBar"
    }
</script>

<style>
    @import "../assets/css/ico.css";
</style>
<style scoped>
    .top-bar-box{
        position: relative;
    }
    .logo{
        position: absolute;
        left: 0;
        top: 0;
    }
    .bar-list{
        float: right;
    }
    .bar-item{
        float: left;
    }
    .bar-link{
        line-height: 50px;
        margin: 0 20px;
        color: #fff;
        font-size: 14px;
    }
    .bar-icon{
        margin-right: 5px;
    }
    .bar-msg-box{
        background: #fff;
        color: #000;
        padding:1px 5px;
        -webkit-border-radius: 5px;
        -moz-border-radius: 5px;
        border-radius: 5px;
    }
    .user-setting-item{
        text-align: center;
    }
    .user-setting-link{
        line-height: 30px;
        color: #666;
    }
</style>