<template>
  <van-tree-select
  :items="items"
  :main-active-index="mainActiveIndex"
  :active-id="activeId"
  @navclick="onNavClick"
  @itemclick="onItemClick"
  v-if="num === 2"
  />
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
    num: Number
  },
  methods: {
    onNavClick (index) {
      this.mainActiveIndex = index
    },
    onItemClick (data) {
      this.activeId = data.id
    }
  }
}
</script>
