# Login System with React, Express, and MySQL

This is a full-stack login system built with React.js, Express, and MySQL. It features token-based authentication and protected routes.

## Prerequisites

- Node.js (v14 or higher)
- MySQL server
- npm or yarn

## Setup

1. Clone the repository
2. Install backend dependencies:
   ```bash
   npm install
   ```

3. Install frontend dependencies:
   ```bash
   cd client
   npm install
   ```

4. Create a MySQL database named `login_system`

5. Update the database configuration in `server.js` if needed:
   ```javascript
   const db = mysql.createConnection({
     host: 'localhost',
     user: 'root',
     password: '', // Update with your MySQL password
     database: 'login_system'
   });
   ```

6. Create a `.env` file in the root directory with the following content:
   ```
   JWT_SECRET=your-secret-key
   PORT=5000
   ```

## Running the Application

1. Start the backend server:
   ```bash
   npm run dev
   ```

2. In a new terminal, start the frontend development server:
   ```bash
   cd client
   npm start
   ```

3. Open your browser and navigate to `http://localhost:3000`

## Features

- User authentication with JWT tokens
- Protected routes
- Form validation
- Responsive design
- Secure password hashing
- Session management

## Security Features

- Passwords are hashed using bcrypt
- JWT tokens for session management
- Protected API endpoints
- Form validation
- Secure password storage

## API Endpoints

- POST `/api/register` - Register a new user
- POST `/api/login` - Login user
- GET `/api/protected` - Protected route example

## Technologies Used

- Frontend:
  - React.js
  - React Router
  - Axios
  - CSS-in-JS

- Backend:
  - Express.js
  - MySQL
  - JWT
  - bcryptjs
  - cors 