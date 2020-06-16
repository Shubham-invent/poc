import 'react-data-grid-legacy/dist/react-data-grid.css'

import React from 'react'
import ReactDataGrid from 'react-data-grid-legacy'
const columns = [
  { key: 'id', name: 'ID' },
  { key: 'title', name: 'Title' }
]
const rows = [{ id: 1, title: 'Title 1' }]
const rowGetter = rowNumber => rows[rowNumber]

const Grid = () => {
  return (
    <ReactDataGrid
      columns={columns}
      rowGetter={rowGetter}
      rowsCount={rows.length}
      minHeight={500}
    />
  )
}
export default Grid
