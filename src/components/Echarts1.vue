<template>
  <span ref="number" style="width: 250px; height: 200px; float: left"></span>
</template>

<script>
import * as echarts from "echarts";
export default {
  name: "Echarts1",
  mounted() {
    var myChart = echarts.init(this.$refs.number);
    var option;

    option = {
      tooltip: {
        trigger: "item",
      },
      legend: {
        orient: "vertical",
        top: "0%",
        right: "0%",
        itemWidth: 10,
        itemHeight: 10,
        textStyle: {
          fontSize: 12,
          color: "white",
        },
      },
      series: [
        {
          name: "Access From",
          type: "pie",
          radius: ["40%", "70%"],
          center: ["40%", "50%"],
          avoidLabelOverlap: false,
          label: {
            show: false,
            position: "center",
          },
          emphasis: {
            label: {
              show: true,
              fontSize: 40,
              fontWeight: "bold",
            },
          },
          labelLine: {
            show: false,
          },
          data: [
            { value: 1, name: "云南" },
            { value: 1, name: "四川" },
            { value: 2, name: "广东" },
            { value: 1, name: "新疆" },
            { value: 2, name: "河南" },
            { value: 1, name: "浙江" },
            { value: 1, name: "湖北" },
            { value: 1, name: "黑龙江" },
          ],
        },
      ],
    };
    option && myChart.setOption(option);
  },
};
</script>

<style>
</style>