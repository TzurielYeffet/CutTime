import { useState } from "react";
import { phoneValidation } from "../../../utils/validations/phoneValidation.js";
import "../AuthFiled.css"

export function AuthPhone({ value, onChange }) {
  const [rules, setRules] = useState({});

  function handleChange(event) {
    const val = event.target.value;
    onChange(val);
    setRules(phoneValidation(val).rules);
  }

  return (
    <div className="auth-field">
      <label>Phone</label>
      <input
        type="tel"
        value={value}
        placeholder="+1234567890"
        onChange={handleChange}
        required
      />
      <ul>
        {Object.entries(rules).map(([key, { valid, message }]) => (
          <li key={key} className={valid ? "valid" : "invalid"}>
            {message}
          </li>
        ))}
      </ul>
    </div>
  );
}

