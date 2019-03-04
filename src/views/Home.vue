<template>
  <div class="home">
      <el-row :gutter="10">
        <el-col :span="18">
          <el-row :gutter="10" style="margin-bottom: 10px;">
            <el-col :span="12">
              <div class="home-block-box">
                <h3 class="shortcut-title">快捷方式</h3>
                <div class="shortcut-wrp">
                  <el-row style="margin-bottom: 10px;" :gutter="30">
                    <el-col :span="6">
                      <div class="shortcut-box">
                          <i class="icon-home shortcut-icon"></i>
                          <span class="shortcut-name">入口名称</span>
                      </div>
                    </el-col>
                    <el-col :span="6">
                      <div class="shortcut-box">
                          <i class="icon-home shortcut-icon"></i>
                          <span class="shortcut-name">入口名称</span>
                      </div>
                    </el-col>
                    <el-col :span="6">
                      <div class="shortcut-box">
                          <i class="icon-home shortcut-icon"></i>
                          <span class="shortcut-name">入口名称</span>
                      </div>
                    </el-col>
                    <el-col :span="6">
                      <div class="shortcut-box">
                          <i class="icon-home shortcut-icon"></i>
                          <span class="shortcut-name">入口名称</span>
                      </div>
                    </el-col>
                  </el-row>
                  <el-row :gutter="30">
                    <el-col :span="6">
                      <div class="shortcut-box">
                          <i class="icon-home shortcut-icon"></i>
                          <span class="shortcut-name">入口名称</span>
                      </div>
                    </el-col>
                    <el-col :span="6">
                      <div class="shortcut-box">
                          <i class="icon-home shortcut-icon"></i>
                          <span class="shortcut-name">入口名称</span>
                      </div>
                    </el-col>
                    <el-col :span="6">
                      <div class="shortcut-box">
                          <i class="icon-home shortcut-icon"></i>
                          <span class="shortcut-name">入口名称</span>
                      </div>
                    </el-col>
                    <el-col :span="6">
                      <div class="shortcut-box">
                          <i class="icon-home shortcut-icon"></i>
                          <span class="shortcut-name">入口名称</span>
                      </div>
                    </el-col>
                  </el-row>
                </div>
              </div>
            </el-col>
            <el-col :span="12">
              <div class="home-block-box">
                <h3 class="shortcut-title">代办事项</h3>
                <div class="todo-item-wrp">
                  <el-row style="margin-bottom: 40px;" :gutter="40">
                    <el-col :span="12">
                      <div class="todo-item-box">
                        <p class="todo-item-title">事项1</p>
                        <p class="todo-item-count">99</p>
                      </div>
                    </el-col>
                    <el-col :span="12">
                      <div class="todo-item-box">
                        <p class="todo-item-title">事项1</p>
                        <p class="todo-item-count">99</p>
                      </div>
                    </el-col>
                  </el-row>
                  <el-row :gutter="40">
                    <el-col :span="12">
                      <div class="todo-item-box">
                        <p class="todo-item-title">事项1</p>
                        <p class="todo-item-count">99</p>
                      </div>
                    </el-col>
                    <el-col :span="12">
                      <div class="todo-item-box">
                        <p class="todo-item-title">事项1</p>
                        <p class="todo-item-count">99</p>
                      </div>
                    </el-col>
                  </el-row>
                </div>
              </div>
            </el-col>
          </el-row>
          <el-row :gutter="10">
            <el-col id="views-statistics-wrp" :span="12">
              <div class="home-block-box">
                <h3 class="shortcut-title">近一周访问量</h3>
                <div id="views-statistics-box" class="views-statistics-box"></div>
              </div>
            </el-col>
            <el-col :span="12">
              <div class="home-block-box">
                <h3 class="shortcut-title">访问来源</h3>
                <div id="views-origin-box" class="views-origin-box"></div>
              </div>
            </el-col>
          </el-row>
        </el-col>
        <el-col :span="6">
          <div class="home-right-box">
            <h3 class="shortcut-title">实时监控</h3>
            <el-row style="margin-bottom: 10px;" :gutter="50">
              <el-col :span="12">
                <el-progress type="circle" :percentage="100" status="text" :width="100">Done</el-progress>
              </el-col>
              <el-col :span="12">
                <el-progress type="circle" :percentage="100" status="text" :width="100">Done</el-progress>
              </el-col>
            </el-row>
            <el-row style="margin-bottom: 10px;" :gutter="50">
              <el-col :span="12">
                <el-progress type="circle" :percentage="100" status="text" :width="100">Done</el-progress>
              </el-col>
              <el-col :span="12">
                <el-progress type="circle" :percentage="100" status="text" :width="100">Done</el-progress>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="24">
                <el-progress class="monitor-progress" :text-inside="true" :stroke-width="18" :percentage="0"></el-progress>
                <el-progress class="monitor-progress" :text-inside="true" :stroke-width="18" :percentage="70"></el-progress>
                <el-progress class="monitor-progress" :text-inside="true" :stroke-width="18" :percentage="80" color="rgba(142, 113, 199, 0.7)"></el-progress>
                <el-progress class="monitor-progress" :text-inside="true" :stroke-width="18" :percentage="100" status="success"></el-progress>
                <el-progress class="monitor-progress" :text-inside="true" :stroke-width="18" :percentage="50" status="exception"></el-progress>
              </el-col>
            </el-row>
          </div>
        </el-col>
      </el-row>
  </div>
</template>

<script>
// @ is an alias to /src
import Vue from 'vue';
import echarts from 'echarts';

Vue.prototype.$echarts = echarts;

export default {
  name: 'home',
  components: {
  },
  created(){



  },
  mounted() {

    this.drawViewsStatistics();

    this.drawviewsOrigin();

  },
  methods:{

    drawViewsStatistics(){
      var viewsBox=document.getElementById('views-statistics-box');

      var viewsChart=this.$echarts.init(viewsBox);
      var option={
        xAxis: {
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
          type: 'value'
        },
        series: [{
          data: [120, 300, 150, 80, 70, 110, 130],
          type: 'bar'
        }],
        itemStyle:{
          color:'green'
        }
      };
      viewsChart.setOption(option);
    },

    drawviewsOrigin(){

      var viewsOriginBox=document.getElementById('views-origin-box');

      var viewsOriginCharts=this.$echarts.init(viewsOriginBox);

      var option={
        roseType: 'angle',
        series : [
          {
            name: '访问来源',
            type: 'pie',
            radius: '55%',
            data:[
              {value:235, name:'视频广告'},
              {value:274, name:'联盟广告'},
              {value:310, name:'邮件营销'},
              {value:335, name:'直接访问'},
              {value:400, name:'搜索引擎'}
            ]
          }
        ]
      };

      viewsOriginCharts.setOption(option);

    }
  }
}
</script>

<style>
  .home{
    padding: 10px;
  }
  .home-block-box{
    background: #fff;
    min-height: 250px;
    -webkit-border-radius: 10px;
    -moz-border-radius: 10px;
    border-radius: 10px;
    padding: 20px;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }
  .home-right-box{
    min-height: 510px;
    background: #fff;
    -webkit-border-radius: 10px;
    -moz-border-radius: 10px;
    border-radius: 10px;
    padding: 20px;
  }
  .shortcut-icon{
    display: block;
    height: 60px;
    text-align: center;
    line-height: 60px!important;
    font-size: 24px;
    background: #f6f6f6;
    color: #999;
  }
  .shortcut-name{
    display: block;
    height: 25px;
    text-align: center;
    line-height: 25px!important;
    font-size: 14px;
    color: #666;
  }
  .shortcut-title{
    line-height: 35px;
    border-bottom: 1px solid #f6f6f6;
    margin-bottom: 10px;
  }
  .todo-item-box{
    background: #f6f6f6;
    padding: 10px;
  }
  .todo-item-title{
    color: #666;
  }
  .todo-item-count{
    font-size: 24px;
    color: green;
  }
  .views-statistics-box,.views-origin-box{
    width: 400px;
    height: 300px;
    margin: 0 auto;
  }
  .monitor-progress{
    margin: 20px 0;
  }
</style>
