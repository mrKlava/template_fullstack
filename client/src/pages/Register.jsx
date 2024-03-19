import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { userRegister } from "../store/slices/ActionCreator"
import { Link, useNavigate } from "react-router-dom"


function Register() {
  // init hooks
  const navigate = useNavigate()
  const dispatch = useDispatch()
  
  // init states
  const { error } = useSelector(state => state.userReducer)
  const [ inputs, setInputs ] = useState({firstname: "", lastname: "", pwd: ""})

  // handle controlled component
  const handleChange = (e) => {
    const tg = e.target
    setInputs((prev) => ({...prev, [tg.name] : tg.value}))
  }

  // pass input data to register function in redux
  const handleSubmit = async (e) => {
    e.preventDefault()
    dispatch( userRegister(inputs) )
  }

  // check if user was created -> redirect to login
  useEffect(() => {
    if(error === "User has been created") navigate('/login')
  },[error])
  
  return (
    <div>
      <Link to='/'>home</Link>
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
      {error && <p>{error}</p>}
      <Link to='/login'>login</Link>
    </div>
  )
}

export default Register