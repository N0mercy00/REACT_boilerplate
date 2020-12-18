REACT BOILER PLATE 

유튜브 John Ahn 님 강의 실습
https://www.youtube.com/watch?v=OGVsnbEbSLM&list=PL9a7QRYt5fqkZC9jc7jntD1WuAogjo_9T&index=13
*모든 코드의 저작권은 유튜브 John Ahn 님에게 있습니다 *

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
일단 비밀번호 한도를 늘려서 로그인했는데 어디가 잘못되었는지 확인하기*

auth 기능만들기
auth route만들기 <-제한되어있는 페이지/관리자/유저등등 체크 (글조회,작성,삭제권한등)
저번에 작성한 토큰을 이용한다. 클라이언트에서는 쿠키, 서버에서는 DB에 쿠기가 들어간다
두개의 쿠키가 동일한지 체크
쿠키에 저장된 토큰을 decode 하면 유저ID가 나온다 (토큰자체가 유저아이디를 이용해서 생성한것이기때문)


로그아웃 기능 만들기
1.로그아웃 route만들기
2.로그아웃 하려는 유저를 DB에서 찾기
3.token지우기 (token이 없으면 auth 기능 작용안하니깐)

*모든 코드의 저작권은 유튜브 John Ahn 님에게 있습니다 *