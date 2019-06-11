<template>
  <ul class="mItem">
    <li v-for="film in list"
        :key="film.filmid">
        <a href="#">
            <img :src="film.poster" alt="">
            <div class="text">
                <h1> <b>{{ film.name }} </b>
                <i> <i>{{film.filmType.name}}</i><i>IMAX</i></i> </h1>
                <h2 v-if="filmType === 'nowPlaying'">淘票票评分 <i>{{ film.grade}}</i></h2>
                <h3>导演： {{ film.actors | fordirector }}</h3>
                <h4>主演： {{ film.actors | formatActor }}</h4>
            </div>
            <span v-if="filmType === 'nowPlaying'" style="">购票</span>
            <span v-else class="span1">预售</span>
        </a>

    </li>
  </ul>
</template>
<script>
export default {
  props: {

    filmType: {
      validator (value) {
        return ['nowPlaying', 'comingSoon'].indexOf(value) !== -1
      }
    },
    list: {
      type: Array
    }
  },
  methods: {

  },
  filters: {

    formatActor (value = []) {
      let str = ''
      let arr = value.map(item => item.name)
      str = arr.length > 0 ? arr.join('、') : '暂无主演'
      return str
    },
    fordirector (value = []) {
      let vtr = ''
      // let director = ''
      let arr = value.map(item => item.name)
      vtr = arr.length > 0 ? arr.slice(0, 1).join('、') : ' '
      return vtr
    }
  }
}
</script>
<style lang="less">
    li{
      margin-bottom: 10px;
    }
    .mItem{
      width:100%;
      overflow: hidden;
      padding: 4vw;
      box-sizing: border-box;
      a{
        display: block;
        overflow: hidden;
        padding: .16rem .15rem;
        box-sizing: border-box;
         img{
          display: block;
          width: 17.3vw;
          height: 25.3vw;
          float: left;
          margin-right: .12rem;
        }
        .text{
          width: 45.9vw;
          display: inline;
          overflow: hidden;
          float: left;
          padding-left: 2vw;
          line-height: 19px;
          b{
            max-width: 79px;
            display: inline-block;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            }
        }
        h1{
          color: #000;
          font-weight: 500;
          // float: left;
          font-size: 16px;
          margin-right: 0.4rem;
          text-overflow: ellipsis;
          position: relative;
          white-space: nowrap;
          i{
            position: relative;
            top:-1.5px;
            left: 2px;
            border-top: #999 1px solid;
            i:nth-child(1){
              font-size: 12px;
              display: inline-block;
              color: #fff;
              background-color: #999;
              border-top-left-radius: 2px;
              border-bottom-left-radius: 2px;
              padding: 0 4px;
            }
            i:nth-child(2){
              font-size: 10px;
              display: inline-block;
              background: #fff;
              color: #999;
              padding: 0 5px;
              border-right: #999 1px solid;
              box-sizing: border-box;
              position: relative;
              top: -2.6px;
            border-top:#999 1px solid;

              border-bottom:#999 1px solid;
            }

          }
        }
        h2{
          font-size: 13px;
          color: #797d82;
          // float: left;

          margin-top: 0.03rem;
          text-overflow: ellipsis;
          i{
            color: #ffb232;
          }
        }
        h3{
          font-size: 13px;
          white-space: nowrap;
          color: #797d82;
          // float: left;
          text-overflow: ellipsis;
          margin-top: 0.03rem;
        }
        h4{
           font-size: 13px;
            white-space: nowrap;
            color: #797d82;
            // float: left;
            width: 100%;
            text-overflow: ellipsis;
            margin-top: 0.03rem;
        }
      }
      span{
        display: block;
        color: #fff;
        height: 28px;
        line-height: 28px;
        padding: 0 13px;
        font-size: 12px;
        border-radius: 120px;
        float: right;
        margin-top: 1.28rem;
        text-align: center;
        background-image: linear-gradient(45deg,#ff7ba0,#ff4d64);
      }
      .span1{
        background-image: linear-gradient(45deg,#55c2ff,#349cec);
      }
    }
</style>
