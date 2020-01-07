---
title: "GitHub Pages 시작"
categories: 
  - GitHub
tags: 
  - GitHub
  - GitHub Pages
toc: true
icon: fa-github
---

GitHub 및 GitHub Pages를 시작하며 이를 정리해 보고자 한다.

# 1. Introduction

**GitHub Pages**는 GitHub에서 제공하는 웹호스팅 서비스로 GitHub repository에 HTML, CSS, Javascript등의 리소스를 push하는 것만으로 간단히 웹사이트를 만들 수 있습니다. 뿐만 아니라 markdown를 사용하여 웹사이트를 구현하기 위해 Static Website Generator로 Jekyll을 지원합니다.

Static Website 서비스로 회원 로그인이나 Database는 사용할 수 없지만 유지보수 비용이 없고 간편하게 웹 사이트를 게시할 수 있다.
(사실 sqlite 같은 static DB는 사용할 수 있지만 공개 서비스이기 때문에 보안 문제로 인해 사용에 조심스럽다.)

markdown으로 작성된 파일은 repository에 push 하는 것만으로 GitHub에서 자동 빌드되어 호스팅 해 주지만 간혹 빌드에러가 발생할 경우 정확한 에러메시지가 나타나지 않기 때문에 로컬로 Jekyll를 통해 확인해 볼 수 있다.

아직은 Jekyll를 사용하지 않아 정리하지 않았지만 관심있으신 분들은 아래의 사이트를 참고하시면 좋을 것 같습니다.

['jekyll serve' 문제 해결하기](https://ychae-leah.tistory.com/15)

[GitHub Pages 블로그 준비하기](https://devinlife.com/howto%20github%20pages/github-prepare/)


# 2. Setup
Windows 10 기준에서 Setup 방법을 설명한다.

## 2.1 GitHub Pages 생성
**1. GitHub에서 'username'.github.io 형식의 repository를 생성한다**

![repository 생성](/assets/images/2019-12-06-Start GitHub Pages-pic1.png)


**2. local에 repository를 clone한다**
```
$ git clone https://github.com/username/username.github.io
```

**3. index.html 생성**
```
<!DOCTYPE html>
<html>
<body>
  <h1>Hello World</h1>
  <p>I'm hosted with GitHub Pages.</p>
</body>
</html>
```

**4. Commit & sync**
```
$ cd username.github.io
$ git add --all
$ git commit -m "Initial commit"
$ git push -u origin master
```

**5. 동작 확인**

http://username.github.io에 접속하여 정상적으로 동작하는지 확인한다.