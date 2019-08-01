<template>
  <div class="header_wrapper">
    <img src="/static/images/logo.png" alt class="logo" />
    <div class="title">
      <h1>智慧东城办事大厅一体平台</h1>
      <p>Intelligent East Town Office Hall Integrated Platform</p>
    </div>
    <div class="back_box">
      <router-link>
        <img src alt />
        首页
      </router-link>
      <router-link>
        <img src alt />
        返回
      </router-link>
    </div>
  </div>
</template>
<style>
.header_wrapper {
  width: 100%;
  color: #fff;
  position: relative;
  margin-bottom: 40px;
}

.header_wrapper .logo {
  height: 70px;
  margin-right: 20px;
  position: relative;
  top: 5px;
}

.title {
  display: inline-block;
}
.title h1 {
  color: #fdfdfd;
  margin: 0;
  font-size: 38px;
  letter-spacing: 7px;
}
.title p {
  font-size: 16px;
  margin: 0;
}
</style>

