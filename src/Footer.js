import React from "react"
import facebook from "./facebook.svg"
import instagram from "./instagram.svg"
import twitter from "./twitter.svg"
import github from "./github.svg"

export default function Footer (){
  return (
    <div className="footer">
      <img src= {facebook} alt="facebook logo"/>
      <img src= {instagram} alt="instagram logo"/>
      <img src= {twitter} alt="twitter logo"/>
      <img src= {github} alt="github logo"/>
      
    </div>
  )
}