import { useState } from "react";
import {emailValidation} from "../../../utils/validations/emailValidation.js"
import "../AuthFiled.css"
export function EmailField({value,onChange}){
    const [isValid,setIsValid] = useState({valid:false,rules:{}})
    function handleChange(event){
        const email= event.target.value;
        onChange(email)
        setIsValid(emailValidation(email))

    }

    return(
        <>
            <div className="auth-filed">
            <label>Email</label>
            <input
                type="email"
                placeholder="your@email.com"
                value={value}
                onChange={handleChange}
                required
            ></input>
            <ul className="rules">
               {Object.entries(isValid).map((rule,{valid,message})=>(
                <li key={rule} className={valid? "valid":"invalid"}>
                    {message}
                </li>
               ))}
            </ul>
            </div>
        </>
    )
}