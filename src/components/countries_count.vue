<template>
  <ve-histogram
    class="histogram"
    :data="histogram"
    height="95%"
    :extend="chartExtend"
  ></ve-histogram>
</template>

<script>
import VeHistogram from "v-charts/lib/histogram.common";
export default {
  components: { VeHistogram},
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
    
    return {
      histogram: {
        columns: ["nation", "专利", "引用", "被引用"],
        rows: [
          { nation: "CN", 专利: "1290", 引用: "2715", 被引用: "1715" },
          { nation: "US", 专利: "150", 引用: "1537", 被引用: "1899" },
          { nation: "DE", 专利: "173", 引用: "544", 被引用: "878" },
          { nation: "EP", 专利: "64", 引用: "618", 被引用: "627" },
          { nation: "JP", 专利: "181", 引用: "472", 被引用: "484" },
          { nation: "RU(SU)", 专利: "64", 引用: "119", 被引用: "104" },
          { nation: "KR", 专利: "44", 引用: "252", 被引用: "120" },
          { nation: "GB", 专利: "40", 引用: "169", 被引用: "179" },
        ],
      },
    };
  },
};
</script>