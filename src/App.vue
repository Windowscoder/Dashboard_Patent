<template>
<Adapt>
  <div>
    <div class="background">
      <img :src="image" width="100%" height="100%"  alt="" />
    </div>
    <div class="content">
      <h1 class="title">等静压专利</h1>
    </div>
    <section class="mainbox">
      <div class="column">
        <div class="panel bar">
          <h3>专利总量</h3>
          <Count></Count>
          <div class="panel-footer"></div>
        </div>
        <div class="panel bar">
          <h3>专利时序</h3>
          <Time></Time>
          <div class="panel-footer"></div>
        </div>
        <div class="panel table">
          <h3>Top Cited</h3>
          <CitedList></CitedList>
          <div class="panel-footer"></div>
        </div>
      </div>
      <div class="column">
        <CenterNum></CenterNum>
        <h2>国际引用</h2>
        <Map></Map>
        <div class="title_citation"><h3>Top 6 Citation</h3></div>
        <div class="title_cited"><h3>Top 6 Cited By</h3></div>
        <Citation></Citation>
      </div>
      <div class="column">
        <div class="panel bar">
          <h3 class="cpch3">CPC统计</h3>
          <CPC></CPC>
          <div class="panel-footer"></div>
        </div>
        <div class="panel bar" align="center">
          <h3>专利词云</h3>
          <img :src="svg" width="80%" height="75%"  alt="" />
          <div class="panel-footer"></div>
        </div>
        <div class="panel bar">
          <h3>Top Inventor</h3>
          <InventorList></InventorList>
          <div class="panel-footer"></div>
        </div>
      </div>
    </section>
  </div>
</Adapt>
</template>

<script>

import CenterNum from "./components/center_number"
import CitedList from './components/cited_list'
import InventorList from './components/inventor_list'
import Count from './components/countries_count'
import Map from './components/world_map'
import Time from './components/patent_time'
import CPC from './components/cpc_count'
import Citation from './components/citation_countries'
import Adapt from "./components/MyScreen"
export default {
  components: { CitedList,CenterNum,InventorList,Count,Map,Time,CPC,Citation,Adapt},
  data() {
    return {
      image: require("./assets/bg.png"),
      svg: require("./assets/wordcloud.svg")
  }
}
}
</script>
<style>
li {
  list-style: none;
}
@font-face {
  font-family: electronicFont;
  src: url(./font/DS-DIGIT.TTF);
}
.background {
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: 0;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}
.content {
  width: 100%;
  height: 10%;
  position: absolute;
  z-index: 1;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: 0 auto;
}
.content h1 {
  text-align: center;
  color: #fff;
  font-family: "Arial";
}
.mainbox {
  width: 100%;
  height: 90%;
  position: absolute;
  display: flex;
  z-index: 1;
  bottom: 0;
  left: 0;
  right: 0;
  margin: 0 auto;
}
.mainbox .column {
  flex: 3;
}
.mainbox .column:nth-child(2) {
  flex: 4;
}
.panel {
  position: relative;
  height: 30%;
  border: 1px solid rgba(25, 186, 139, 0.17);
  background: rgba(255, 255, 255, 0.04) url(./assets/line.png);
  margin: 3%;
}
.panel h3 {
  text-align: center;
  color: #fff;
  font-family: "Arial";
}
.panel .cpch3 {
  text-align: center;
  color: #fff;
  margin-block-end: 0%;
  font-family: "Arial";
}
.column h2 {
  text-align: center;
  color: rgba(255, 255, 255, 0.7);
  font-family: "Arial";
}
.panel::before {
  position: absolute;
  top: 0;
  left: 0;
  content: "r";
  width: 10px;
  height: 10px;
  border-top: 2px solid #02a6b5;
  border-left: 2px solid #02a6b5;
}
.panel::after {
  position: absolute;
  top: 0;
  right: 0;
  content: "q";
  width: 10px;
  height: 10px;
  border-top: 2px solid #02a6b5;
  border-right: 2px solid #02a6b5;
}
.panel::before {
  position: absolute;
  top: 0;
  left: 0;
  content: "";
  width: 10px;
  height: 10px;
  border-top: 2px solid #02a6b5;
  border-left: 2px solid #02a6b5;
}
.panel::after {
  position: absolute;
  top: 0;
  right: 0;
  content: "";
  width: 10px;
  height: 10px;
  border-top: 2px solid #02a6b5;
  border-right: 2px solid #02a6b5;
}
.panel .panel-footer {
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
}
.panel .panel-footer::before {
  position: absolute;
  bottom: 0;
  left: 0;
  content: "";
  width: 10px;
  height: 10px;
  border-bottom: 2px solid #02a6b5;
  border-left: 2px solid #02a6b5;
}
.panel .panel-footer::after {
  position: absolute;
  bottom: 0;
  right: 0;
  content: "";
  width: 10px;
  height: 10px;
  border-bottom: 2px solid #02a6b5;
  border-right: 2px solid #02a6b5;
}
.title_citation{
  height:4%;
  width:50%;
  float: left;
  text-align: center;
  color:rgba(255, 255, 255, 0.7);
}
.title_citation h3{
  margin: 0 auto;
}
.title_cited{
  width:50%;
  height:4%;
  float: right;
  text-align: center;
  color:rgba(255, 255, 255, 0.7);
}
.title_cited h3{
  margin: 0 auto;
}

</style>
