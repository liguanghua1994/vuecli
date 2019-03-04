<template>
    <div class="right-tag-box">
        <span id="left-tag" class="el-icon-d-arrow-left left-tag"></span>
        <span id="right-tag" class="el-icon-d-arrow-right right-tag"></span>
        <div id="tag-box" class="tag-box">
            <ul id="tag-list" class="tag-list">
                <li class="tag-item" v-for="(tag,idx) in tags">
                    <a v-if="tag.routerLink!='/'" href="javascript:;" :class="{'tag-link':true,'tag-link-active':tag.isActive}" @click="goTag(idx)">
                        <span>{{tag.tagName}}</span>
                        <i class="el-icon-close tag-close" @click="closeTag(idx)"></i>
                    </a>
                    <a v-else href="javascript:;"  :class="{'tag-link':true,'tag-link-active':tag.isActive}"  @click="goTag(idx)">
                        <span class="icon-home"></span>
                    </a>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    import store from '@/store';
    export default {
        name: "rightTag",
        store,
        data(){
          return {
              isHomeActive2:store.state.isHomeActive,
              tags:store.state.tags,
          }
        },
        mounted(){

            $('#right-tag').click(function () {

                //获取ul的宽度
                var tagListWidth=$('#tag-list').width();
                console.log('ul的宽度',tagListWidth);
                //获取ul的left偏移值
                var tagListLeft=$('#tag-list')[0].offsetLeft;
                console.log('ul的left偏移值',tagListLeft)
                //计算ul剩下的宽度
                var tagListRemain=tagListWidth+tagListLeft;
                //获取ul box的宽度
                var tagBoxWidth=$('#tag-box').width();
                //对比宽度,执行tag移动
                console.log('剩余tag长度',tagListRemain)
                console.log('tag box宽度',tagBoxWidth)
                if (tagListRemain > tagBoxWidth){
                    console.log('move')

                    var tagListLeft=tagListLeft-tagBoxWidth;
                    $('#tag-list').css({left:tagListLeft+'px'});

                }else{
                    console.log('stop')
                }

            });

            $('#left-tag').click(function () {

                //获取ul的left值
                var tagListLeft=$('#tag-list')[0].offsetLeft;
                //获取ul box的宽度
                var tagBoxWidth=$('#tag-box').width();
                //如果ul的left值小于0,left值加上tag box的宽度值
                if(tagListLeft<0){
                    console.log('move')
                    tagListLeft+=tagBoxWidth;
                    $('#tag-list').css({left:tagListLeft+'px'});
                }else {
                    console.log('stop')
                }

            });

            $('#home-link').click(function () {
                store.state.isHomeActive=true;

                if (store.state.activeTagIdx!=-1){
                    store.state.tags[store.state.activeTagIdx].isActive=false;
                }

                store.state.activeTagIdx=-1;
                this.$router.push('/');
            });
        },
        methods:{
            goTag(idx){

                //获取当前索引所对应的路由路径
                //路由跳转
                this.$router.push(this.tags[idx].routerLink);
                //取消之前的激活状态
                this.tags[store.state.activeTagIdx].isActive=false;
                //设置当前的激活状态
                this.tags[idx].isActive=true;
                //改变激活索引
                store.state.activeTagIdx=idx;

            },
            closeTag(idx){
                this.tags.splice(idx,1);
                this.tags[this.tags.length-1].isActive=true;
                store.state.activeTagIdx=this.tags.length-1;
                this.$router.push(this.tags[this.tags.length-1].routerLink);
            }
        }
    }
</script>

<style scoped>
    .right-tag-box{
        height: 40px;
        border-bottom: 1px solid #f6f6f6;
        background: #fff;
    }
    .left-tag,.right-tag{
        display: inline-block;
        width: 40px;
        height: 40px;
        text-align: center;
        line-height: 40px;
        font-size: 18px;
        background: #fff;
        z-index: 1;
        position: relative;
        cursor: pointer;
    }
    .left-tag{
        float: left;
        border-right: 1px solid #f6f6f6;
    }
    .right-tag{
        float: right;
        border-left: 1px solid #f6f6f6;
    }
    .tag-box{
        height: 40px;
        margin: 0 40px;
        position: relative;
        overflow: hidden;
    }
    .tag-item{
        display: inline-block;
    }
    .tag-link{
        display: inline-block;
        height: 40px;
        line-height: 40px;
        padding: 0 10px;
        color: #000;
        border-right: 1px solid #f6f6f6;
        background: #fff;
    }
    .tag-close{
        margin-left: 10px;
        padding: 2px;
    }
    .tag-close:hover{
        color: #fff;
        background: red;
        -webkit-border-radius: 50%;
        -moz-border-radius: 50%;
        border-radius: 50%;
    }
    .tag-link-active{
        background: #f6f6f6;
        border-top: 3px solid red;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
    }
    .tag-list{
        float: left;
        white-space: nowrap;
        position: absolute;
        left: 0;
        top: 0;
        -webkit-transition: left .2s linear 0s;
        -moz-transition: left .2s linear 0s;
        -ms-transition: left .2s linear 0s;
        -o-transition: left .2s linear 0s;
        transition: left .2s linear 0s;
    }
</style>