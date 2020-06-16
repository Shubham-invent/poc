import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'

import DashboardPage from '../pages/DashboardPage'
import LoginPage from '../pages/LoginPage'
import React from 'react'

export default function App () {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <LoginPage />
        </Route>
        <Route path='/dashboard'>
          <DashboardPage />
        </Route>
        <Route path='/legacy'>
          <p>Legacy</p>
        </Route>
        <Route path='/modern'>
          <p>Legacy</p>
        </Route>
      </Switch>
    </Router>
  )
}
