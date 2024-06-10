Sure! Below is the content formatted as a `README.md` file:

```markdown
# NestJS CRUD API with PostgreSQL

### Author
**Name:** Ansh Mittal  
**Twitter:** [@anshmittal132](https://twitter.com/anshmittal132)

Made with 💗 using TypeScript

---

### Overview

This project is a basic NestJS application that manages a PostgreSQL database with two tables: `Users` and `WalletAddress`. It includes complete CRUD operations for both tables and is designed to be a foundation for further development.

### Table of Contents

- [Prerequisites](#prerequisites)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Running the Application](#running-the-application)
- [API Endpoints](#api-endpoints)
  - [Users Endpoints](#users-endpoints)
  - [WalletAddress Endpoints](#walletaddress-endpoints)
- [Swagger Documentation](#swagger-documentation)
- [Deployment](#deployment)
- [Database Setup](#database-setup)

### Prerequisites

- **Node.js** and **npm**: Download and install from [Node.js website](https://nodejs.org/).
- **Nest CLI**: Install globally using `npm install -g @nestjs/cli`.
- **PostgreSQL**: Download and install from [PostgreSQL website](https://www.postgresql.org/download/).
- **Vercel CLI** (optional for deployment): Install globally using `npm install -g vercel`.

### Project Structure

```
nest-crud-app/
├── src/
│   ├── app.module.ts
│   ├── main.ts
│   ├── users/
│   │   ├── dto/
│   │   │   ├── create-user.dto.ts
│   │   │   ├── update-user.dto.ts
│   │   ├── users.controller.ts
│   │   ├── users.entity.ts
│   │   ├── users.module.ts
│   │   ├── users.service.ts
│   ├── wallet-address/
│   │   ├── dto/
│   │   │   ├── create-wallet-address.dto.ts
│   │   │   ├── update-wallet-address.dto.ts
│   │   ├── wallet-address.controller.ts
│   │   ├── wallet-address.entity.ts
│   │   ├── wallet-address.module.ts
│   │   ├── wallet-address.service.ts
├── tsconfig.json
├── package.json
```

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-repo/nest-crud-app.git
   cd nest-crud-app
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Configure PostgreSQL connection**:
   Update the PostgreSQL connection details in `src/app.module.ts`.

### Running the Application

1. **Run the application**:
   ```bash
   npm run start
   ```

2. **Access the application**:
   Open your browser and navigate to `http://localhost:3000`.

### API Endpoints

#### Users Endpoints

- **Get all users**:
  ```
  GET /users
  ```

- **Get a user by ID**:
  ```
  GET /users/:id
  ```

- **Create a new user**:
  ```json
  POST /users
  {
    "name": "John Doe",
    "email": "john@example.com"
  }
  ```

- **Update a user by ID**:
  ```json
  PUT /users/:id
  {
    "name": "Jane Doe",
    "email": "jane@example.com"
  }
  ```

- **Delete a user by ID**:
  ```
  DELETE /users/:id
  ```

#### WalletAddress Endpoints

- **Get all wallet addresses**:
  ```
  GET /wallet-address
  ```

- **Get a wallet address by ID**:
  ```
  GET /wallet-address/:id
  ```

- **Create a new wallet address**:
  ```json
  POST /wallet-address
  {
    "user_id": 1,
    "address": "0x123...",
    "type": "Ethereum"
  }
  ```

- **Update a wallet address by ID**:
  ```json
  PUT /wallet-address/:id
  {
    "address": "0x456...",
    "type": "Bitcoin"
  }
  ```

- **Delete a wallet address by ID**:
  ```
  DELETE /wallet-address/:id
  ```

### Swagger Documentation

The application includes Swagger for API documentation. Once the application is running, you can access the Swagger UI at `http://localhost:3000/api`.

### Deployment

To deploy this project to Vercel, follow these steps:

1. **Log in to Vercel**:
   ```bash
   vercel login
   ```

2. **Deploy the application**:
   ```bash
   vercel
   ```

3. **Follow the prompts to configure and deploy**.

### Database Setup

Ensure your PostgreSQL server is running and create a database named `nest_crud_db`. Update the connection details in `src/app.module.ts` accordingly. The application will automatically create the necessary tables on startup.

---

By following these instructions, you should be able to set up, run, and deploy the NestJS CRUD API application. If you encounter any issues or have questions, feel free to reach out on Twitter [@anshmittal132](https://twitter.com/anshmittal132).
```
