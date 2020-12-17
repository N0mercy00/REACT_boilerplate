REACT BOILER PLATE 
index.js <-- back end 시작점
node js, express 다운 및 초기 앱 

몽고 디비 연결 
code : 8000번 오류 --> 방화벽 문제 어디서든 접속 가능하게 설정
유저스키마, postman 으로 body 받아오기
노드몬 설치 --> 수정사항시 재시작 할 필요없게 해주는 애
MongoDB 비밀번호 그대로 올라가있어서 저장소 초기화 
평문 비밀번호 bcrypt를 이용한 암호화

로그인 기능 구현
로그인 라우트 먼저 만듬
json web token , express cookie parser 두개 설치

로그인
1.해당 이메일 존재하는지 체크
2.해당 이메일에 해당하는 비밀번호와 일치하는지 체크
3.해당 유저에게 토큰생성
*비밀번호 비교과정에서 암호화된 비밀번호가 맥시멈 사이즈를 넘는다고 에러남