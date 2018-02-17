# VanillaTube

## TODO

1. [Bug Fix] 비디오 클릭 버그

- 사용자들의 신고가 접수중입니다! 큰일입니다! 현재 비디오 목록에 나열된 비디오를 선택하면 왼쪽 화면에서 해당 영상이 재생됩니다. 오른쪽 목록에서 비디오를 선택할 때, Thumbnail 이미지 오른쪽 빈 공백을 클릭해보세요. 영상이 재생되지 않죠? 고쳐주세요!

---

### Installation

- 우선 repository를 본인 Github 계정으로 fork해주세요. (바닐라코딩 repository 페이지 오른쪽 상단에 보시면 fork 버튼이 있습니다.)

```
// ** 본인이 원하는 디렉토리내에서 실행할 것. **

// fork해온 프로젝트를 본인 컴퓨터에 다운받는 명령어
git clone REMOTE_URL

// 방금 clone한 디렉토리로 이동
cd vanillatube

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
git status
git add FILE_NAME
git commit -m "COMMIT_MSG"
git push origin master
```

---

### 작업 내용 Ken과 공유하는 법

작업 내용 저장 후, 다음 링크의 방법을 따라하세요.[PR 만들기](https://help.github.com/articles/creating-a-pull-request-from-a-fork/)

**영어 잘 이해 안되시면 슬랙 채널에 물어보세요!**

---

### 주의

- `src` 디렉토리내에서만 작업해주세요.
