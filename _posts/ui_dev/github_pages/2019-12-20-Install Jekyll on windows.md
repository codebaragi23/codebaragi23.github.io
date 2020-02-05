---
title: 윈도우에서 지킬 설치 및 블로그 생성하기
categories:
  - GitHub Pages
tags:
  - 루비 설치
  - 지킬 설치
  - 로컬 블로그 생성
toc: true

header:
  teaser: https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=256&q=40
  overlay_image: https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1024&q=80
  overlay_filter: 0.5
  caption: "Photo by Thought Catalog on Unsplash"

icon: fa-github
---

GitHub Pages로 블로그를 운영하면서 theme를 customize할 필요가 없다면 지킬을 설치 할 필요는 없습니다.

그러나 자신에게 맞는 theme가 없거나 기능을 추가하고 싶다면 지킬을 설치하고 로컬에서 즉시 확인 할 수 있습니다.
이 카테고리는 GitHub Pages를 운영하면서 customize한 요령들을 기록하고자 합니다.

## 1. 루비 (Ruby) 설치

다음 다운로드 페이지에서 윈도우용 루비 + 개발자킷(DevKit) 설치 프로그램을 다운로드 후 설치합니다.  
[https://rubyinstaller.org/downloads/](https://rubyinstaller.org/downloads/)

루비가 먼저 설치되고 (PATH 설정 포함) 이어서 개발자 킷 설치 과정이 이루어집니다.

![][pic1]



설치 시 아래의 권장과 같이 경로상에 **띄어쓰기가 포함되지 않는것을 권장**합니다.

저는 C:\Program File\ 하위의 경로에 설치하며 "multiple target patterns" 에러 메시지를 보고 한참동안이나 검색하기도 했습니다.

![][pic2]

## 2. 지킬 (Jekyll) 설치하기

루비가 설치가 정상적으로 완료되면, 이제 지킬을 설치해야합니다. 먼저 윈도우 검색창에서 Ruby를 검색 후 Start Command Prompt with Ruby를 실행합니다.

![][pic3]

콘솔창에서 gem 명령어를 통해 지킬과 실행에 필요한 패키지들을 설치합니다.

```ruby
gem install bundler
gem install jekyll
gem install jekyll-feed

# for minimal-mistakes theme
gem install jekyll-paginate
gem install jekyll-include-cache
gem install jekyll-sitemap
gem install jekyll-gist

# for kor time
gem install tzinfo
gem install tzinfo-data
```

minimal-mistakes 테마를 사용하기 위해서는 아래의 2개 패키지를 추가 설치하기 바랍니다.

관련 패키지들이 정상적으로 설치되면, 이제 로컬 머신에서 지킬을 통해 블로그 미리보기를 할 수 있습니다.

## 3. 로컬에서 블로그 생성하기
먼저 루비 콘솔창에서 이전 포스팅에서 생성한 블로그의 깃허브 저장소와 연동된 폴더로 이동한다. 윈도우 상에서는 인코딩 문제가 있을 수 있는데, 다음의 코드로 블로그 생성이 가능합니다.

```ruby
# 블로그 저장 폴더로 이동
# 인코딩 에러 발생시 다음의 코드를 실행
chcp 65001
# 지킬을 실행
jekyll serve
```

코드 실행 결과는 다음과 같습니다.

![][pic4]

브라우저를 열어 <http://127.0.0.1:4000/> 또는 <http://localhost:4000/>로 접속하면 로컬 상에서 블로그가 구현된 결과를 살펴 볼 수 있습니다.

설치에 대한 조금 더 자세한 내용은 [지킬 한국어 페이지](https://jekyllrb-ko.github.io/)를 참고바랍니다.


[pic1]: /assets/images/posts/ui_dev/github_pages/2019-12-20-Install Jekyll on windows-pic1.png
[pic2]: /assets/images/posts/ui_dev/github_pages/2019-12-20-Install Jekyll on windows-pic2.png
[pic3]: /assets/images/posts/ui_dev/github_pages/2019-12-20-Install Jekyll on windows-pic3.png
[pic4]: /assets/images/posts/ui_dev/github_pages/2019-12-20-Install Jekyll on windows-pic4.png