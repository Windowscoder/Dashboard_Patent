<template>
  <ve-line
    class="line"
    :data="line"
    height="95%"
    :extend="chartExtend"
    :colors="colors"
  ></ve-line>
</template>

<script>
import VeLine from "v-charts/lib/line.common";
export default {
  components: {VeLine},
  data() {
    this.chartExtend = {
      "xAxis.0.axisLabel.color": "rgba(255, 255, 255, 0.7)", //x轴文本颜色
      "yAxis.0.axisLabel.color": "rgba(255, 255, 255, 0.7)", //y轴文本改变颜色
      legend: {
        textStyle: {
          color: "rgba(255, 255, 255, 0.7)",
        },
      },
    };
    // this.colors = []
    return {
      line: {
        columns: ["date", "Total", "CN", "US","DE","JP"],
        rows: [
          { date: "1960s", Total: "42", CN: "0", US: "15", DE:"16", JP:"0" },
          { date: "1970s", Total: "168", CN: "0", US: "22", DE:"69", JP:"2" },
          { date: "1980s", Total: "243", CN: "1", US: "38", DE:"26", JP:"66" },
          { date: "1990s", Total: "179", CN: "8", US: "25", DE:"23", JP:"70" },
          { date: "2000s", Total: "221", CN: "95", US: "23", DE:"20", JP:"26" },
          { date: "2010s", Total: "867", CN: "719", US: "21", DE:"10", JP:"17" },
          { date: "2020s", Total: "407", CN: "382", US: "23", DE:"1", JP:"0" },
        ],
      },
    };
  },
};
</script>