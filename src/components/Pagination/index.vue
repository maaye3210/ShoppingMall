<template>
  <div class="pagination">
    <button @click="changePage(pageNo-1)">上一页</button>
    <button v-if="numStartAndEnd.start>1" @click="changePage(1)">1</button>
    <button v-if="numStartAndEnd.start>2">···</button>

    <button v-for="index in continues" :key="index" @click="changePage(index+numStartAndEnd.start-1)" :class="{active:index+numStartAndEnd.start-1==pageNo}">{{index+numStartAndEnd.start-1}}</button>

    <button v-if="numStartAndEnd.end<totalPage-1">···</button>
    <button v-if="numStartAndEnd.end<totalPage-1" @click="changePage(totalPage)">{{totalPage}}</button>
    <button @click="changePage(pageNo+1)">下一页</button>

    <button style="margin-left: 30px">共 {{total}} 条</button>
  </div>
</template>

<script>
export default {
  name: "Pagination",
  props: ['pageNo', 'pagesize', 'total', 'continues'],
  computed: {
    totalPage() {
      return Math.ceil(this.total / this.pagesize)
    },
    numStartAndEnd() {
      const { pageNo, totalPage, continues } = this
      let start = 0, end = 0
      if (continues > totalPage) {
        start = 1
        end = totalPage
      } else {
        start = pageNo - parseInt(continues / 2)
        end = pageNo + parseInt(continues / 2)
        if (start < 1) {
          start = 1
          end = continues
        } else if (end > totalPage) {
          end = totalPage
          start = totalPage - continues + 1
        }
      }
      return { start, end }
    }
  },
  mounted() {
    console.log(this.numStartAndEnd, 'total', this.total);
  },
  methods: {
    changePage(num) {
      console.log(num);
      this.$emit('getPageNo', num)
    }
  }
}
</script>

<style lang="less" scoped>
.pagination {
  text-align: center;
  button {
    margin: 0 5px;
    background-color: #f4f4f5;
    color: #606266;
    outline: none;
    border-radius: 2px;
    padding: 0 4px;
    vertical-align: top;
    display: inline-block;
    font-size: 13px;
    min-width: 35.5px;
    height: 28px;
    line-height: 28px;
    cursor: pointer;
    box-sizing: border-box;
    text-align: center;
    border: 0;

    &[disabled] {
      color: #c0c4cc;
      cursor: not-allowed;
    }

    &.active {
      cursor: not-allowed;
      background-color: #409eff;
      color: #fff;
    }
  }
}
</style>
