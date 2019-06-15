<template>
  <form action>
    <div class="log"></div>
    <van-cell-group>
      <van-field
        class="inp-name"
        clearable
        name="num1"
        right-icon="question-o"
        placeholder="手机号/会员号/邮箱"
        @click-right-icon="$toast('question')"
      />
      <van-field name="num2" class="inp-name" type="password" placeholder="请输入密码" input/>
    </van-cell-group>
    <div class="reg-sec">
      <a class="reg-phon" @click="regPhone">短信验证码登录</a>
      <a class="lon">立即注册</a>
    </div>
    <van-button class="button-b" round type="danger" @click="regCenter">登录</van-button>
  </form>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "Reg",
  methods: {
    regPhone() {
      this.$router.push({
        path: "/regNum" //跳转路由
      });
    },
    regCenter() {
      // this.$router.push({
      //   path: "/center" //跳转路由
      // });
      setTimeout(() => {
        let userInfo = {
          name: "张三",
          pwd: "123"
        };
        window.localStorage.setItem("userInfo", JSON.stringify(userInfo));
        //登录成功，跳转回个人页面
        this.$router.push("/center");
      });
    }
  }
};
</script>
<style lang="less">
.log {
  width: 65px;
  height: 65px;
  background: url(https://gw.alicdn.com/tfs/TB1p.BGQXXXXXbFXFXXXXXXXXXX-160-160.png)
    no-repeat;
  background-size: contain;
  margin: 40px auto 40px;
}
.inp-name {
  // // font-size: inherit;
  width: 90%;
  // height: 1.48rem;
  // // margin: 0 0 .17333333rem .12rem;
  // // outline: none;
  border-bottom: 1px solid red;
  // color: #333;
  margin: 10px 5% 10px 5%;
  text-align: center;
}
.reg-sec {
  width: 90%;
  height: 20px;
  margin: 10px 5% 20px 5%;
  .reg-phon {
    float: left;
    color: rgb(126, 122, 122);
    font-size: 12px;
    text-align: center;
    line-height: 20px;
  }
  .lon {
    float: right;
    color: rgb(126, 122, 122);
    font-size: 12px;
    text-align: center;
    line-height: 20px;
  }
}
.button-b {
  //   font-size: .42666667rem;
  width: 80%;
  margin-left: 10%;
  height: 2.2rem;
  line-height: 1.2rem;
  //   border-radius: .6rem;
  text-align: center;
  //   border: 0;
  background: -webkit-linear-gradient(left, #ff9000, #ff5000) no-repeat;
  //   color: #fff;
  //   box-shadow: 0 0.08rem 0.16rem #f7c7b1;
  //   // width: 280px;
  //   // height: 38px;
}
</style>
