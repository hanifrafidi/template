import React from 'react'

export const UserContext = React.createContext({})

const UserProvider = (props) => {
    const [user,setUser] = React.useState('mama')
    const [alert,setAlert] = React.useState('')
    const [hapus,setHapus] = React.useState('')
    
    return (
        <UserContext.Provider
         value={{
            user,
            setUser,
            alert,
            setAlert,
            hapus,
            setHapus
         }}
        >
            {props.children}
        </UserContext.Provider>
    )
}

const openAlert = (alert,setAlert) => {
    
}

export default UserProvider;