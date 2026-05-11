# 📰 NewsHub - Full Stack News Aggregator

A modern full-stack news aggregation web application built using React, Node.js, Express, MongoDB, and JWT Authentication. The platform scrapes trending stories from Hacker News, allows users to create accounts, login securely, bookmark stories, and explore the latest news in a clean responsive interface.

---

# 🚀 Live Demo

## Frontend
[https://your-vercel-link.vercel.app](https://dacby-assigment.vercel.app/)

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

<img width="958" height="473" alt="image" src="https://github.com/user-attachments/assets/811ad33e-4da1-4eb3-b031-34cf2528045b" />

## Login Page
<img width="959" height="476" alt="image-1" src="https://github.com/user-attachments/assets/2350fd72-9aa9-4eb1-8e43-a5b7a9d55193" />


## Bookmark Page
<img width="957" height="472" alt="image-2" src="https://github.com/user-attachments/assets/0bff452d-23d9-4a80-b1c9-3f570ba52930" />


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

