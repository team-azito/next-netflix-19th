import axios from "axios";

export const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    "Content-Type": "application/json",
    authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzYjg5NWI5YjViODM5MzdlZTcyYmY2ZjVmMmZmMjJiNyIsInN1YiI6IjY2Mzk3ZTQ4NWFkNzZiMDEyOTA2MGE1YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.2FOobN6UIP5-FaGBTj1wYb4S1GD2279JuwpGBxUYPNo`,
  },
});

// 항상 패칭 요청을 보내면 response.data가 값이 리턴되게
instance.interceptors.response.use(
  function (response) {
    return response.data;
  },
  // 에러 일괄 처리
  async (error) => {
    console.log(error.message);
    return Promise.reject(error);
  },
);
