<template>
  <div class="citation">
    <div class="col_pie">
      <ve-radar :data="chartData_Citation" width="100%" height="100%"   :extend="chartExtend_citation" :settings="chartSettings"></ve-radar>
     </div>
    <div class="col_pie">
      <ve-radar :data="chartData_CitedBy"  width="100%" height="100%" :extend="chartExtend_cited" :settings="chartSettings"></ve-radar>
    </div>
  </div>
</template>

<script>
import VeRadar from "v-charts/lib/radar.common";
export default {
  components: { VeRadar },
  data() {
    this.chartExtend_citation = {
      legend: {
        orient: 'vertical',
        right: "80%", 
        top:"20%",
        textStyle: {
          color: "rgba(255, 255, 255, 0.7)",
        },
      },
    };
    this.chartExtend_cited = {
      legend: {
        orient: 'vertical',
        right: "5%",
        top:"20%",
        textStyle: {
          color: "rgba(255, 255, 255, 0.7)",
        },
      },
    };
    return {
      Country: "Top 6",
      chartData_Citation: {
        columns: ["Country","CN","US","EP","JP","DE","GB"],
        rows: [
          {"Country":"CN","CN":1916,"US":253,"EP":49,"JP":290,"DE":45,"GB":32},
          {"Country":"US","CN":19,"US":1154,"EP":31,"JP":138,"DE":54,"GB":39},
          {"Country":"EP","CN":14,"US":271,"EP":34,"JP":84,"DE":77,"GB":35},
          {"Country":"JP","CN":10,"US":90,"EP":2101,"JP":252,"DE":26,"GB":10},
          {"Country":"DE","CN":1,"US":182,"EP":28,"JP":44,"DE":143,"GB":30},
          {"Country":"GB","CN":1,"US":71,"EP":2,"JP":22,"DE":15,"GB":22},
        ],
      },
      chartData_CitedBy: {
        columns: ["Country","CN","US","EP","JP","DE","GB"],
        rows: [
          {"Country":"CN","CN":1607,"US":35,"EP":8,"JP":16,"DE":1,"GB":4},
          {"Country":"US","CN":120,"US":1295,"EP":105,"JP":63,"DE":71,"GB":34},
          {"Country":"EP","CN":69,"US":209,"EP":48,"JP":92,"DE":56,"GB":23},
          {"Country":"JP","CN":95,"US":94,"EP":21,"JP":142,"DE":7,"GB":11},
          {"Country":"DE","CN":83,"US":260,"EP":63,"JP":60,"DE":181,"GB":27},
          {"Country":"GB","CN":14,"US":47,"EP":21,"JP":25,"DE":16,"GB":20},
        ],
      },
    };
  },
};
</script>

<style>
.citation {
  display: flex;
  height: 25%;
  background: rgba(101, 132, 226, 0.1);
  padding: 0.1875rem;
  margin: 2% 0;
}
.col_text {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 5%;
  height: 15%;
  margin: 10px;
}
.col_text h3 {
  color: #ffeb7b;
  margin: 5px auto;
}
.col_pie {
  padding-top: 20px;
  display: flex;
  align-items: center;
  width: 50%;
}
</style>