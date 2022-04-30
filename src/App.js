import './App.css'
import FormHook from './components/FormHook'
//import FormDemo from './components/FormDemo'
//import Header from './components/Header'
//import UsersList from './components/UsersList'
//import DeletedUser from './components/DeletedUser'
//import { useState, useEffect } from 'react'


function App() {
  
    return(
        <div>
         
            <FormHook/>
        </div>
    ) 

    /* 
    let list1=['Home','Login','Register','AboutUs'];
  
    let [users,setUsers]= useState(null)
    let[dusers,setDeletedUsers]=useState([])
  
    //useeffect
    useEffect(()=>
    {
      fetch("http://localhost:8080/users")
      .then(res=>res.json())
      .then(data=>{
        setUsers(data)
  
      })
    },[])
     
    //to delete
    const handleUserDelete=(id)=>
  {
     let newUsers=users.filter(userObj=>userObj.id !==id)
     setUsers(newUsers)
     let deletedUsers=users.filter(uObj=>uObj.id==id)
     let [a]=deletedUsers
     setDeletedUsers([...dusers,a])
  }
  
  //to restore
  const handleUserRestore=(id)=>
  {
    let restoreUser=dusers.filter(uObj=>uObj.id==id)
    let newArr=[...users,...restoreUser]
    setUsers(newArr)
    let newDusers=dusers.filter(el=>el.id!==id)
    setDeletedUsers(newDusers)
  }
    return(
      <div className="main">
         <Header data={list1}/>
         {users && <UsersList data={users} deleteuser={handleUserDelete}/>}
         <DeletedUser dUsers={dusers} restoreuser={handleUserRestore}/>
      </div>
    ) */
  }
  
  export default App;