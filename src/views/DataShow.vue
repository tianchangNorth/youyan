<template>
  <div>
    <div class="mainbox"></div>
  </div>
</template>

<script>
import Echarts5 from "@/components/Echarts5.vue";
import { mapState } from "vuex";
export default {
  name: "DataShow",
  components: {
    Echarts5,
  },
};
</script>

<style scoped>
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
  background: #000d4a url(../assets/bg.jpg) center center;
  background-size: cover;
  color: #666;
  font-size: 0.1rem;
}
li {
  list-style-type: none;
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
</style>