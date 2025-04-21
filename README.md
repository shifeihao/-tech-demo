# Vue Note App - Web

This project is a personal assignment for the Modern Web Development course. The goal is to explore and use tools or frameworks that are not covered in the course. I chose to use **Vue.js** as the front-end framework, combined with Express and MongonDB, to develop a notepad application.

## Features

- Account: Register, login, logout ,update ,delete accounts
- Note: Create, view, edit, delete notes
- Page transition animations (using Vue `<transition>`)
- Frontend and backend separated, communicating via RESTful API

## Tech Stack

- **Frontend**: Vue 3 + Vue Router + Axios + Tailwind CSS
- **Backend**: Express + MongoDB + Mongoose
- **Development Tools**: Vite + Node.js + GitHub Classroom

## Project Structure

```
cs732-assignment-shifeihao/
├── backend/                          # Express backend service
│   ├── controllers/                  # Controller logic
│   │   ├── authController.js
│   │   └── noteController.js
│   ├── models/                       # Mongoose schemas
│   │   ├── note.js
│   │   └── user.js
│   ├── routes/                       # API route definitions
│   │   └── api/
│   │       ├── api.js
│   │       ├── auth.js               # Authority related router
│   │       └── notes.js              # Note related router
│   ├── .env                          # Environment variables (excluded in .gitignore)
│   ├── package.json                  # Backend dependencies
│   ├── server.js                     # App entry point
│   └── README.md                     # (optional) backend docs
├── frontend/                         # Vue 3 frontend project
│   ├── public/                       # Static assets
│   ├── index.html                    # App HTML entry
│   ├── vite.config.js                # Vite config file
│   ├── package.json                  # Frontend dependencies
│   └── src/
│       ├── api/                      # Axios API methods
│       │   ├── auth.js
│       │   └── notes.js
│       ├── assets/                   # Icons, images
│       │   └── vue.svg
│       ├── components/               # Reusable UI components
│       │   ├── NavBar.vue
│       │   └── NoteCard.vue
│       ├── router/                   # Vue Router config
│       │   └── index.js
│       ├── stores/                   # Pinia stores
│       │   └── user.js
│       ├── views/                    # Page views
│       │   ├── EditNoteView.vue      # Edite page
│       │   ├── LoginView.vue         # Login page
│       │   ├── NoteDetailView.vue    # Note content in details
│       │   ├── NotesView.vue         # My notes view page
│       │   ├── RegisterView.vue      # Register page
│       │   └── UserSettingsView.vue  # Profile edit page
│       ├── App.vue                   # Root Vue component
│       └── main.js                   # App entry point
├── .gitignore                        # Git ignored files
└── README.md                         # Main project documentation


```

---

## Installation & Running Instructions

### Prerequisites

- Install [Node.js](https://nodejs.org/) and [MongoDB](https://www.mongodb.com/)
- It is recommended to use VS Code as the development environment

### Clone the Repository

```bash
git clone https://github.com/UOA-CS732-S1-2025/cs732-assignment-shifeihao.git
cd cs732-assignment-shifeihao
```

### Start the backend

```bash
cd backend
npm install
npm run dev
```

By default, the server runs at `http://localhost:5000`

### Start the frontend

```bash
cd frontend
npm install
npm run dev
```

By default, the server runs at `http://localhost:5173`

---

## Comparison Between Vue and React

This project uses Vue primarily to explore how it differs from React. Below is a key feature comparison:

| Feature                 | Vue                                | React                                                |
| ----------------------- | ---------------------------------- | ---------------------------------------------------- |
| Two-way binding         | ✅ `v-model`                       | ❌ Requires `value` + `onChange`                     |
| Animation handling      | ✅ Built-in `<transition>` support | ❌ Requires external libraries (e.g., Framer Motion) |
| Template structure      | ✅ HTML templates + directives     | ❌ JSX mixes logic and markup                        |
| Reactivity              | ✅ `ref()` / `reactive()`          | ❌ `useState` with hook limitations                  |
| Component communication | ✅ `props` + `emit`                | ✅ `props` + callback functions                      |
| Code style              | ✅ Compact `<script setup>` syntax | ❌ Function components are more verbose              |

---

## How to Test

1. After starting both the frontend and backend, a test user will be automatically created along with a default note:
   - Username: `testuser`
   - Password: `123456`
2. Alternatively, you can register a new account through the web interface and add your own notes.
3. Use the "View", "Edit", or "Delete" buttons to interact with each note accordingly.
4. Observe the smooth transition animations when notes are added or removed.

---

## Video Demonstration (Also Submitted to Canvas)

A 15-minute demo video is included with this project, covering the following topics:

- Introduction to Vue and first-time developer experience
- Live demonstration of core project features
- Explanation of project structure and key implementation details
- Technical comparison between Vue and React

---

## Security Notice

The `.env` file is not included in this repository. It has been submitted via:  
**Assignment - Private info / API key / etc submission** on Canvas.

It contains the following environment variables:

### Backend

```
MONGO_URI
JWT_SECRET
```

### frontend

```
VITE_API_BASE_UR
```

---

## Contact

Author: SHI FEIHAO  
Email:

- fshi538@aucklanduni.ac.nz
- shifeihao@outlook.com
- GitHub: [@shifeihao](https://github.com/UOA-CS732-S1-2025/cs732-assignment-shifeihao)
