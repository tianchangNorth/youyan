<template>
  <table>
    <tr>
      <th v-for="(item, index) in cityHeaders" :key="index">
        {{ item.categories }}
      </th>
    </tr>
    <tr
      v-for="(item, index) in tableData"
      :key="index"
      @click="gotoNewPer(item)"
    >
      <td>{{ item.设备ID }}</td>
      <td>{{ item.风机状态 }}</td>
      <td>{{ item.净化器状态 }}</td>
      <td>{{ item.传感器状态 }}</td>
      <td>{{ item.油烟浓度 }}</td>
      <td>{{ item.日期 }}</td>
    </tr>
  </table>
</template>

<script>
import axios from "axios";
export default {
  name: "TableList",
  data() {
    return {
      tableData: [],
      cityHeaders: [
        {
          categories: "设备ID",
        },
        {
          categories: "风机状态",
        },
        {
          categories: "净化器状态",
        },
        {
          categories: "传感器状态",
        },
        {
          categories: "油烟浓度",
        },
        {
          categories: "日期",
        },
      ],
    };
  },
  mounted() {
    setInterval(() => {
      this.getTableData();
    }, 1000);
  },
  methods: {
    getTableData() {
      var this_ = this;
      axios({
        method: "get",
        url: "http://127.0.0.1/DeviceDetails/MonitoringList",
        data: {},
      })
        .then(function (res) {
          this_.tableData = res.data;
        })
        .catch(function (err) {});
    },
  },
};
</script>

<style scoped>
table {
  width: 950px;
  height: 180px;
  color: white;
  margin-left: 50px;
  cursor: pointer;
}
tr:hover {
  background-color: skyblue;
}
table,
td,
th {
  border: 1px solid #0e4ae0;
  border-collapse: collapse;
  text-align: center;
}
th {
  font-size: 14px;
}
</style>