import 'react-toastify/dist/ReactToastify.css'
import './App.css'

import React from 'react'
import Routes from './routes'
import { ThemeProvider } from '@material-ui/core/styles'
import { ToastContainer } from 'react-toastify'
import theme from './theme/materialTheme'

function App () {
  return (
    <div>
      <ToastContainer />

      <ThemeProvider theme={theme}>
        <Routes />
      </ThemeProvider>
    </div>
  )
}

export default App
