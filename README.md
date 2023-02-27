# FAQ Manager App

The FAQ Manager is a full-stack web application designed to help users manage frequently asked questions. The frontend of the application is built with Next.js, while the backend is built with Node.js and uses TypeScript.

## Introduction

The FAQ Manager app is designed to be easy to use, with a simple interface that makes it easy to add, delete, and search for frequently asked questions. This provides instructions for installing and running the app, as well as information about the app's features, structure, and technologies used.

## Features

The FAQ Manager app allows users to:

- Create and manage frequently asked questions
- Add Questions
- Delete questions
- Search for questions

## Getting Started

## Prerequisites

- Node.js (v12 or higher)
- npm (v6 or higher)

# Frontend

## Installation

1. Clone the repository to your local machine.

```bash
git clone https://github.com/dhawel/FAQ-manager.git

```

2. Navigate to the frontend project directory.

```bash
cd client
```

3. Install the dependencies.

```bash
npm install
```

4. Create a .env file in the root directory of the project and add backend API URL.

```bash
BASE_URL = "<backend API URL>"
```

## Structure

- `components/` : React components used in the app.
- `pages/`: Next.js pages that serve as the app's routes.
- `public/`: Static assets used in the app.
- `redux/`: Redux toolkit implementation the app's state.

# Bankend

To run the backend API of the app, follow these steps:

1. Clone the repository to your local machine.

```bash
git clone https://github.com/dhawel/FAQ-manager.git

```

2. Navigate to the project directory.

```bash
cd server
```

3. Install the dependencies.

```bash
npm install
```

4. Create a .env file in the root directory of the project and add your MongoDB connection string

```bash
MONGODB_URI=mongodb://<username>:<password>@<hostname>/<database-name>
```

## Usage

To run the app, follow these steps:

1. Start the development server for the frontend.

```bash
cd client
npm run dev
```

2. Start the development server for the backend.

```bash
cd server
npm run dev
```

3. Open your browser and go to http://localhost:3000.

   This will start the server in development mode with hot-reloading enabled.

## Deployment

To deploy the application, you can use a hosting service like [Vercel](https://vercel.com) for the client and [Railway](https://railway.app/) for the server. Be sure to update your environment variables accordingly.

## Technologies Used

This app was built using the following technologies:

- TypeScript
- Nextjs
- Material UI
- Redux Toolkit
- Node.js
- Express.js
- MongoDB
- Mongoose

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change

## Learn More

To learn more about Next.js and Nodejs, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
- [Learn Nodejs](https://nodejs.org/en/)- official Node.js website.
