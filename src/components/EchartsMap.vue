<template>
  <div ref="map" style="height: 550px; width: 1000px"></div>
</template>

<script>
import * as echarts from "echarts";
import "../js/map.js";
export default {
  name: "EchartsMap",
  mounted() {
    var myChart = echarts.init(this.$refs.map);
    var map = [
      { area: "河南", cnt: 2 },
      { area: "湖北", cnt: 1 },
      { area: "四川", cnt: 1 },
      { area: "广东", cnt: 2 },
      { area: "新疆", cnt: 1 },
      { area: "浙江", cnt: 1 },
      { area: "黑龙江", cnt: 1 },
      { area: "云南", cnt: 1 },
    ];
    var option = {
      tooltip: {
        trigger: "item",
      },
      legend: {
        orient: "vertical",
        x: "left",
        y: "bottom",
        data: ["已安装设备"],
        textStyle: {
          color: "#ccc",
        },
      },
      visualMap: {
        min: 0,
        max: 2500,
        left: "right",
        top: "bottom",
        text: ["高", "低"], // 文本，默认为数值文本
        calculable: true,
        //		color: ['#26cfe4', '#f2b600', '#ec5845'],
        textStyle: {
          color: "#fff",
        },
      },
      series: [
        {
          name: "已安装设备",
          type: "map",
          aspectScale: 0.75,
          zoom: 1.2,
          mapType: "china",
          roam: false,
          label: {
            normal: {
              show: true, //显示省份标签
              textStyle: { color: "#c71585" }, //省份标签字体颜色
            },
            emphasis: {
              //对应的鼠标悬浮效果
              show: true,
              textStyle: { color: "#800080" },
            },
          },
          itemStyle: {
            normal: {
              borderWidth: 0.5, //区域边框宽度
              borderColor: "#009fe8", //区域边框颜色
              areaColor: "#ffffff", //区域颜色
            },
            emphasis: {
              borderWidth: 0.5,
              borderColor: "#4b0082",
              areaColor: "#ffdead",
            },
          },
          data: (function () {
            var series = [];
            for (var i = 0; i < map.length; i++) {
              var item = {
                name: map[i].area,
                value: map[i].cnt,
              };
              series.push(item);
            }
            return series;
          })(),
        },
      ],
    };

    myChart.setOption(option);

    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
    myChart.on("click", function (params) {
      //点击事件
      if (params.componentType === "series") {
      }
    });
  },
};
</script>

<style>
</style>