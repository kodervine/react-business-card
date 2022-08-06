import React from "react"
import myImage  from "./my-image.jpg"

export default function Header (){
  return (
    <div className="header">
      <img src = {myImage} width="80px" alt="my-logo" />
    </div>
  )
}