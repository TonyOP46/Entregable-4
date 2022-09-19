import axios from 'axios'
import { useEffect } from 'react'
import { useState } from 'react'
import './App.css'
import UsersForm from './components/UsersForm'
import UsersList from './components/UsersList'

function App() {
  
  const [users, setUsers]=useState([])
  const [selectedUsers, setSelectedUsers]=useState(null)
  useEffect(()=>{
    axios.get("https://users-crud1.herokuapp.com/users/")
    .then(res=>setUsers(res.data))
  },[])

  console.log(users)

  const getUsers = ()=>{
    axios.get("https://users-crud1.herokuapp.com/users/")
    .then(res=>setUsers(res.data))
  }

  const deleteUsers = (id)=>{
    axios.delete(`https://users-crud1.herokuapp.com/users/${id}`)
    .then(()=>getUsers())
  }

  const selectUsers=(user)=>{
    setSelectedUsers(user)
  }

  const deselectedUsers = ()=>setSelectedUsers(null)

  return (
    <div className="App">
      <UsersForm 
      getUsers={getUsers}
      selectedUsers={selectedUsers}
      deselectedUsers={deselectedUsers}/>
      <UsersList 
      users={users}
      deleteUsers={deleteUsers}
      selectUsers={selectUsers}/>
    </div>
  )
}

export default App
