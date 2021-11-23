<template>
  <div id="login">
    <el-form :model="form" :label-position="labelPosition" label-width="120px">
      <el-form-item label="用户名">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input
          v-model="form.passwd"
          type="password"
          autocomplete="off"
        ></el-input>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { ElMessage } from 'element-plus'

export default {
  name: "Login",
  data () {
    return {
      labelPosition: 'top',
      form: {
        name: '',
        password: '',
      }
    }
  },
  methods: {
    onSubmit () {
      console.log('submit!')
    },
  },
  mounted () {
    ElMessage('this is a message.')
  }
}
</script>

<style>
#login {
    width: 500px;
    height: 700px;
}
</style>