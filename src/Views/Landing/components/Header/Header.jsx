import { AppBar, Button, Toolbar } from '@mui/material'
import React from 'react'

const Header = () => {
  return (
    <AppBar position='static'>
    <Toolbar>
        Landing
        <Button  variant='contained' sx={{ml:'auto'}}>
        Login
        </Button> 
        <Button variant='contained'>
            SignUpfefwewrewr
        </Button>
    </Toolbar>
</AppBar>
  )
}

export default Header
