<template>
        <el-menu
                default-active="2"
                class="el-menu-vertical-demo"
                background-color="#545c64"
                text-color="#fff"
                active-text-color="#ffd04b">
            <el-submenu :index="toString(menu.id)" v-for="menu in menus">
                <template slot="title">
                    <i :class="menu.icon"></i>
                    <span>
                        {{menu.name}}
                    </span>
                </template>
                <el-menu-item :index="toString(subMenu.id)" v-for="subMenu in menu.subMenus">
                    {{subMenu.name}}
                </el-menu-item>
            </el-submenu>
        </el-menu>
</template>

<script>
    export default {
        name: "leftNav",
        data(){
            return {
                menus:[
                    {
                        id:10000,
                        name:'系统管理',
                        icon:'el-icon-setting',
                        subMenus:[
                            {
                                id:10001,
                                name:'组织机构管理'
                            },
                            {
                                id:10002,
                                name:'角色管理'
                            },
                            {
                                id:10003,
                                name:'用户管理'
                            },
                            {
                                id:10004,
                                name:'字典管理'
                            },
                        ]
                    },
                    {
                        id:20000,
                        name:'销售模块',
                        icon:'el-icon-phone',
                        subMenus:[
                            {
                                id:20001,
                                name:'客户管理'
                            },
                            {
                                id:20002,
                                name:'我的客户订单'
                            },
                            {
                                id:20003,
                                name:'销售提成'
                            }
                        ]
                    },
                    {
                        id:30000,
                        name:'客服模块',
                        icon:'el-icon-service',
                        subMenus:[
                            {
                                id:30001,
                                name:'下单'
                            },
                            {
                                id:30002,
                                name:'我的客户订单'
                            },
                            {
                                id:30003,
                                name:'对账单'
                            }
                        ]
                    },
                    {
                        id:40000,
                        name:'采购模块',
                        icon:'el-icon-goods',
                        subMenus:[
                            {
                                id:40001,
                                name:'资料价格录入'
                            },
                            {
                                id:40002,
                                name:'订单分配与价格等级'
                            },
                            {
                                id:40003,
                                name:'供应商管理'
                            }
                        ]
                    },
                ]
            }
        }
    }
</script>

<style scoped>
    .el-submenu .el-menu-item{
        min-width: 0;
    }
    .el-submenu__title{
        text-align: left;
    }
    li.el-submenu {
        width: 169px;
        text-align: left;
    }
</style>