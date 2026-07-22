# NestJS LMS Backend

A backend application for a Learning Management System (LMS) built with **NestJS, TypeScript, MongoDB, and Mongoose**.

This project provides user authentication, JWT-based authorization, role-based access control, and course management APIs.

---

## 🚀 Features

* User Registration
* User Login
* Password Hashing using bcrypt
* JWT-based Authentication
* Protected Routes using Auth Guards
* Role-based Authorization
* Course Creation
* Course Management
* MongoDB Database Integration
* Mongoose ODM
* Environment Variables using `.env`
* Docker Support

---

## 🛠️ Tech Stack

* **NestJS** - Backend framework
* **TypeScript** - Programming language
* **MongoDB** - Database
* **Mongoose** - MongoDB ODM
* **JWT** - Authentication
* **bcrypt** - Password hashing
* **Docker** - Containerization
* **Node.js** - Runtime environment

---

## 📁 Project Structure

```text
nest-js-lms/
│
├── src/
│   │
│   ├── auth/
│   │   ├── guards/
│   │   │   └── auth.guard.ts
│   │   │
│   │   ├── auth.controller.ts
│   │   ├── auth.service.ts
│   │   └── auth.module.ts
│   │
│   ├── courses/
│   │   ├── schemas/
│   │   │   └── course.schema.ts
│   │   │
│   │   ├── courses.controller.ts
│   │   ├── courses.service.ts
│   │   └── courses.module.ts
│   │
│   ├── users/
│   │   ├── schemas/
│   │   │   └── user.schema.ts
│   │   │
│   │   ├── users.service.ts
│   │   └── users.module.ts
│   │
│   ├── app.module.ts
│   └── main.ts
│
├── test/
│
├── .env
├── .gitignore
├── Dockerfile
├── nest-cli.json
├── package.json
├── package-lock.json
├── tsconfig.json
└── README.md
```

---

## ⚙️ Installation

### 1. Clone the Repository

```bash
git clone https://github.com/ali-sorathiya64/nest-js-lms-backend.git
```

### 2. Navigate to the Project

```bash
cd nest-js-lms-backend
```

### 3. Install Dependencies

```bash
npm install
```

---

## 🔐 Environment Variables

Create a `.env` file in the root directory of the project.

```env
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
PORT=3000
```

Replace the values with your own configuration.

> Make sure to add `.env` to `.gitignore` and never commit your secret keys or database credentials to GitHub.

---

## ▶️ Running the Application

### Development

Run the application in development mode:

```bash
npm run start:dev
```

The server will start at:

```text
http://localhost:3000
```

### Standard Start

```bash
npm run start
```

### Production

Build the project:

```bash
npm run build
```

Start the production build:

```bash
npm run start:prod
```

---

## 🐳 Running with Docker

### Build the Docker Image

```bash
docker build -t nest-js-lms .
```

### Run the Container

```bash
docker run -p 3000:3000 nest-js-lms
```

The application will be available at:

```text
http://localhost:3000
```

### Check Running Containers

```bash
docker ps
```

### Check All Containers

```bash
docker ps -a
```

### Stop a Container

```bash
docker stop <container_id>
```

### Start a Stopped Container

```bash
docker start <container_id>
```

---

## 🔑 Authentication Flow

The application uses JWT-based authentication.

### Registration

Users can create an account by providing the required registration details.

The password is securely hashed using **bcrypt** before being stored in the database.

### Login

After successful login, the server generates a JWT token.

The token is used to authenticate requests to protected routes.

### Authentication Guard

Protected routes use a custom authentication guard to:

1. Extract the JWT token from the request.
2. Verify the token using the JWT secret.
3. Extract the user information from the token payload.
4. Attach the authenticated user information to the request.
5. Allow access to protected routes.

---

## 👥 Authorization

The application includes role-based authorization.

Different users can have different roles, and protected operations can be restricted based on the user's role.

For example, course creation can be restricted to authorized users.

---

## 📚 Course Management

The LMS backend provides APIs for managing courses.

Course information includes details such as:

* Course name
* Course description
* Course level
* Course price

Authenticated and authorized users can create and manage course data.

---

## 🗄️ Database

This project uses **MongoDB** as the database and **Mongoose** for database interaction.

Mongoose schemas are used to define and manage the structure of:

* Users
* Courses

The MongoDB connection is configured using environment variables.

---

## 🔌 API Overview

### Authentication Routes

```text
POST /auth/register
POST /auth/login
```

### Course Routes

```text
POST /courses
GET /courses
GET /courses/:id
PATCH /courses/:id
DELETE /courses/:id
```

> The exact available routes may depend on the current implementation of the project.

---

## 📦 Available Scripts

```bash
# Start the application
npm run start

# Start in development mode
npm run start:dev

# Build the application
npm run build

# Start production build
npm run start:prod

# Run tests
npm run test

# Run tests in watch mode
npm run test:watch

# Run end-to-end tests
npm run test:e2e

# Check test coverage
npm run test:cov
```

---

## 🐳 Dockerfile

The project includes Docker support for running the NestJS application inside a container.

The Docker image installs the project dependencies, builds the NestJS application, and runs the compiled application from the `dist` directory.

---

## 🎯 Learning Goals

This project was built to practice backend development with NestJS and understand:

* NestJS project structure
* Modules, Controllers, and Services
* Dependency Injection
* MongoDB integration
* Mongoose schemas
* User authentication
* JWT authentication
* Password hashing
* Authentication Guards
* Role-based authorization
* REST API development
* Environment configuration
* Docker basics

---

## 🔮 Future Improvements

Some possible improvements for the project include:

* Add Swagger API documentation
* Add DTO validation
* Add refresh token authentication
* Add course enrollment functionality
* Add lessons and course content
* Add user progress tracking
* Add pagination and filtering
* Add automated tests
* Deploy the application to a cloud platform

---

## 👨‍💻 Author

**Ali Sorathiya**

GitHub:
https://github.com/ali-sorathiya64

---

## 📄 License

This project is created for learning and educational purposes.
