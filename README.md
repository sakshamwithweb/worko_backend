# Worko Backend

## Getting Started

### Prerequisites

- Node.js
- MongoDB

### Installation

1. Clone the repository:
    ```bash
    git clone <repository-url>
    cd worko-backend
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Create a `.env` file in the root of your project and add the following:
    ```
    MONGO_URI=<your-mongodb-connection-string>
    PORT=3000
    ```

4. Run the application:
    ```bash
    npm start
    ```

5. To run tests:
    ```bash
    npm test
    ```

## API Endpoints

- **GET /worko/user**: List all users
- **GET /worko/user/:userId**: Get a user by ID
- **POST /worko/user**: Create a new user
- **PUT /worko/user/:userId**: Update a user by ID
- **PATCH /worko/user/:userId**: Partially update a user by ID
- **DELETE /worko/user/:userId**: Delete a user by ID

## Authentication

- Basic Auth
  - Username: `admin`
  - Password: `supersecret`
