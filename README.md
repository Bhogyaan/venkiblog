

## Key Features

### 🔐 User Authentication & Security
- Secure login & registration using JWT-based authentication.
- Password encryption with bcrypt.js.
- Session security with HTTP-only cookies.

### 👥 User Interaction & Social Features
- Follow & unfollow users.
- Private profiles require follow requests for content access.
- Block & unblock users.
- Online status visibility for friends.

### 📝 Posts & Engagement
- Create & share posts with text, images, and videos.
- Like, comment, and save posts.
- View liked & saved posts.

### 💬 Real-Time Chat & Notifications
- 1-on-1 real-time messaging.
- Receive instant notifications for:
  - Likes
  - Comments
  - Follow requests
  - Messages

### 🖼 Media Handling (Cloudinary Integration)
- Upload profile pictures, cover photos, and post media (images & videos).
- Cloudinary is used for secure and optimized media storage.
- Old profile/cover pictures are automatically deleted from Cloudinary when updated.

### 🔒 Security & Performance Enhancements
- JWT-based authentication middleware for API protection.
- Helmet.js for securing HTTP headers.
- Rate limiting to prevent abuse.
- Morgan for logging & debugging.

## 🛠 Tech Stack

### Frontend
- ⚡ React.js (Vite for fast builds)
- 🎨 Tailwind CSS (for modern, responsive UI)
- 🖌 Material UI (for UI components)
- 📡 Axios (for API communication)
- 🔔 React-Toastify (for user feedback)

### Backend
- 🟢 Node.js & Express.js (for server-side logic)
- 🍃 MongoDB & Mongoose (for database management)
- 🔑 JWT (for authentication & authorization)
- 🔒 Bcrypt.js (for password encryption)
- 📂 Multer (for handling file uploads)
- 📜 Morgan (for logging & debugging)
- 🛡 Helmet.js (for security enhancements)

### Real-Time Features
- 📡 Socket.io (for instant messaging & notifications)

### Media Storage
- ☁️ Cloudinary (for secure and optimized image & video uploads)

