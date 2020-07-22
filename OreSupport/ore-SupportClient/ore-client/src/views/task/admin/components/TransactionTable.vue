<template>
  <el-table :data="list" style="width: 100%;padding-top: 15px;">
    <el-table-column label="No." min-width="50">
      <template slot-scope="scope">
        {{ scope.row.No | orderNoFilter }}
      </template>
    </el-table-column>
    <el-table-column label="能力" width="200" align="center">
      <template slot-scope="scope">
        {{ scope.row.ability}}
      </template>
    </el-table-column>
     <el-table-column label="能力1" width="200" align="center">
      <template slot-scope="scope">
        {{ scope.row.ability}}
      </template>
    </el-table-column>
    <el-table-column label="状態" width="200" align="center">
      <template slot-scope="{row}">
        <el-tag :type="row.status | statusFilter">
          {{ row.status }}
        </el-tag>
      </template>
    </el-table-column>
    
  </el-table>
</template>

<script>

export default {
  filters: {
    statusFilter(status) {
      const statusMap = {
        success: 'success',
        pending: 'danger'
      }
      return statusMap[status]
    },
    orderNoFilter(str) {
      return str.substring(0, 30)
    }
  },
  data() {
    return {
      list: null
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    fetchData() {
        var items= [{
            No: '1',
            timestamp: new Date().getTime(),
            username: 'yws',
            ability: '1000',
            'status|1': ['success', 'pending']
          },
          {
            No: '2',
            timestamp: new Date().getTime(),
            username: 'yws',
            ability: '1000',
            'status|1': ['success', 'pending']
          },
          {
            No: '3',
            timestamp: new Date().getTime(),
            username: 'yws',
            ability: '1000',
            'status|1': ['success', 'pending']
          },
          {
            No: '4',
            timestamp: new Date().getTime(),
            username: 'yws',
            ability: '1000',
            'status|1': ['success', 'pending']
          },
           {
            No: '4',
            timestamp: new Date().getTime(),
            username: 'yws',
            ability: '1000',
            'status|1': ['success', 'pending']
          },
           {
            No: '6',
            timestamp: new Date().getTime(),
            username: 'yws',
            ability: '1000',
            'status|2': ['success', 'pending']
          },
           {
            No: '7',
            timestamp: new Date().getTime(),
            username: 'yws',
            ability: '1000',
            'status|0': ['pending','success',]
          }

          ]
        this.list = items.slice(0, 8)
    }
  }
}
</script>
