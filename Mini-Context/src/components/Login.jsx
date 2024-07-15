import React, { useContext } from 'react'
import UserContext from '../Context/UserContext'

function Login() {
    const [username, setUsername] = ("")
    const [password, setPassword] = ("")

    const {setUser} = useContext(UserContext)

    const handleSubmit = (e)=>{
        e.preventDefault()
        setUser({username,password});
    }
  return (
    <div>
      <h2>Log-in</h2>
      <input type="text" 
        placeholder='username'
        value = {username}
        onChange={(e)=> setUsername(e.target.value)}
     />

     <>{" "}</>
      <input type="text" 
        placeholder='password'
        value = {password}
        onChange={(e)=> setPassword(e.target.value)}
     />

     <button onClick={handleSubmit}>Log-in</button>
    </div>
  )
}

export default Login