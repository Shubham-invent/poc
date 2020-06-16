import 'react-data-grid/dist/react-data-grid.css'

import DataGrid from 'react-data-grid'
import React from 'react'

const columns = [
  { key: 'id', name: 'ID' },
  { key: 'title', name: 'Title' }
]

const rows = [
  { id: 0, title: 'Example' },
  { id: 1, title: 'Demo' }
]

function App () {
  return <DataGrid columns={columns} rows={rows} />
}

export default App
