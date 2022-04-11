<template>
  <div>
    <type-nav></type-nav>
    <list-container></list-container>
    <today-recommend></today-recommend>
    <rank></rank>
    <like></like>
    <floor v-for="floor in floorList" :key="floor.id" :list="floor"></floor>
    <brand></brand>
  </div>
</template>

<script>
import ListContainer from './ListContainer'
import TodayRecommend from './TodayRecommend'
import Rank from './Rank'
import Like from './Like'
import Floor from './Floor'
import Brand from './Brand'
import { mapState } from 'vuex';
export default {
  name: 'Home',
  components: {
    ListContainer,
    TodayRecommend,
    // eslint-disable-next-line vue/no-unused-components
    Rank, Like, Floor, Brand
  },
  mounted() {
    this.$store.dispatch("getFloorList")
    this.$store.dispatch("getUserInfo")
    console.log("home组件mounted");
  },
  computed: {
    ...mapState({
      floorList: state => state.home.floorList
    })
  }
}
</script>

<style lang="less" scoped>
</style>