# THIS IS EMPTY PROJECT
## CONTAINS:
### Front:
- Router with 4 routes (/, main, login, register)
- axios instance for requests
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
- DB connection
- auth router with controllers: login, register, logout