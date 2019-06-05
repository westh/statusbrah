<template>
  <div class="SystemsList">
    <el-card>
      <el-card
        v-for="(item, index) in systems"
        :key="index"
        :class="getClass(index)"
        shadow="never"
      >
        {{ item.title }}
        <div :style="getColor(item.status)">
          <div v-if="item.status === 'success'" class="iconText">
            Operational
          </div>
          <div v-if="item.status === 'warning'" class="iconText">
            Performance degraded
          </div>
          <div v-if="item.status === 'error'" class="iconText">
            Critical
          </div>
          <div v-if="item.status === 'maintenance'" class="iconText">
            Under maintenance
          </div>
          <i v-if="item.status === 'maintenance'" class="el-icon-s-order" style="font-size: 20px"></i>
          <i v-else :class="'el-icon-' + item.status" style="font-size: 20px"></i>
        </div>
      </el-card>
    </el-card>
  </div>
</template>

<script>
export default {
  name: 'SystemsList',
  props: ['systems'],
  methods: {
    getClass (index) {
      return 'innerCard' + (index !== this.systems.length - 1 ? ' upperCard' : '')
    },
    getColor (status) {
      let style = 'float: right;'
      if (status === 'success') {
        style += 'color: #67c23a;'
      }
      if (status === 'warning') {
        style += 'color: #e6a23c;'
      }
      if (status === 'error') {
        style += 'color: #f56c6c'
      }
      if (status === 'maintenance') {
        style += 'color: #409eff'
      }
      return style
    }
  }
}
</script>

<style scoped>
.upperCard {
  margin-bottom: 20px;
}
.innerCard {
  background: rgb(240, 240, 240);
  border: 0;
}
.iconText {
  display: inline-block;
  margin-right: 10px;
}
</style>
