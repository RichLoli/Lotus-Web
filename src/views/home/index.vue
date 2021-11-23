<template>
  <div id="home">
    <div>
      <Navbar></Navbar>
    </div>
    <div>
      <div>123123</div>
      <div>
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar"

export default {
  name: "Home",
  components: {
    Navbar
  }
}
</script>

<style>

</style>