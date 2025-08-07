# 🌱 NGO Website – Full Stack Project

A full-stack web application built for an NGO to showcase its mission, activities, and allow users to volunteer via an interactive form. This responsive and modern site is built using **React (Vite)**, **Tailwind CSS**, and **Node.js/Express**, with MongoDB for storing volunteer form submissions.

---

## 📌 Table of Contents

- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Folder Structure](#-folder-structure)
- [Installation & Setup](#-installation--setup)
- [Environment Variables](#-environment-variables)
- [API Endpoints](#-api-endpoints)
- [Screenshots](#-screenshots)
- [Contributing](#-contributing)
- [License](#-license)

---

## ✨ Features

- 🏠 Professional NGO Home Page  
- 🧑‍🤝‍🧑 Volunteer Registration Form  
- 📖 About Us Section  
- 📨 Form submission with backend API  
- ✅ Form validation and success/error handling  
- 📱 Fully responsive UI  
- ☁️ Ready for deployment (Frontend + Backend)

---

## 🚀 Tech Stack

**Frontend:**  
- React (Vite)  
- Tailwind CSS  
- Axios  

**Backend:**  
- Node.js  
- Express.js  
- MongoDB  
- Mongoose  
- dotenv  

---

## 📂 Folder Structure

```
ngo-website/
├── backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── .env
│   ├── server.js
│   └── ...
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── App.jsx
│   │   └── ...
│   ├── public/
│   ├── index.html
│   └── ...
│
├── .gitignore
├── README.md
└── package.json
```

---

## ⚙️ Installation & Setup

### 1. Clone the repository

```bash
git clone https://github.com/supritakkigithub/NGO_WEBSITE.git
cd NGO_WEBSITE
```

---

### 2. Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file:

```env
MONGO_URI=your_mongodb_connection_string
PORT=5000
```

Start the backend server:

```bash
npm run dev
```

---

### 3. Frontend Setup

Open a new terminal:

```bash
cd frontend
npm install
npm run dev
```

Your app will be running at:  
📍 http://localhost:5173/

---

## 🔐 Environment Variables

Create a `.env` file in the `/backend` directory and add:

```env
MONGO_URI=your_mongodb_connection_string
PORT=5000
```

Make sure `.env` is listed in your root `.gitignore` file.

---

## 📡 API Endpoints

| Method | Endpoint         | Description             |
|--------|------------------|-------------------------|
| POST   | `/api/volunteer` | Submit volunteer form   |
| POST   | `/api/contact`   | Submit contact Us form   |

---

## 🖼️ Screenshots

> Add your screenshots in a `screenshots/` folder and reference them like below:

```md
![Home Page](screenshots/homepage.png)
![Volunteer Form](screenshots/volunteer-form.png)
```

---

## 🧑‍💻 Contributing

Contributions are welcome!  
Fork this repo, make your changes, and submit a pull request.

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).

---

## 🙌 Acknowledgements


Built with ❤️ as part of the **Basti Ki Pathshala NGO Internship Assignment**.



