<template>
  <div class="info">
    <div class="photo">
      <van-image round width="100" height="100" src="https://img.yzcdn.cn/vant/cat.jpeg" />
      <div class="van-ellipsis mine">我是解辉，一名前端开发工程师</div>
    </div>
    <div class="base-info">
      <van-row>
        <van-col class="info-col" span="12" v-for="item of infos" :key="item.id">
          <span class="info-key">{{item.key}}：</span>
          <span class="info-val">{{item.val}}</span>
        </van-col>
      </van-row>
    </div>
    <div class="self-assessment">
      <div class="van-multi-ellipsis--l3">{{assessment}}</div>
    </div>
    <div class="message">
      <van-button type="info" size="small" color="#FFB322" @click="showPopup">留言给我</van-button>
    </div>

    <van-popup class="popup-wrapper" v-model="popupShow">
      <div class="popup-box">
        <van-cell-group>
          <van-field v-model="cname" placeholder="请输入公司名或者姓名" label="联系人" />
          <van-field v-model="tel" placeholder="请输入联系方式" label="电话" />
          <van-field v-model="msg" placeholder="请输入留言内容" label="留言" type="textarea" rows="3" />
        </van-cell-group>
        <van-button type="info" size="small" @click="msgSubmit">留言</van-button>
      </div>
    </van-popup>
  </div>
</template>

<script>
export default {
  name: "Infos",
  data() {
    return {
      infos: [
        {
          id: "0001",
          key: "性别",
          val: "男"
        },
        {
          id: "0002",
          key: "籍贯",
          val: "河南商丘"
        },
        {
          id: "0003",
          key: "生日",
          val: "1990-11-16"
        },
        {
          id: "0004",
          key: "学校",
          val: "13年 郑州大学"
        },
        {
          id: "0005",
          key: "手机",
          val: "150-2116-1540"
        },
        {
          id: "0006",
          key: "邮箱",
          val: "15021161540@163.com"
        }
      ],
      popupShow: false,
      cname: "",
      tel: "",
      msg: "",
      assessment:
        "三年互联网经验,两年半全职前端开发经验熟悉MV*开发,深谙自动化,模块化开发之道高效的自学能力,具备独立分析解决问题能力强烈的自我驱动力,代码强迫症患者"
    };
  },
  methods: {
    showPopup() {
      this.popupShow = true;
    },
    msgSubmit() {
      this.$toast("留言成功！");
    }
  }
};
</script>

<style lang="stylus" scoped>
.info
  position: relative
  height: calc(90vh - 50px)
  padding: 1.5rem
  .photo
    text-align: center
    margin-top: 10vh
    .mine
      padding: 3vh 0
      font-size: 1.8rem
      font-weight: 600
  .base-info
    margin-bottom: 5vh
    font-size: 1.4rem
    .info-col
      line-height: 5vh
      display: flex
      overflow: hidden
      .info-key
        flex: 0 0 30%
        width: 30%
      .info-val
        flex: 0 0 70%
        width: 70%
  .self-assessment
    line-height: 4vh
    .van-multi-ellipsis--l3
      font-size: 1.3rem
  .message
    position: absolute
    right: 1.5rem
    bottom: 5vh
  .popup-wrapper
    .popup-box
      width: 80vw
      padding: 1.5rem
      background: #dc7d20
      .van-button
        margin-top: 1.5rem
</style>
