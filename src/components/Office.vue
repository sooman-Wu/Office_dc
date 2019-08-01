<template>
  <div class="office_wrapper">
    <div class="office_box">
      <el-row :gutter="20">
        <el-col :span="15">
          <div class="grid-content">
            <el-row :gutter="20">
              <el-col :span="6">
                <div class="grid-content">
                  <div class="office_item blue_bg">
                    <router-link to="/detail">
                      <img src="/static/images/dibao_icon.png" alt />
                      <p>低保服务</p>
                    </router-link>
                  </div>
                </div>
              </el-col>
              <el-col :span="6">
                <div class="grid-content">
                  <div class="office_item green_bg">
                    <router-link to="/office">
                      <img src="/static/images/wubao_icon.png" alt />
                      <p>五保服务</p>
                    </router-link>
                  </div>
                </div>
              </el-col>
              <el-col :span="6">
                <div class="grid-content">
                  <div class="office_item sky_bg">
                    <router-link to="/office">
                      <img src="/static/images/canlian_icon.png" alt />
                      <p>残联服务</p>
                    </router-link>
                  </div>
                </div>
              </el-col>
              <el-col :span="6">
                <div class="grid-content">
                  <div class="office_item orange_bg">
                    <router-link to="/office">
                      <img src="/static/images/gaoling_icon.png" alt />
                      <p>高龄服务</p>
                    </router-link>
                  </div>
                </div>
              </el-col>
              <el-col :span="6">
                <div class="grid-content">
                  <div class="office_item sky_bg">
                    <router-link to="/office">
                      <img src="/static/images/shebao_icon.png" alt />
                      <p>社保服务</p>
                    </router-link>
                  </div>
                </div>
              </el-col>
              <el-col :span="6">
                <div class="grid-content">
                  <div class="office_item yellow_bg">
                    <router-link to="/office">
                      <img src="/static/images/youfu_icon.png" alt />
                      <p>优抚服务</p>
                    </router-link>
                  </div>
                </div>
              </el-col>
              <el-col :span="6">
                <div class="grid-content">
                  <div class="office_item red_bg">
                    <router-link to="/office">
                      <img src="/static/images/yiliao_icon.png" alt />
                      <p>大病医疗救助</p>
                    </router-link>
                  </div>
                </div>
              </el-col>
              <el-col :span="6">
                <div class="grid-content">
                  <div class="office_item green_bg">
                    <router-link to="/office">
                      <img src="/static/images/shengyu_icon.png" alt />
                      <p>生育证服务</p>
                    </router-link>
                  </div>
                </div>
              </el-col>
              <el-col :span="6">
                <div class="grid-content">
                  <div class="office_item blue_bg">
                    <router-link to="/office">
                      <img src="/static/images/zaisheng_icon.png" alt />
                      <p>再生服务</p>
                    </router-link>
                  </div>
                </div>
              </el-col>
              <el-col :span="6">
                <div class="grid-content">
                  <div class="office_item purple_bg">
                    <router-link to="/office">
                      <img src="/static/images/liudong_icon.png" alt />
                      <p>流动人口证明</p>
                    </router-link>
                  </div>
                </div>
              </el-col>
              <el-col :span="6">
                <div class="grid-content">
                  <div class="office_item sky_bg">
                    <router-link to="/office">
                      <img src="/static/images/jihua_icon.png" alt />
                      <p>计划生育奖励</p>
                    </router-link>
                  </div>
                </div>
              </el-col>
              <el-col :span="6">
                <div class="grid-content">
                  <div class="office_item pink_bg">
                    <router-link to="/office">
                      <img src="/static/images/heliao_icon.png" alt />
                      <p>合疗申办流程</p>
                    </router-link>
                  </div>
                </div>
              </el-col>
            </el-row>
          </div>
        </el-col>
        <el-col :span="9">
          <div class="grid-content">
            <dl class="zhinan_wrapper">
              <dt>
                <span>办事指南</span>
              </dt>
              <dd>
                <router-link to="/detail">
                  <p class="text-hidden-line">07/11 计划生育在线办划生育在线办理指南</p>
                  <span>
                    <img src="/static/images/arrow_next.png" alt />
                  </span>
                </router-link>
              </dd>
              <dd>
                <router-link to="/detail">
                  <p>07/11 计划生育在线办理指南</p>
                  <span>
                    <img src="/static/images/arrow_next.png" alt />
                  </span>
                </router-link>
              </dd>
              <dd>
                <router-link to="/detail">
                  <p>07/11 计划生育在线办理指南</p>
                  <span>
                    <img src="/static/images/arrow_next.png" alt />
                  </span>
                </router-link>
              </dd>
              <dd>
                <router-link to="/detail">
                  <p>07/11 计划生育在线办理指南</p>
                  <span>
                    <img src="/static/images/arrow_next.png" alt />
                  </span>
                </router-link>
              </dd>
            </dl>
          </div>
        </el-col>
      </el-row>
    </div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item>你的位置是:</el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>办事大厅</el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>
<style>
.office_item {
  width: 100%;
  height: 155px;
  border-radius: 20px;
  text-align: center;
  margin-bottom: 20px;
}

.office_item img {
  height: 60px;
  margin-top: 30px;
}

.office_item p {
  font-size: 16px;
  color: #fff;
  margin-top: 10px;
}

.blue_bg {
  background: #4d4ffa;
}

.green_bg {
  background: #03d480;
}
.sky_bg {
  background: #0cbafd;
}
.orange_bg {
  background: #fa914d;
}
.yellow_bg {
  background: #dfc12f;
}
.red_bg {
  background: #fc6b7a;
}
.purple_bg {
  background: #9575cd;
}
.pink_bg {
  background: #ea68a2;
}

.zhinan_wrapper {
  width: 100%;
  height: 504px;
  background: url(/static/images/zhinan_bg.png) no-repeat center/100% 100%;
  color: #fff;
  padding: 25px 40px;
}

.zhinan_wrapper dt {
  font-size: 20px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 25px;
}

.zhinan_wrapper dt span {
  display: inline-block;
  height: 22px;
  line-height: 20px;
  padding: 0 10px;
  border-left: 3px solid #ffff00;
  border-right: 3px solid #ffff00;
}

.zhinan_wrapper dd {
  width: 100%;
  height: 50px;
  line-height: 50px;
  margin-bottom: 20px;
  padding: 0 25px;
  border: 2px solid rgba(252, 249, 242, 0.4);
  font-size: 16px;
}

.zhinan_wrapper dd p {
  width: 88%;
  float: left;
  padding-right: 5px;
}

.zhinan_wrapper dd img {
  width: 30px;
}
</style>
