<template>
  <div>
    <div class="city-c">
      <div id="J_City" class="current-city i-logo">
        <div class="city-name">深圳</div>
        <div class="arrow-down"></div>
      </div>
    </div>
  </div>
</template>
<script>
export default {

}
</script>
<style lang="less">
.city-c {
  width: 42%;
  display: inline-block;
  vertical-align: top;
  height: 3.125rem;
  height: 13.3vw;
  line-height: 3.125rem;
  line-height: 12.3vw;
  position: relative;
  background-image: url(//gw.alicdn.com/tfs/TB1mKkzl9zqK1RjSZFpXXakSXXa-50-50.svg);
   background-size: 25px 25px;
    background-repeat: no-repeat;
    background-position: 15px;
  .current-city {
    padding-left: 50px;
    .city-name {
      vertical-align: middle;
      display: inline-block;
      color: #333;
      font-weight: 700;
      font-size: 0.9375rem;
      max-width: 4.375rem;
      max-width: 18.7vw;
      width: auto;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    .arrow-down {
      margin-left: 3px;
      width: 8px;
      height: 4px;
      position: relative;
      top: 50%;
      left: 50%;
      width: 0;
      height: 0;
      border-left: 4px solid transparent;
      border-right: 4px solid transparent;
      border-top: 4px solid #333;
      display: block;
      position: absolute;
      margin: -1px 0 0 16px;
    }
    .i-logo{
      background-image: url(//gw.alicdn.com/tfs/TB1mKkzl9zqK1RjSZFpXXakSXXa-50-50.svg);
    }
  }
}
</style>
