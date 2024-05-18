"use client";
import React, { useState } from "react";
import axios from "axios";

const DiaryEntry = () => {
  const [content, setContent] = useState("");
  const [response, setResponse] = useState(null);

  const handleInputChange = (e) => {
    setContent(e.target.value);
  };

  const submitDiary = async () => {
    try {
      const res = await axios.post("http://localhost:3001/sentiment", { content }); // 포트를 3001로 변경
      setResponse(res.data);
    } catch (error: any) {
      console.error("Error:", error.response ? error.response.data : error.message);
    }
  };

  return (
    <div>
      <h1>Diary Entry</h1>
      <textarea value={content} onChange={handleInputChange} placeholder="Enter your diary content" />
      <button onClick={submitDiary}>Submit</button>
      {response && (
        <div>
          <h2>Response</h2>
          <pre>{JSON.stringify(response, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default DiaryEntry;
