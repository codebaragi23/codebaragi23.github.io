---
title: minimal-mistakes 테마에서 javascript custom 하기
categories:
  - GitHub Pages
tags:
  - npm 설치
  - javascript custom
  - javascript 빌드
  - min.js 빌드
toc: true

header:
  teaser: https://images.unsplash.com/photo-1526374870839-e155464bb9b2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=256&q=40
  overlay_image: https://images.unsplash.com/photo-1526374870839-e155464bb9b2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1024&q=80
  overlay_filter: 0.5
  caption: "Photo by Markus Spiske on Unsplash"

icon: fa-github
---

minimal-mistakes 테마를 적용한 jekyll 블로그를 커스텀하는 과정에서 자바스크립트 코드를 수정하는 방법을 정리하고자 합니다.
  
minimal-mistakes 문서에 자바스크립트 커스텀 방법을 참고하세요.
[공식문서 바로가기](https://mmistakes.github.io/minimal-mistakes/docs/javascript/).

## 1. 윈도우에서 NPM 설치하기

NPM을 사용하기 위해서는 Node.js가 우선 설치 되어있어야 합니다.

저는 윈도우 사용자로 윈도우 설치에 대해서만 작성하겠습니다.

### 1. Node.js 설치하기

Node.js를 아래의 경로에서 다운로드 합니다.  
<https://nodejs.org/ko/>

![Node.js Homepage][pic1]

NPM을 위한 것이므로 최신보다는 안정적인 왼쪽 버전을 다운로드 하기로 하겠습니다.

### 2. 설치

**1. 실행 파일을 실행하면 다음 화면을 볼 수 있습니다. Next를 누릅니다.**

![Node.js setup-initial][pic2]

**2. 약관을 읽고 아래의 체크박스에 체크를 한 후 Next를 누릅니다.**

![Node.js setup-license][pic3]

**3. 경로 설정입니다. 기본을 사용할 것이므로 Next를 누릅니다.**

![Node.js setup-location][pic4]

**4. 설치 항목을 선택 할 수 있습니다. 기본을 사용할 것이므로 Next를 누릅니다.**

![Node.js setup-custom][pic5]

**5. native 모듈을 위한 툴들을 위한 설치입니다. 기본으로 체크되어 있지 않지만 설치해 보겠습니다. Next를 누릅니다.**

![Node.js setup-tools][pic6]

**6. 설치 준비가 되었습니다. Next를 누릅니다.**

![Node.js setup-ready to install][pic7]

**7. 설치가 완료되고 Finish를 누릅니다.**

![Node.js setup-installing][pic8]

![Node.js setup-finish][pic9]

**8. Native Module을 설치하기 위한 스크립트들이 실행되고 계속 Enter를 하다보면 PowerShell로 부터 스크립트가 실행됩니다.**

![Node.js setup-native module 1][pic10]

![Node.js setup-native module 2][pic11]

![Node.js setup-native module 3][pic12]

**9. 명령 프롬프트 창을 열고 아래의 명령어로 설치 확인을 해봅니다.**
```
> node -v
v12.14.1
```

### 3. NPM 업데이트

관리자 권한으로 명령 프롬프트나 파워셀을 열어 아래의 명령어를 실행합니다.  

> npm install --global --production npm-windows-upgrade  
> npm-windows-upgrade

```
> npm install --global --production npm-windows-upgrade
C:\Users\taejin\AppData\Roaming\npm\npm-windows-upgrade -> C:\Users\taejin\AppData\Roaming\npm\node_modules\npm-windows-upgrade\bin\npm-windows-upgrade.js
+ npm-windows-upgrade@6.0.1
updated 1 package in 1.689s

> npm-windows-upgrade
npm-windows-upgrade v6.0.1
? Which version do you want to install? 6.13.6
Checked system for npm installation:
According to PowerShell: C:\Program Files\nodejs
According to npm:        C:\Users\taejin\AppData\Roaming\npm
Decided that npm is installed in C:\Program Files\nodejs
Upgrading npm... /

Upgrade finished. Your new npm version is 6.13.6. Have a nice day!
```


_참고로 설치과정에서 powershell에서 스크립트 실행 보안 정책에 대한 메시지가 나오면서 `Set-ExecutionPolicy Unrestricted -Scope CurrentUser -Force`를 추가하라는 메시지가 나오기도 합니다.(캡처를 못했는데 넘어가고 다시 안뜨더군요...)_

_또, 관리자 권한 실행이 아닌경우에 대한 경고 문구가 아래와 같이 뜸니다_

```
NPM cannot be upgraded without administrative rights. To run PowerShell as Administrator,
right-click PowerShell and select 'Run as Administrator'.
```

이제 자바스크립트 코드를 수정하고 반영하기 위한 준비가 되었습니다.


## 2. npm을 이용한 자바스크립트 빌드

우리가 수정하고자 하는건 /asset/js/_main.js 파일일 것입니다.

하지만, jekyll은 _main.js 파일이 아닌 main.min.js 파일을 컴파일하여 화면에 반영합니다.

main.min.js 는 _main.js 자바스크립트 코드를 압축화하고 난독화한 파일로 npm 패키지 중 하나인 uglify를 이용하여 만들 수 있습니다.

### 1. 빌드 준비

**1. npm 셋팅**

```
> npm init

```

블로그 프로젝트 디렉토리 위치에서 위 코드를 실행시키면 package.json 파일이 생성됩니다.

또는 아래의 경로에서 파일을 다운받아 [2. 빌드 실행](#2-빌드-실행)으로 건너뛰시면 됩니다.

<https://github.com/mmistakes/minimal-mistakes/blob/master/package.json>

**2. package.json 파일 수정**

package.json 파일을 열고 minimal-mistakes의 json과 같이 수정해 줍니다.

```
{
  "name": "minimal-mistakes",
  "version": "4.17.2",
  "description": "Minimal Mistakes 2 column Jekyll theme.",
  "repository": {
    "type": "git",
    "url": "git://github.com/mmistakes/minimal-mistakes.git"
  },
  "keywords": [
    "jekyll",
    "theme",
    "minimal"
  ],
  "author": "Michael Rose",
  "license": "MIT",
  "bugs": {
    "url": "https://github.com/mmistakes/minimal-mistakes/issues"
  },
  "homepage": "https://mmistakes.github.io/minimal-mistakes/",
  "engines": {
    "node": ">= 0.10.0"
  },
  "devDependencies": {
    "npm-run-all": "^4.1.5",
    "onchange": "^6.0.0",
    "uglify-js": "^3.4.9"
  },
  "scripts": {
    "uglify": "uglifyjs assets/js/vendor/jquery/jquery-3.4.1.js assets/js/plugins/jquery.fitvids.js assets/js/plugins/jquery.greedy-navigation.js assets/js/plugins/jquery.magnific-popup.js assets/js/plugins/jquery.ba-throttle-debounce.js assets/js/plugins/smooth-scroll.js assets/js/plugins/gumshoe.js assets/js/_main.js -c -m -o assets/js/main.min.js",
    "add-banner": "node banner.js",
    "watch:js": "onchange \"assets/js/**/*.js\" -e \"assets/js/main.min.js\" -- npm run build:js",
    "build:js": "npm run uglify && npm run add-banner"
  }
}
```

### 2. 빌드 실행
**1. uglify 패키지 설치**

uglify를 사용하기 위해 패키지를 설치합니다.

```
> npm install uglify-js
+ uglify-js@3.7.6
updated 1 package and audited 3 packages in 1.045s
found 0 vulnerabilities
```

**2. 빌드**

명령 프롬프트에서 `npm run build:js`를 실행해봅시다.

package.json에서 scripts 부분을 보면 build:js 실행시  `npm run uglify && npm run add-banner` 를 실행하도로 되어있습니다.

정상적으로 _main.js 파일이 main.min.js로 압축된 것을 확인할 수 있을 것입니다.

**3. 결과 확인**

`jekyll serve`를 통해 결과를 확인 할 수 있습니다.

이미 실행되어있다면 자동으로 반영됩니다. 

[pic1]: /assets/images/posts/ui_dev/github_pages/2020-01-14-Custom javascript-pic1.png
[pic2]: /assets/images/posts/ui_dev/github_pages/2020-01-14-Custom javascript-pic2.png
[pic3]: /assets/images/posts/ui_dev/github_pages/2020-01-14-Custom javascript-pic3.png
[pic4]: /assets/images/posts/ui_dev/github_pages/2020-01-14-Custom javascript-pic4.png
[pic5]: /assets/images/posts/ui_dev/github_pages/2020-01-14-Custom javascript-pic5.png
[pic6]: /assets/images/posts/ui_dev/github_pages/2020-01-14-Custom javascript-pic6.png
[pic7]: /assets/images/posts/ui_dev/github_pages/2020-01-14-Custom javascript-pic7.png
[pic8]: /assets/images/posts/ui_dev/github_pages/2020-01-14-Custom javascript-pic8.png
[pic9]: /assets/images/posts/ui_dev/github_pages/2020-01-14-Custom javascript-pic9.png
[pic10]: /assets/images/posts/ui_dev/github_pages/2020-01-14-Custom javascript-pic10.png
[pic11]: /assets/images/posts/ui_dev/github_pages/2020-01-14-Custom javascript-pic11.png
[pic12]: /assets/images/posts/ui_dev/github_pages/2020-01-14-Custom javascript-pic12.png