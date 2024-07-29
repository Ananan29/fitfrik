import React,{useState} from "react";
import "./Navigationbar.css";
import {IoIosBody} from "react-icons/io";
import logo from "../../assets/purplestar.png"
import Authopopup from "../Authopopup/Authopopup";

const Navigationbar = () => {
  const [isloggedin,setisloggedin]=useState(false)
  const [showpopup, setShowpopup] = useState(true)
  return (
    <div className="divn">
      <img src={logo} alt="logo" className="img"/>
      <a href="/" className="a">Home</a>
      <a href="/about" className="a">About</a>
      <a href="/profile" className="a"><IoIosBody/></a>
      {
        isloggedin?
        <button className="btn">logout</button>:
        <button className="btn">login</button>
      }
      {
        showpopup&&
        // <Authopopup/>
        <h1 className="mainhead1">Login page</h1>
      }
    </div>
  )
}

export default Navigationbar