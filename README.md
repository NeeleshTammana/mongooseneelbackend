# mongooseneelbackend
# 🎬 MongooseNeel Backend

This is the backend service for a video-sharing platform, built using **Node.js**, **Express.js**, and **MongoDB (Mongoose)**. It handles user authentication, video management, subscriptions, and media uploads.

## 🚀 Features

- 🔐 JWT-based Authentication (Access & Refresh Tokens)
- 👤 User Registration & Login
- 🎥 Video Uploads & Watch History
- 📷 Cloudinary Integration for Media Storage
- 📬 Subscription System (User to Channel)
- 🛠️ Account & Profile Management

## 🧱 Tech Stack

- **Node.js** + **Express.js**
- **MongoDB** + **Mongoose**
- **Cloudinary** for image uploads
- **bcrypt** for password hashing
- **jsonwebtoken (JWT)** for authentication
- **multer** for file uploads

## 📁 Project Structure

src/ ├── controllers/ # Route controllers (auth, user, video, etc.) ├── models/ # Mongoose models (User, Video, etc.) ├── middlewares/ # Auth middleware, error handler, etc. ├── routes/ # Express route files ├── utils/ # Helper utilities (Cloudinary, asyncHandler, etc.) └── index.js # Entry point of the application


## ⚙️ Setup Instructions

1. **Clone the Repository**
   ```bash
   git clone https://github.com/NeeleshTammana/mongooseneelbackend.git
   cd mongooseneelbackend
2. Install Dependencies

bash
Copy
Edit
npm install

3. Create a .env File

Copy
Edit
PORT=5000
MONGODB_URI=your_mongodb_uri
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
ACCESS_TOKEN_SECRET=your_access_secret
REFRESH_TOKEN_SECRET=your_refresh_secret
ACCESS_TOKEN_EXPIRY=15m
REFRESH_TOKEN_EXPIRY=7d
4. Run the Project

bash
Copy
Edit
npm run dev
📌 API Endpoints
Method	Endpoint	Description
POST	/api/register	Register a new user
POST	/api/login	Login user and get tokens
POST	/api/logout	Logout and clear cookies
GET	/api/me	Get current logged-in user
PUT	/api/password	Change current user password
POST	/api/refresh-token	Refresh access token
PUT	/api/avatar	Update avatar image
PUT	/api/cover-image	Update cover image
GET	/api/watch-history	Get user’s watch history
GET	/api/channel/:username	Get user channel profile
🙌 Acknowledgements
Cloudinary

MongoDB Atlas

Express.js

JWT.io

👨‍💻 Author
Neelesh Tammana
Computer Science Undergraduate
LinkedIn | GitHub

⭐ Feel free to fork, clone, and contribute!


---

Let me know if you'd like to add badges (build, license, etc.) or deploy this to platforms like Render or Railway.

