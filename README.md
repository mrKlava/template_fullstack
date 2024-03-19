# Redux-toolkit branch
this branch contains example of redux-toolkit usage for fullstack app

## CONTAINS:
### Front:
- Router with 4 routes (/, main, login, register)
- axios instance for requests
- redux store with 2 reducers 
- - user reducer - to handle auth
- - users reducer - to fetch all registered users
### Back:
- .env
    ```
      # var for server setup
      PORT="2280"
      ORIGIN_CLIENT="http://localhost:3000"

      # var for JWT
      SECRET_KEY="..."

      # var for MySql
      HOST="localhost"
      DB_USER="root"
      DB_PWD="..."
      DB_NAME="..."
    ```
- DB connection to MySQL 
- auth router with controllers: login, register, logout
- users router with controllers: getUsers