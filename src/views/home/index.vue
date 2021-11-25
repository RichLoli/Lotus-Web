<template>
  <div id="home">
    <div class="sidebar">

    </div>
    <div class="content">
      <div class="content-nav">
        
      </div>
      <div class="content-view">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup () {
    const activeIndex = ref('1')
    const activeIndex2 = ref('1')
    const handleSelect = (key, keyPath) => {
      console.log(key, keyPath)
    }
    const getMenuList = () => {
      return [
        {
          name: "首页",
          url: "/",
          icon: "menu"
        }
      ]
    }
    return {
      activeIndex,
      activeIndex2,
      handleSelect,
    }
  }
})
</script>

<style>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 250px;
  min-height: 400px;
}

.menu-text {
  display: inline-block;
  line-height: 15px;
  height: 10px;
  margin-left: 10px;
}

.sidebar {
  position: fixed;
}

.content {
  margin-left: 250px;
}

.content-nav {
}

.content-view {
}
</style>