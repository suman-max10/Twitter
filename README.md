🐦 Twitter Clone — MERN Stack

A full-stack social media application inspired by Twitter/X, built using the MERN stack. Users can create accounts, post tweets, follow other users, like and comment on posts, and interact with a personalized feed.

🚀 Live Demo

🔗 Live Website: "https://your-live-demo-url.com"

🔗 Backend API: "https://your-backend-api-url.com"

📸 Screenshots

Home Feed

"Home Feed" (./screenshots/home.png)

User Profile

"Profile" (./screenshots/profile.png)

Login

"Login" (./screenshots/login.png)

Create Post

"Create Post" (./screenshots/create-post.png)

---

📌 Features

🔐 Authentication

- User registration
- User login/logout
- Password hashing
- JWT-based authentication
- Protected routes
- Persistent login session

👤 User Profile

- View user profile
- Update profile information
- Upload profile picture
- Upload cover image
- View user's posts
- View followers and following
- Follow/unfollow users

📝 Posts / Tweets

- Create a post
- Delete your own post
- View posts
- Upload images
- Like/unlike posts
- Comment on posts
- Repost/retweet posts
- Display post creation time

🏠 Home Feed

- Personalized feed
- Posts from followed users
- Latest posts
- Like and comment interactions
- Infinite scrolling / pagination

🔔 Notifications

- Like notifications
- Comment notifications
- Follow notifications
- Repost notifications

🔎 Search

- Search users
- Search posts
- Search by username

📱 Responsive Design

- Desktop support
- Tablet support
- Mobile-friendly UI

---

🛠️ Tech Stack

Frontend

- React.js
- React Router
- Axios
- Tailwind CSS / CSS
- Context API / Redux / Zustand

Backend

- Node.js
- Express.js
- REST API
- JWT
- bcrypt

Database

- MongoDB
- Mongoose

Other Tools

- Git
- GitHub
- Postman
- Cloudinary / Multer for image uploads
- Vercel / Netlify for frontend
- Render / Railway for backend

---

📂 Project Structure

twitter-clone/
│
├── client/
│   │
│   ├── public/
│   │   └── favicon.ico
│   │
│   ├── src/
│   │   │
│   │   ├── assets/
│   │   │   ├── images/
│   │   │   └── icons/
│   │   │
│   │   ├── components/
│   │   │   ├── Navbar.jsx
│   │   │   ├── Sidebar.jsx
│   │   │   ├── PostCard.jsx
│   │   │   ├── PostForm.jsx
│   │   │   ├── Comment.jsx
│   │   │   ├── UserCard.jsx
│   │   │   └── Loader.jsx
│   │   │
│   │   ├── pages/
│   │   │   ├── Home.jsx
│   │   │   ├── Login.jsx
│   │   │   ├── Register.jsx
│   │   │   ├── Profile.jsx
│   │   │   ├── Explore.jsx
│   │   │   ├── Notifications.jsx
│   │   │   └── Settings.jsx
│   │   │
│   │   ├── context/
│   │   │   ├── AuthContext.jsx
│   │   │   └── UserContext.jsx
│   │   │
│   │   ├── hooks/
│   │   │   ├── useAuth.js
│   │   │   └── useFetch.js
│   │   │
│   │   ├── services/
│   │   │   └── api.js
│   │   │
│   │   ├── utils/
│   │   │   └── formatDate.js
│   │   │
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   │
│   ├── package.json
│   └── .env
│
├── server/
│   │
│   ├── config/
│   │   └── db.js
│   │
│   ├── controllers/
│   │   ├── authController.js
│   │   ├── userController.js
│   │   ├── postController.js
│   │   ├── commentController.js
│   │   └── notificationController.js
│   │
│   ├── middleware/
│   │   ├── authMiddleware.js
│   │   ├── errorMiddleware.js
│   │   └── uploadMiddleware.js
│   │
│   ├── models/
│   │   ├── User.js
│   │   ├── Post.js
│   │   ├── Comment.js
│   │   └── Notification.js
│   │
│   ├── routes/
│   │   ├── authRoutes.js
│   │   ├── userRoutes.js
│   │   ├── postRoutes.js
│   │   ├── commentRoutes.js
│   │   └── notificationRoutes.js
│   │
│   ├── utils/
│   │   ├── generateToken.js
│   │   └── uploadImage.js
│   │
│   ├── server.js
│   ├── package.json
│   └── .env
│
├── screenshots/
│   ├── home.png
│   ├── profile.png
│   ├── login.png
│   └── create-post.png
│
├── .gitignore
├── README.md
└── package.json

---

🏗️ Application Architecture

                    ┌───────────────────┐
                    │      React        │
                    │    Frontend       │
                    └─────────┬─────────┘
                              │
                              │ HTTP / REST API
                              ▼
                    ┌───────────────────┐
                    │      Express      │
                    │      Server       │
                    └─────────┬─────────┘
                              │
                    ┌─────────┴─────────┐
                    │                   │
                    ▼                   ▼
              ┌───────────┐       ┌────────────┐
              │  MongoDB  │       │ Cloudinary │
              │ Database  │       │   Images   │
              └───────────┘       └────────────┘

---

🔄 Application Flow

User
 │
 ▼
React Frontend
 │
 │ Axios / HTTP Request
 ▼
Express Routes
 │
 ▼
Middleware
 │
 ├── Authentication
 ├── Validation
 └── Error Handling
 │
 ▼
Controller
 │
 ▼
Mongoose Model
 │
 ▼
MongoDB
 │
 ▼
Response
 │
 ▼
React UI

---

🗄️ Database Models

User

User
├── username
├── email
├── password
├── profileImage
├── coverImage
├── bio
├── followers[]
├── following[]
├── createdAt
└── updatedAt

Post

Post
├── author
├── content
├── image
├── likes[]
├── comments[]
├── reposts[]
├── createdAt
└── updatedAt

Comment

Comment
├── post
├── author
├── content
└── createdAt

Notification

Notification
├── recipient
├── sender
├── type
├── post
├── isRead
└── createdAt

---

🔌 API Endpoints

Authentication

Method| Endpoint| Description
POST| "/api/auth/register"| Register user
POST| "/api/auth/login"| Login user
POST| "/api/auth/logout"| Logout user
GET| "/api/auth/me"| Get current user

Users

Method| Endpoint| Description
GET| "/api/users/:id"| Get user
PUT| "/api/users/:id"| Update profile
POST| "/api/users/:id/follow"| Follow user
DELETE| "/api/users/:id/follow"| Unfollow user
GET| "/api/users/:id/followers"| Get followers
GET| "/api/users/:id/following"| Get following

Posts

Method| Endpoint| Description
GET| "/api/posts"| Get posts
GET| "/api/posts/:id"| Get single post
POST| "/api/posts"| Create post
DELETE| "/api/posts/:id"| Delete post
POST| "/api/posts/:id/like"| Like post
DELETE| "/api/posts/:id/like"| Unlike post
POST| "/api/posts/:id/repost"| Repost
DELETE| "/api/posts/:id/repost"| Remove repost

Comments

Method| Endpoint| Description
GET| "/api/posts/:id/comments"| Get comments
POST| "/api/posts/:id/comments"| Add comment
DELETE| "/api/comments/:id"| Delete comment

Notifications

Method| Endpoint| Description
GET| "/api/notifications"| Get notifications
PUT| "/api/notifications/:id/read"| Mark notification as read

---

🔐 Authentication Flow

Register
   │
   ▼
Hash Password using bcrypt
   │
   ▼
Save User in MongoDB
   │
   ▼
Login
   │
   ▼
Verify Password
   │
   ▼
Generate JWT
   │
   ▼
Store Authentication Credential
   │
   ▼
Send Protected API Requests
   │
   ▼
JWT Verification Middleware
   │
   ▼
Controller

---

⚙️ Installation

1. Clone the repository

git clone https://github.com/yourusername/twitter-clone.git

cd twitter-clone

2. Install Backend Dependencies

cd server
npm install

3. Install Frontend Dependencies

cd ../client
npm install

---

🔑 Environment Variables

Create ".env" inside the "server" directory:

PORT=5000

MONGO_URI=your_mongodb_connection_string

JWT_SECRET=your_jwt_secret

CLOUDINARY_CLOUD_NAME=your_cloudinary_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret

CLIENT_URL=http://localhost:5173

For the frontend, if required:

VITE_API_URL=http://localhost:5000/api

«Never commit ".env" files or API secrets to GitHub.»

---

▶️ Running the Project

Start Backend

cd server
npm run dev

Backend:

http://localhost:5000

Start Frontend

Open another terminal:

cd client
npm run dev

Frontend:

http://localhost:5173

---

🧪 Testing API

You can test the backend using:

- Postman
- Thunder Client
- Insomnia

Example:

POST /api/auth/login

Request:

{
    "email": "user@example.com",
    "password": "password123"
}

---

📦 Important Dependencies

Frontend

npm install react react-dom react-router-dom axios

Backend

npm install express mongoose bcryptjs jsonwebtoken cors dotenv

For development:

npm install -D nodemon

---

🧠 React Concepts Used

This project demonstrates several important React concepts:

- Components
- Props
- State
- "useState"
- "useEffect"
- "useContext"
- Custom Hooks
- React Router
- Conditional Rendering
- List Rendering
- Form Handling
- Event Handling
- API Integration
- State Management
- Authentication
- Protected Routes

---

🔧 Backend Concepts Used

- Node.js
- Express.js
- REST API
- MVC architecture
- Middleware
- JWT authentication
- Password hashing
- MongoDB
- Mongoose
- Schema relationships
- Error handling
- File uploads
- API validation

---

📈 Future Improvements

- [ ] Direct messaging
- [ ] Real-time chat using Socket.IO
- [ ] Real-time notifications
- [ ] Advanced search
- [ ] Hashtags
- [ ] Trending topics
- [ ] Bookmarks
- [ ] Polls
- [ ] Video uploads
- [ ] Dark/light theme
- [ ] Infinite scrolling
- [ ] Email verification
- [ ] Forgot/reset password
- [ ] Two-factor authentication

---

🚀 Deployment

Possible deployment architecture:

                    GitHub
                       │
              ┌────────┴────────┐
              ▼                 ▼
        Frontend Hosting   Backend Hosting
        Vercel/Netlify     Render/Railway
              │                 │
              └────────┬────────┘
                       │
                       ▼
                    MongoDB
                    Atlas
                       │
                       ▼
                  Cloudinary

---

🔒 Security

The application implements or can implement:

- Password hashing with bcrypt
- JWT authentication
- Protected API routes
- Input validation
- CORS configuration
- Environment variables
- Authorization checks
- Secure image uploads
- Rate limiting
- Error handling

---

📚 What I Learned

Through this project, I practiced:

1. Building a full-stack MERN application.
2. Designing REST APIs with Express.
3. Working with MongoDB and Mongoose.
4. Implementing JWT authentication.
5. Managing React application state.
6. Connecting React with backend APIs.
7. Creating reusable React components.
8. Implementing protected routes.
9. Handling file uploads.
10. Structuring a scalable full-stack application.

---

👨‍💻 Author

Your Name

- GitHub: "https://github.com/yourusername"
- LinkedIn: "https://linkedin.com/in/yourusername"
- Email: "your-email@example.com"

---

⭐ Contributing

Contributions are welcome.

# Fork the repository
# Create a new branch
git checkout -b feature/new-feature

# Make your changes
git add .

# Commit
git commit -m "Add new feature"

# Push
git push origin feature/new-feature

Then create a Pull Request.

---

📄 License

This project is created for educational and portfolio purposes.

---

⚠️ Disclaimer

This is an independent educational project inspired by the functionality of Twitter/X. It is not affiliated with or endorsed by Twitter/X or its owners.