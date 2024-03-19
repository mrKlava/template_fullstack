import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { userLogin } from "../store/slices/ActionCreator"
import { Link } from "react-router-dom"


function Login() {
  // init hooks
  const dispatch = useDispatch()

  // init states
  const { error } = useSelector(state => state.userReducer)
  const [ inputs, setInputs ] = useState({userId: "", pwd: ""})

  // handle controlled inputs
  const handleChange = (e) => {
    const tg = e.target
    setInputs((prev) => ({...prev, [tg.name] : tg.value}))
  }

  // pass input data to login function in redux
  const handleSubmit = async (e) => {
    e.preventDefault()
    dispatch( userLogin(inputs) )
  }
  
  return (
    <div>
      <Link to='/home'>home</Link>
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
      <Link to='/register'>register</Link>
      {error && <p>{error}</p>}
    </div>
  )
}

export default Login