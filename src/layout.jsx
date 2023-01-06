import React, { useState, useContext } from 'react'
import {Routes, Route, Link, useNavigate} from 'react-router-dom'
import {Container, AppBar, Toolbar, Typography, Box, Paper, Button} from '@mui/material'

import Blog from './pages/blog'
import About from './pages/about'
import Home from './pages/home'

import Dialog from './components/Dialog'
import Alert from './components/Alert'
import {UserContext} from '../context/user'

export default function layout() {
    const {alert, setAlert, hapus, setHapus} = useContext(UserContext)
    const navigate = useNavigate()

    React.useEffect(() => {
        if(alert !== ''){
            navigate('/about')
            setTimeout(() => {
               setAlert('') 
            }, 2000);
        }
    },[alert])
  
  return (
    <Box sx={{ backgroundColor: 'black', color:'white', minHeight: '100vh',}}>      
      <AppBar position='static' color='transparent'>
        <Toolbar sx={{ justifyContent:'flex-end'}}>
          <Button color='inherit' component={Link} to='/'>Home</Button>
          <Button color='inherit' component={Link} to='/blog'>Blog</Button>
          <Button color='inherit' component={Link} to='/about'>About</Button>
        </Toolbar>
      </AppBar>
      <Container maxWidth='xl'>
      
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/about' element={<About />} />
        </Routes>      
      </Container>

      <Alert key={Math.random()} type={alert.type} message={alert.message} />
      <Dialog hapus={hapus.type} setHapus={(hapus) => setHapus(hapus)} />      
    </Box>
  )
}
