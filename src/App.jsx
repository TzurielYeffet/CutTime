import { useState } from 'react'
import './App.css'
import { signIn } from './services/supabase/auth'
function App() {
  const [count, setCount] = useState(0)
  signIn()
  return (
    <>
      
    </>
  )
}

export default App
