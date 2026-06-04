# Personal Portfolio & CV Chatbot Website

A modern, high-performance, single-page personal portfolio website built exclusively with semantic **HTML5**, **Vanilla CSS**, and **Vanilla JavaScript**. The site features a highly customized **CV-based Chatbot Widget** that strictly acts as a factual assistant representing your resume details. It is pre-configured and optimized for **Firebase Hosting** deployment.

---

## 📂 Project Structure

```
my-cv/
├── frontend/                        # Frontend static files (Firebase Hosting)
│   ├── index.html                   # Semantic HTML5 page layout & sections
│   ├── style.css                    # Responsive styles, Light/Dark themes
│   ├── script.js                    # Chatbot calls to Render and offline fallback
│   └── RESUME – LE DAI HOANG NGUYEN.pdf # Downloadable resume PDF
├── backend/                         # Node.js Express server (Render.com)
│   ├── server.js                    # Express endpoints and Gemini integration
│   ├── package.json                 # Node dependencies
│   └── .env                         # Environment variables for local testing
├── firebase.json                    # Firebase configuration pointing to frontend/
├── .firebaserc                      # Firebase project configuration mapping
└── README.md                        # Documentation & setup steps (this file)
```

---

## ⚡ Key Features

1. **Medical Doctor to Tech transition**: Displays your highly unique GP background (Pham Ngoc Thach University of Medicine) and quarantine screening automation successes at the HCMC CDC, integrated seamlessly alongside your Node.js, React, and Vue full-stack engineering milestones.
2. **Interactive Factual Chatbot**: Floating right-hand drawer widget with smooth opening animations, pre-set query chips, and absolute adherence to facts. It replies *exactly* `"I’m not sure based on the CV information."` if queried about details not declared in the CV.
3. **Double Theme Compatibility**: Fully functional light and dark modes syncing automatically with the user's browser default (`prefers-color-scheme`) and preserved securely via `localStorage`.
4. **Fluid Motion**: Typing loops on the Hero, glassmorphic navigations, Intersection-Observer-powered scroll reveal effects, active navbar highlight spy, and card hover scaling.

---

## 💻 Local Development & Testing

You can run both the frontend and backend locally under your machine for debugging.

### Step 1: Run the Backend Server
1. Navigate to the `backend/` folder:
   ```bash
   cd backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file in the `backend/` directory and configure your API Key:
   ```env
   GEMINI_API_KEY=your_gemini_api_key_here
   PORT=3000
   ```
4. Start the server:
   ```bash
   npm start
   ```
   *Your server will boot up at `http://localhost:3000`.*

### Step 2: Open the Frontend
1. Keep the backend server running.
2. In a separate terminal or finder window, open `frontend/index.html` in your favorite web browser (or run a local static server like `npx live-server frontend`).
3. Open the chatbot widget and start talking!

---

## 🚀 Deployment Instructions

This project split is designed to be 100% free to maintain:
- **Backend**: Hosted on Render.com (Free web service tier).
- **Frontend**: Hosted on Firebase Hosting (Free Spark tier).

### Step 1: Deploy the Node.js Backend to Render
1. Create a free account on [Render.com](https://render.com/).
2. Click **New +** > **Web Service**.
3. Connect your GitHub repository containing this project.
4. Configure the following details:
   - **Name**: `my-cv-chatbot` (or any custom name)
   - **Runtime**: `Node`
   - **Root Directory**: `backend` *(Crucial! Tells Render to build from the backend folder only)*
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`
5. Go to the **Environment** tab, click **Add Environment Variable**:
   - **Key**: `GEMINI_API_KEY`
   - **Value**: `YOUR_GEMINI_API_KEY_HERE`
6. Click **Create Web Service**. 
7. Once deployed, note down your web service URL (e.g., `https://my-cv-chatbot.onrender.com`).

### Step 2: Configure the Frontend
1. Open `frontend/script.js` and locate line 5.
2. Change the `BACKEND_URL` to point to your new Render URL:
   ```javascript
   const BACKEND_URL = "https://your-backend-name.onrender.com";
   ```
3. Save the file.

### Step 3: Deploy the Frontend to Firebase Hosting
1. Install the Firebase CLI tool globally (if you haven't already):
   ```bash
   npm install -g firebase-tools
   ```
2. Log in using your Google account:
   ```bash
   firebase login
   ```
3. Open `.firebaserc` in the root folder and configure your Firebase project ID:
   ```json
   {
     "projects": {
       "default": "your-firebase-project-id"
     }
   }
   ```
4. Deploy the frontend from the root project directory:
   ```bash
   firebase deploy
   ```
   *Once deployed, Firebase will output your hosting URL (e.g., `https://your-project.web.app`). Your live portfolio is now fully secure and powered by Gemini!*
# AI-Theory
# AI-Theory
