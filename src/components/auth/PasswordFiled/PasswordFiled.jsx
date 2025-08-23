import { useState } from "react"
import { passwordValidation } from "../../../utils/validations/passwordValidation.js";
import "AuthFiled.css"

export function PasswordFiled({value,onChange}){
   const [rules,setRules] = useState({});
   
   function handleChange(event){
    const password = event.target.value;
    onChange(password)
    setRules(passwordValidation(password).rules)

   }

    return (
        <>
            <div className ="auth-field">
            <label>Password</label>
            <input type="password"
            value={value}
            onChange={handleChange}
             placeholder="Password"
             required
             ></input>
            <ul className="rules">
                {Object.entries(rules).map(([rule,{valid,message}])=>
                (<li key={rule} className={valid? "valid":"invalid"}>
                    {message}
                </li>)
                )}
            </ul>
            </div>
        </>
    )
    }