<template>
  <div>
    <ul>
      <li
        v-for="item in list"
        :key="item.id"
        class="list-item bogo-log list-normal">
        <div
          class="list-item-container"
          data-spm="d_0__440300"
          data-log="cinema_id=4295&amp;collect=0&amp;frequent=0&amp;lasttime=0"
          data-aplus-ae="x1_1f57a417"
          data-spm-anchor-id="a1z2r.7661904.cinemalist.d_0__440300.2c94iqxRiqxRkw"
        >
          <a
            class="list-item-in list-item-anchor"
            href="#"
          >
            <h3 class="list-title-warper">
              <div class="list-title-left">
                <span class="list-title">{{item.nm}}</span>
              </div>
              <span class="list-price">
                {{item.sellPrice}}
                <span>
                  <span class="primary-color">元</span>起
                </span>
              </span>
            </h3>
            <div class="list-address">
              <span class="list-distance"></span>
              <div class="list-location">{{item.addr}}</div>
              <div class="list-search-distance"></div>
            </div>
            <div class="list-status">
              <div class="tpp-lbl tpp-lbl-outline-info">改签</div>
              <div class="tpp-lbl tpp-lbl-outline-info">观影小食</div>
              <div class="tpp-lbl tpp-lbl-outline-info">杜比全景声厅</div>
              <div class="tpp-lbl tpp-lbl-outline-info">可停车</div>
            </div>
            <ul class="list-activity">
              <li class="activity-item">
                <span class="icon-activity icon-3">惠</span> {{item.promotion.cardPromotionTag}}
              </li>
            </ul>
          </a>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    list: {
      type: Array
    }
  }
}
</script>
<style lang="less">
  .list-item{
    font-size: 12px;
    line-height: 200%;
    padding: 0 4vw;
    padding-bottom: 1px;
    overflow: hidden;
    margin: 0;
    .list-item-container{
      background: transparent -webkit-linear-gradient(bottom,#ededed,#ededed 50%,transparent 0,transparent 0) 0 100% repeat-x;
      background: transparent linear-gradient(0deg,#ededed,#ededed 50%,transparent 0,transparent 0) 0 100% repeat-x;
      background-size: 100% 1px;
      padding-bottom: .75rem;
      padding-bottom: 3.2vw;
      .list-item-in{
        display: block;
        position: relative;
        padding-top: .9375rem;
        padding-top: 4vw;
        h3{
          display: -webkit-box;
          display: -webkit-flex;
          display: -ms-flexbox;
          display: flex;
          font-size: 1.0625rem;
          line-height: 1.5rem;
          line-height: 6.4vw;
          margin-bottom: 2px;
          font-weight: 500;
          color: #000;
          .list-title-left {
            display: -webkit-box;
            display: -webkit-flex;
            display: -ms-flexbox;
            display: flex;
            -webkit-box-flex: 1;
            -webkit-flex: 1;
            -ms-flex: 1;
            flex: 1;
            width: .72vw;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            .list-title {
              white-space: nowrap;
              overflow: hidden;
              text-overflow: ellipsis;
              vertical-align: top;
              margin-right: 10px;
            }
          }
          .list-price {
            line-height: 1.5rem;
            line-height: 6.4vw;
            vertical-align: baseline;
            color: #ff4d64;
            margin-right: .0625rem;
            margin-right: .3vw;
            font-size: .9375rem;
            font-weight: 400;
            padding-left: .9375rem;
            padding-left: 4vw;
          }
        }
       .list-address {
          position: relative;
          line-height: 1.5;
          padding-right: .9375rem;
          padding-right: 4vw;
          .list-location {
            width: 16.875rem;
            width: 72vw;
            color: #666;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            font-size: .8125rem;
          }
        }
        .list-status{
          .tpp-lbl {
            display: inline-block;
            text-align: center;
            vertical-align: middle;
            -webkit-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
            user-select: none;
            color: #fff;
            background-color: #999;
            position: relative;
            font-size: 12px;
            font-style: normal;
            font-weight: 400;
            white-space: nowrap;
            height: 16px;
            line-height: 16px;
            padding: 0 4px;
            border-radius: 2px;
            border: 1px solid #349cec;
            color: #349cec;
            background-color: transparent;
            position: relative;
            margin-right: 3px;
          }
        }
        .list-activity{
          height: .9375rem;
          height: 4vw;
          line-height: .9375rem;
          line-height: 4vw;
          color: #999;
          font-size: .75rem;
          margin-top: .3125rem;
          margin-top: 1.3vw;
          text-overflow: ellipsis;
          overflow: hidden;
           white-space: nowrap;
          .icon-activity {
            border-radius: 2px;
            border-top-left-radius: 2px;
            border-top-right-radius: 2px;
            border-bottom-right-radius: 2px;
            border-bottom-left-radius: 2px;
            display: inline-block;
            width: 15px;
            height: 15px;
            line-height: 15px;
            text-align: center;
            color: #fff;
            font-size: 12px;
            margin-right: .1875rem;
            margin-right: .8vw;
            background: #fea54c;
          }
        }
     }
    }
  }

</style>
