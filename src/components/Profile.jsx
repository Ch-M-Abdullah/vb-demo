import React from 'react'
import "./Profile.css"
import { Link, useNavigate } from 'react-router-dom';

export default function Profile() {
  const name = localStorage.getItem("name");
  const email = localStorage.getItem("email");
  const num = localStorage.getItem("num");

  const navigate = useNavigate();

  function changeInfo(infoType){
    navigate(`/?focus=${infoType}`);
  }

  if(!name || !email || !num){
    return(
      <Link to={"/"}>
        <p style={{"fontSize": "1.5rem", "textAlign": "center"  }}>You Must Enter Your Information Before Being Able to Access it.</p>
      </Link>
    )
  }

  return (
    <div className='profile-container'>
      <p className='profile-title'>Your Data</p>
      <div className='profile-data'>
        <div>
        <b>Name:</b> <span onClick={() => changeInfo("name") } title='Tap to change'>{name}</span>
        </div>
        <div>
        <b>Email:</b> <span onClick={() => changeInfo("email") } title='Tap to change'>{email}</span>
        </div>
        <div>
        <b>Number: </b> <span onClick={() => changeInfo("num") } title='Tap to change'>{num}</span>
        </div>
      </div>
    </div>
  )
}
