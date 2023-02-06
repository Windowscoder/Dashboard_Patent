<template>
    <div class="no">
        <div class="no-hd">
            <ul>
              <li>{{ num1 }}</li>
              <li>{{ num2 }}</li>
              <li>{{ num3 }}</li>
            </ul>
          </div>
          <div class="no-bd">
            <ul>
              <li>专利总数</li>
              <li>引用总数</li>
              <li>被引用总数</li>
            </ul>
          </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
      num1: 2149,
      num2: 7214,
      num3: 6645,
        }
}
}
</script>

<style scoped>
*{ padding:0; }
.no {
  background: rgba(101, 132, 226, 0.1);
  height: 15%;
}
.no .no-hd {
  position: relative;
  border: 1px solid rgba(25, 186, 139, 0.17);
}
.no .no-hd::before {
  content: "";
  position: absolute;
  width: 30px;
  height: 10px;
  border-top: 2px solid #02a6b5;
  border-left: 2px solid #02a6b5;
  top: 0;
  left: 0;
}
.no .no-hd::after {
  content: "";
  position: absolute;
  width: 30px;
  height: 10px;
  border-bottom: 2px solid #02a6b5;
  border-right: 2px solid #02a6b5;
  right: 0;
  bottom: 0;
}
.no .no-hd ul {
  display: flex;
}
.no .no-hd ul li {
  position: relative;
  flex: 1;
  text-align: center;
  height: 3rem;
  line-height: 3rem;
  font-size: 50px;
  color: #ffeb7b;
  padding: 0.05rem 0;
  font-family: electronicFont;
  font-weight: bold;
}
.no .no-hd ul li:nth-child(1)::after {
  content: "";
  position: absolute;
  height: 50%;
  width: 1px;
  background: rgba(255, 255, 255, 0.2);
  right: 0;
  top: 25%;
}
.no .no-hd ul li:nth-child(2)::after {
  content: "";
  position: absolute;
  height: 50%;
  width: 1px;
  background: rgba(255, 255, 255, 0.2);
  right: 0;
  top: 25%;
}
.no .no-bd ul {
  display: flex;
  height: 15%;
}
.no .no-bd ul li {
  flex: 1;
  height: 2rem;
  line-height: 2rem;
  text-align: center;
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.7);
}
</style>