<template>
  <div class="zhinan_detail">
    <div class="office_box office_zhinan">
      <el-row :gutter="20">
        <el-col :span="4">
          <div class="grid-content">
            <ul class="tab_box">
              <li class="active">农村低保</li>
              <li>农村低保</li>
            </ul>
          </div>
        </el-col>
        <el-col :span="20">
          <div class="grid-content">
            <div class="detail_content">
              <div class="detail_box">
                东城街道办事处为县人民政府的派出机构，在县政府直接领导下，贯彻执行党的路线方针政策和国家的法律法规，坚持以经济建设为中心，以群众工作为基础，以城市的建设、管理、保障和稳定为重点，依据法律、法规和县政府的授权，对辖区内地区性、社会性和群众公益性工作履行组织领导、综合协调、监督检査职能。具体职能为：
                1.组织领导。指导、帮助村委会、社区居委会开展组织建设、制度建设及其它工作；负责本辖区的村、社区建设、管理和服务工作
                3.监督管理。制定本辖区内经济和社会发展规划、财政预算，加强流动人口管理，开展拥军优属，做好国防动员和兵役工作，管理好本辖区内的社会事务、劳动和社会保障、安全生产、环境保护、计划生育等行政工作。
                4.综合协调。负责维护本辖区内社会秩序稳定，做好社会治安综合治理和人民调解工作，做好群众来信来访处置、民族宗教、社区矫正等工作，维护老年人、未成年人、妇女、残疾人等的合法权益。
                4.上传下达。向县人民政府反映群众的意见和要求以及办理上级人民政府交办的各项事宜。
              </div>
              <div class="download_file">
                <a href>
                  办事附件：社保申请流程图
                  <img src="/static/images/download_icon.png" alt />
                </a>
              </div>
              <div class="text-center apply_btn">
                <el-button type="primary" round>
                  <router-link to="/form">立即申办</router-link>
                </el-button>
              </div>
            </div>
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
.office_box.office_zhinan {
  padding: 0;
}
.tab_box {
  width: 100%;
  padding: 30px 25px;
  padding-right: 0;
}

.tab_box li {
  width: 100%;
  height: 50px;
  background: #a0a0a0;
  font-size: 18px;
  color: #fff;
  text-align: center;
  line-height: 50px;
  border-radius: 10px;
  margin-bottom: 20px;
}

.tab_box li.active {
  background: #ffb933;
}

.detail_content {
  width: 100%;
  background: #fff;
  height: 610px;
  padding: 30px 160px 35px 60px;
  font-size: 16px;
  line-height: 35px;
  color: #333;
  border-radius: 25px;
}

.detail_box {
  height: 395px;
  overflow-y: auto;
}

.apply_btn .el-button--primary {
  background-color: #0761e0;
  border-color: #0761e0;
  width: 470px;
  border-radius: 50px;
  height: 55px;
  font-size: 18px;
}

.download_file {
  width: 100%;
  height: 30px;
  font-size: 17px;
  font-weight: bold;
  margin: 35px 0;
  color: #333;
}

.download_file img {
  width: 20px;
  margin-left: 10px;
  position: relative;
  top: 3px;
}
</style>

