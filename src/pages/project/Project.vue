<template>
  <div class="project">
    <van-collapse v-model="activeName" accordion>
      <van-collapse-item
        v-for="(item,index) of project"
        :key="item.id"
        :title="item.title"
        :name="index"
      >
        <a v-if="item.url != '暂无链接'" :href="item.url" target="_blank">项目链接</a>
        <b v-else>{{item.url}}</b>
        <div>{{item.desc}}</div>
      </van-collapse-item>
    </van-collapse>
  </div>
</template>

<script>
export default {
  name: "Project",
  data() {
    return {
      activeName: 0,
      project: [
        {
          id: "0001",
          title: "上海市长宁公安分局智慧公安项目",
          url: "暂无链接",
          desc:
            "上海市公安局智慧公安平台长宁分平台，运用apache+mysql+php+jquery +vue等技术，对接长宁公安人口、房屋、警力、安防等各类数据，对接第三方视频、警用设备、高德地图、三维地图等，具有调用4G记录仪实时观看警员执法情况，监控探头实时查看及回放录像，查看车载视频等动能，为长宁公安管理数据提供极大便利。"
        },
        {
          id: "0002",
          title: "宝山公安分局动管系统项目",
          url: "暂无链接",
          desc:
            "宝山公安分局北新泾派出所大屏项目，运用vue-cli搭建框架，展示仙霞路人口、警力、警情、警力装备等信息，对接高德地图、4G记录仪、东方网力视频等，方便了客户对辖区内人口，来沪国外人员的管理，加强了客户对辖区内各地区动态的监控。"
        },
        {
          id: "0003",
          title: "上海诺地乐通用设备制造有限公司官网",
          url: "http://www.infinair.com.cn",
          desc:
            "该网站为上海诺地乐通用设备制造有限公司官网，响应式网站，具有留言搜索等功能，后台运用开源cms，环境为apache+php+mysql。"
        },
        {
          id: "0004",
          title: "解辉-web前端-3年经验-本科-个人简历",
          url: "http://39.98.237.246:82",
          desc: "运用前端UI框架vant制作的手机端页面，个人简历"
        },
        {
          id: "0005",
          title: "elementUI仿英飞公司网站",
          url: "http://39.98.237.246:81",
          desc: "运用前端UI框架elementUI制作的仿英飞公司网站"
        }
      ]
    };
  }
};
</script>

<style lang="stylus" scoped>
.project >>> .van-cell__title
  font-size: 1.6rem
  font-weight: 500
.project >>> .van-collapse-item__content
  color: #48494a
.project
  height: calc(90vh - 5rem)
  padding: 1.5rem
  padding-top: 5vh
</style>
