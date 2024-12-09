"use client";
import { useState } from "react";
import { PiEyeThin, PiEyeSlashThin } from "react-icons/pi";


export default function PasswordDiv() {

    const [eye, setEye] = useState(false)

    const handleEdit = () => {
        setEye(true)
    }
    const unHandleEdit = () => {
        setEye(false)
    }

    return (
        <div>
             {eye ?  
                (<div className="passwordInputDiv"> 
                    <input type="text" placeholder="Password" />
                    <span><button onClick={unHandleEdit}><PiEyeSlashThin size={24}/></button></span> 
                </div> ) 
                : 
                (<div className="passwordInputDiv"> 
                    <input type="password" placeholder="Password" />
                    <button onClick={handleEdit}><span><PiEyeThin size={24}/></span></button> 
                </div>) 
            }
        </div>
           
           
             
       
    )
}


