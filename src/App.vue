<template>
  <div id="app">
    <el-col :span="14" :offset="5">
      <el-container>
        <el-header>
          <h1>ElementUI Status Page</h1>
        </el-header>
        <el-main>
          <Alert :status="status.status" :message="status.message" style="padding-bottom: 20px"></Alert>
          <SystemsList :systems="systems" style="padding-bottom: 10px"></SystemsList>
          <h1>Incidents</h1>
          <Timeline :incidents="incidents"></Timeline>
        </el-main>
        <el-footer>
          Powered by ElementStatusPage
        </el-footer>
      </el-container>
    </el-col>
  </div>
</template>

<script>
import Alert from './components/Alert.vue'
import SystemsList from './components/SystemsList.vue'
import Timeline from './components/Timeline.vue'

export default {
  name: 'app',
  components: {
    Alert,
    SystemsList,
    Timeline
  },
  data () {
    return {
      status: { status: 'error', message: '' },
      systems: [
        { title: 'Website', status: 'error' },
        { title: 'Billing', status: 'warning' },
        { title: 'Network', status: 'success' },
        { title: 'API', status: 'maintenance' }
      ],
      incidents: [
        {
          title: 'Network outage in Europe.',
          message: 'We have been informed that there are outages, we are working on it.',
          date: '2019-06-05',
          targets: [
            { system: 'API', type: 'warning' },
            { system: 'Network', type: 'error' }
          ]
        },
        {
          title: 'Planned maintenance.',
          message: 'We are doing a scheduled maintenance of all systems.',
          date: '2019-06-03',
          targets: [
            { system: 'Website', type: 'maintenance' },
            { system: 'Billing', type: 'maintenance' },
            { system: 'Network', type: 'maintenance' },
            { system: 'API', type: 'maintenance' }
          ]
        }
      ]
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 30px;
}
</style>
