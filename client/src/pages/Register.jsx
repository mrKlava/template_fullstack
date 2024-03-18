import { useContext, useState } from "react"
import { AuthContext } from "../authContext"
import { useNavigate } from "react-router-dom"

function Register() {
  const navigate = useNavigate()
  const { register } = useContext(AuthContext)
  const [ inputs, setInputs ] = useState({firstname: "", lastname: "", pwd: ""})

  const handleChange = (e) => {
    const tg = e.target

    setInputs((prev) => ({...prev, [tg.name] : tg.value}))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const resp = await register(inputs)

      if (resp) navigate('/login')
    } catch (err) {
      console.log(err)
    }
  }
  
  return (
    <div>
      <h1>Register</h1>
      <form>
        <input 
          name="firstname" 
          type="text" 
          onChange={handleChange}
          value={inputs.userId} 
        />
        <input 
          name="lastname" 
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

export default Register