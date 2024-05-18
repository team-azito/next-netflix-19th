// 예시 컴포넌트 파일

"use client";
// 예시 컴포넌트 파일
import { ChangeEvent, useState } from "react";
import axios from "axios";

const SentimentAnalysis = () => {
  const [content, setContent] = useState("");
  const [result, setResult] = useState(null);

  const handleInputChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value);
  };

  const analyzeSentiment = async () => {
    try {
      const response = await axios.post("/api/sentiment", { content });
      setResult(response.data);
    } catch (error: any) {
      if (error.response) {
        console.error("Error data:", error.response.data);
        console.error("Error status:", error.response.status);
        console.error("Error headers:", error.response.headers);
      } else if (error.request) {
        console.error("Error request:", error.request);
      } else {
        console.error("Error message:", error.message);
      }
      console.error("Error config:", error.config);
    }
  };

  return (
    <div>
      <h1>Sentiment Analysis</h1>
      <textarea value={content} onChange={handleInputChange} placeholder="Enter text to analyze" />
      <button onClick={analyzeSentiment}>Analyze</button>
      {result && (
        <div>
          <h2>Analysis Result</h2>
          <pre>{JSON.stringify(result, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default SentimentAnalysis;
