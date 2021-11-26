<template>
  <div id="main">
    <div class="sidebar">
      <SideBar></SideBar>
    </div>
    <div class="content" :class="{ 'sidebar-open': !this.$store.getters.sidebar.opened }">
      <div class="content-nav">
        <NavBar></NavBar>
      </div>
      <div class="content-view">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from './components/NavBar'
import SideBar from './components/SideBar'

export default {
  name: "layout",
  components: {
    NavBar,
    SideBar
  }
}
</script>

<style>
.sidebar {
  position: fixed;
  top: 0px;
  left: 0px;
  bottom: 0px;
  width: 220px;
}

.content {
  margin-left: 65px;
  transition: all 0.3s ease-in-out;
}

.sidebar-open {
  margin-left: 220px;
}

</style>