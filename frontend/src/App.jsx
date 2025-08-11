import React from 'react'
import { useState } from 'react'

const App = () => {
  const [text, setText] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  const analyzeSentiment = async () => {
    try {
      setLoading(true);
      const res = await axios.post("http://localhost:5000/api/ai/sentiment", { text });
      setResult(res.data.sentiment);

    } catch (error) {
      setResult("Error analyzing sentiment");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: "20px", maxWidth: "500px", margin: "auto" }}>
      <h1>🧠 AI Sentiment Analyzer</h1>
      <textarea
        rows={4}
        placeholder='Type something...'
        value={text}
        onChange={(e) => setText(e.target.value)}
        style={{ width: "100%", padding: "10px" }}
      ></textarea>
      <br />
      <button onClick={analyzeSentiment} disabled={loading}>
        {loading ? "Analyzing..." : "Analyze Sentiment"}
      </button>
      <h2>Result: {result}</h2>
    </div>
  );
}

export default App
