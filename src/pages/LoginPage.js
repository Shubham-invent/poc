import { Button } from '@material-ui/core'
import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { useHistory } from 'react-router-dom'

const useStyles = makeStyles(theme => ({
  loginCard: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '25%'
  },
  loginText: {
    display: 'flex',
    justifyContent: 'center'
  }
}))

export default function FormPropsTextFields () {
  const classes = useStyles()
  const history = useHistory()

  const handleAuth = responseGoogle => {
    history.replace('/dashboard')
  }

  return (
    <div>
      <p className={classes.loginText}>Login</p>
      <div className={classes.loginCard}>
        <Button onClick={handleAuth}>Click to Login</Button>
      </div>
    </div>
  )
}
