<template>
    <el-menu
            :default-active="$route.path"
            class="el-menu-vertical-demo"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b"
            @open="handleOpen"
            @close="handleClose"
            router>
        <el-submenu :index="menu.id.toString()" v-for="menu in menus">
            <template slot="title">
                <i :class="menu.icon"></i>
                <span>{{menu.name}}</span>
            </template>
            <el-menu-item :index="subMenu.rlink" v-for="subMenu in menu.subMenus" @click="toRouterLink(subMenu)">
                {{subMenu.name}}
            </el-menu-item>
        </el-submenu>
    </el-menu>
</template>

<script>

    import store from '@/store';

    export default {
        name: "leftNav",
        store,
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
                                name:'组织机构管理',
                                rlink:'/orgpostList'
                            },
                            {
                                id:10002,
                                name:'角色管理',
                                rlink:'/roleList'
                            },
                            {
                                id:10003,
                                name:'员工管理',
                                rlink:'/userList'
                            },
                            {
                                id:10004,
                                name:'字典管理',
                                rlink:'/dictList'
                            },
                        ]
                    },
                ]
            }
        },
        methods: {
            handleOpen(key, keyPath) {
                console.log(key, keyPath);
            },
            handleClose(key, keyPath) {
                console.log(key, keyPath);
            },
            toRouterLink(subMenu){

                //判断是否已经存在标签页，如果是，将该标签页激活，否，新添加标签页
                var isExist=false;
                var tags=store.state.tags;
                for (var i in tags){
                    if (subMenu.rlink==tags[i].routerLink) {
                        tags[store.state.activeTagIdx].isActive=false;//取消之前的激活状态
                        tags[i].isActive=true;//设置当前的激活状态
                        store.state.activeTagIdx=i;//改变激活索引
                        isExist=true;
                        break;
                    }
                }

                if (isExist) return;

                //新添加标签页
                var tag={
                    tagName:subMenu.name,
                    routerLink:subMenu.rlink,
                    isActive:true
                };
                tags[store.state.activeTagIdx].isActive=false;//取消之前的激活状态
                tags.push(tag);//添加标签页
                store.state.activeTagIdx=tags.length-1;//设置当前的激活索引为最后一个
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
        width: 170px;
        text-align: left;
    }
</style>