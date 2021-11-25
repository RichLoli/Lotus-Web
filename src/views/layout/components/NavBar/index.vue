<template>
  <div>
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
</template>

<script>
export default {

}
</script>

<style>
</style>