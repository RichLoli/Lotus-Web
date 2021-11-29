<template>
  <div id="main">
    <div class="sidebar">
      <SideBar></SideBar>
    </div>
    <div
      class="content"
      :class="{ 'sidebar-open': !this.$store.getters.sidebar.opened }"
    >
      <div class="content-nav">
        <NavBar></NavBar>
      </div>
      <div class="content-view">
        <transition name="slide-fade">
          <router-view></router-view>
        </transition>
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
  margin-left: 64px;
  transition: all 0.3s ease-in-out;
}

.sidebar-open {
  margin-left: 220px;
}

.slide-fade-enter-active {
  transition: all .1s ease;
}
.slide-fade-leave-active {
  transition: all .2s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active for below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
</style>