# Social Media Website

A simple social media website built with **React** and **Firebase**.  
This project allows users to sign up, log in, and create posts, simulating the basic functionality of a social media platform.

---

## 🚀 Features

- 🔐 **User Authentication** (Firebase)
- 📝 **Create Posts** (with form handling)
- 🏠 **Homepage** to view posts
- 🔄 **Reusable Components** (e.g., Navbar)
- 📂 Clean project structure with `components`, `pages`, and `config`

---

## 🌐 Live Demo

👉 [Click here to view the deployed project](https://social-media-website-dummy.web.app)  

---

## 📂 Project Structure

```

src/
├── components/
│   └── navbar.js          # Navigation bar
├── config/
│   └── firebase.js        # Firebase configuration & setup
├── pages/
│   ├── Home-page/
│   │   ├── homepage.js    # Homepage UI
│   │   └── post.js        # Post component
│   ├── create-post/
│   │   └── ...            # Create post related files
│   ├── createform.js      # Post creation form
│   ├── createpost.js      # Post creation logic
│   └── login.js           # Login page
├── App.css
├── App.js
├── index.js
└── .gitignore

````

---

## 🛠️ Tech Stack

- **Frontend:** React (JavaScript, JSX, CSS)
- **Backend/Database:** Firebase
- **Version Control:** Git & GitHub
- **Deployment:** Vercel / Netlify / Firebase Hosting (replace with your actual)

---

## ⚙️ Installation & Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/arjunjagwani/social-media-website.git
   cd social-media-website
````

2. Install dependencies:

   ```bash
   npm install
   ```

3. Setup Firebase:

   * Create a project in [Firebase Console](https://console.firebase.google.com/).
   * Copy your Firebase config and replace it inside `src/config/firebase.js`.

4. Start the development server:

   ```bash
   npm start
   ```

---
