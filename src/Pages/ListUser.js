import axios from 'axios'
import React, { useEffect, useState } from 'react'
import UserCard from '../Components/UserCard'
const ListUser = () => {
  const[users,setUser]=useState([])
  useEffect(()=>{
    axios.get("https://jsonplaceholder.typicode.com/users") 
    .then((res)=>setUser(res.data))
    .catch((err=>console.log(err)))
  },[])

console.log(users)
  return (
    <div style={{ display :"flex" , flexDirection: "row" ,justifyContent : "space-around" , flexWrap : "wrap"}}>
      {users.map((el)=><UserCard  user={el} key={el.id}/>)}
    </div>
  )
}

export default ListUser