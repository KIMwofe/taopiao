<template>
  <form action>
    <div class="log"></div>
    <van-cell-group>
      <van-field
        class="inp-name"
        v-model="username"
        clearable
        right-icon="question-o"
        placeholder="请输入手机号"
        @click-right-icon="$toast('question')"
      />
    </van-cell-group>
    <div class="get-box">
      <van-cell-group>
        <van-field v-model="sms" center clearable placeholder="校验码">
          <van-button class="get-num" slot="button" size="small" type="primary">获取短信校验码</van-button>
        </van-field>
      </van-cell-group>
    </div>

    <div class="reg-sec">
      <a class="lon">立即注册</a>
    </div>
    <van-button class="button-b" round type="danger" @click="regCenter">登录</van-button>
    <van-button class="button-c" round type="danger" @click="regChange">账户密码登录</van-button>
  </form>
</template>
<script>
import titleTop from "@/components/titleTop.vue";
export default {
  name: "regNum",
  methods: {
    regChange() {
      this.$router.push({
        path: "/Reg" //跳转路由
      });
    },
    regCenter () {
      this.$router.push({
        path: "/center" //跳转路由
      });
    }
  }
};
</script>
<style lang="less">
html,
body {
  height: 100%;
}
.log {
  width: 65px;
  height: 65px;
  background: url(https://gw.alicdn.com/tfs/TB1p.BGQXXXXXbFXFXXXXXXXXXX-160-160.png)
    no-repeat;
  background-size: contain;
  margin: 40px auto 40px;
}
.inp-name {
  width: 90%;
  border-bottom: 1px solid red;
  margin: 10px 5% 10px 5%;
  text-align: center;
}
.get-box {
  border-bottom: 1px solid red;
  width: 90%;
  margin: 10px 5% 10px 5%;
  .get-num {
    height: 14px;
    font-size: 14px;
    line-height: 14px;
    text-align: center;
    background-color: white;
    border: none;
    border-left: 1px solid #cccccc;
    color: red;
  }
}

.reg-sec {
  width: 90%;
  height: 20px;
  margin: 10px 5% 20px 5%;
  .lon {
    color: rgb(126, 122, 122);
    font-size: 12px;
    text-align: center;
    line-height: 20px;
  }
}
.button-b {
  width: 80%;
  margin-left: 10%;
  height: 2.2rem;
  line-height: 1.2rem;
  text-align: center;
  background: -webkit-linear-gradient(left, #ff9000, #ff5000) no-repeat;
}
.button-c {
  width: 80%;
  margin-left: 10%;
  height: 2.2rem;
  line-height: 1.2rem;
  text-align: center;
  border: 1px solid #ff5000;
  color: #ff5000;
  background: #fff;
  text-decoration: none;
  margin-top: 20px;
}
</style>
