<template>
  <div class="data-container">
    <el-container>
      <el-header class="data-tools">
        <el-row>
          <router-link to="/graphs/edit">
              <el-button type="primary" size="small" round>新建图谱</el-button>
          </router-link>
        </el-row>
      </el-header>
      <el-main class="data-table">
        <el-table :data="tableData" style="width: 100%">
          <el-table-column prop="ID" label="ID" width="180" />
          <el-table-column prop="图谱名称" label="图谱名称" width="180" />
          <el-table-column prop="图谱分类" label="图谱分类" />
          <el-table-column prop="address" label="Address" />
          <el-table-column prop="address" label="Address" />
          <el-table-column prop="address" label="Address" />
        </el-table>
      </el-main>
    </el-container>
  </div>
</template>

<script>
export default {
  name: "Graphs",
}
</script>

<style>

.data-tools {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.data-table {
    --el-main-padding: 0px 20px;
}
</style>