<template>
  <div class='SystemsList'>
    <el-card>
      <el-card
        v-for='(item, index) in systems'
        :key='index'
        :class='getClass(index)'
        shadow='never'
      >
        <div class='wrapper'>
          <div>
            {{ item.title }}
          </div>
          <div :class='item.status'>
            <div
              v-if='item.status === "success"'
              class='iconText'
            >
              Operational
            </div>
            <div
              v-if='item.status === "warning"'
              class='iconText'
            >
              Performance degraded
            </div>
            <div
              v-if='item.status === "error"'
              class='iconText'
            >
              Critical
            </div>
            <div
              v-if='item.status === "maintenance"'
              class='iconText'
            >
              Under maintenance
            </div>
            <i
              v-if='item.status === "maintenance"'
              class='el-icon-s-order'
            />
            <i
              v-else
              :class='"el-icon-" + item.status'
            />
          </div>
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
    }
  }
}
</script>

<style scoped>
.wrapper {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
}
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
.success {
  color: #67c23a;
}
.warning {
  color: #e6a23c;
}
.error {
  color: #f56c6c;
}
.maintenance {
  color: #409eff;
}
i {
  font-size: 20px;
}
</style>
