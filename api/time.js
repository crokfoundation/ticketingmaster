// 파일 이름: api/time.js

// Vercel에서 이 함수를 API로 실행해 줍니다.
export default function handler(request, response) {
  
  // CORS 헤더 추가 (중요!)
  // 어떤 사이트(예: 로컬, GitHub)에서도 이 API를 호출할 수 있게 허용
  response.setHeader('Access-Control-Allow-Origin', '*');
  response.setHeader('Access-Control-Allow-Methods', 'GET');
  response.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // timeapi.io가 주던 것과 똑같은 형식으로 
  // '현재 서버 시간'을 JSON으로 응답합니다.
  response.status(200).json({
    // new Date()는 이 코드가 실행되는 '서버'의 현재 시간입니다.
    dateTime: new Date(),
  });
}