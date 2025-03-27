# MiniBlogApp

MiniBlogApp is a full-stack MEVN (MongoDB, Express.js, Vue.js, Node.js) app designed to allow users to jot down their daily thoughts. It features encrypted user sign-up/log-in, CRUD operations for blog posts, and a modern user interface built with Vue.js, Tailwind CSS, and PrimeIcons.

## Table of Contents
- [Live Demo](#live-demo)
- [Features](#features)
- [Initial Design](#initial-design)
- [Installation](#Installation)
- [Technical Implementation](#technical-implementation)
- [Screenshots](#screenshots)
- [Future Features](#future-features)
- [License](#license)

## Live Demo
You can view the live demo of the project at the following URL:
[**MiniBlogApp - Live Demo**](https://mini-blog-app-one.vercel.app)

## Features

- **Encrypted User Authentication**: Secure sign-up and log-in functionality.
- **CRUD Operations**: Users can create, read, update, and delete blog posts.
- **RESTful API**: Backend exposed as a REST API for seamless communication.
- **Modern UI**: A sleek, responsive, and modern user interface styled with Tailwind CSS and PrimeIcons.
- **User Data Storage**: MongoDB is used to store user data and blog posts.
- **Pagination**: Posts are paginated, allowing users to browse through posts in manageable chunks.
- **Navigation Bar&Dropdown Menu**: Provides a navigation bar and a dropdown menu to navigate between different sections of the app.

## Initial Design

The initial design was created using Figma.

![Figma Design](AppPhotos/InitialFigmaDesign.png)

## Installation

### Prerequisites

To get started, make sure you have the following installed:

- Node.js (version 14 or higher)
- MongoDB running locally or a MongoDB Atlas cluster
- npm or yarn (package manager)

### Frontend Setup

1. Clone the repository:
    ```bash
    git clone https://github.com/your-username/MiniBlogApp.git
    cd MiniBlogApp
    ```

2. Navigate to the frontend directory and install dependencies:
    ```bash
    cd frontend
    npm install
    ```

2. Set up the `.env` file:
    - Create the `.env` file:
      ```bash
      touch .env
      ```
    - Add the following to your `.env` file:
      ```bash
      VITE_APP_API_URL = http://localhost:3000 ( Replace with your backend URL)
      ```

3. **Development Mode**: Run the Vue.js frontend development server:
    ```bash
    npm run dev
    ```

4. **Building for Production**: To generate the production-ready files, run:
    ```bash
    npx vite build
    ```

5. **Preview the Production Build**: To preview the production build locally, run:
    ```bash
    npx vite preview
    ```

### Backend Setup

1. Navigate to the backend directory and install dependencies:
    ```bash
    cd backend
    npm install
    ```

2. Set up the `.env` file:
    - Create the `.env` file:
      ```bash
      touch .env
      ```
    - Add the following to your `.env` file:
      ```bash
      # Environment Mode
      NODE_ENV=development

      # Port for the backend server
      PORT=3000

      # MongoDB URI connection string (replace with your actual MongoDB URL)
      MONGO_URI=mongodb://your-username:your-password@your-mongo-host:your-port/your-db-name

      # Secret key for JWT Authentication
      JWT_SECRET=your-secret-key-here
      ```

3. Start the backend server:
    ```bash
    npm run server
    ```
    or
    ```bash
    npm start
    ```

## Technical Implementation
### Frontend:
- Vue.js 3.5.13: The frontend is built using Vue.js, a progressive JavaScript framework.
- Tailwind CSS 4.0: Tailwind CSS is used to create a responsive, customizable UI.
- TypeScript: The application is developed using TypeScript for enhanced developer experience and type safety.
- PrimeIcons: PrimeIcons is used for elegant icons that add to the modern UI experience.
### Backend:
- Express.js: A lightweight, fast framework to build the REST API for handling blog data and user authentication.
- MongoDB & Mongoose: MongoDB is the database for storing user information and blog posts, providing a NoSQL solution for handling dynamic and flexible data models. Mongoose is used to interact with MongoDB in an easy-to-use, schema-based manner.
### Authentication:
JWT (JSON Web Token): User authentication is handled via JWT, ensuring secure token-based login and session management.
## Screenshots
Here are some screenshots of the app in action:
- Home Page:
  ![Home Page Screenshot](AppInAction/Homepage.jpg)
- Log in Page:
  ![LogIn Page Screenshot](AppInAction/LogInPage.png)
- Sign up Page:
  ![SignUp Page Screenshot](AppInAction/SignUpPage.png)
- Posts Page:
  ![Posts Page Screenshot](AppInAction/PostsPage.jpg)
- Create Post Page:
  ![Create Post Page Screenshot](AppInAction/CreateNewPostPage.png)
- Edit Post Page:
  ![Edit Post Page Screenshot](AppInAction/EditPostPage.png)
- Profile Page:
  ![Profile Page Screenshot](AppInAction/ProfilePage.jpg)

## Future Features
- User Profile Modification: Allow user to manage their personal information and login credentials.
- Comments on Posts: Allow users to comment on blog posts.
- User Image Upload: Users can upload a profile image and include images in blog posts.

## License
MiniBlogApp is open-source and available under the MIT License.
