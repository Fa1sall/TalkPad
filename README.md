# 💬 TalkPad

**TalkPad** is a simple messaging web application built with **Node.js**, **Express**, **EJS**, and **PostgreSQL**, allowing users to send messages and view all messages on the home page. It demonstrates server-side routing, database integration.

🔗 **Live Site:** [https://talkpad.onrender.com/](https://talkpad.onrender.com/)

## ✨ Features

- Home page displaying all messages
- Send Message page to post new messages
- Messages stored in PostgreSQL
- Database seeding via `seed.js`
- Clean and responsive UI with EJS templates and CSS

## 🖼️ Screenshots

### 🏠 Home Page

![Home Page](screenshots/home.png)

### ✉️ Send Message Page

![Send Message Page](screenshots/send-message.png)

## 🧰 Tech Stack

- Node.js
- Express.js
- EJS templating engine
- PostgreSQL
- CSS

## 📁 Project Structure

```
TalkPad/
├── app.js # Main server file
├── package.json # Project dependencies
├── db/
│ ├── seed.js # Script to populate database with sample messages
│ └── pool.js # PostgreSQL connection setup
├── routes/ # Express route handlers
├── views/ # EJS templates
├── public/ # Static assets (CSS)
├── screenshots/ # Screenshots for README
└── .gitignore
```

## 🚀 Getting Started

Follow these steps to run the project locally:

### 1. Clone the repository

```bash
git clone https://github.com/Fa1sall/TalkPad.git
cd TalkPad
```

### 2. Install dependencies

```bash
npm install
```

### 3. Create a .env file

```bash
DATABASE_URL="postgresql://username:password@host:port/database_name"
```

Replace username, password, host, port, and database_name with your PostgreSQL credentials.

### 4. Seed the database

```bash
node db/seed.js
```

### 5. Start the development server

```bash
npm start
```

## 📄 Attributions

- **Background Patterns:** Background patterns are designed using [PatternsCraft](https://patterncraft.fun/), a free pattern generator tool.
