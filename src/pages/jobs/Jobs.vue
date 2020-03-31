<template>
  <div class="jobs">
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="item of jobs" :key="item.id">
        <div>
          <p class="cname">{{item.cname}}</p>
          <p class="ctime">{{item.time}}</p>
          <p class="czhiwei">{{item.zhiwei}}</p>
          <ul class="cul">
            <li class="cli" v-for="dd of item.gongzuoneirong" :key="dd.id">{{dd.neirong}}</li>
          </ul>
        </div>
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
export default {
  name: "Jobs",
  data() {
    return {
      jobs: [
        // {
        //   id: "0001",
        //   cname: "郑州诺塔科技有限公司",
        //   time: "2016.09-2017.02",
        //   zhiwei: "web前端",
        //   gongzuoneirong: [
        //     {
        //       id: "001",
        //       neirong:
        //         "1.	与设计师交流沟通，将设计原图通过HTML与CSS实现为静态页面"
        //     },
        //     {
        //       id: "002",
        //       neirong: "2.	应用JavaScript，jQuery，实现页面动态效果"
        //     },
        //     {
        //       id: "003",
        //       neirong: "3.	利用bootstrap实现响应式"
        //     }
        //   ]
        // },
        {
          id: "0002",
          cname: "上海诺地乐通用设备制造有限公司",
          time: "2017.03-2018.04",
          zhiwei: "网站开发+SEO",
          gongzuoneirong: [
            {
              id: "001",
              neirong:
                "1. 公司官网的日常维护及更新改版（pc端网站改为响应式网站，兼容手机端）"
            },
            {
              id: "002",
              neirong: "2. 公司SEO网站的开发及SEO优化"
            },
            {
              id: "003",
              neirong:
                "3. 公司用web服务器的购买，并为其配置apache+php+mysql环境，将网站从外包公司的服务器迁到公司的服务器，为公司节省成本，便于网站的维护"
            },
            {
              id: "004",
              neirong:
                "4. 网站性能的优化，优化网站，为网站实现cdn加速，提高网站加载速度，处理网站兼容性"
            },
            {
              id: "005",
              neirong: "5. 领导交待的其他事情，如公司视频、产品实物图的拍摄"
            }
          ]
        },
        {
          id: "0003",
          cname: "南京绛门信息科技股份有限公司",
          time: "2017.05至今",
          zhiwei: "web前端开发，外派长宁公安项目组",
          gongzuoneirong: [
            {
              id: "001",
              neirong:
                "1. 与UI沟通，参与页面设计，编写静态页面，与后端对接数据接口"
            },
            {
              id: "002",
              neirong:
                "2. 对接第三方插件，如高德地图、济沧海4g记录仪、东方网立视频等"
            },
            {
              id: "003",
              neirong: "3. 长宁分局及下属派出所大屏项目"
            },
            {
              id: "004",
              neirong: "4. 为德拓公司其他项目组提供技术支援"
            }
          ]
        }
      ]
    };
  }
};
</script>

<style lang="stylus" scoped>
.jobs
  height: calc(90vh - 5rem)
  padding: 1.5rem
  .my-swipe
    color: #fff
    height: 80vh
    padding-top: 5vh
    font-size: 1.3rem
    .cname
      font-size: 2.4rem
      margin-bottom: 3vh
      overflow: hidden
      text-overflow: ellipsis
      white-space: nowrap
    .ctime
      float: right
    .cul
      margin-top: 3vh
      .cli
        line-height: 4vh
        margin-bottom: 2vh
</style>
