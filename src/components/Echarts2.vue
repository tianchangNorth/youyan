<template>
  <div ref="online" style="width: 385px; height: 250px"></div>
</template>

<script>
import * as echarts from "echarts";
export default {
  name: "Echarts2",
  mounted() {
    var mychart = echarts.init(this.$refs.online); //初始化
    var option;
    option = {
      tooltip: {
        trigger: "item",
      },
      legend: {
        orient: "vertical",
        top: "10%",
        right: "5%",
        itemWidth: 15,
        itemHeight: 10,
        itemGap: 15,
        textStyle: {
          color: "rgba(255, 255, 255, 255)",
        },
      },
      series: [
        {
          name: "Access From",
          type: "pie",
          radius: "40%",
          center: ["35%", "40%"],
          label: {
            textStyle: {
              color: "rgba(255, 255, 255, 255)",
            },
          },
          data: [
            { value: 1, name: "风机异常" },
            { value: 32, name: "风机正常" },
            { value: 1, name: "净化器异常" },
            { value: 32, name: "净化器正常" },
            { value: 2, name: "传感器异常" },
            { value: 32, name: "传感器正常" },
          ],
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: "rgba(0, 0, 0, 0.5)",
            },
          },
        },
      ],
    };

    mychart.setOption(option); //设置配置项操作
  },
};
</script>

<style>
</style>