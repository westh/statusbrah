<template>
  <div class="block">
    <el-timeline>
      <el-timeline-item
        v-for="(item, index) in dates"
        :key="index"
        size="large"
        :timestamp="item.text"
        placement="top"
      >
        <el-card style="margin-top: 15px" v-if="incidents.find(o => o.date === item.value)">
          <h4 style="display: inline-block; margin-top: 6px;">{{ incidents.find(o => o.date === item.value).title }}</h4>
          <div style="display: inline-block; float: right;">
            <el-tag
              v-for="(item, index) in incidents.find(o => o.date === item.value).targets"
              :key="index"
              :type="getType(item.type)"
              effect="dark"
              style="margin-right: 4px"
            >
              {{ item.system }}
            </el-tag>
          </div>
          <p>{{ incidents.find(o => o.date === item.value).message }}</p>
          <div v-if="incidents.find(o => o.date === item.value).update">
            <el-divider></el-divider>
            <h4 style="display: inline-block; margin-top: 6px;">Update.</h4>
            <p>{{ incidents.find(o => o.date === item.value).update.message }}</p>
          </div>
          <div v-if="incidents.find(o => o.date === item.value).partialResolve">
            <el-divider></el-divider>
            <h4 style="display: inline-block; margin-top: 6px;">Partially resolved.</h4>
            <div style="display: inline-block; float: right;">
              <el-tag
                v-for="(item, index) in incidents.find(o => o.date === item.value).partialResolve.targets"
                :key="index"
                :type="getType(item.type)"
                effect="dark"
                style="margin-right: 4px"
              >
                {{ item.system }}
              </el-tag>
            </div>
            <p>{{ incidents.find(o => o.date === item.value).partialResolve.message }}</p>
          </div>
          <div v-if="incidents.find(o => o.date === item.value).resolve">
            <el-divider></el-divider>
            <h4 style="display: inline-block; margin-top: 6px;">Resolved.</h4>
            <p>{{ incidents.find(o => o.date === item.value).resolve.message }}</p>
          </div>
        </el-card>
        <h3 v-else style="color: #6a737d">No incidents reported.</h3>
      </el-timeline-item>
    </el-timeline>
  </div>  
</template>

<script>
export default {
  name: 'Timeline',
  props: ['incidents'],
  data () {
    return {
      dates: []
    }
  },
  methods: {
    getLastWeek() {
      let date = new Date()

      const options = { weekday: 'short', year: 'numeric', month: 'long', day: 'numeric' }

      for (let i = 0; i < 7; i++) {
        let tempDate = new Date()
        tempDate.setDate(date.getDate() - i)
        let strText = tempDate.toLocaleDateString('en-AU', options)
        let strValue = tempDate.toISOString().split('T')[0]
        this.dates.push({ text: strText, value: strValue })
      }
    },
    getType (type) {
      if (type === 'error') {
        return 'danger'
      } else if (type === 'maintenance') {
        return ''
      } else {
        return type
      }
    }
  },
  mounted () {
    this.getLastWeek()
  }
}
</script>

<style scoped>
>>>.el-timeline-item__timestamp {
    color: #909399;
    line-height: 1;
    font-size: 17px;
}
>>>.el-timeline-item__timestamp.is-top {
    margin-bottom: 8px;
    padding-top: 2px;
}
</style>
