import { Route, Routes } from "react-router-dom";
import "./App.css";
import NavBar from "./Components/NavBar"
import Home from './Pages/Home'
import Error from "./Pages/Error";
import ListUser from './Pages/ListUser'
import Profile from './Pages/Profile'
import Admin from './Pages/Admin'
import {useState} from 'react'
function App() {
  const[IsAuthAdmin,setIsAuthAdmin]=useState(false)
  return <div className="App">
    <NavBar/>
    <Routes>
      <Route exact path="/" element={<Home/>}/>
      <Route  path="/*" element={<Error/>}/>
      <Route path="/listuser" element={<ListUser/>}/>
      <Route path="/profile/:id" element={<Profile/>}/>
     {IsAuthAdmin? <Route path="/admin" element={<Admin/>}/> :null}
    </Routes>
  </div>;
}

export default App;
