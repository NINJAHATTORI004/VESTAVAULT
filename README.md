# NestJS CRUD API with PostgreSQL

## Author
**Name:** Ansh Mittal  
**Twitter:** [@anshmittal132](https://twitter.com/anshmittal132)



---

## Overview
This project is a basic NestJS application that manages a PostgreSQL database with two tables: `Users` and `WalletAddress`. It includes complete CRUD operations for both tables and is designed to be a foundation for further development.

## Table of Contents
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Running the Application](#running-the-application)
- [API Endpoints](#api-endpoints)
- [Deployment](#deployment)
- [Database Setup](#database-setup)

## Prerequisites
- **Node.js** and **npm**: Download and install from [Node.js website](https://nodejs.org/).
- **Nest CLI**: Install globally using `npm install -g @nestjs/cli`.
- **PostgreSQL**: Download and install from [PostgreSQL website](https://www.postgresql.org/download/).
- **Vercel CLI** (optional for deployment): Install globally using `npm install -g vercel`.

## Installation
1. Clone the repository:
    ```sh
    git clone https://github.com/your-repo/nest-crud-app.git && cd nest-crud-app
    ```
2. Install dependencies:
    ```sh
    npm install
    ```
3. Configure PostgreSQL connection in `src/app.module.ts`.

## Running the Application
1. Run the application:
    ```sh
    npm run start
    ```
2. Access the application at [http://localhost:3000](http://localhost:3000).

## API Endpoints
### Users Endpoints
- `GET /users`
- `GET /users/:id`
- `POST /users`
- `PUT /users/:id`
- `DELETE /users/:id`

### WalletAddress Endpoints
- `GET /wallet-address`
- `GET /wallet-address/:id`
- `POST /wallet-address`
- `PUT /wallet-address/:id`
- `DELETE /wallet-address/:id`



## Database Setup
Ensure your PostgreSQL server is running and create a database named `nest_crud_db`. Update the connection details in `src/app.module.ts`. The application will automatically create the necessary tables on startup.

---

Made with 💗 using TypeScript
