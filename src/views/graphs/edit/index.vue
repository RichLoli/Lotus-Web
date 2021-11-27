<template>
  <div>
    <el-container>
      <el-header class="data-tools">
        <el-row>
          <el-page-header content="新建图谱" @back="goBack" />
        </el-row>
      </el-header>
      <el-main class="data-table">
        <el-row>
          <el-col :span="12">
            <div class="data-form">
              <el-form
                ref="graphs"
                :model="graphs"
                :rules="rules"
                label-width="120px"
              >
                <el-form-item label="图谱名称" prop="name">
                  <el-input v-model="graphs.name"></el-input>
                </el-form-item>
                <el-form-item>
                  <el-button type="primary" @click="onSubmit">保存</el-button>
                </el-form-item>
              </el-form>
            </div>
          </el-col>
          <el-col :span="12">
            <div class="data-preview">
                <ForceGraph></ForceGraph>
            </div>
          </el-col>
        </el-row>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import { useRouter } from 'vue-router'
import ForceGraph from '@/components/ForceGraph'

export default {
  name: "GraphsEdit",
  components: {
    ForceGraph
  },
  setup () {
    const router = useRouter()
    const goBack = () => {
      router.go(-1)
    }
    return {
      goBack,
    }
  },
  methods: {
    onSubmit () {

    }
  },
  data () {
    return {
      graphs: {
        name: ""
      },
      rules: {
        name: [
          {
            required: true,
            message: '请输入图谱名称',
            trigger: 'blur',
          },
          {
            min: 1,
            max: 24,
            message: '图谱名称不可大于24个字符',
            trigger: 'blur',
          },
        ],
      }
    }
  }
}
</script>

<style>
.data-tools {
  display: flex;
  flex-direction: row;
  align-items: center;
}
</style>