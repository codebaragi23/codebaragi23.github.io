---
title: minimal-mistakes 테마에서 javascript custom 하기
categories:
  - GitHub Pages
tags:
  - GitHub Pages
  - Markdown
toc: true
icon: fa-github
---


[](https://beagle-dev.tistory.com/34)

윈도우에서 NPM 설치하기

[핵심 이론 파헤치기](https://beagle-dev.tistory.com/category/%ED%95%B5%EC%8B%AC%20%EC%9D%B4%EB%A1%A0%20%ED%8C%8C%ED%97%A4%EC%B9%98%EA%B8%B0)  2017. 9. 21. 11:36

**NPM 설치하기**

  

-   NPM을 사용하기 위해서는  [Nodejs가 우선 설치](https://nodejs.org/ko/download/)되어있어야 한다.
-   설치가 완료된 후 Nodejs( node -v )와 NPM버전( npm -v )을 확인해보자. (설치한 디렉토리까지 이동 후 확인 가능.)

  

  

**NPM 업데이트**

  

npm install --global --production npm-windows-upgrade

npm-windows-upgrade


# jekyll의 minimal-mistakes에서 자바스크립트 커스텀하는 방법

minimal-mistakes 테마를 적용한 jekyll 블로그를 커스텀하는 과정에서 자바스크립트 코드를 추가하는 방법입니다.  
minimal-mistakes 문서에 자바스크립트 커스텀 방법이 잘 정리되어있습니다.  [공식문서 바로가기](https://mmistakes.github.io/minimal-mistakes/docs/javascript/).

----------

우리가 수정해야 할 파일은 /assets/js/ 에 위치한 _main.js 파일입니다.  
하지만, jekyll은 _main.js 파일이 아닌 main.min.js 파일을 컴파일하여 화면에 반영합니다.  
main.min.js 는 _main.js 자바스크립트 코드를 압축화하고 난독화한 파일로 npm 패키지 중 하나인 uglify를 이용하여 만들 수 있습니다.

## 1. npm 셋팅

```
> npm init

```

블로그 프로젝트 디렉토리 위치에서 위 코드를 실행시키면 package.json 파일이 생성됩니다.

## 2. package.json 파일 수정

[https://github.com/mmistakes/minimal-mistakes/blob/master/package.json](https://github.com/mmistakes/minimal-mistakes/blob/master/package.json)  package.json 파일을 아래와 같이 수정합니다.

```
{
  "name": "minimal-mistakes",
  "version": "4.14.2",
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
    "onchange": "^5.1.3",
    "uglify-js": "^3.4.9"
  },
  "scripts": {
    "uglify": "uglifyjs assets/js/vendor/jquery/jquery-3.3.1.min.js assets/js/plugins/jquery.fitvids.js assets/js/plugins/jquery.greedy-navigation.js assets/js/plugins/jquery.magnific-popup.js assets/js/plugins/jquery.smooth-scroll.min.js assets/js/_main.js -c -m -o assets/js/main.min.js",
    "add-banner": "node banner.js",
    "watch:js": "onchange \"assets/js/**/*.js\" -e \"assets/js/main.min.js\" -- npm run build:js",
    "build:js": "npm run uglify && npm run add-banner"
  }
}

```

## 3. uglify 설치 및 실행

uglify-js 패키지 설치

```
> npm install uglify-js

```

package.json의 scripts 부분을 보면 build:js 스크립트 실행시  **npm run uglify && npm run add-banner**  를 실행하도로 되어있습니다. 이를 참고하여 cmd에서  `npm run build:js`를 실행해봅시다. 정상적으로 _main.js 파일이 main.min.js로 압축된 것을 확인할 수 있을 것입니다.

## 4. jekyll serve 실행

이미 서버가 실행되어있다면 자동으로 반영됩니다.  
그렇지 않다면 다시  **jekyll serve**  를 통해 서버를 실행해주면 커스텀한 자바스크립트 코드가 반영된 것을 확인할 수 있습니다.
