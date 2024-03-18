import { useContext, useState } from "react"
import { AuthContext } from "../authContext"

function Login() {
  const { login } = useContext(AuthContext)
  const [ inputs, setInputs ] = useState({userId: "", pwd: ""})

  const handleChange = (e) => {
    const tg = e.target

    setInputs((prev) => ({...prev, [tg.name] : tg.value}))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const resp = await login(inputs)
    } catch (err) {
      console.log(err)
    }
  }
  
  return (
    <div>
      <h1>Login</h1>
      <form>
        <input 
          name="userId" 
          type="text" 
          onChange={handleChange}
          value={inputs.userId} 
        />
        <input 
          name="pwd" 
          type="password" 
          onChange={handleChange}
          value={inputs.pwd} 
        />

        <input type="submit" value="submit" onClick={handleSubmit}/>
      </form>
    </div>
  )
}

export default Login