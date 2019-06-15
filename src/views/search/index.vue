<template>
  <div>
    <form action="/">
    <van-search
      v-model="value"
      placeholder="请输入搜索关键词"
      show-action
      @search="onSearch"
      @cancel="onCancel"
    />
    Nothing to do
</form>
  </div>
</template>
<script>
export default {
  data () {
    return {
      value: '',
      search: {},
      cancel: {}
    }
  },
  methods: {
    onCancel () {
      window.history.back(-1)
    },
    onSearch () {

    }
  }
}
</script>
<style lang="less">
.van-search{
    padding-top: 14px;
    border-bottom: 1px solid #ededed;
}
</style>
