<template>
  <div>
    <div class="top-box">
      <div class="news">
        <div class="header">
          <a>头像</a>
        </div>
        <p role="nickname">你的名字</p>
      </div>
    </div>
    <div class="news-box">
      <div class="moves">
        <i class="iconfont icon-dianying"></i>
        <span role="name">电影票</span>
      </div>
      <div class="grou">
        <i class="iconfont icon-coupon"></i>
        <span role="name">优惠券</span>
      </div>
    </div>
    <div class="liv">
      <p>淘票票乐影卡</p>
      <i class="iconfont icon-arrow-right-copy-copy"></i>
    </div>
    <div class="liv">
      <p>帮助与反馈</p>
      <a href="">咨询票小蜜</a>
      <i class="iconfont icon-arrow-right-copy-copy"></i>
    </div>
    <router-link to="/reg"></router-link>
  </div>

</template>
<script>
import titleTop from "@/components/titleTop.vue";
export default {
  name: "center"

};
</script>
<style lang="less">
.top-box {
  position: relative;
  width: 100%;
  height: 140px;
  background-color: #ff4d64;
  .news {
    height: 60px;
    position: absolute;
    left: 5%;
    top: 20px;
    width: 80%;
    // background-color: #fff;
    .header {
      float: left;
      height: 60px;
      width: 60px;
      line-height: 60px;
      margin-left: 5px;
      text-align: center;
      border-radius: 50%;
      overflow: hidden;
      // background-size: cover;
      // background-position: 50%;
      // background-repeat: no-repeat;
      background-image: url();
      background: pink;
    }
    p {
      float: right;
      position: absolute;
      top: 20px;
      left: 73px;
      height: 20px;
      font-size: 20px;
      line-height: 20px;
      // text-align: center;
      color: #fff;
      width: 40%;
    }
  }
}
.news-box {
  position: relative;
  width: 100%;
  height: 100px;
  .moves {
    width: 60px;
    height: 60px;
    position: absolute;
    top: 20px;
    left: 50px;
  }
  .grou {
    width: 60px;
    height: 60px;
    position: absolute;
    top: 20px;
    right: 50px;
  }
  i {
    margin: 12px 18px 0px 18px;
    display: block;
    font-size: 24px;
    width: 24px;
    height: 24px;
    color: red;
  }
  span {
    margin-left: 20%;
    height: 12px;
    font-size: 12px;
    text-align: center;
    color: #000;
  }
}
.liv {
  position: relative;
  margin-top: 10px;
  width: 90%;
  height: 50px;
  margin-left: 5%;
  border-top: 1px solid #ccc;
  p {
    font-size: 18px;
    color: #000;
    height: 60px;
    width: 50%;
    line-height: 60px;
    float: left;
  }
  a{
   position: absolute;
   top: 20px;
   right: 18px;
   font-size: 14px;
   color: #ccc;
  }
  i {
    float: right;
    margin-top: 20px;
    color: #ccc;
  }
}
</style>
