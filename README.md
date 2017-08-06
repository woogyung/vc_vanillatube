# Creating a static google clone website

### Prerequisites

- git
  - Mac: http://sourceforge.net/projects/git-osx-installer/
  - Window: http://msysgit.github.com/
- node
  - Mac/Window: https://nodejs.org/en/download/

---

### Installation

- 우선 repository를 본인 Github 계정으로 fork해주세요. (바닐라코딩 google-clone repository 페이지 오른쪽 상단에 보시면 fork 버튼이 있습니다.)

```
// 본인이 원하는 디렉토리로 이동
git clone git@github.com:당신의유저네임/google-clone.git

// 방금 clone한 디렉토리로 이동
cd google-clone

// Git 브랜치 이동
git checkout master

// 작업에 필요한 구성 요소 설치
npm install
```

---

### 쉽게 작업하는 법

```
// 프로젝트 디렉토리로 이동 후, 아래의 명령어를 실행시켜 보세요.
// 브라우저에 자동으로 작업하는 페이지가 열리고,
// 작업을 하시면서 변동 사항을 저장하시면 자동으로 브라우저는 변화를 감지하고 새로운 화면을 보여줍니다.
npm start

// 작업 끝내기
MAC/Window: control + C
```

---

### 작업 내용 저장하는 법

```
// 프로젝트 디렉토리에서 아래의 명령어를 순서대로 실행한다.
git status (작업하고 수정된 파일들의 목록을 보여준다. 그냥 확인하고자 하는 목적.)
git add . (수정한 모든 파일을 git에게 통보한다.)
git commit -m "Google clone project" (방금 git에게 통보한 모든 파일을 저장시킨다.)
git push origin master
```

---

### 작업 내용 Ken과 공유하는 법

작업 내용 저장 후, 다음 링크의 방법을 따라하세요.[PR 만들기](https://help.github.com/articles/creating-a-pull-request-from-a-fork/)

**영어 잘 이해 안되시면 사슴나라 슬랙 채널에 물어보세요!**

---

### Assets

- 구글 로고 이미지: `/assets/google_logo.png`
- 메인 검색 창 마이크 이미지: `/assets/microphone.png`
- 나머지 이미지 Sprite 파일: `/assets/icons.png`
- 바둑판 모양 아이콘: `background-position: -132px -38px`
- 벨 모양 아이콘: `background-position: -194px -21px`

**예제**

`<img src="/assets/google_logo.png">`

---

### 주의

- `src/index.html`, `src/style.css` 파일내에서만 작업해주세요.
