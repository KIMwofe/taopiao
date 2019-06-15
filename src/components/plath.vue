<template>
  <div>
    <div id="plathChioce" class="plathChioce" @click="chagecur" :style="display">
  </div>
  <div class="fixed" id="fixed" :style="display" >
    <div class="fix" >
      <van-tree-select
      :items="items"
      :main-active-index="mainActiveIndex"
      :active-id="activeId"
      @navclick="onNavClick"
      @itemclick="onItemClick"
      v-if="current === 0"
    /></div>
    <ul class="selector-in" v-if="current === 1">
      <li
        data-key="3"
        data-value="综合排序"
        data-idx="1"
        data-selected="true"
        data-selector="sortTypeFilters"
        class="active"
      >
        <div>
          <span>综合排序</span>
        </div>
      </li>
      <li
        data-key="1"
        data-value="离我最近(定位失败)"
        data-idx="2"
        data-selected="false"
        data-selector="sortTypeFilters"
        class
      >
        <div>
          <span>离我最近(定位失败)</span>
        </div>
      </li>
      <li
        data-key="2"
        data-value="价格最低"
        data-idx="3"
        data-selected="false"
        data-selector="sortTypeFilters"
        class
      >
        <div>
          <span>价格最低</span>
        </div>
      </li>
    </ul>
    <ul class="boxli" v-if="current === 2">
      <li
        data-key="0"
        data-value="不限"
        data-idx="1"
        data-selected="true"
        data-selector="supportFilters"
        class="active"
      >
        <div>
          <span>不限</span>
        </div>
      </li>
      <li
        data-key="8"
        data-value="退票"
        data-idx="2"
        data-selected="false"
        data-selector="supportFilters"
        class
      >
        <div>
          <span>退票</span>
        </div>
      </li>
      <li
        data-key="23"
        data-value="改签"
        data-idx="3"
        data-selected="false"
        data-selector="supportFilters"
        class
      >
        <div>
          <span>改签</span>
        </div>
      </li>
      <li
        data-key="3"
        data-value="观影小食"
        data-idx="4"
        data-selected="false"
        data-selector="supportFilters"
        class
      >
        <div>
          <span>观影小食</span>
        </div>
      </li>
      <li
        data-key="11"
        data-value="IMAX厅"
        data-idx="5"
        data-selected="false"
        data-selector="supportFilters"
        class
      >
        <div>
          <span>IMAX厅</span>
        </div>
      </li>
      <li
        data-key="27"
        data-value="CGS中国巨幕厅"
        data-idx="6"
        data-selected="false"
        data-selector="supportFilters"
        class
      >
        <div>
          <span>CGS中国巨幕厅</span>
        </div>
      </li>
      <li
        data-key="29"
        data-value="MX4D厅"
        data-idx="7"
        data-selected="false"
        data-selector="supportFilters"
        class
      >
        <div>
          <span>MX4D厅</span>
        </div>
      </li>
      <li
        data-key="20"
        data-value="4DX厅"
        data-idx="8"
        data-selected="false"
        data-selector="supportFilters"
        class
      >
        <div>
          <span>4DX厅</span>
        </div>
      </li>
      <li
        data-key="34"
        data-value="SCREENX"
        data-idx="9"
        data-selected="false"
        data-selector="supportFilters"
        class
      >
        <div>
          <span>SCREENX</span>
        </div>
      </li>
      <li
        data-key="33"
        data-value="杜比影院"
        data-idx="10"
        data-selected="false"
        data-selector="supportFilters"
        class
      >
        <div>
          <span>杜比影院</span>
        </div>
      </li>
      <li
        data-key="32"
        data-value="DTS临境音"
        data-idx="11"
        data-selected="false"
        data-selector="supportFilters"
        class
      >
        <div>
          <span>DTS临境音</span>
        </div>
      </li>
      <li
        data-key="31"
        data-value="StarMAX"
        data-idx="12"
        data-selected="false"
        data-selector="supportFilters"
        class
      >
        <div>
          <span>StarMAX</span>
        </div>
      </li>
      <li
        data-key="30"
        data-value="艺术影厅"
        data-idx="13"
        data-selected="false"
        data-selector="supportFilters"
        class
      >
        <div>
          <span>艺术影厅</span>
        </div>
      </li>
      <li
        data-key="12"
        data-value="巨幕厅"
        data-idx="14"
        data-selected="false"
        data-selector="supportFilters"
        class
      >
        <div>
          <span>巨幕厅</span>
        </div>
      </li>
      <li
        data-key="15"
        data-value="杜比全景声厅"
        data-idx="15"
        data-selected="false"
        data-selector="supportFilters"
        class
      >
        <div>
          <span>杜比全景声厅</span>
        </div>
      </li>
      <li
        data-key="17"
        data-value="realD厅"
        data-idx="16"
        data-selected="false"
        data-selector="supportFilters"
        class
      >
        <div>
          <span>realD厅</span>
        </div>
      </li>
      <li
        data-key="28"
        data-value="激光厅"
        data-idx="17"
        data-selected="false"
        data-selector="supportFilters"
        class
      >
        <div>
          <span>激光厅</span>
        </div>
      </li>
      <li
        data-key="13"
        data-value="4D厅"
        data-idx="18"
        data-selected="false"
        data-selector="supportFilters"
        class
      >
        <div>
          <span>4D厅</span>
        </div>
      </li>
      <li
        data-key="16"
        data-value="4K厅"
        data-idx="19"
        data-selected="false"
        data-selector="supportFilters"
        class
      >
        <div>
          <span>4K厅</span>
        </div>
      </li>
      <li
        data-key="1"
        data-value="可停车"
        data-idx="20"
        data-selected="false"
        data-selector="supportFilters"
        class
      >
        <div>
          <span>可停车</span>
        </div>
      </li>
    </ul>
  </div>
  </div>

</template>
<script>

export default {
  data () {
    return {
      items: [
        {
          // 导航名称
          text: '所有城市',
          // 该导航下所有的可选项
          children: [
            {
              // 名称
              text: '温州',
              // id，作为匹配选中状态的标识
              id: 1,
              // 禁用选项
              disabled: true
            },
            {
              text: '杭州',
              id: 2
            }
          ]
        }
      ],
      mainActiveIndex: 0,
      activeId: 1
    }
  },
  props: {
    current: Number,
    display: String
  },
  methods: {
    onNavClick (index) {
      this.mainActiveIndex = index
    },
    onItemClick (data) {
      this.activeId = data.id
    },
    chagecur () {
      let fixedShow = document.getElementsByClassName('fixed')[0].style[0]
      document.onclick = function () {
        let fixed = document.getElementsByClassName('fixed')[0]
        fixed.onclick = function (event) {
          event = event || window.event
          event.stopPropagation()
        }
        let plathChioceShow = document.getElementsByClassName('plathChioce')[0].style.display
        if (!fixedShow || plathChioceShow === 'block') {
          document.getElementsByClassName('plathChioce')[0].style.display = 'none'
          fixed.style.display = 'none'
        }
      }
      document.getElementsByClassName('plathChioce')[0].style.display = 'block'
      document.getElementsByClassName('fixed')[0].style.display = 'block'
    }
  },
  watch: {
    current (nweVal) {
      if (nweVal === 0 || nweVal === 1 || nweVal === 2) {
        document.getElementsByClassName('plathChioce')[0].removeAttribute('style')
        document.getElementsByClassName('fixed')[0].style.display = 'block'
      }
    }
  },
  created () {

  }
}
</script>
<style lang="less">
.plathChioce {
  position: fixed;
  width: 100%;
  z-index: 999;
  height: 100%;
  background: black;
  background-color: rgba(0, 0, 0, 0.2);
  height: calc(100% - 89px);

}
.fixed{
  position: fixed;
  z-index: 999;
  width: 100%;
  .selector-in {
    overflow: auto;
    padding: 0;
    background: #fff;
    max-height: 80%;
    li {
      display: block;
      float: none;
      border: none;
      margin: 0;
      width: auto;
      height: 40px;
      line-height: 40px;
      font-size: 0.875rem;
      position: relative;
      padding: 0;
      padding-left: 28px;
      color: #999;
      .active {
        color: #ff4d64;
        background-position: 9px;
        background-size: 13px 9px;
      }
      div {
        text-align: left;
      }
      &:after {
        pointer-events: none;
        position: absolute;
        content: "";
        height: 1px;
        background: #d5d5d5;
        left: 0;
        right: 0;
        bottom: 0;
        -webkit-transform-origin: 100% 100%;
        -ms-transform-origin: 100% 100%;
        transform-origin: 100% 100%;
      }
    }
  }
  .boxli {
    overflow: auto;
    -webkit-overflow-scrolling: touch;
    background: #fff;
    padding: .9375rem;
    padding: 4vw;
    padding-left: .4375rem;
    padding-left: 1.9vw;
    padding-bottom: .4375rem;
    padding-bottom: 1.9vw;
    box-sizing: content-box;
    font-size: 13px;
    line-height: 1.5;

    li{
      display: inline-block;
      width: 4.75rem;
      width: 20.3vw;
      text-align: center;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      margin-left: 10px;
      margin-bottom: 5px;
      div{
        color: #333;
        border: 1px solid #d5d5d5;
        position: relative;
      }
    }
  }
}
</style>
