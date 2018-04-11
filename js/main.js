$(document).ready(function () {
  var table = $('#nodeTable').DataTable({
    columnDefs: [
      {
        targets: [0, 1],
        visible: false,
        searchable: false
      }
    ],
    order: [[ 2, 'asc' ]],
    searching: false,
    info: false,
    paging: false,
    lengthMenu: -1
  })
  loadTable(table)
  setInterval(function () {
    updateTable(table)
  }, 30000)
})

function updateTable (table) {
  table.rows().every(function (rowIdx, tableLoop, rowLoop) {
    var d = this.data()
    var that = this
    $.ajax({
      // url: apiInterface + d[0] + '/' + d[1] + '/getinfo?random=' + (new Date()).getTime(),
      url: 'http://' + d[0] + ':' + d[1] + '/getinfo'
      dataType: 'json',
      type: 'GET',
      cache: 'false',
      success: function (data) {
        if (!data.error) {
          d[4] = data.height
          d[5] = data.difficulty
          d[6] = (data.globalHashRate / 1000000).toFixed(2) + ' MH/s'
          d[7] = data.last_known_block_index
          d[8] = data.tx_pool_size
          d[9] = data.tx_count
          d[10] = data.incoming_connections_count
          d[11] = data.outgoing_connections_count
          d[12] = data.status
        } else {
          d[4] = 0
          d[5] = 0
          d[6] = '0 H/s'
          d[7] = 0
          d[8] = 0
          d[9] = 0
          d[10] = 0
          d[11] = 0
          d[12] = 'Offline'
        }
        that.invalidate()
      }
    })
  })
  table.draw()
}

function loadTable (table) {
  $.each(nodes, function (index, node) {
    $.ajax({
      // url: apiInterface + node.hostname + '/' + node.port + '/getinfo?random=' + (new Date()).getTime(),      
      url: 'http://' + node.hostname + ':' + node.port + '/getinfo',
      dataType: 'json',
      type: 'GET',
      cache: 'false',
      success: function (data) {
        if (!data.error) {
          table.row.add([
            node.hostname,
            node.port,
            node.name,
            node.region,
            data.height,
            data.difficulty,
            (data.globalHashRate / 1000000).toFixed(2) + ' MH/s',
            data.last_known_block_index,
            data.tx_pool_size,
            data.tx_count,
            data.incoming_connections_count,
            data.outgoing_connections_count,
            data.status
          ]).draw(false)
        } else {
          table.row.add([
            node.hostname,
            node.port,
            node.name,
            node.region,
            0,
            0,
            '0 H/s',
            0,
            0,
            0,
            0,
            0,
            'Offline'
          ]).draw(false)
        }
      }
    })
  })
}
