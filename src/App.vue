<template>
  <div>
    <Header></Header>
    <router-view></router-view>
    <Footer v-show="$route.meta.showFooter"></Footer>
  </div>
</template>

<script>
import Header from '@/components/Header'
import Footer from '@/components/Footer'


export default {
  name: 'App',
  mounted() {
    // 在App根组件中只分配一次Action 将从服务器中取回的数据储存在仓库中，这样就不会重复发起请求
    this.$store.dispatch('categoryList')
  },
  components: {
    Header,
    Footer
  },
  // created() {
  //   console.log("created");
  // }
}
</script>

<style scoped>
</style>