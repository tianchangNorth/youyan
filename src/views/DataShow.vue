<template>
  <div>
        <div class="loading">
      <div class="loadbox"><img src="../assets/loading.gif" /> 页面加载中...</div>
    </div>
    <div class="head">
      <h1>油烟检测可视化模块数据展示平台</h1>
      <div class="time" id="showTime">2019/11/29 0:12:42</div>
    <div class="mainbox">
      <ul class="clearfix">
        <li>
          <div class="boxall" style="height: calc(40% - 0.15rem)">
            <div class="alltitle">各地检测设备</div>
            <div class="sycm">
              <ul class="clearfix">
                <li>
                  <h2>1824</h2>
                  <span>华东地区</span>
                </li>
                <li>
                  <h2>1920</h2>
                  <span>华西地区</span>
                </li>
                <li>
                  <h2>19%</h2>
                  <span>华南地区</span>
                </li>

                <li>
                  <h2>1824</h2>
                  <span>华北地区</span>
                </li>
              </ul>
            </div>
            <div class="boxfoot"></div>
          </div>
          <div class="boxall" style="height: calc(60% - 0.15rem)">
            <div class="alltitle">各地设备情况</div>
            <div class="sycm sycm2">
              <ul class="clearfix">
                <li>
                  <h2>1824</h2>
                  <span>设备总数</span>
                </li>
                <li>
                  <h2>1800</h2>
                  <span>运行设备数</span>
                </li>
                <li>
                  <h2>94%</h2>
                  <span>设备在线情况</span>
                </li>
              </ul>
            </div>
            <div class="boxfoot"></div>
          </div>
        </li>
        <li>
          <div style="position: relative">
            <div class="barnav">
              <div class="bar">
                <div class="barbox">
                  <ul class="clearfix">
                    <li class="pulll_left counter">{{ $store.state.address }}</li>
                    <li class="pulll_left counter">焦作市</li>
                    <li class="pulll_left counter">解放区</li>
                  </ul>
                </div>
                <div class="barbox2">
                  <ul class="clearfix"></ul>
                </div>
              </div>
            </div>
          </div>
          <div class="mapbox">
            <div class="map">
              <div class="map1"><img src="../assets/lbx.png" /></div>
              <div class="map2"><img src="../assets/jt.png" /></div>
              <div class="map3"><img src="../assets/map.png" /></div>
              <div class="map4" id="map_1"></div>
            </div>
          </div>
        </li>
        <li>
          <div class="boxall" style="height: calc(50% - 0.15rem)">
            <div class="alltitle">
              维修状况
              <div class="pulll_right">
                <a href="#"><span></span>已维修</a>
                <a href="#"><span></span>未维修</a>
              </div>
            </div>

            <div class="boxnav" id="echart3"></div>

            <div class="boxfoot"></div>
          </div>
          <div class="boxall" style="height: calc(50% - 0.15rem)">
            <div class="alltitle">字段名称</div>
            <div class="wrap boxnav">
              <ul>
                <li>
                  <p>
                    <span>深圳腾讯科技有限公司</span><span>门禁系统</span
                    ><span>在线</span>
                  </p>
                </li>
                <li>
                  <p>
                    <span>网易科技有限公司</span><span>防火系统</span
                    ><span>在线</span>
                  </p>
                </li>
                <li>
                  <p>
                    <span>百度科技有限公司</span><span>防火系统</span
                    ><span>在线</span>
                  </p>
                </li>
                <li>
                  <p>
                    <span>汽车之家科技有限公司</span><span>定位系统</span
                    ><span>在线</span>
                  </p>
                </li>
                <li>
                  <p>
                    <span>小米科技有限公司</span><span>定位系统</span
                    ><span>在线</span>
                  </p>
                </li>
              </ul>
            </div>
            <div class="boxfoot"></div>
          </div>
        </li>
      </ul>
    </div>

    <div class="mainbox2">
      <ul class="clearfix">
        <li>
          <div class="boxall" style="height: 100%">
            <div class="alltitle">
              模块标题
              <div class="pulll_right">
                <a href="#"><span></span>已检点</a>
                <a href="#"><span></span>未检点</a>
              </div>
            </div>
            <div class="boxnav">
              <ul class="btbox">
                <li id="bt01"></li>
                <li id="bt02"></li>
                <li id="bt03"></li>
                <li id="bt04"></li>
              </ul>
            </div>
            <div class="boxfoot"></div>
          </div>
        </li>
        <li>
          <div class="boxall" style="height: 100%">
            <div class="alltitle">
              模块标题
              <div class="pulll_right sebtn">
                <a href="#" class="active">近七天</a>
                <a href="#">近30天</a>
                <a href="#">12月</a>
              </div>
            </div>
            <div class="boxnav" id="echart4"></div>

            <div class="boxfoot"></div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "DataShow",
};
</script>

<style>
@charset "utf-8";
/* CSS Document */
* {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}
*,
body {
  padding: 0px;
  margin: 0px;
  color: #222;
  font-family: "微软雅黑";
}
body {
  background: #000d4a url(../images/bg.jpg) center center;
  background-size: cover;
  color: #666;
  font-size: 0.1rem;
}
li {
  list-style-type: none;
}
@font-face {
  font-family: electronicFont;
  src: url(../font/DS-DIGIT.TTF);
}
i {
  margin: 0px;
  padding: 0px;
  text-indent: 0px;
}
img {
  border: none;
  max-width: 100%;
}
a {
  text-decoration: none;
  color: #399bff;
}
a.active,
a:focus {
  outline: none !important;
  text-decoration: none;
}
ol,
ul,
p,
h1,
h2,
h3,
h4,
h5,
h6 {
  padding: 0;
  margin: 0;
}
a:hover {
  color: #06c;
  text-decoration: none !important;
}

html,
body {
  height: 100%;
}
.clearfix:after,
.clearfix:before {
  display: table;
  content: " ";
}
.clearfix:after {
  clear: both;
}
.pulll_left {
  float: left;
}
.pulll_right {
  float: right;
}
/*谷哥滚动条样式*/

::-webkit-scrollbar {
  width: 5px;
  height: 5px;
  position: absolute;
}
::-webkit-scrollbar-thumb {
  background-color: #5bc0de;
}
::-webkit-scrollbar-track {
  background-color: #ddd;
}

/***/

.loading {
  position: fixed;
  left: 0;
  top: 0;
  font-size: 0.3rem;
  z-index: 100000000;
  width: 100%;
  height: 100%;
  background: #1a1a1c;
  text-align: center;
}
.loadbox {
  position: absolute;
  width: 160px;
  height: 150px;
  color: #324e93;
  left: 50%;
  top: 50%;
  margin-top: -100px;
  margin-left: -75px;
}
.loadbox img {
  margin: 10px auto;
  display: block;
  width: 40px;
}

.copyright {
  line-height: 0.5rem;
  text-align: center;
  padding-right: 15px;
  bottom: 0;
  color: rgba(255, 255, 255, 0.5);
  font-size: 0.12rem;
  position: absolute;
  left: 0;
  width: 100%;
}

.head {
  height: 1.05rem;
  background: url(../images/head_bg.png) no-repeat center center;
  background-size: 100% 100%;
  position: relative;
}
.head h1 {
  color: #fff;
  text-align: center;
  font-size: 0.42rem;
  line-height: 0.75rem;
}
.head h1 img {
  width: 1.5rem;
  display: inline-block;
  vertical-align: middle;
}
.time {
  position: absolute;
  right: 0.15rem;
  top: 0;
  line-height: 0.75rem;
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.26rem;
  padding-right: 0.1rem;
  font-family: electronicFont;
}

.mainbox {
  padding: 0 0.2rem 0rem 0.2rem;
  height: calc(70% - 1.05rem);
}
.mainbox > ul {
  margin-left: -0.1rem;
  margin-right: -0.1rem;
  height: 100%;
}
.mainbox > ul > li {
  float: left;
  padding: 0 0.1rem;
  height: 100%;
  width: 30%;
}
.mainbox > ul > li:nth-child(2) {
  width: 40%;
}

.mainbox2 {
  padding: 0 0.2rem 0rem 0.2rem;
  height: calc(30% - 0.5rem);
}
.mainbox2 > ul {
  margin-left: -0.1rem;
  margin-right: -0.1rem;
  height: 100%;
}
.mainbox2 > ul > li {
  float: left;
  padding: 0 0.1rem;
  height: 100%;
  width: 50%;
}

.boxall {
  border: 1px solid rgba(25, 186, 139, 0.17);
  padding: 0 0.2rem 0.2rem 0.2rem;
  background: rgba(255, 255, 255, 0.04) url(../images/line-1.png);
  background-size: 100% auto;
  position: relative;
  margin-bottom: 0.15rem;
  z-index: 10;
}
.boxall:before,
.boxall:after {
  position: absolute;
  width: 0.1rem;
  height: 0.1rem;
  content: "";
  border-top: 2px solid #02a6b5;
  top: 0;
}
.boxall:before,
.boxfoot:before {
  border-left: 2px solid #02a6b5;
  left: 0;
}
.boxall:after,
.boxfoot:after {
  border-right: 2px solid #02a6b5;
  right: 0;
}
.alltitle {
  font-size: 0.18rem;
  color: #fff;
  line-height: 0.4rem;
  border-bottom: 1px dotted rgba(255, 255, 255, 0.2);
}
.boxnav {
  height: calc(100% - 0.4rem);
}

.boxfoot {
  position: absolute;
  bottom: 0;
  width: 100%;
  left: 0;
}
.boxfoot:before,
.boxfoot:after {
  position: absolute;
  width: 0.1rem;
  height: 0.1rem;
  content: "";
  border-bottom: 2px solid #02a6b5;
  bottom: 0;
}

.barnav {
  position: absolute;
  width: 100%;
  z-index: 100;
}
.bar {
  background: rgba(101, 132, 226, 0.1);
  padding: 0.15rem;
}
.barbox li,
.barbox2 li {
  width: 33.33333%;
  text-align: center;
  position: relative;
}
.barbox:before,
.barbox:after {
  position: absolute;
  width: 0.3rem;
  height: 0.1rem;
  content: "";
}
.barbox:before {
  border-left: 2px solid #02a6b5;
  left: 0;
  border-top: 2px solid #02a6b5;
}
.barbox:after {
  border-right: 2px solid #02a6b5;
  right: 0;
  bottom: 0;
  border-bottom: 2px solid #02a6b5;
}

.barbox li:before {
  position: absolute;
  content: "";
  height: 50%;
  width: 1px;
  background: rgba(255, 255, 255, 0.2);
  right: 0;
  top: 25%;
}

.barbox {
  border: 1px solid rgba(25, 186, 139, 0.17);
  position: relative;
}
.barbox li {
  font-size: 0.5rem;
  color: #ffeb7b;
  padding: 0.05rem 0;
  font-family: Gotham, "Helvetica Neue", Helvetica, Arial, "sans-serif";
  font-weight: bold;
  font-family: electronicFont;
}
.barbox2 li {
  font-size: 0.19rem;
  color: rgba(255, 255, 255, 0.7);
}

.mapbox {
  height: calc(100%);
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}
.map {
  position: relative;
  height: 100%;
  z-index: 9;
  width: 100%;
}
.map4 {
  width: 200%;
  height: 100%;
  position: relative;
  left: -50%;
  top: 4%;
  margin-top: 0.2rem;
  z-index: 5;
}

.map1 {
  width: 6.43rem;
  z-index: 2;
  top: 0.45rem;
  left: 0.66rem;
  animation: myfirst2 15s infinite linear;
}
.map2 {
  width: 5.66rem;
  top: 0.85rem;
  left: 1.03rem;
  z-index: 3;
  opacity: 0.2;
  animation: myfirst 10s infinite linear;
}
.map3 {
  width: 5.18rem;
  top: 1.07rem;
  left: 1.4rem;
  z-index: 1;
  transform: scale(0.8);
  opacity: 0.6;
}
.map1,
.map2,
.map3 {
  position: absolute;
}

.wrap {
  overflow: hidden;
}
.wrap li {
  line-height: 0.42rem;
  height: 0.42rem;
  text-indent: 0.24rem;
  margin-bottom: 0.1rem;
}
.wrap li p {
  border: 1px solid rgba(25, 186, 139, 0.17);
}
.wrap li p {
  display: flex;
  justify-content: space-between;
}
.wrap li p {
  display: flex;
  align-items: center;
  height: 80%;
}
.wrap li p span {
  color: rgba(255, 255, 255, 0.6);
  text-align: center;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  width: 20%;
  font-size: 0.16rem;
}
.wrap li p span:first-child {
  width: 40%;
  text-align: left;
}
.sycm ul {
  padding: 0.16rem 0;
  width: 100%;
}
.sycm li {
  float: left;
  width: 25%;
  text-align: center;
  position: relative;
}
.sycm li:before {
  position: absolute;
  content: "";
  height: 30%;
  width: 1px;
  background: rgba(255, 255, 255, 0.1);
  right: 0;
  top: 15%;
}
.sycm {
  height: 80%;
  display: flex;
  align-items: center;
}
.sycm li:last-child:before,
.sycm2 li:nth-child(3):before {
  width: 0;
}

.sycm li h2 {
  font-size: 0.3rem;
  color: #46b8ff;
  padding-bottom: 0.2rem;
}
.sycm li span {
  font-size: 0.2rem;
  color: #fff;
  opacity: 0.5;
}
.sycm2 {
  height: 90%;
}
.sycm2 li {
  width: 33.3333%;
  padding: 10px 0;
}
.sycm2 li h2 {
  color: #2ad08a;
}

.btbox {
  height: 100%;
}
.btbox li {
  height: 100%;
  float: left;
  width: 25%;
  padding-left: 5%;
}
@keyframes myfirst2 {
  from {
    transform: rotate(0deg) scale(0.8);
  }
  to {
    transform: rotate(359deg) scale(0.8);
  }
}

@keyframes myfirst {
  from {
    transform: rotate(0deg) scale(0.8);
  }
  to {
    transform: rotate(-359deg) scale(0.8);
  }
}

/*Plugin CSS*/
.str_wrap {
  overflow: hidden;
  width: 100%;
  position: relative;
  -moz-user-select: none;
  -khtml-user-select: none;
  user-select: none;
  white-space: nowrap;
}

.str_move {
  white-space: nowrap;
  position: absolute;
  top: 0;
  left: 0;
  cursor: move;
}
.str_move_clone {
  display: inline-block;
  vertical-align: top;
  position: absolute;
  left: 100%;
  top: 0;
}
.str_vertical .str_move_clone {
  left: 0;
  top: 100%;
}
.str_down .str_move_clone {
  left: 0;
  bottom: 100%;
}
.str_vertical .str_move,
.str_down .str_move {
  white-space: normal;
  width: 100%;
}
.str_static .str_move,
.no_drag .str_move,
.noStop .str_move {
  cursor: inherit;
}
.str_wrap img {
  max-width: none !important;
}

.alltitle .pulll_right a {
  color: #fff;
}
.alltitle .pulll_right a span {
  display: inline-block;
  background: #58c485;
  width: 0.16rem;
  height: 0.16rem;
  vertical-align: middle;
  border-radius: 50%;
  margin: 0 0.05rem 0 0.1rem;
}
.alltitle .pulll_right a:nth-child(2) span {
  background: #ea7231;
}
.alltitle .sebtn a {
  opacity: 0.6;
  display: inline-block;
  padding: 0 0.1rem;
}
.alltitle .sebtn a.active {
  opacity: 1;
}
</style>