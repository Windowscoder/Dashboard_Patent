<template>
  <div class="worldMap"></div>
</template>

<script>
import "echarts/map/js/world.js";

export default {
  name: "worldMap",
  data() {
    return {};
  },
  methods: {
    setChart() {
      var geoCoordMap = {
        CN: [116.46, 39.92],
        US: [-95.712891, 37.09024],
        JP: [138.252924, 36.204824],
        EP: [4.469936, 50.503887],
        DE: [10.451526, 51.165691],
        GB: [-3.435973, 55.378051],
        RU: [105.318756, 61.52401],
        KR: [127.766922, 35.907757],
        FR: [2.213749, 46.227638],
        SE: [18.643501, 60.12816100000001],
      };
      var MapData = [
        [{ name: "CN" }, { name: "CN", value: 1916 }],
        [{ name: "CN" }, { name: "US", value: 253 }],
        [{ name: "CN" }, { name: "JP", value: 290 }],
        [{ name: "CN" }, { name: "EP", value: 49 }],
        [{ name: "CN" }, { name: "DE", value: 45 }],
        [{ name: "CN" }, { name: "GB", value: 32 }],
        [{ name: "CN" }, { name: "RU", value: 24 }],
        [{ name: "CN" }, { name: "KR", value: 16 }],
        [{ name: "CN" }, { name: "FR", value: 11 }],
        [{ name: "CN" }, { name: "SE", value: 6 }],
        
      ];
      //加载二元关系
      var convertData = function (data) {
        var res = [];
        for (var i = 0; i < data.length; i++) {
          var dataItem = data[i];
          var fromCoord = geoCoordMap[dataItem[0].name];
          var toCoord = geoCoordMap[dataItem[1].name];
          if (fromCoord && toCoord) {
            res.push({
              fromName: dataItem[0].name,
              toName: dataItem[1].name,
              coords: [fromCoord, toCoord],
            });
          }
        }
        return res;
      };

      let option = {
        tooltip: {
          trigger: "item",
          textStyle: {
            color: "#6dd0e3",
            fontSize: 10,
          },
          //卡片信息
          formatter: function (data) {
            if (data.componentSubType === "effectScatter") {
              return data.data.name + " : " + data.data.value[2] + "篇";
            } else {
              console.log(data);
            }
          },
        },

        xAxis: {
          axisLine: {
            show: false,
          },
        },
        yAxis: {
          axisLine: {
            show: false,
          },
        },
        geo: {
          map: "world",
          zoom: 1.1,
          aspectScale: 1,
          top: "14%",
          left: "8%",
          right: "8%",
          bottom: "15%",
          label: {
            emphasis: {
              show: false,
            },
          },
          //地图内部
          itemStyle: {
            normal: {
              areaColor: "rgb(40,113,234)",
              borderColor: "#111",
            },
            emphasis: {
              areaColor: "#2a333d",
            },
          },
        },
        series: [
          {
            type: "lines",
            coordinateSystem: "geo",
            lineStyle: {
              color: "#f1e816",
            },
            data: convertData(MapData),
          },
          {
            type: "effectScatter",
            coordinateSystem: "geo",
            data: MapData.map(function (dataItem) {
              return {
                name: dataItem[0].name + "--引用--" + dataItem[1].name,
                value: geoCoordMap[dataItem[1].name].concat([
                  dataItem[1].value,
                ]),
              };
            }),
            symbolSize: function (val) {
              if(val[2]>500){
                return 50
              }
              return val[2] / 10;
            },
            label: {
              normal: {
                show: false,
              },
              emphasis: {
                show: false,
              },
            },
            itemStyle: {
              color: "#ffeb7b",
              emphasis: {
                borderColor: "#fff",
                borderWidth: 1,
              },
            },
          },
        ],
      };
      let myChart = this.$echarts(this.$el);
      myChart.clear();
      myChart.resize();
      myChart.setOption(option);
    },
  },
  mounted() {
    this.setChart();
  },
};
</script>

<style>
.worldMap {
  height: 40%;
  background: rgba(101, 132, 226, 0.1);
  padding: 0.1875rem;
  margin: 2% 0;
}
</style>