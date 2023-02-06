<template>
    <div class= "cited">
    <el-table
        :header-cell-style="{ color: 'rgba(255, 255, 255, 0.7)' }"
        :cell-style="rowClass"
        empty-text=" "
      >
        <el-table-column label="排名" />
        <el-table-column label="ID" />
        <el-table-column label="引用数"/>
        <el-table-column label="下载"/>
      </el-table>
    <vue-seamless-scroll
      :data="tableData"
      class="scorll"
      :class-option="classOption"
    >
      <el-table
        class="table"
        :data="tableData"
        :header-cell-style="{ color: 'rgba(255, 255, 255, 0.7)' }"
        :cell-style="{ textAlign: 'center',padding:'5px'}"
        style="font-size: 16px"
        :show-header='false'
      >
        <el-table-column prop="rank" />
        <el-table-column prop="id" />
        <el-table-column prop="cited"/>
        <el-table-column prop="download">
          <template slot-scope="tableData">
            <a :href="tableData.row.url" target="_blank" style="color: #ffeb7b">
              LINK
            </a>
          </template>
        </el-table-column>
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
          id: "US-5505984-A",
          cited: "69",
          information: "LINK",
          url: "https://patentimages.storage.googleapis.com/ea/d2/35/a7f9034dae4ce2/US5505984.pdf",
        },
       {
          rank: 2,
          id: "US-5013696-A",
          cited: "58",
         information: "download",
          url: "https://patentimages.storage.googleapis.com/f7/39/c9/a4ec7222a4f958/US5013696.pdf",
        },
       {
          rank: 3,
          id: "DE-4310896-C1",
          cited: "51",
          information: "download",
          url: "https://patents.google.com/patent/DE4310896C1/en",
        },
       {
          rank: 4,
          id: "US-4921666-A",
          cited: "51",
          information: "download",
          url: "https://patentimages.storage.googleapis.com/4f/24/e7/0563112b188dc4/US4921666.pdf",
        },
       {
          rank: 5,
          id: "US-3455682-A",
          cited: "48",
          information: "download",
          url: "https://patentimages.storage.googleapis.com/62/2b/c2/51cf81a877e3d7/US3455682.pdf",
        },
       {
          rank: 6,
          id: "US-4620839-A",
          cited: "47",
          information: "download",
          url: "https://patentimages.storage.googleapis.com/b9/fe/50/8a00189ef6e5aa/US4620839.pdf",
        },
       {
          rank: 7,
          id: "US-5096518-A",
          cited: "46",
          information: "download",
          url: "https://patentimages.storage.googleapis.com/3b/c4/44/6391c6cdc22064/US5096518.pdf",
        },
        {
          rank: 8,
          id: "US-RE28301-E",
          cited: "44",
          information: "download",
          url: "https://patentimages.storage.googleapis.com/c8/c6/5d/54f2f06368d0b6/USRE28301.pdf",
        },
        {
          rank: 9,
          id: "US-3469976-A",
          cited: "43",
          information: "download",
          url: "https://patentimages.storage.googleapis.com/fb/d1/26/05f5d133cdb4ca/US3469976.pdf",
        },
        {
          rank: 10,
          id: "DE-2813892-A1",
          cited: "43",
          information: "download",
          url: "https://patents.google.com/patent/DE2813892A1/en",
        },
        {
          rank: 11,
          id: "US-3562371-A",
          cited: "40",
          information: "download",
          url: "https://patentimages.storage.googleapis.com/62/cb/1c/65781ce3185d4c/US3562371.pdf",
        },
        {
          rank: 12,
          id: "CH-539479-A",
          cited: "39",
          information: "download",
          url: "https://patents.google.com/patent/CH539479A/en",
        },
        {
          rank: 13,
          id: "EP-0084369-B1",
          cited: "39",
          information: "download",
          url: "https://patentimages.storage.googleapis.com/b7/21/63/9977f7f29bcc92/EP0084369B1.pdf",
        },
        {
          rank: 14,
          id: "US-3419935-A",
          cited: "37",
          information: "download",
          url: "https://patentimages.storage.googleapis.com/3b/f0/6c/a534e44071a78d/US3419935.pdf",
        },
        {
          rank: 15,
          id: "US-4081272-A",
          cited: "37",
          information: "download",
          url: "https://patentimages.storage.googleapis.com/4d/8c/22/62a80350c5ca66/US4081272.pdf",
        },
        {
          rank: 16,
          id: "DE-2200066-B2",
          cited: "36",
          information: "download",
          url: "https://patents.google.com/patent/DE2200066B2/en",
        },
        {
          rank: 17,
          id: "DE-3128347-A1",
          cited: "36",
          information: "download",
          url: "https://patents.google.com/patent/DE3128347A1/en",
        },
        {
          rank: 18,
          id: "US-4582681-A",
          cited: "35",
          information: "download",
          url: "https://patentimages.storage.googleapis.com/98/66/53/8854c274ddb639/US4582681.pdf",
        },
        {
          rank: 19,
          id: "GB-2027060-B",
          cited: "35",
          information: "download",
          url: "https://patents.google.com/patent/GB2027060B/en",
        },
        {
          rank: 20,
          id: "KR-890701501-A",
          cited: "35",
          information: "download",
          url: "https://patents.google.com/patent/KR890701501A/en",
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
    width: 100%;
    margin: 10px auto;
    overflow: hidden;
}
</style>