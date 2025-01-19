# Connectify

A real-time chat application built with MERN stack, offering secure authentication, responsive UI, and seamless real-time messaging.

## Features

- **Tech Stack**: MERN (MongoDB, Express, React, Node.js), Socket.io, TailwindCSS, Daisy UI.
- **Authentication**: Secure JWT-based user authentication and authorization.
- **Real-Time Messaging**: Instant communication(text messages and images) with Socket.io and live online user status tracking.
- **Responsive Design**: Fully responsive user interface optimized for all devices.
- **State Management**: Efficient global state management using Zustand.
- **Error Handling**: Robust error handling on both server and client sides.
- **Free Deployment**: Deployed for free using modern hosting solutions.

## Live Preview

Link : [https://connectify-52cm.onrender.com/](https://connectify-52cm.onrender.com/ "Visit Site")

## Tech Stack

- **Frontend**: React, TailwindCSS, Daisy UI, Zustand
- **Backend**: Node.js, Express.js, Socket.io
- **Database**: MongoDB
- **Authentication**: JWT (JSON Web Token)
- **Hosting**: Free platforms (e.g., Vercel for frontend, Render/Heroku for backend)

## Installation

### Prerequisites

- Node.js and npm installed
- MongoDB database setup

### Steps

1. **Clone the Repository**

   ```bash
   git clone https://github.com/your-username/connectify.git
   cd connectify

   ```
2. **Install Dependencies**

   ```bash
   cd frontend
   npm install
   cd ../backend
   npm install

   ```
3. **Setup Environment Variables**
   Create a ``.env`` file in the ``backend`` directory with the following details:

   ```bash
   PORT = 5000
   MONGO_URI = your_mongo_connection_string
   JWT_SECRET = any_random_string
   CLOUDINARY_CLOUD_NAME = cloudinary_cloud_name
   CLOUDINARY_SECRET = cloudinary_cloud_secret
   CLOUDINARY_API_KEY = cloudinary_api_key
   NODE_ENV = development

   ```
4. Run the application

   To run the backend server go into the backend directory and run the following command

   ```bash
   npm run dev
   ```

   To run the frontend server go into the frontend directory and run the following command

   ```bash
   npm run dev
   ```

   The backend server will run at ``http://localhost:5000`` and the frontend server will run at ``http://localhost:5173``.

### Future Enchancements.

- Group chat integration.
- Push Notifications for new messages.
- Audio and video call support.

### Acknowledgements

- TailwindCSS and Daisy UI for beautiful styling.
- Socket.io for real-time communication.
- Inspiration and resources from the developer community.

## Contributing

Feel free to open issues and submit pull requests. Any contributions are appreciated!

#### If you liked my project please leave a star. Happy Coding🚀.
