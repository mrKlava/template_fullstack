# Context branch:
Here you can find basic example / template for full stack app using React context

## CONTAINS:
### Front:
- Router with 4 routes (/, main, login, register)
- axios instance for requests
- contexts:
  - auth:
    - user - holds current user
    - login(cred) - login user with credentials
    - register(cred) - register new user
    - logout() - remove current user
  - users:
    - getUsers() - fetches for all registered users 
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
- DB connection for MySQL
- auth router with controllers: login, register, logout
- users router with controllers: getUsers