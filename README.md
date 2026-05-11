# 📰 NewsHub - Full Stack News Aggregator

A modern full-stack news aggregation web application built using React, Node.js, Express, MongoDB, and JWT Authentication. The platform scrapes trending stories from Hacker News, allows users to create accounts, login securely, bookmark stories, and explore the latest news in a clean responsive interface.

---

# 🚀 Live Demo

## Frontend
https://your-vercel-link.vercel.app

## Backend API
https://dacby-assigment.onrender.com

---

# ✨ Features

- 🔐 JWT Authentication
- 👤 User Signup & Login
- 🔒 Secure Password Hashing using bcryptjs
- 📰 Real-time News Scraping
- ⭐ Bookmark Stories
- 📱 Fully Responsive UI
- ⚡ Fetch Latest News Instantly
- 🌐 REST API Integration
- 💾 MongoDB Database Storage
- 🎨 Modern Glassmorphism UI Design

---

# 🛠️ Tech Stack

## Frontend
- React.js
- React Router DOM
- Axios
- CSS3
- Vite

## Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT Authentication
- bcryptjs
- Cheerio
- Axios

---

# 📂 Project Structure

```bash
Dacby-assigment
│
├── backend
│   ├── config
│   ├── models
│   ├── scraper
│   ├── app.js
│   └── package.json
│
├── frontend
│   └── vite-project
│       ├── src
│       │   ├── pages
│       │   ├── App.jsx
│       │   └── main.jsx
│       └── package.json
```

---

# ⚙️ Installation & Setup

## 1️⃣ Clone Repository

```bash
git clone https://github.com/Lifewithmuskan/Dacby-assigment.git
```

---

## 2️⃣ Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file inside backend folder:

```env
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
PORT=5000
```

Run Backend:

```bash
npm run dev
```

---

## 3️⃣ Frontend Setup

```bash
cd frontend/vite-project
npm install
npm run dev
```

---

# 🔐 Authentication Flow

- User signs up or logs in
- Backend generates JWT token
- Token stored in localStorage
- Protected features like bookmarks require authentication
- Passwords securely hashed using bcryptjs

---

# 📸 Screenshots

## Home Page
![alt text](image.png)

## Login Page
![alt text](image-1.png)

## Bookmark Page
![alt text](image-2.png)

---

# 📡 API Endpoints

## Stories

```http
GET /api/stories
```
Returns latest top stories.

```http
GET /api/allstories
```
Returns all scraped stories.

---

## Authentication

```http
POST /api/signup
```
Create a new account.

```http
POST /api/login
```
Login existing user.

---

## Bookmarks

```http
POST /api/bookmark
```
Save bookmarked stories.

```http
GET /api/bookmarks/:email
```
Fetch user bookmarks.

---

# 🌟 Future Improvements

- Remove Bookmark Feature
- Dark/Light Theme Toggle
- Search & Filter News
- Pagination
- Category-wise News
- User Profile Dashboard

---

# 👩‍💻 Author

## Muskaan Singh

- Full Stack Developer
- Machine Learning Enthusiast
- Passionate about AI & Web Development

GitHub: https://github.com/Lifewithmuskan

---

# 📜 License

This project is developed for educational and portfolio purposes.

