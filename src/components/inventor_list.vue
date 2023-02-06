<template>
    <div class= "cited">
    <el-table
        :header-cell-style="{ color: 'rgba(255, 255, 255, 0.7)' }"
        :cell-style="rowClass"
        empty-text=" "
      >
        <el-table-column label="排名" />
        <el-table-column label="发明者" />
        <el-table-column label="专利数"/>
      </el-table>
    <vue-seamless-scroll
      :data="tableData"
      class="scorll"
      :class-option="classOption"
    >
      <el-table
        class="table"
        style="font-size: 16px"
        :data="tableData"
        :header-cell-style="{ color: 'rgba(255, 255, 255, 0.7)' }"
        :cell-style="{ textAlign: 'center',padding:'5px'}"
        :show-header='false'
      >
        <el-table-column prop="rank" />
        <el-table-column prop="name" />
        <el-table-column prop="num"/>
      </el-table>
    </vue-seamless-scroll>
    </div>
</template>

<script>
    import vueSeamlessScroll from 'vue-seamless-scroll'
    import { Table, TableColumn } from "element-ui";
    export default {
        components: { vueSeamlessScroll, elTable: Table, elTableColumn: TableColumn  },
    data(){
        return{
      tableData: [
        {
          rank: 1,
          name: "王宇",
          num: "21",
        },
        {
          rank: 2,
          name: "朱勉学",
          num: "18",
        },
        {
          rank: 3,
          name: "吴庆斌",
          num: "17",
        },
        {
          rank: 4,
          name: "黄铁军",
          num: "12",
        },
        {
          rank: 5,
          name: "戴永茂",
          num: "10",
        },
        {
          rank: 6,
          name: "Carlo Antonio Camorani",
          num: "9",
        },
        {
          rank: 7,
          name: "陈烈",
          num: "8",
        },
        {
          rank: 8,
          name: "魏荣亮",
          num: "7",
        },
        {
          rank: 9,
          name: "董中天",
          num: "7",
        },
        {
          rank: 10,
          name: "孙贵忠",
          num: "7",
        },
      ],
      classOption: {
        limitMoveNum: 5,
         hover :true,
         step: 0.2
      },
    };
        }
    }
</script>
<style scoped>


.table{
  color: #ffeb7b;
}

.scorll{
    height: 180px;
    width: "100%";
    margin: 10px auto;
    overflow: hidden;
}
</style>