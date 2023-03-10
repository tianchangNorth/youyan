<template>
  <div class="app">
    <!-- 主体部分 -->
    <div class="body">
      <div class="body-head">
        <div class="body-head-head">
          <img src="../assets/icon06.png" alt="" />&nbsp;
          <h4>平台数据分布</h4>
        </div>
        <img src="../assets/bottom_line.png" alt="" />
        <EchartsMap></EchartsMap>
      </div>
      <div class="body-bottom">
        <div class="body-buttom-head">
          <img src="../assets/icon04.png" alt="" />&nbsp; 监控列表
        </div>
        <TableList></TableList>
      </div>
    </div>
    <!-- 左侧主体 -->
    <div class="body-left">
      <div class="left1">
        <h4>
          设 <br />
          备 <br />
          数 <br />量
        </h4>
        <Echarts1></Echarts1>
      </div>
      <div class="left2">
        <div class="left2-head">
          <img src="../assets/icon01.png" alt="" />&nbsp;
          <h4>设备在线情况</h4>
        </div>
        <img src="../assets/bottom_line.png" alt="" />
        <Echarts2></Echarts2>
      </div>
      <div class="left3">
        <div class="left3-head">
          <img src="../assets/icon02.png" alt="" /> &nbsp;
          <h4>设备在线情况</h4>
        </div>
        <img src="../assets/bottom_line.png" alt="" />
        <Echarts3></Echarts3>
      </div>
    </div>
    <!-- 右侧主体 -->
    <div class="body-right">
      <div class="right1">
        <div>
          <h2>告警信息</h2>
          <h3>{{ gjNum }}条</h3>
        </div>
        <div>
          <h2>故障信息</h2>
          <h3>{{ gzNum }}条</h3>
        </div>
      </div>
      <div class="right2">
        <div class="right2-head">
          <img src="../assets/icon05.png" alt="" />&nbsp;
          <h4>报警记录</h4>
        </div>
        <img src="../assets/bottom_line.png" alt="" />
        <ul>
          <li v-for="(item, index) in gzInfo" :key="index">
            <a><img src="../assets/new_list02.png" alt="" /></a>
            <span>{{ item.datetime }}</span>
            <span> {{ item.log }}</span>
            <span>{{ item.place }}</span>
          </li>
        </ul>
      </div>
      <div class="right3">
        <div class="right3-head">
          <img src="../assets/icon06.png" alt="" />&nbsp;
          <h4>数据记录</h4>
        </div>
        <img src="../assets/bottom_line.png" alt="" />
        <Echarts4></Echarts4>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Echarts1 from "../components/Echarts1.vue";
import Echarts2 from "../components/Echarts2.vue";
import Echarts3 from "../components/Echarts3.vue";
import Echarts4 from "../components/Echarts4.vue";
import TableList from "../components/TableList.vue";
import EchartsMap from "../components/EchartsMap.vue";
export default {
  name: "DataBase",
  components: {
    Echarts1,
    Echarts2,
    Echarts3,
    EchartsMap,
    Echarts4,
    TableList,
  },
  data() {
    return {
      gzInfo: [],
      gzNum: 0,
      gjNum: 0,
    };
  },
  methods: {
    getInfo() {
      var this_ = this;
      axios.get("http://127.0.0.1/DeviceState/showErrorLog").then((res) => {
        this_.gzInfo = res.data;
        this_.gzNum = res.data.length;
        this_.gjNum = res.data.length;
      });
    },
  },
  mounted() {
    setInterval(() => {
      this.getInfo();
    }, 5000);
  },
};
</script>

<style scoped>
.body {
  position: absolute;
  margin-left: 425px;
  margin-top: 20px;
  margin-bottom: 20px;
  width: 1050px;
  height: 970px;
  /* background-color: red; */
}
.body-head {
  width: 1050px;
  height: 650px;
  margin-bottom: 20px;
  /* background-color: blue; */
  background: url(../assets/center01.png);
}
.body-bottom {
  width: 1050px;
  height: 300px;
  /* background-color: cadetblue; */
  background: url(../assets/center02.png);
}
.body-left,
.body-right {
  position: relative;
  height: 970px;
  margin: 20px;
  margin-bottom: 0px;
  width: 385px;
  /* background-color: skyblue; */
}
.body-left {
  float: left;
}
.body-right {
  float: right;
}
.left1,
.right1 {
  overflow: hidden;
  position: relative;
  width: 100%;
  height: 200px;
  background: url(../assets/zuoyi.png) no-repeat;
}
.huanxing {
  width: 100%;
  height: 125px;
  display: flex;
  justify-content: space-around;
}
.left2,
.right2 {
  width: 100%;
  height: 330px;
  background: url(../assets/zuo2.png);
}
.left3,
.right3 {
  margin-top: 15px;
  width: 100%;
  height: 425px;
  background: url(../assets/hangye.png);
}
.right1 {
  display: flex;
  justify-content: space-around;
}
.right1 div {
  margin-top: 20px;
  overflow: hidden;
  text-align: center;
  width: 134px;
  height: 134px;
  background: url(../assets/report01.png) no-repeat;
}
.right1 div h2 {
  font-size: 18px;
  margin-top: 40px;
  color: #ff0000;
}
.right1 div h3 {
  margin-top: 5px;
  font-size: 22px;
  color: white;
}
.right1 div:last-child {
  background: url(../assets/report02.png);
}
.right2,
.right3,
.left2,
.left3,
.body-head,
.body-bottom {
  overflow: hidden;
}
.right2 .right2-head,
.right3-head {
  margin-top: 25px;
  margin-bottom: 20px;
  display: flex;
  justify-content: center;
  color: #00f6ff;
  font-size: 16px;
}
.right2 ul {
  line-height: 40px;
  margin-left: 5px;
  margin-top: 20px;
  font-size: 16px;
  color: #ff0000;
}

.left2 .left2-head,
.left3-head {
  margin-top: 25px;
  margin-bottom: 20px;
  display: flex;
  justify-content: center;
  color: #00f6ff;
  font-size: 16px;
}

.left2 #bing {
  margin-left: 20px;
  margin-bottom: 10px;
}
.huanxing {
  margin-top: 20px;
}
.body-head-head {
  margin-top: 25px;
  margin-bottom: 20px;
  display: flex;
  justify-content: center;
  color: #00f6ff;
  font-size: 16px;
}
.body-head {
  text-align: center;
}

.b1 {
  border-color: red;
  background-color: red;
  border-radius: 5px;
  color: #fff;
}

.b2 {
  background-color: #00f6ff;
  border-color: #00f6ff;
  border-radius: 5px;
  color: #fff;
}

.b3 {
  background-color: green;
  border-color: green;
  border-radius: 5px;
  color: #fff;
}
.body-buttom-head {
  margin-top: 25px;
  margin-left: 50px;
  text-align: center;
  width: 950px;
  height: 40px;
  background-color: #0e4ae0;
  font-weight: 700;
  font-size: 16px;
  line-height: 40px;
  color: white;
}
.body-left .left1 h4 {
  width: 40px;
  height: 200px;
  float: left;
  font-size: 20px;
  margin-top: 30px;
  margin-left: 20px;
  color: #00f6ff;
}
</style>