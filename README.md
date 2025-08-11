# 🧠 AI Sentiment Analyzer (MERN + Google Gemini API)

A MERN stack application that uses **Google Gemini API** to analyze the sentiment of a given text.  
It tells whether the sentiment is **Positive**, **Negative**, or **Neutral** along with a confidence score.

---

## 🚀 Features
- 📝 Enter any text and get instant sentiment analysis.
- ⚡ Powered by Google Gemini AI for accurate results.
- 🎨 Simple and responsive UI.
- 🔐 Secure API key handling using `.env` file.

---

## 🛠 Tech Stack
**Frontend**: React (Vite) + Axios + Tailwind CSS  
**Backend**: Node.js + Express + Axios + dotenv  
**AI Service**: Google Gemini API

---

## 📂 Folder Structure
ai-sentiment-analyzer/
├── backend/
│ ├── routes/aiRoutes.js
│ ├── server.js
│ └── .env
├── frontend/
│ ├── src/
│ │ ├── App.jsx
│ │ └── main.jsx
│ ├── index.html
│ └── vite.config.js
└── README.md


---

## 🔑 Prerequisites
- Node.js installed (v16+ recommended)
- Google Gemini API Key ([Get one here](https://aistudio.google.com/))
- Git

---

## 📦 Installation

### 1️⃣ Clone the repository
```bash
git clone https://github.com/yourusername/ai-sentiment-analyzer.git
cd ai-sentiment-analyzer


cd backend
npm install

Create a .env file in the backend/ folder:
PORT=5000
GEMINI_API_KEY=your_google_gemini_api_key_here


npm start

cd ../frontend
npm install
npm run dev


🖥 Usage
Open the frontend in your browser (usually http://localhost:5173).

Type any text in the textarea.

Click Analyze Sentiment.

See the result instantly (Positive / Negative / Neutral with confidence score).