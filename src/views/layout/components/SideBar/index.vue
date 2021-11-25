<template>
  <div class="sidebar-menu">
    <el-menu
      default-active="1"
      class="sidebar-menu-el"
      :collapse="this.$store.state.opened"
    >
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
</template>

<script>
export default {
  name: "SideBar",
  data () {
    return {

    }
  },
  mounted () {
    console.log();
  }
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