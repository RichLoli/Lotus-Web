<template>
  <div class="navbar">
    <div class="navbar-menu">
      <div class="navbar-menu-item" @click="toggleSidebar">
        <el-icon :size="20">
          <component :is="siderbarIcon"></component>
        </el-icon>
      </div>
      <div class="navbar-menu-item">
        <div class="">
          <el-breadcrumb :separator-icon="ArrowRight">
            <el-breadcrumb-item :to="{ path: '/' }"
              >homepage</el-breadcrumb-item
            >
            <el-breadcrumb-item>promotion management</el-breadcrumb-item>
            <el-breadcrumb-item>promotion list</el-breadcrumb-item>
            <el-breadcrumb-item>promotion detail</el-breadcrumb-item>
          </el-breadcrumb>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavBar",
  data () {
    return {
      siderbarIcon: "expand"
    }
  },
  methods: {
    toggleSidebar () {
      this.siderbarIcon = this.siderbarIcon === "fold" ? "expand" : "fold"
      this.$store.dispatch("toggleSidebar")
    }
  }
}
</script>
<style>
.navbar {
  height: 50px;
  background-color: #d5e2f1;
  min-width: 990px;
}

.navbar-menu {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
}

.navbar-menu-item {
  height: 100%;
  min-width: 40px;
  padding: 0px 20px;
  display: flex;
  cursor: pointer;
  flex-direction: row;
  align-items: center;
  transition: all 0.5s ease;
}
</style>