---
title: Git 고급편-2편
categories: 
  - Git
tags: 
  - Git 사용법
  - Git 고급 명령
toc: true

last_modified_at: 2020-02-11

header:
  teaser: https://images.unsplash.com/photo-1551778773-01f339e8e6a2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=256&q=40
  overlay_image: https://images.unsplash.com/photo-1551778773-01f339e8e6a2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1024&q=80
  overlay_filter: 0.5 # same as adding an opacity of 0.5 to a black background
  caption: Photo by Dan Smedley on Unsplash

icon: fa-github
---

Git을 사용하기 위한 고급 사용방법에 대해 정리해 보고자 합니다.

## 프로젝트 진행 중 저장소로부터 최신 소스 받아오기


git으로 관리중인 프로젝트에서 소스 코드를 막 변경하며 개발하다가, 저장소의 자신이 속한 branch의 소스가 다른 사람으로 인해 업데이트 되면 받아야 할 때가 생깁니다.

그냥 git pull 하면 충돌의 여지가 아주 많기 때문에 진행이 잘 되지 않습니다. 간단한 수정 또는 테스트용으로 살짝만 바꿨는데도 git pull이 잘 안 된다면, 아래와 같은 방법이 있습니다.


1. 기존 변경 사항을 무시

```git
git reset --hard HEAD
git pull
```

Git

Copy

reset --hard HEAD 는 가장 최근 커밋으로 소스 코드를 돌려버립니다.

이제 원격 저장소의 가장 최근 커밋과 같은 소스가 됐으니, 충돌이 일어날 리가 없죠.

이 상태에서 git pull을 하는 원리입니다.

아니면,

```git
git fetch --all
git reset --hard HEAD
```

Git

Copy

먼저 최신 소스를 받아온 후 가장 최근 커밋으로 돌리는 방법이 있습니다.

  

2. 기존 변경 사항 저장

```git
git checkout master
git branch new-branch-to-save-current-commits
git fetch --all
git reset --hard origin/master

```

Git

Copy

먼저 master 브랜치로 가줍니다. 그리고, master에서 새로운 브랜치를 쳐줍니다.

그 다음 아직 master 브랜치에 있을텐데, 여기서 fetch --all을 통해 모든 최신 소스를 받아옵니다.

마지막으로 reset을 통해 강제로 최신 소스를 적용시키는 원리입니다.

fetch 하기 전까지의 모든 커밋들은 new-branch-to-save-current-commits 브랜치에 남아있습니다. 이를 위해선 master에 가서 새로운 브랜치를 치기 전에 이전 변경 사항들은 모두 commit을 해놔야겠죠.
