# User Onboarding API

User Onboarding API is a RESTful API built with Node.js and Express.js for managing user data with basic CRUD operations. This API allows you to securely store and manage user information.

## Table of Contents

- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Configuration](#configuration)
- [Usage](#usage)
- [API Documentation](#api-documentation)
- [Docker](#docker)

## Features

- Create, read, update, and delete user records.
- Securely store sensitive user data.
- MongoDB database integration.
- Error handling and validation.
- API documentation using Swagger.
- Dockerized for easy deployment.

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js installed
- MongoDB server running (You can use a locally installed MongoDB or a cloud-based MongoDB service)
- Git (optional, for cloning the repository)

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/user-onboarding-api.git
   ```

2. Change into the project directory:

   ```bash
   cd user-onboarding-api
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

## Configuration

Create a `.env` file in the project root and configure the following environment variables:

- `PORT` - Port for the API server (default is 3000)
- `MONGODB_URI` - MongoDB connection URI

Example .env file:

```dotenv
PORT=3000
MONGODB_URI=mongodb://username:password@localhost:27017/user_onboarding
```

## Usage

Start the API server:

```bash
npm start
```

The API will be available at `http://localhost:3000` (or the port you specified in the `.env` file).

## API Documentation

The API documentation is available using Swagger. To access it:

1. Start the server as mentioned above.
2. Open a web browser and navigate to `http://localhost:3000/api-docs`.

## Docker

To dockerize the application for easy deployment, follow these steps:

1. Build the Docker image:

   ```bash
   docker build -t user-onboarding-api .
   ```

2. Run the Docker container:

   ```bash
   docker run -p 3000:3000 user-onboarding-api
   ```

The API will be accessible at `http://localhost:3000`.


