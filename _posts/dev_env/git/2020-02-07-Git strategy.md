---
title: Git 전략 편
categories: 
  - Git
tags: 
  - Git 사용법
  - Git 전략
toc: true

header:
  teaser: https://images.unsplash.com/photo-1542744094-24638eff58bb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=256&q=40
  overlay_image: https://images.unsplash.com/photo-1542744094-24638eff58bb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1024&q=80
  overlay_filter: 0.5 # same as adding an opacity of 0.5 to a black background
  caption: Photo by Campaign Creators on Unsplash

icon: fa-github
---

앞서 git을 기초 사용법은 어느정도 정리가 된 듯하고 괜찮은 글을 보게되어 남길까 합니다.

원글은 아래의 출처에 있고 제 스스로 git을 잘 사용해 보고자 간단히 정리해 보았습니다.

출처: [티몬의 개발이야기-Git, 가장 쉽게 사용하기 - (2) commit, branch 전략 잘 짜는 법](http://blog.naver.com/tmondev/220763012361)
---

## Commit 전략

commit이란 ***'staged 상태에 있는 변경 내용들을 repository에 저장하는 것'***이다. 하지만 이 보다 더 중요한 commit의 의미는,  ***'git이 관리해주는 history'*** 라는 것이다. 왜 이 의미가 중요하냐면, git은 본질적으로 프로젝트의 역사를 관리해 주는 일을 한다. 즉, 프로젝트의 연표를 기록하는 것이다. 우리가 연표를 통해 어떠한 정보를 얻을 수 있는가는 연표에 기록된 사건 하나하나가 결정하게 된다. git을 통해 프로젝트의 변경이력을 관리할 때, commit이 그 프로젝트내에 발생한 개개의 사건이 되는 것이고, 이 사건들이 순서를 가지고 기록되어 나중에 우리에게 프로젝트의 역사를 알 수 있게 해준다.
  
### Commit으로 히스토리를 기록하자

[![나타낼 수 없음](http://postfiles1.naver.net/20160716_128/tmondev_1468637382464xhhKA_PNG/%BA%EA%B6%F3%BF%EC%C0%FA%BF%CD_%C0%A5%B1%E2%BC%FA_%B9%DF%C0%FC%C0%C7_%C8%F7%BD%BA%C5%E4%B8%AE_%BF%AC%C7%A5.png?type=w773)](http://blog.naver.com/PostView.nhn?blogId=tmondev&logNo=220763012361#)

> 브라우저와 웹기술 발전의 히스토리 연표 (출처 : The Evolution of the Web)

위의 연표를 보면 우리는 각각의 웹브라우저가 언제 등장하고 어떻게 발전해 갔으며, 또 어느 시대에 어떤 웹 기술들이 등장했는지 쉽게 알 수 있다. git은 이와 같이 commit을 통해 히스토리를 기록해 과거를 알게 해주며 이에 그치지 않고 과거로 돌아가 오류를 수정하거나, 내가 기록한 역사와 다른 사람의 역사를 공유하게 하고 다양한 도움을 얻을 수 있도록 해준다.  

### Commit은 의미있는 atmoic 단위로 작게!

commit은  **작은 단위**로 하는 것이 좋다. 그런데 여기서 작다는 의미는 단순히 작다는 것이 아니고  **의미를 갖는**  더이상 쪼갤 수 없는 단위를 이야기 한다. 필자는 이런 단위를 atomic 이라고 부르길 좋아한다.

[![나타낼 수 없음](http://postfiles7.naver.net/20160716_294/tmondev_1468637398937yypY5_PNG/atomic.png?type=w773)](http://blog.naver.com/PostView.nhn?blogId=tmondev&logNo=220763012361#)

> atomic

atmoic 단위는 TDD(Test-driven Development)를 빗대어 이해하면 쉽다. TDD를 보면 원하는 동작에 대한 test code를 먼저 작성하고 해당 test를 통과할 수 있는 실제 code를 작성해 매우 짧은 사이클의 개발이 반복된다.

atomic commit 단위는 커피숍을 자동화 하는 프로젝트를 예로 '각 음료 객체 추가', '전체 메뉴 리스트 추가', '장바구니 추가', '선택기능 추가' 등과 같이 작지만 의미가 있는 묶음의 단위이다. 내가 주문시스템을 담당하게 되었다면, 나는 주문시스템 전체를 완성해서 하나의 commit으로 만들어서도, 그렇다고 하나의 클래스나 메소드가 추가될 때마다 무의미하게 일일이 commit으로 만들어서도 안된다는 얘기다.
  

### Commit 할 새도 없이 폭풍코딩 했을 때, 소소한 TIP

commit을 작게 하려면 기본적으로 개발 싸이클을 작게 가져가야 한다. 하지만 우리 개발자들은 알고 있다. 그 분(?)이 오셨을 때 흐름을 끊지 않고 개발하는 것이 얼마나 효율적인지.. 아마 그 분이 가신 후 정신차리고 commit을 하려고 보면 너무 많은 코드가 수정되어 있어 곤란할 때가 있을 것이다. 이런 경우에는 1부에서 살펴봤던 stage 영역을 잘 활용하면 이미 개발된 대량의 소스를 작은 여러개의 commit으로 나누는게 가능하다.

[![나타낼 수 없음](http://postfiles16.naver.net/20160716_271/tmondev_1468637416547usrXU_PNG/Sourcetree%BF%A1%BC%AD_hunk_line_%B4%DC%C0%A7%B7%CE_stage%BF%A1_add_%C7%CF%B4%C2%B9%FD.png?type=w773)](http://blog.naver.com/PostView.nhn?blogId=tmondev&logNo=220763012361#)

> SourceTree에서 hunk, line 단위로 stage에 add 하는법

SourceTree에서 보면 위와 같이 소스를 실컷 수정한 이후에 파일들이  **'Unstaged files**' 아래에 있는 것을 볼 수 있다. 보통 add는 파일 단위로 할 수 있기 때문에 내가 원하는 형태의 atomic commit을 만들 수 없지만, SourceTree에서는 line이나 hunk 단위로 stage에 보내는 것이 가능하다.

위 그림의 빨간 상자안의 버튼들이 바로 그것이다. 내가 작업한 소스들을 다시 한 번 살펴보면서 의미있는 작업내용들을 작은 단위로 뽑아서 아래와 같이 commit 할 수 있다. 단, 주의할 것은 반드시  **모든 commit은 빌드 및 동작 가능한 상태를 유지**해야 한다는 것이다.  

[![나타낼 수 없음](http://postfiles4.naver.net/20160716_243/tmondev_1468637424538yXFJ2_PNG/%C0%CF%BA%CE_line%B8%B8_stage%BF%A1_add%C7%D1_%B0%E1%B0%FA.png?type=w773)](http://blog.naver.com/PostView.nhn?blogId=tmondev&logNo=220763012361#)

> 일부 line만 stage에 add한 결과
