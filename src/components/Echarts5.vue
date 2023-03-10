<template>
  <div class="map4" ref="map_1"></div>
</template>

<script>
import "../js/map.js";
import * as echarts from "echarts";
export default {
  name: "Echarts5",
  mounted() {
    var option;
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(this.$refs.map_1);
    var data = [
      { name: "华南区", value: 290 }, //广东 value 可控制圆点大小
      { name: "华东区", value: 200 }, //江苏
      { name: "华西区", value: 180 }, //陕西
      { name: "华北区", value: 260 }, //北京
    ];
    var toolTipData = [
      {
        name: "华南区",
        value: [
          { name: "公司数量", value: 195 },
          { name: "设备数量", value: 14 },
          { name: "人员数量", value: 754 },
        ],
      },
      {
        name: "华东区",
        value: [
          { name: "公司数量", value: 75 },
          { name: "设备数量", value: 32 },
          { name: "人员数量", value: 23 },
        ],
      },
      {
        name: "华西区",
        value: [
          { name: "公司数量", value: 21 },
          { name: "设备数量", value: 65 },
          { name: "人员数量", value: 21 },
        ],
      },
      {
        name: "华北区",
        value: [
          { name: "公司数量", value: 1533 },
          { name: "设备数量", value: 14 },
          { name: "人员数量", value: 82 },
        ],
      },
    ];
    var geoCoordMap = {
      华南区: [113.263802, 23.138215],
      华东区: [118.790825, 32.061636],
      华西区: [108.954065, 34.3457],
      华北区: [116.383491, 39.921771],
    };
    var convertData = function (data) {
      var res = [];
      for (var i = 0; i < data.length; i++) {
        var geoCoord = geoCoordMap[data[i].name];
        if (geoCoord) {
          res.push({
            name: data[i].name,
            value: geoCoord.concat(data[i].value),
          });
        }
      }
      return res;
    };

    option = {
      tooltip: {
        trigger: "item",
        formatter: function (params) {
          if (typeof params.value[2] == "undefined") {
            var toolTiphtml = "";

            for (var i = 0; i < toolTipData.length; i++) {
              if (params.name == toolTipData[i].name) {
                toolTiphtml += toolTipData[i].name + ":<br>";

                for (var j = 0; j < toolTipData[i].value.length; j++) {
                  toolTiphtml +=
                    toolTipData[i].value[j].name +
                    ":" +
                    toolTipData[i].value[j].value +
                    "<br>";
                }
              }
            }

            console.log(toolTiphtml);
            return toolTiphtml;
          } else {
            var toolTiphtml = "";

            for (var i = 0; i < toolTipData.length; i++) {
              if (params.name == toolTipData[i].name) {
                toolTiphtml += toolTipData[i].name + ":<br>";

                for (var j = 0; j < toolTipData[i].value.length; j++) {
                  toolTiphtml +=
                    toolTipData[i].value[j].name +
                    ":" +
                    toolTipData[i].value[j].value +
                    "<br>";
                }
              }
            }

            console.log(toolTiphtml);

            return toolTiphtml;
          }
        },
      },

      geo: {
        map: "china",
        label: {
          emphasis: {
            show: false,
          },
        },
        roam: true,
        itemStyle: {
          normal: {
            areaColor: "#4c60ff",
            borderColor: "#002097",
          },
          emphasis: {
            areaColor: "#293fff",
          },
        },
      },
      series: [
        {
          name: "",
          type: "effectScatter",

          showEffectOn: "render",
          rippleEffect: {
            brushType: "stroke",
          },
          coordinateSystem: "geo",
          data: convertData(data),
          symbolSize: function (val) {
            return val[2] / 15;
          },
          label: {
            normal: {
              formatter: "{b}",
              position: "right",
              show: true,
            },
            emphasis: {
              show: true,
            },
          },
          itemStyle: {
            normal: {
              color: "#ffeb7b",
            },
          },
        },
      ],
    };

    myChart.setOption(option);
    window.addEventListener("resize", function () {
      myChart.resize();
    });
  },
};
</script>

<style>
.map4 {
  width: 200%;
  height: 100%;
  position: relative;
  left: -50%;
  top: 4%;
  margin-top: 0.2rem;
  z-index: 5;
}
</style>