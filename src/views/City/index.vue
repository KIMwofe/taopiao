<template>
  <div class="page-city">
    <!-- 使用插件库中的导航栏插件 -->
    <!-- <van-nav-bar title="城市选择">
     <van-icon name="cross"/>
    </van-nav-bar>-->
    <van-nav-bar title="城市选择">
      <van-icon class="city-close" name="cross" slot="right" @click="onClick"/>
    </van-nav-bar>

    <div class="city-list">
      <div class="lv-indexlist">
        <ul class="lv-indexlist__content" id="lv-indexlist__content">
          <div class="recommend-city">
            <div class="gprs-city">
              <div class="hot-city">
                <div class="city-index-title">
                  当前
                  <!-- <p>现在</p> -->
                </div>
                <ul class="city-index-detail">
                  <li class="city-item-detail">
                    <div class="city-item-text" >深圳</div>
                  </li>
                  <div class="right-list">
                    <ul>
                      <li>当前</li>
                      <li>GPS</li>
                      <li>热门</li>
                    </ul>
                  </div>
                </ul>
              </div>
              <div class="city-index-title">GPS</div>
              <ul class="city-index-detail">
                <li class="city-item-detail city-item-detail-gprs">
                  <div class="city-item-text1">浏览器定位失败</div>
                </li>
              </ul>
              <div class="city-index-title">热门城市</div>
              <ul class="city-index-detail">
                <li class="city-item-detail1" v-for="city in hotList" :key="city.cityId">
                  <div class="city-item-text">{{ city.name }}</div>
                </li>
              </ul>
            </div>
          </div>
          <!-- 循环拿到的数组，将城市名字渲染在页面 -->
          <li class="lv-indexsection" v-for="item in newCityList" :key="item.py">
            <p>{{item.py}}</p>
            <ul>
              <li
              v-on:click.once="onClick"
              class="city-show"
              v-for="city in item.list"
              :key="city.cityId"
              >{{city.name}}</li>
            </ul>
          </li>
        </ul>
        <div class="lv-indexlist__nav">
          <ul>
            <li v-for="index in indexlist" :key="index">{{ index }}</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "City",

  computed: {
    ...mapGetters("city", ["newCityList", "hotList", "indexlist",'getName'])
  },

  methods: {
    ...mapActions("city", ["getCityList"]),
    onClick() {
      this.$router.push({
        path: "/film" //跳转路由
      })
    }
    // getCity( getName ){
    //   console.log(this.getName)
    // }
  },

  created() {
    this.getCityList();
  }
}
</script>


<style lang="less">
@import "~@/styles/common/mixins.less";

.page-city {
  display: flex;
  flex-direction: column;
  height: 100%;
}
.van-nav-bar__right {
  width: 45px;
  height: 45px;
  text-align: center;
  font-size: 20px;
  .van-icon::before {
    color: #777;
  }
}

.city-list {
  flex: 1;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;

  .lv-indexlist {
    width: 100%;
    height: 100%;
    flex: 1;
    display: flex;
    background: #fff;
    overflow: hidden;
    position: relative;
    &__content {
      flex: 1;
      height: 100%;
      overflow-y: auto;
    }
    &__nav {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 18px;
      height: 100%;

      li {
        height: 18px;
        font-size: 12px;
        color: #349cec;
        padding: 0 6px;
      }
    }

    .lv-indexsection {
      &__index {
        background-color: #f4f4f4;
        color: #797d82;
        padding-left: 15px;
        height: 30px;
        line-height: 30px;
      }
      p {
        background-color: #f4f4f4;
        height: 20px;
        font-size: 14px;
        line-height: 20px;
        padding: 9px 12px;
      }

      ul {
        display: flex;
        flex-wrap: wrap;
        padding: 0 15px;
        margin-bottom: -1px;
        li {
          .border-bottom;
          width: 100%;
          position: relative;

          height: 48px;
          line-height: 48px;
          // text-align: center;
          text-overflow: ellipsis;
          white-space: nowrap;
          overflow: hidden;
        }
      }
    }

    .recommend-city {
      padding-left: 15px;
      padding-top: 15px;

      .city-index-title {
        font-size: 14px;
        color: #797d82;
        margin-bottom: 10px;
        .p {
          position: absolute;
          bottom: 3px;
          left: 5px;
          color: #349cec;
        }
      }

      .city-index-detail {
        display: flex;
        justify-content: flex-start;
        flex-wrap: wrap;
        width: 260%;
        .right-list {
          list-style: none;
          height: 20px;
          text-align: center;
          font-size: 12px;
          line-height: 20px;
          color: #349cec;
          float: right;
        }
        .city-item-detail1 {
          width: 100%;
          // text-align: center;
          padding-bottom: 15px;
          box-sizing: border-box;
        }
        .city-item-detail {
          width: 33.33%;
          text-align: center;
          padding-bottom: 15px;
          box-sizing: border-box;

          .city-item-text {
            position: relative;
            height: 30px;
            line-height: 30px;
            background-color: #f4f4f4;
            border-radius: 3px;
            box-sizing: border-box;
            margin: 0 7.5px;
            font-size: 15px;
            color: #191a1b;
            float: left;
          }
          .city-item-text1 {
            height: 30px;
            line-height: 30px;
            background-color: #f4f4f4;
            border-radius: 3px;
            box-sizing: border-box;
            margin: 0 7.5px;
            font-size: 15px;
            color: #191a1b;
            width: 150px;
          }
        }
      }
    }
  }
}
</style>
