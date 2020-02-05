---
title: GitHub Pages 시작
categories: 
  - GitHub Pages
tags: 
  - GitHub Pages란
  - GitHub Pages 생성
toc: true

header:
  teaser: https://images.unsplash.com/photo-1522199755839-a2bacb67c546?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=256&q=40
  overlay_image: https://images.unsplash.com/photo-1522199755839-a2bacb67c546?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1024&q=80
  overlay_filter: 0.5
  caption: "Photo by Anete Lūsiņa on Unsplash"
  
icon: fa-github
---

Git을 위해 GitHub를 하다보니 GitHub Pages를 알게 되고, 욕심이 생겨 나도 한번 해 보고자 하는 마음이 생겼네요.

과연 열심히 할 수 있을지 모르겠지만 한번 시작해 보겠습니다.

# 1. Introduction

**GitHub Pages**는 GitHub에서 제공하는 웹호스팅 서비스로 GitHub repository에 HTML, CSS, Javascript등의 리소스를 push하는 것만으로 간단히 웹사이트를 만들 수 있습니다. 뿐만 아니라 markdown를 사용하여 웹사이트를 구현하기 위해 Static Website Generator로 Jekyll을 지원합니다.

Static Website 서비스로 회원 로그인이나 Database는 사용할 수 없지만 유지보수 비용이 없고 간편하게 웹 사이트를 게시할 수 있습니다.
(사실 sqlite 같은 static DB는 사용할 수 있지만 공개 서비스이기 때문에 보안 문제로 인해 사용에 조심스럽습니다.)

markdown으로 작성된 파일은 repository에 push 하는 것만으로 GitHub에서 자동 빌드되어 호스팅 해 주지만 간혹 빌드에러가 발생할 경우 정확한 에러메시지가 나타나지 않기 때문에 로컬로 Jekyll를 통해 확인해 볼 수 있습니다.


아래에 어느분이 GitHub Pages를 따라하기 좋게 정리를 해 두셨더군요.
참고하기 좋은 것 같아 아래 링크를 공유합니다.

[취미로 코딩하는 개발자-하우투: 같이 따라하기 시리즈](https://devinlife.com/howto/)


# 2. Setup
Windows 10 기준에서 Setup 방법을 설명하겠습니다..

## 2.1 GitHub Pages 생성
**1. repository 생성**

먼저, GitHub에서 'username'.github.io 형식의 repository를 생성합니다.

![repository][pic1]


**2. repository clone**

local에 repository를 clone합니다  
```
$ git clone https://github.com/username/username.github.io
```

**3. index.html 생성**

다음의 index.html을 따라 생성해 봅니다.  
```
<!DOCTYPE html>
<html>
<body>
  <h1>Hello World</h1>
  <p>I'm hosted with GitHub Pages.</p>
</body>
</html>
```

**4. Commit & Push**

```
$ cd username.github.io
$ git add --all
$ git commit -m "Initial commit"
$ git push -u origin master
```

**5. 동작 확인**

http://username.github.io에 접속하여 정상적으로 동작하는지 확인합니다.


[pic1]: /assets/images/posts/ui_dev/github_pages/2019-12-17-Start GitHub Pages-pic1.png