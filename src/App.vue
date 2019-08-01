<template>
  <div id="app">
    <Head></Head>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
body {
  width: 100%;
  margin: 0;
  padding: 0;
  height: 100vh;
  background: url(/static/images/bg.png) no-repeat center / cover;
}
#app {
  width: 1200px;
  margin: 0 auto;
  padding: 80px 0;
}
</style>

