<template>
  <div id="app">
    <el-col :span="14" :offset="5">
      <el-container>
        <el-header style="margin-top: 20px">
          <img src="./assets/logo.png" style="height: 80%"/>
          <!--
          <h1>ElementUI Status Page</h1>
          -->
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
import systems from './systems'
import incidents from './incidents'

export default {
  name: 'app',
  components: {
    Alert,
    SystemsList,
    Timeline
  },
  data () {
    return {
      info: false,
      statusPriority: [
        'success',
        'maintenance',
        'warning',
        'error'
      ],
      status: {
        status: '',
        message: ''
      },
      incidents: incidents,
      systems: systems
    }
  },
  methods: {
    getSystems () {
      return new Promise((resolve) => {
        this.incidents.forEach(incident => {
          // console.log(incident.date)
          this.systems.forEach(system => {
            // console.log(incident.title + ' ' + system.title)
            const systemInTargets = incident.targets.some(target => target.system === system.title)
            // console.log('  systemInTargers: ' + systemInTargets)
            let systemInPartialResolve = false
            if (incident.partialResolve) {
              systemInPartialResolve = incident.partialResolve.targets.some(target => target.system === system.title)
            }
            // console.log('  systemInPartialResolve: ' + systemInPartialResolve)
            const resolve = incident.resolve
            // console.log('  resolve: ' + resolve)
            const newStatus = incident.targets.find(target => target.system === system.title) ? incident.targets.find(target => target.system === system.title).type : 'success'
            const newStatusTakesPriority = this.statusPriority.indexOf(newStatus) > this.statusPriority.indexOf(system.status)
            if (systemInTargets && !systemInPartialResolve && !resolve && newStatusTakesPriority) {
              system.status = newStatus
            } else if (newStatusTakesPriority) {
              system.status = 'success'
            }
          })
        })
        // console.log(JSON.stringify(this.systems))
        resolve()
      })
    },
    getStatus () {
      this.status.status = 'success'
      this.systems.forEach(system => {
        if (this.statusPriority.indexOf(system.status) > this.statusPriority.indexOf(this.status.status)) {
          this.status.status = system.status
        } else if (this.info) {
          this.status.status = 'info'
        }
      })
    }
  },
  beforeMount () {
    this.getSystems().then(this.getStatus)
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
