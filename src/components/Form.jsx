import React, { useEffect, useMemo, useRef, useState } from 'react'
import "./Form.css"
import vb from "../assets/vb.png";
import { useNavigate, useSearchParams } from 'react-router-dom';

export default function Form(){
    const [searchParams, _] = useSearchParams(); //Used for focusing when needed

    const [name, setName] = useState(localStorage.getItem("name") ?? "");
    const [email, setEmail] = useState(localStorage.getItem("email") ?? "");
    const [num, setNum] = useState(localStorage.getItem("num") ?? "");
    const [errorMsg, setErrorMsg] = useState("");

    //These will be used to focus on an item when changing an item through profile
    const nameRef = useRef();
    const emailRef = useRef();
    const numRef = useRef();

    const navigate = useNavigate();

    useEffect(() => { //Used to focus on an input
        const focus = searchParams.get("focus");
        if(focus === "name"){
            nameRef.current.focus()
        }
        else if(focus === "email"){
            emailRef.current.focus();
        }
        else if(focus === "num"){
            numRef.current.focus();
        }
        
    }, [])

    useEffect(() => { //Removing Error msg when user starts typing
        setErrorMsg("")
    }, [name, email, num])

    const submitForm =() => {
        if(name?.trim().length === 0 || email?.trim().length === 0 || num?.trim().length === 0){
            setErrorMsg("No Empty Fields Allowed");

        }
        else{
            localStorage.setItem("name", name);
            localStorage.setItem("email", email);
            localStorage.setItem("num", num);
            navigate("/profile");
        }
    }

  return (
    <div className='form-page-container'>
        <div className='form-container'>
            <img style={{"height": "10rem"}} src={vb} />
            <input ref={nameRef} className='input' type="text" placeholder='Name' value={name} onChange={(e) => setName(e.target.value)} />
            <input ref={emailRef} className='input' type="email" placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} />
            <input ref={numRef} className='input' type="number" placeholder='Phone No.' value={num} onChange={(e) => setNum(e.target.value)} />
            <button className='submit-btn' onClick={submitForm}>Submit</button>
            <p className='error'>{errorMsg}</p>
        </div>
    </div>
  )
}
