import LegacyDataTable from '../components/LegacyDataTable'
import ModernDataTable from '../components/ModernDataTable'
import Navbar from '../components/Navbar'
import React from 'react'
import Tab from '@material-ui/core/Tab'
import Tabs from '@material-ui/core/Tabs'
import { makeStyles } from '@material-ui/core/styles'
import { useHistory } from 'react-router-dom'

const useStyles = makeStyles(theme => ({
  body: {
    padding: theme.spacing(5),
    paddingTop: theme.spacing(5),
    margin: 'auto'
  },
  cardItem: {
    display: 'flex',
    justifyContent: 'center'
  },
  paginationComponent: {
    display: 'flex',
    justifyContent: 'center',
    padding: theme.spacing(5)
  },
  select: {
    display: 'flex',
    justifyContent: 'center',
    paddingTop: theme.spacing(10)
  },
  sortBy: {
    display: 'flex',
    minWidth: theme.spacing(25)
  }
}))

export default function DashboardPage () {
  const classes = useStyles()
  const history = useHistory()
  const [value, setValue] = React.useState(0)

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }
  return (
    <div>
      <Navbar />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label='simple tabs example'
      >
        <Tab
          label='Older Version Data Table 1yr old package(Legacy)'
          value={1}
        />
        <Tab label='Modern Version Data Table' value={2} />
      </Tabs>

      {value === 1 && <LegacyDataTable />}
      {value === 2 && <ModernDataTable />}
    </div>
  )
}
