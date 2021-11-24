<template>
  <div id="home">
    <div class="sidebar">
      <el-menu default-active="1" class="el-menu-vertical-demo">
        <el-menu-item index="1">
          <el-icon :size="20"><home-filled /></el-icon>
          <span class="menu-text">首页</span>
        </el-menu-item>
        <el-menu-item index="2">
          <el-icon :size="20"><document /></el-icon>
          <span class="menu-text">知识图谱</span>
        </el-menu-item>
        <el-menu-item index="3">
          <el-icon :size="20"><setting /></el-icon>
          <span class="menu-text">系统设置</span>
        </el-menu-item>
      </el-menu>
    </div>
    <div class="content">
      <div class="content-nav">
        <el-menu
          :default-active="activeIndex"
          class="el-menu-demo"
          mode="horizontal"
          @select="handleSelect"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
        >
          <el-menu-item index="2">Processing Center</el-menu-item>
          <el-submenu index="3">
            <template #title>Workspace</template>
            <el-menu-item index="3-1">item one</el-menu-item>
            <el-menu-item index="3-2">item two</el-menu-item>
            <el-menu-item index="3-3">item three</el-menu-item>
            <el-submenu index="3-4">
              <template #title>item four</template>
              <el-menu-item index="3-4-1">item one</el-menu-item>
              <el-menu-item index="3-4-2">item two</el-menu-item>
              <el-menu-item index="3-4-3">item three</el-menu-item>
            </el-submenu>
          </el-submenu>
          <el-menu-item index="4" disabled>Info</el-menu-item>
          <el-menu-item index="5">Orders</el-menu-item>
        </el-menu>
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