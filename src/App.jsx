import React, { useState, useContext } from 'react'
import Layout from './layout'

import UserProvider, {UserContext} from '../context/user'

function App() {
  const [count, setCount] = useState(0)
  // const {alert,setAlert} = useContext(UserContext)
  const {user, setUser} = useContext(UserContext)


  return (
    <UserProvider>
      <Layout />
    </UserProvider>
  )
}

export default App
