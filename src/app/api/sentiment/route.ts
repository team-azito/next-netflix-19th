import { NextRequest, NextResponse } from "next/server";
import axios from "axios";

export async function POST(request: NextRequest) {
  const { content } = await request.json();

  const client_id = "ki39rdkaso";
  const client_secret = "0sB35nX5rFrxVZiiB05lcCZKC2n1GDFEASx2pve9";
  const url = "https://naveropenapi.apigw.ntruss.com/sentiment-analysis/v1/analyze";

  const headers = {
    "X-NCP-APIGW-API-KEY-ID": client_id,
    "X-NCP-APIGW-API-KEY": client_secret,
    "Content-Type": "application/json",
  };

  try {
    console.log("Request received:", { content }); // 디버깅을 위한 로그 추가
    const response = await axios.post(url, { content }, { headers });
    console.log("Naver API response:", response.data); // 디버깅을 위한 로그 추가
    return NextResponse.json(response.data);
  } catch (error: any) {
    console.error("Naver API error:", error.response ? error.response.data : error.message); // 디버깅을 위한 로그 추가
    return NextResponse.json({ error: error.message }, { status: error.response ? error.response.status : 500 });
  }
}
