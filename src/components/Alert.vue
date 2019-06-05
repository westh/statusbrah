<template>
  <div class="Alert">
    <el-alert
      :title="successTitle"
      type="success"
      show-icon
      effect="dark"
      :closable="false"
      center
      v-if="status === 'success'">
    </el-alert>
    <el-alert
      :title="infoTitle"
      type="info"
      show-icon
      effect="dark"
      :closable="false"
      center
      v-if="status === 'info'">
    </el-alert>
    <el-alert
      :title="maintenanceTitle"
      show-icon
      effect="dark"
      :closable="false"
      center
      style="background: #409eff"
      v-if="status === 'maintenance'">
    </el-alert>
    <el-alert
      :title="warningTitle"
      type="warning"
      show-icon
      effect="dark"
      :closable="false"
      center
      v-if="status === 'warning'">
    </el-alert>
    <el-alert
      :title="errorTitle"
      type="error"
      show-icon
      effect="dark"
      :closable="false"
      center
      v-if="status === 'error'">
    </el-alert>
  </div>
</template>

<script>
export default {
  name: 'Alert',
  props: ['status', 'message'],
  data () {
    return {
      successTitle: this.message || 'Everything is operational.',
      infoTitle: this.message || 'Remember to pass a message dude!',
      maintenanceTitle: this.message || 'System is undergoing maintenance.',
      warningTitle: this.message || 'Some or all systems has degraded performance.',
      errorTitle: this.message || 'Some or all systems are down or are in a critical state.'
    }
  }
}
</script>

<style scoped>
>>>.el-alert {
  padding: 20px;
}
>>>.el-alert__title {
  font-size: 18px;
  line-height: 18px;
}
>>>.el-alert__icon {
  font-size: 24px;
  width: 24px;
}
</style>
