<template>
  <div class="main_wrapper">
    <el-col :gutter="20">
      <el-col :span="17">
        <div class="grid-content">
          <el-carousel indicator-position="none" arrow="never" class="index_banner">
            <el-carousel-item>
              <img src="/static/images/ic_meeting_course.png" alt />
            </el-carousel-item>
          </el-carousel>
          <div class="info_text">
            <h1>东城街道办简介</h1>
            <p>东城街道办事处为县人民政府的派出机构，在县政府直接领导下，贯彻执行党的路线方针政策和国家的法律法规，坚持以经济建设为中心，以群众工作为基础，以城市的建设、管理、保障和稳定为重点……</p>
          </div>
        </div>
      </el-col>
      <el-col :span="7">
        <div class="grid-content">
          <div class="item_list weather">
            <router-link to="/office">
              <h1>28°</h1>
              <p>{{currentDate}}</p>
            </router-link>
          </div>
          <div class="item_list office">
            <router-link to="/office">
              <img src="/static/images/office_icon.png" alt />办事大厅
            </router-link>
          </div>
          <div class="item_list info">
            <router-link to="/office">
              <img src="/static/images/info_icon.png" alt />通知公告
            </router-link>
          </div>
        </div>
      </el-col>
    </el-col>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item>你的位置是:</el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>办事大厅</el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<style>
.index_banner {
  width: 100%;
  height: 400px;
}

.index_banner .el-carousel__container {
  height: 400px;
}

.index_banner .el-carousel__item {
  width: 100%;
  height: 100%;
}

.index_banner img {
  width: 100%;
  height: 100%;
}

.info_text {
  color: #fff;
  background: #2571da;
  padding: 20px 17px;
  border-bottom-right-radius: 5px;
  border-bottom-left-radius: 5px;
}

.info_text h1 {
  border-bottom: 1px solid #2baefe;
  font-size: 20px;
  padding-bottom: 15px;
}

.info_text p {
  font-size: 16px;
  line-height: 30px;
  height: 60px;
  overflow: hidden;
  margin-top: 15px;
}

.item_list.weather {
  height: 215px;
}

.item_list {
  width: 95%;
  height: 160px;
  text-align: center;
  color: #fff;
  margin: 0 0 10px 5%;
  font-size: 20px;
  font-weight: bold;
}

.item_list h1 {
  font-size: 112px;
}

.item_list p {
  font-size: 18px;
  font-weight: normal;
  margin-top: 20px;
}

.item_list img {
  width: 60px;
  margin-right: 20px;
  position: relative;
  top: 18px;
}

.weather {
  background: url(/static/images/weather_bg.png) no-repeat center / 100% 100%;
}

.office {
  line-height: 160px;
  background: url(/static/images/office_bg.png) no-repeat center / 100% 100%;
}

.info {
  line-height: 160px;
  background: url(/static/images/info_bg.png) no-repeat center / 100% 100%;
}
</style>
 <script>
export default {
  data() {
    return {
      currentDate: new Date().getFullYear() + '年' + Number(new Date().getMonth() + 1) + '月' + new Date().getDate() + '日'
    }
  },
}
 </script>
 
