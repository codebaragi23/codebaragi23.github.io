---
title: "GitHub 시작"
categories: 
  - GitHub
tags: 
  - Git
  - GitHub
last_modified_at: 2020-01-06T10:54:48-04:00
toc: true
icon: fa-github
---

GitHub 및 GitHub Pages를 시작하며 이를 정리해 보고자 한다.

## 1. Introduction

오픈 프로젝트의 소스를 다운받아본 사람이라면 GitHub를 한번쯤은 들어가 봤을 것입니다. 누군가가 공개해 놓은 오픈소스를 호스팅하여 쉽게 다운받아 사용할 수 있게 해 주는 좋은 웹서비스입니다.

그동안 미루고 미루던 Git 및 GitHub를 사용하면서 필요한 정보들을 정리해 볼까 합니다.

### 1-1. Git이란?
![git](https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Git-logo.svg/154px-Git-logo.svg.png) 

> - 컴퓨터 파일의 변경사항을 추적하고 여러 명의 사용자들 간에 해당 파일들의 작업을 조율하기 위한 분산 버전 관리 시스템
> - 주로 소프트웨어 개발에서 소스 코드 관리 사용
> - 2005년에 리눅스 커널 개발을 위해 여로 커널 개발자들과 함께 2005년에 리누스 토르발스가 개발, 2005년부터 지금까지 주니오 하마노(Junio Hamano)가 소프트웨어의 유지보수

Git의 사용법 및 Tip은 추후 사용하면서 정리하도록 해 보겠습니다.


### 1-2. GitHub란?
![github](https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Octocat_GitHub_Mascot.png/220px-Octocat_GitHub_Mascot.png) 
> - 원래 이름: Logical Awesome LLC
> - 분산 버전 관리 툴인 깃(Git)을 사용하는 프로젝트를 지원하는 웹호스팅 서비스
> - 루비 온 레일스로 작성

## 2. GitHub 계정 생성
Git을 사용하기 전에 먼저 github 계정을 생성해 보겠습니다.


### 1. GitHub 홈페이지 접속

다음 링크를 통해 github 홈페이지에 접속합니다.  
[https://github.com/](https://github.com/)

![](/assets/images/2019-12-05-Start GitHub-pic1.png)

### 2. 계정 정보 입력  
사용자 이름과 이메일 주소, 비밀번호를 입력하여 계정을 등록 합니다.

![](/assets/images/2019-12-05-Start GitHub-pic2.png)

### 3. 계정 검사
자동 가입 방지를 위해 계정 검사를 진행하게됩니다. 검증하기를 눌러 가이드에 따라 화살표로 이미지를 움직여 바로하고 완료를 클릭합니다.

![](/assets/images/2019-12-05-Start GitHub-pic3.png)

![](/assets/images/2019-12-05-Start GitHub-pic4.png)


### 4. 계정 유형 선택
계정 유형의 경우 무료인 "Free"와 유료로 사용할 수 있는 "Pro"가 있습니다.
저는 가난한 개인 개발자이기 때문에 "Free"를 선택하겠습니다.

![](/assets/images/2019-12-05-Start GitHub-pic5.png)


### 5. 설문 조사
설문 조사 항목이 나옵니다. 가이드에 따라 skip을 하거나 설정을 완료하시면 됩니다.

![](/assets/images/2019-12-05-Start GitHub-pic6.png)

### 6. 이메일 계정 확인
가입한 이메일 주소로 온 메일을 확인하면 가입 절차가 완료됩니다.

![](/assets/images/2019-12-05-Start GitHub-pic7.png)

메일을 받지 못한 경우 Resend를 눌러 다시 메일을 받을 수 있습니다.

![](/assets/images/2019-12-05-Start GitHub-pic8.png)

## 3. Git 설치(윈도우)
Git설치방법에 대해 알아봅시다. 저는 윈도우 사용자로 윈도우 설치에 대해서만 작성하겠습니다.


### 1. Git 설치파일 다운로드

Git 설치파일을 다운로드 받습니다.  
[https://git-scm.com/downloads](https://git-scm.com/downloads)

위에 링크되어 있는 페이지에 들어가서 자신의 OS에 맞는 Git 설치버전을 받아주세요.

![](/assets/images/2019-12-05-Start GitHub-pic9.png)
  

### 2. 설치

 **1. 약관을 읽어주고 Next를 눌러줍니다.**

![](/assets/images/2019-12-05-Start GitHub-pic10.png)

 **2. 설치할 Component들을 선택합니다. 저는 기본으로 선택되어 있는것 이외에는 추가로 설치하지않고 Next를 눌러 진행하겠습니다.**




![](/assets/images/2019-12-05-Start GitHub-pic11.png)

### 4. 

![](/assets/images/2019-12-05-Start GitHub-pic12.png)

### 5. 시작 메뉴에 폴더를 만듭니다. 시작메뉴에 폴더를 추가하고 싶지 않다면 Don't create a Start Menu folder 체크박스를 클릭하고 Next를 눌러주세요.

  

![](https://t1.daumcdn.net/cfile/tistory/993259425C80AD0419)

### 6. 깃의 기본에디터를 설정합니다. 설정해주고 Next~

  

![](https://t1.daumcdn.net/cfile/tistory/99D1F9435C80AD2116)

### 7. Git커맨드의 설정을 하는 부분입니다. 저는 기본으로 되어있는 Use Git from the Windows Command Prompt를 선택하고 Next를 하겠습니다.

  

![](https://t1.daumcdn.net/cfile/tistory/99B339495C80AD310A)

### 8. 디폴트로 되어있는 Use the OpenSSL library를 선택해주고 Next를 눌러줍시다.

  

Use the OpenSSL library : OpenSSL 라이브러리 사용하며 서버인증서는 ca-bundle.crt 파일을 사용하여 유효성 검사

Use the native Windows Secure Channel library : Windows 인증서 저장소를 사용하여 서버 인증서의 유효성 검사

  

![](https://t1.daumcdn.net/cfile/tistory/9912094C5C80AD421B)

### 9. Checkout, Commit할때의 텍스트라인 엔딩을 선택하고 Next

  

![](https://t1.daumcdn.net/cfile/tistory/995AF1445C80AD5118)

### 10. Git Bash 터미널의 형식을 선택해줍니다.

  

![](https://t1.daumcdn.net/cfile/tistory/99E9FA425C80AD6213)

### 11. 옵션 선택합니다.

  

Enable file system caching : 성능향상을 위해 파일 시스템 데이터를 메모리에 캐시합니다.

Enable Git Credential Manager : Windows 용 보안 Git 자격증명 저장소를 사용하기 위해 Git Credential Manager 활성화합니다.

Enable symbolic links : symbolic links 활성화합니다.(기존 저장소는 영향을 받지 않습니다)

  

![](https://t1.daumcdn.net/cfile/tistory/996BD64F5C80AD7619)

### 12. Install을 눌러 설치를 진행합니다.

  

![](https://t1.daumcdn.net/cfile/tistory/9967F04D5C80AD8616)

### 13. 설치가 끝날때까지 조금만 기다려줍시다.

  

![](https://t1.daumcdn.net/cfile/tistory/99BD24505C80AD9614)

### 14. 설치가 완료되었습니다.

  

```
$git config --global user.name "username"
$git config --global user.email "email" 
```

### 15. 깃을 처음 설치하면 Name과 Email이 Null로 되어있을겁니다. 설치받은 GitBash를 열어서 위의 명령어를 쳐 설정을 해줍시다.

```
$git config --list 
```

### 16. 위의 명령어를 입력하여 Name과 Email이 제대로 들어갔는지 확인할 수 있습니다.

