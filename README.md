# 🖼️ AI Image Generator (MERN Stack)

An AI-powered Image Generator built using the MERN stack (MongoDB, Express, React, Node.js) and **Google Gemini API** for generating images from text prompts.

---

## 🚀 Features
- Generate high-quality images from text descriptions.
- Save generated images in MongoDB.
- View and download past generated images.
- Responsive and modern UI with Tailwind CSS.

---

## 🛠️ Tech Stack
**Frontend:**
- React (Vite)
- Tailwind CSS
- Axios

**Backend:**
- Node.js
- Express.js
- MongoDB (Mongoose)
- Google Gemini API

---

## 📂 Folder Structure
ai-image-generator/
├── backend/
│ ├── config/db.js
│ ├── routes/imageRoutes.js
│ ├── controllers/imageController.js
│ └── server.js
├── frontend/
│ ├── src/
│ │ ├── components/
│ │ ├── pages/
│ │ ├── App.jsx
│ │ └── main.jsx
│ ├── index.html
│ └── vite.config.js
└── README.md


---

## ⚙️ Installation & Setup

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/your-username/ai-image-generator.git
cd ai-image-generator


cd backend
npm install

Create a .env file inside backend/:
PORT=5000
MONGO_URI=your_mongodb_connection_string
GEMINI_API_KEY=your_google_gemini_api_key


Start the backend:
npm run dev

cd ../frontend
npm install

Start the frontend:
npm run dev


