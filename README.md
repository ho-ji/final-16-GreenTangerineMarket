
# 청귤마켓
청귤마켓은 회원만을 위한 비공개 중고거래 플랫폼입니다. 멋쟁이사자처럼 프론트엔드 스쿨 5기에서 제공된 API를 기반으로 제작되었습니다. 

<br/>

🔗[API 명세](https://loving-libra-5d9.notion.site/API-dfabbe2607f347d9ac881e68e91306f3)

🔗[청귤마켓 링크](https://frontendschool5.github.io/final-16-GreenTangerineMarket/signin)

* 테스트 계정 
	* ID : market@test.com
	* 비밀번호: market

<br/>

## 프로젝트 인원

<table>
  <tr>
    <td align="center">
      <a href="https://github.com/Seunggyu-Jung">
        <img src="https://avatars.githubusercontent.com/u/106158869?v=4" width="150px;"/>
        <br/>
        <sub><b>정승규님</b></sub>
      </a>
      <br/>
    </td>
    <td align="center">
      <a href="https://github.com/Limttugi">
        <img src="https://avatars.githubusercontent.com/Limttugi" width="150px;"/>
        <br/>
        <sub><b>임준혁님</b></sub>
      </a>
      <br/>
    </td>
    <td align="center">
      <a href="https://github.com/tmfdk0213">
        <img src="https://avatars.githubusercontent.com/u/126536495?v=4" width="150px;"/>
        <br/>
        <sub><b>이슬아님</b></sub>
      </a>
      <br/>
    </td>
    <td align="center">
      <a href="https://github.com/ho-ji">
        <img src="https://avatars.githubusercontent.com/u/95618801?v=4" width="150px;"/>
        <br/>
        <sub><b>장예지님</b></sub>
      </a>
      <br/>
    </td>
  </tr>
</table>

<br>

## 기술스택
<img src="https://img.shields.io/badge/html5-E34F26?style=for-the-badge&logo=html5&logoColor=white"> <img  alt="Styled-Components"  src="https://img.shields.io/badge/Styled Components-DB7093.svg?&style=for-the-badge&logo=styled-components&logoColor=white"/> <img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"> <img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black"> <img alt="React-Router" src="https://img.shields.io/badge/react Router-CA4245?style=for-the-badge&logo=reactRouter&logoColor=white">  <img src="https://img.shields.io/badge/recoil-3578E5?style=for-the-badge&logo=recoil&logoColor=white"> 

<br>

## 구현 기능

### 임준혁
1. 로그인 및 회원 가입
- 로그인 정보 토큰을 react-cookie를 사용하여 쿠키에 저장함
- 로그인 토큰은 저장/ 가져오기/ 삭제 기능이 같은 키 값으로 실행되므로  utils폴더에 함수로 분리
- 회원가입 및 로그인 시, input을 검증할 때 Lodash라이브러리의 debounce를 사용
2. 라우팅 
- 로그인 정보 토큰에 따라 라우팅을 구현함
- 비로그인 유저(쿠키에 로그인 토큰이 없는 상태)는 PublicRoutes로 라우팅
- 로그인 유저(쿠키에 로그인 토큰이 있는 상태)는 PrivateRoutes로 라우팅
3. 이미지 업로드
- 이미지는 1~3개가 등록될 수 있으며 API통신이 필요
- 회원가입, 프로필, 게시글에 계속 사용되는 코드이므로 utils폴더에 handleSetImage.js와 handleUploadImage.js로 이미지 업로드 및 게시 관리
<br>

### 정승규
1. 메인페이지
- 최신 피드와 최신상품이 게시되는 메인페이지를 구현
2. 상품 및 피드 등록 페이지
- 피드 등록 시 필요한 가이드를 보여주고 사진 및 피드를 등록할 수 있음
- 상품 등록 시 필요한 가이드를 보여주고 사진 및 상품 정보를 등록할 수 있음
3. 스크롤 최상단 버튼
- 스크롤이 하단으로 내려갈 시 최상단으로 올려주는 최상단 이동 버튼을 구현
4. 무한스크롤
- Lodash라이브러리의 throttle함수를 사용하여, 피드 및 상품 정보를 무한스크롤로 추가 로딩되게 구현
<br>

### 이슬아
1. 상품 상세페이지
- 상품 상세페이지를 구현
2. 피드 상세페이지
- 피드 상세페이지를 구현

<br>

### 장예지
1. 프로필 페이지
- 사용자의 팔로워, 팔로우 리스트를 모달창으로 보여줌(리스트가 길어질 경우 무한스크롤로 추가로딩)
- recoil로 로그인한 사용자 정보를 확인하여 사용자를 구별함
- 본인페이지일 경우, 프로필 수정 / 피드 작성/ 상품 등록/ 로그아웃이 가능
- 다른 사용자의 페이지일 경우엔 팔로우 및 상대방의 상품/피드 확인 가능
2. 검색 페이지
- 계정 ID 및 사용자 이름으로 사용자 검색을 할 수 있음
- 검색어와 일치하는 부분은 하이라이트가 되도록 SearchHighLight 컴포넌트 구현
- 검색 시 encodeURIComponent를 사용하여 특수문자도 처리되도록 구현
3. 반응형
- 모바일 및 태블릿에서도 동작하도록 mediaQuery를 사용하여 반응형 페이지를 구현
