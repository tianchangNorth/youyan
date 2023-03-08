<template>
  <div>
    <div class="top">
      <h1>油烟可视化管理平台</h1>
      <h2></h2>
      <button @click="updated">更新设备信息</button>
    </div>
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script scoped>
export default {
  name: "Main",
};
</script>

<style>
.top {
  position: relative;
  height: 88px;
  width: 100%;
  background-image: url(../assets/bg_top.png);
}
.top h1 {
  position: absolute;
  left: 745px;
  top: 15px;
  font-size: 35px;
  color: #00f6ff;
}
.top h2 {
  position: absolute;
  top: 15px;
  right: 25px;
  font-size: 12px;
  color: white;
}
.top button {
  position: absolute;
  top: 20px;
  left: 20px;
  width: 150px;
  height: 40px;
  border: 1px solid #00f6ff;
  background-color: rgba(0, 0, 0, 0.1);
  color: #00f6ff;
  border-radius: 4px;
  box-shadow: #0e4ae0 0 0 5px 2px;
}
</style>