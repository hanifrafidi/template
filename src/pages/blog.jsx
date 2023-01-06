import React from 'react'
import { UserContext } from '../../context/user'

export default function Blog() {
  const {user, setUser, setHapus, setAlert, hapus} = React.useContext(UserContext)

  const handle = (e) => {
    console.log(e.target.value)
  }

  const deleteFunct = () => {
    console.log(hapus.id)
      setTimeout(() => {
        setHapus('')
      },1000)
  }

  React.useEffect(() => {
    if(hapus.type === 'confirm'){
      deleteFunct()
    }
  },[hapus])

  return (
    <div>
      Blog
      <br />
        <input value={user} onChange={(e) => setUser(e.target.value)} />
        <button onClick={() => setAlert({ type : 'success', message : 'berhasil dong!'})} >Alert</button>
        <button onClick={() => setHapus({ type : 'ask', id : 1 })} >Dialog</button>
      <br />
      {user}
    </div>
  )
}
