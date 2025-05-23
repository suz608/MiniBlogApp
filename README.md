# MiniBlogApp

DailyThoughts is a full-stack lightweight blog app designed to allow users to jot down their daily thoughts. It features a modern user interface, encrypted user sign-up/log-in, and CRUD operations on blog posts.

## Table of Contents
- [Features](#features)
- [Initial Design](#initial-design)
- [Installation](#Installation)
- [Technical Implementation](#technical-implementation)
- [Screenshots](#screenshots)
- [Deployment](#deployment)
- [Browser Compatibility](#browser-compatibility)
- [Responsive Design](#responsive-design)
- [License](#license)

## Features

- **Encrypted User Authentication**: Secure sign-up and login functionality.
- **CRUD Operations**: Users can create, read, update, and delete blog posts.
- **RESTful API**: Utilizes REST APIs for seamless communication.
- **Modern UI**: A sleek, responsive, and modern user interface styled with Tailwind CSS and PrimeIcons.
- **User Data Storage**: MongoDB is used to store user data and blog posts.
- **Pagination**: Posts are paginated, allowing users to browse through posts in manageable chunks.
- **Page Navigation**: Provides a navigation bar and a dropdown menu, allowing users to navigate through different pages of the app.

## Initial Design

The initial design was created using Figma.

![Figma Design](AppPhotos/InitialFigmaDesign.png)

## Installation

### Prerequisites

To get started, make sure you have the following installed:

- Node.js (18.18.0 or higher)
- MongoDB running locally or a MongoDB Atlas cluster
- npm or yarn (package manager)

### Frontend Setup

1. Clone the repository:
    ```bash
    git clone https://github.com/suz608/MiniBlogApp.git
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
      VITE_APP_API_URL = http://localhost:3000/  #Replace with your backend URL
      ```

3. **Development Mode**: To run in development mode, run:
    ```bash
    npm run dev
    ```

4. **Building for Production**: To generate production-ready files, run:
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
    If you are in the frontend folder, run this first:
    ```bash
    cd ..
    ```
3. Set up the `.env` file:
    - Create the `.env` file:
      ```bash
      touch .env
      ```
    - Add the following to your `.env` file:
      ```bash
      # Environment Mode (Set it to development or production)
      NODE_ENV=development 

      # Port for the backend server (You can change it to any port number you want)
      PORT=3000

      # MongoDB URI connection string (Replace with your MongoDB URL)
      MONGO_URI=mongodb://your-username:your-password@your-mongo-host:your-port/your-db-name

      # Secret key for JWT Authentication (Set it to anything you want)
      JWT_SECRET=your-secret-key-here
      ```

4. Start the backend server:
    ```bash
    npm run server
    ```
    or
    ```bash
    npm start
    ```
    
## Technical Implementation
### Frontend:
- Vue.js: The frontend is built using Vue.js, a progressive JavaScript framework.
- Tailwind CSS: Tailwind CSS 4.0 is used to create a responsive, customizable UI.
- TypeScript: The application is developed using TypeScript for enhanced developer experience and type safety.
- Vite: This project uses Vite for a light and fast build tool.
- PrimeIcons: PrimeIcons is used for elegant icons that add to the modern UI experience.
- Axios: Axios is used for making API calls to the backend.
### Backend:
- Express.js: A lightweight, fast framework to build the REST API for handling blog data and user authentication.
- MongoDB & Mongoose: MongoDB is the database for storing user information and blog posts, providing a NoSQL solution for handling dynamic and flexible data models. Mongoose is used to interact with MongoDB in an easy-to-use, schema-based manner.
### Authentication:
JWT (JSON Web Token): User authentication is handled via JWT, ensuring secure token-based login and session management.
## Screenshots
Here are some screenshots of the app in action:
- Home Page:
  ![Home Page Screenshot](AppPhotos/Homepage.jpg)
- Login Page:
  ![LogIn Page Screenshot](AppPhotos/LogInPage.png)
- Sign up Page:
  ![SignUp Page Screenshot](AppPhotos/SignUpPage.png)
- Posts Page:
  ![Posts Page Screenshot](AppPhotos/PostsPage.jpg)
- Create Post Page:
  ![Create Post Page Screenshot](AppPhotos/CreateNewPostPage.png)
- Edit Post Page:
  ![Edit Post Page Screenshot](AppPhotos/EditPostPage.png)
- Profile Page:
  ![Profile Page Screenshot](AppPhotos/ProfilePage.jpg)

## Deployment
This app is deployed using Vercel, Render and MongDB Atlas. Here is the link:
[**MiniBlogApp**](https://mini-blog-app-one.vercel.app)

## Browser Compatibility
This app uses Vite as its build tool. Vite requires the app to be run in browsers that support dynamic `import()`. Here is a list of browsers that support dynamic `import()`:
[Browsers with dynamic import() support](https://caniuse.com/es6-module-dynamic-import)

## Responsive Design
Here are some screenshots of this app on different devices:
## Responsive Design
Here are some screenshots of this app on different devices:

- **Pixel 7:**  
  <img src="AppPhotos/Pixel7.png" width="410" alt="Pixel 7 Screenshot">
  
- **Surface Duo:**  
  <img src="AppPhotos/SurfaceDuo.png" width="540" alt="Surface Duo Screenshot">

- **Nest Hub Max**:
  ![Nest Hub Max Screenshot](AppPhotos/NestHubMax.png)

## Accessibility
This app uses black and white colors widely to improve its accessibility. It scored 88 in lighthouse accessibility test.
<img src="AppPhotos/lighthouse.png" alt="Lighthouse" style="padding: 20px;">

## License
MiniBlogApp is open-source and available under the MIT License.
