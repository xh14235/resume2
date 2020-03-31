<template>
  <div class="skill">
    <div class="skill-circle">
      <van-row>
        <van-col span="8" v-for="item of skill" :key="item.id">
          <van-circle
            v-model="item.currentRate"
            :rate="item.rate"
            :speed="item.speed"
            :text="item.text"
            :stroke-width="80"
            layer-color="#ddd"
            :color="item.color"
          />
        </van-col>
      </van-row>
    </div>
    <div class="skill-desc">
      <p v-for="item of skills" :key="item.id">{{item.text}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Skill",
  data() {
    return {
      text: "jjj",
      currentRate: 80,
      skill: [
        {
          id: "0001",
          text: "html+css+js",
          rate: "90",
          speed: "50",
          currentRate: 0,
          color: "#258dde"
        },
        {
          id: "0002",
          text: "vue-cli",
          rate: "85",
          speed: "100",
          currentRate: 0,
          color: "#3FB883"
        },
        {
          id: "0003",
          text: "php+mysql",
          rate: "66",
          speed: "100",
          currentRate: 0,
          color: "#EE0A24"
        },
        {
          id: "0004",
          text: "react+es6",
          rate: "75",
          speed: "100",
          currentRate: 0,
          color: "#E3BC29"
        },
        {
          id: "0005",
          text: "elementUI+vant",
          rate: "75",
          speed: "100",
          currentRate: 0,
          color: "#193340"
        },
        {
          id: "0006",
          text: "git+seo+...",
          rate: "70",
          speed: "100",
          currentRate: 0,
          color: "#2D5315"
        }
      ],
      skills: [
        {
          id: "0001",
          text:
            "1.	精通HTML、CSS、JS等前端技术，熟悉W3C标准，页面架构和布局，能够开发符合W3C标准的易于维护的前端页面"
        },
        {
          id: "0002",
          text:
            "2.	熟练使用jQuery、Vue等前端框架类库，熟悉vue-cli + vue2.0 + vuex + vue-router + axios+stylus开发项目"
        },
        {
          id: "0003",
          text: "3.	熟悉git常用操作，熟悉ES6，了解React"
        },
        {
          id: "0004",
          text:
            "4.	熟悉AJAX、PHP、MySQL，能够利用AJAX+PHP对MySQL数据库进行增删改查等操作，并能够独立完成服务器PHP+MySQL+Apache环境的配置"
        },
        {
          id: "0005",
          text:
            "5.	注重网站性能速度的优化，熟悉浏览器兼容性，网站能够兼容低版本IE，熟悉网站SEO内部优化和外部优化，注重用户体验"
        },
        {
          id: "0006",
          text: "6.	熟悉Echarts图、高德地图API、Websocket"
        }
      ]
    };
  }
};
</script>

<style lang="stylus" scoped>
.skill
  height: calc(90vh - 5rem)
  padding: 1.5rem
  .skill-circle
    text-align: center
    .van-col
      padding: 1.5rem 0
  .skill-desc
    p
      line-height: 2.2rem
      font-size: 1.3rem
</style>
