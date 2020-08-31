<template>
  <div id='app'>
    <el-container class='customContainer'>
      <el-header>
        <img
          src='./assets/logo.png'
          class='logo'
        />
      </el-header>
      <el-main>
        <Alert
          :status='status.status'
          :message='status.message'
        />
        <SystemsList :systems='systems' />
        <h1>
          Incidents
        </h1>
        <Timeline :incidents='incidents' />
      </el-main>
      <el-footer>
        Powered by <a href='https://github.com/Westh/statusbrah'>statusbrah.</a>
      </el-footer>
    </el-container>
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
          this.systems.forEach(system => {
            const systemInTargets = incident.targets.some(target => target.system === system.title)
            let systemInPartialResolve = false
            if (incident.partialResolve) {
              systemInPartialResolve = incident.partialResolve.targets.some(target => target.system === system.title)
            }
            const resolve = incident.resolve
            const newStatus = incident.targets.find(target => target.system === system.title) ? incident.targets.find(target => target.system === system.title).type : 'success'
            const newStatusTakesPriority = this.statusPriority.indexOf(newStatus) > this.statusPriority.indexOf(system.status)
            if (systemInTargets && !systemInPartialResolve && !resolve && newStatusTakesPriority) {
              system.status = newStatus
            } else if (newStatusTakesPriority) {
              system.status = 'success'
            }
          })
        })
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
.el-header {
  margin-top: 20px;
}
.logo {
  height: 80%;
}
.Alert {
  padding-bottom: 20px;
}
.SystemsList {
  padding-bottom: 10px;
}
@media screen and (min-width: 1100px) {
  .customContainer {
    width: 60%;
    margin: auto;
    max-width: 900px;
  }
}
@media screen and (max-width: 1100px) and (min-width: 800px) {
  .customContainer {
    width: 80%;
    margin: auto;
  }
}
@media screen and (max-width: 800px) and (min-width: 700px) {
  .customContainer {
    width: 90%;
    margin: auto;
  }
}
@media screen and (max-width: 700px) {
  .customContainer {
    width: 100%;
    margin: auto;
  }
}
</style>
