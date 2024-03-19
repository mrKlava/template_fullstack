import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getUsers, userLogout } from "./store/slices/ActionCreator"
import { Link } from "react-router-dom"

function App() {
  // init hooks
  const dispatch = useDispatch()

  // init states
  const { users } = useSelector(state => state.usersReducer)
  const { user } = useSelector(state => state.userReducer)

  useEffect(() => {
    dispatch( getUsers() )
  }, [])

  return (
    <div className="App">
      {
        user 
        ? <button onClick={() => dispatch( userLogout() )}>logout</button>
        : <Link to='/login'>login</Link>
      }
      <h1>Users</h1>
      <ul>
        <li><strong>ID - name</strong></li>
        {
          users.map((user) => <li key={user.user_id}>{user.user_id} - {user.firstname} {user.lastname}</li>)
        }
      </ul>
    </div>
  )
}

export default App
