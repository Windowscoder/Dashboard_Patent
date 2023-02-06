<template>
  <div class="pie">
    <div class="col">
      <h3>专利</h3>
      <ve-pie
        :data="chartData1"
        :settings="chartSettings"
        :extend="chartExtend"
        :legend-visible="false"
        :colors="colors_patent"
      ></ve-pie>
    </div>
    <div class="col">
      <h3>引用</h3>
      <ve-pie
        :data="chartData2"
        :settings="chartSettings"
        :extend="chartExtend"
        :legend-visible="false"
        :colors="colors_citation"
      ></ve-pie>
    </div>
    <div class="col">
      <h3>被引用</h3>
      <ve-pie
        :data="chartData3"
        :settings="chartSettings"
        :extend="chartExtend"
        :legend-visible="false"
        :colors="colors_cited"
      ></ve-pie>
    </div>
  </div>
</template>

<script>
import VePie from "v-charts/lib/pie.common";
export default {
  components: { VePie },
  data() {
    this.chartExtend = {
      legend: {
        type: "scroll",
        itemWidth: 8,
        itemHeight: 8,
        top: "43%",
        pageIconSize: 5,
        textStyle: {
          color: "rgba(255, 255, 255, 0.7)",
          fontSize: 10,
        },
        pageTextStyle: {
          color: "rgba(255, 255, 255, 0.7)",
          fontSize: 10,
        },
      },
    };
    this.chartSettings = {
      selectedMode: "single",
      label: { show: false },
      offsetY: "23%",
      radius: 70,
    };
    this.colors_patent = [
      "#5ab1ef",
      "#2f4554",
      "#fa6e86",
      "#ffb980",
      "#0067a6",
      "#c4b4e4",
      "#ca8622",
      "#bda29a",
      "#6e7074",
      "#19d4ae",
      "#546570",
      "#c4ccd3",
    ];
    this.colors_citation = [
      "#2f4554",
      "#5ab1ef",
      "#fa6e86",
      "#546570",
      "#6e7074",
      "#0067a6",
      "#ffb980",
      "#c4b4e4",
      "#c4ccd3",
      "#19d4ae",
    ];
    this.colors_cited = [
      "#2f4554",
      "#5ab1ef",
      "#fa6e86",
      "#546570",
      "#ffb980",
      "#0067a6",
      "#c4ccd3",
      "#ca8622",
      "#bda29a",
      "#c4b4e4",
      "#6e7074",
      "#19d4ae",
    ];
    return {
      chartData1: {
        columns: ["CPC", "percent"],
        rows: [
          { CPC: "B30B", percent: 394 },
          { CPC: "B22F", percent: 383 },
          { CPC: "C04B", percent: 182 },
          { CPC: "B28B", percent: 145 },
          { CPC: "C22C", percent: 71 },
          { CPC: "B23K", percent: 49 },
          { CPC: "Y02P", percent: 40 },
          { CPC: "C23C", percent: 37 },
          { CPC: "Y10S", percent: 36 },
          { CPC: "OTHER", percent: 757 },
        ],
      },
      chartData2: {
        columns: ["CPC", "percent"],
        rows: [
          { CPC: "B22F", percent: 1937 },
          { CPC: "B30B", percent: 1360 },
          { CPC: "C04B", percent: 885 },
          { CPC: "Y10T", percent: 759 },
          { CPC: "Y10S", percent: 622 },
          { CPC: "C22C", percent: 464 },
          { CPC: "B28B", percent: 443 },
          { CPC: "B23K", percent: 388 },
          { CPC: "B29C", percent: 364 },
          { CPC: "OTHER", percent: 5864 },
        ],
      },
      chartData3: {
        columns: ["CPC", "percent"],
        rows: [
          { CPC: "B22F", percent: 2191 },
          { CPC: "B30B", percent: 1286 },
          { CPC: "C04B", percent: 1123 },
          { CPC: "Y10T", percent: 592 },
          { CPC: "B28B", percent: 570 },
          { CPC: "C22C", percent: 537 },
          { CPC: "B29C", percent: 419 },
          { CPC: "Y02P", percent: 340 },
          { CPC: "C23C", percent: 336 },
          { CPC: "B23K", percent: 320 },
          { CPC: "Y10S", percent: 291 },
          { CPC: "OTHER", percent: 6570 },
        ],
      },
    };
  },
};
</script>

<style scoped>
.pie {
  display: flex;
  height: 100%;
  margin: 0 0;
}
.col {
  width: 33%;
  margin: 10px;
}
.col h3 {
  margin: 5px 0;
  color: rgba(255, 255, 255, 0.7);
  font-size: small;
}
</style>