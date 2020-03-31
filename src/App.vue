<template>
  <div id="app">
    <div class="router-view-wrapper" :style="{background: bgcolor}">
      <transition name="fade" mode="out-in">
        <router-view />
      </transition>
    </div>
    <div class="van-tabbar-wrapper">
      <van-tabbar
        v-model="active"
        active-color="#FFB322"
        inactive-color="#fff"
        @change="onChange"
        :style="{background: bgcolor}"
      >
        <van-tabbar-item icon="manager-o" to="/">基本信息</van-tabbar-item>
        <van-tabbar-item icon="notes-o" to="/skill">IT技能</van-tabbar-item>
        <van-tabbar-item icon="cluster-o" to="/project">主要项目</van-tabbar-item>
        <van-tabbar-item icon="chart-trending-o" to="/jobs">工作经验</van-tabbar-item>
      </van-tabbar>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      active: 0,
      bgcolor: "#77C7BA"
    };
  },
  methods: {
    onChange(index) {
      switch (index) {
        case 0:
          this.bgcolor = "#77C7BA";
          break;
        case 1:
          this.bgcolor = "#7F779E";
          break;
        case 2:
          this.bgcolor = "#44BA81";
          break;
        case 3:
          this.bgcolor = "#258dde";
          break;
        default:
          break;
      }
    },
    getIndex() {
      let index = 0;
      const hash = window.location.hash.replace("#/", "");
      switch (hash) {
        case "":
          index = 0;
          break;
        case "skill":
          index = 1;
          break;
        case "project":
          index = 2;
          break;
        case "jobs":
          index = 3;
          break;
        default:
          break;
      }
      this.active = index;
      return index;
    }
  },
  mounted() {
    this.onChange(this.getIndex());
  }
};
</script>

<style lang="stylus">
#app
  height: 100vh
  .router-view-wrapper
    height: 90vh
    color: #fff
    overflow: scroll
    box-sizing: border-box
    .fade-enter, .fade-leave-to
      transform: translateX(100%)
    .fade-enter-active, .fade-leave-active
      transition: all 0.3s linear
  .van-tabbar-wrapper
    height: 10vh
    .van-tabbar
      height: 10vh
</style>
