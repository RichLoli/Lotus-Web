<template>
  <div class="sidebar-menu">
    <el-menu
      default-active="1"
      class="el-menu-vertical sidebar-menu-el"
      :collapse="this.$store.getters.sidebar.opened"
      router
    >
      <el-menu-item index="1" route="/">
        <el-icon :size="25"><home-filled /></el-icon>
        <span>首页</span>
      </el-menu-item>
      <el-menu-item index="2" route="/graphs">
        <el-icon :size="25"><document /></el-icon>
        <span class="menu-text">知识图谱</span>
      </el-menu-item>
      <el-menu-item index="3">
        <el-icon :size="25"><setting /></el-icon>
        <span class="menu-text">系统设置</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: "SideBar"
}
</script>

<style>
.sidebar-menu {
  height: 100%;
  z-index: 1;
}

.sidebar-menu-el {
  height: 100%;
}
</style>