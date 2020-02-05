---
title: "Git 기본 명령어"
categories: 
  - Git
tags: 
  - Git 구조
  - Git 명령어
toc: true
last_modified_at: 2020-01-10

related_posts:
  - 2019-12-05-Start Git

header:
  teaser: https://images.unsplash.com/photo-1524741978410-350ba91a70d7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=256&q=40
  overlay_image: https://images.unsplash.com/photo-1524741978410-350ba91a70d7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1024&q=80
  overlay_filter: 0.5 # same as adding an opacity of 0.5 to a black background
  caption: "Photo by Hannah Joshua on Unsplash"

icon: fa-github
---

Git을 사용하기 위한 기본적인 사용방법에 대해 정리해 보고자 합니다.

Git 초기 설정은 이전 글의  [Git을 시작하며-4.초기설정](/git/Start-Git/#4-초기-설정)편을 참고하세요.


## 1. 구조

먼저 구조입니다.

![Git 구조](https://image.slidesharecdn.com/gitbranchstregagycasestudywoogenius-140314152231-phpapp01/95/git-branch-stregagy-case-study-2-638.jpg?cb=1413975847)
> 출저 : [Git branch stregagy & case study](https://www.slideshare.net/WooGenius/git-branch-stregagy-case-study-woo-genius)

Git은 크게 local 영역과 remote 영역으로 나눌 수 있습니다. local 영역은 offline으로 작업되는 local machine을 말하고 remote는 원격지의 특정 서버 예로 github와 같은 곳을 말한다.

local에는 `Working Directory`, `Staging Area`, `Local Repository` 등 3개의 영역이 있습니다.

- `Working Directory`: 현재 git 관련 작업중인 디렉토리이며 `init` 명령어를 통해 `.git` 디렉토리가 하위로 생성되는 git의 추적(감지)을 받는 영역입니다.
- `Staging Area`: 여기서 변화가 감지된(추가/수정/삭제 등) 변화에 대해 git이 관리 해 주길 원하면 `add` 명령어를 통해 `Staging Area`로 옮겨 줍니다.
- `Local Repository`: `commit` 명령어 을 통해 local에서 관리된 파일들에 대해 변경 내용을 반영합니다.

remote의 `Remote Repository` 영역에 `push` 명령어를 통해 local의 변경 내용을 저장합니다.


## 2. 기본 명령어

다음은 기본 명령어 들입니다.

`git --version`  
git 버전 확인

`git init`  
현재 디렉토리에 git 저장소 생성  
저장소 구성을 위한 _.git_ 디렉토리가 생성되며, 이 폴더에는 프로젝트 관리를 위한 파일들과 config 파일 등이 존재

`git clone <repository>`  
원격 저장소로부터 복제

`git add [-i][-p][--all | * | .][<files>]`  
파일 스태이징  
추적되지 않은(untracked) 파일들을 *git*이 추적하도록 하거나 파일은 수정했지만 아직 스테이징 영역에 올라가지 않은(Changed but not updated)파일들을 스테이징 영역으로 추가  
_-i_: 대화형모드가 시작되며 파일의 일부분만 선택해서 스테이징하는 것이 가능  
_-p_: 수정된 파일을을 단위별로 나누어서 추가할 수 있는 패치모드를 사용

`git commit [-v][-a][--amend][-m "<msg>"][[-F]<file>]`  
*Staging Area*에 올라가 있는 파일들을 커밋  
_-v_: *-m*을 사용하지 않을 때 편집기에 커밋하려는 변경사항의 다른점을 표시  
_-a_: 스테이징에 올리는 작업과 커밋을 동시 진행(추적되지 않는 파일은 추가되지 않음)  
_--amend_: 지정한 커밋의 메시지를 다시 사용하여 기존커밋을 수정
_-m_: <msg>와 함께 커밋  
_-F_: 특정파일만 커밋할 때 사용(사용하지 않고 파일명만 마지막에 추가 가능)

`git status`  
커밋되지 않은 변경사항을 조회

`git diff [--stat][<commit>]`  
`git diff [--stat][--cached | --staged [<commit>]]`  
*Staging Area*와 *Working Directory*의 차이점을 표시  
_--stat_: 변경사항에 대한 통계를 볼 수 있음  
_--cached_ | _--staged_: *Staging Area*과 *Local Repository*의 차이점을 표시  
_\<commit>_: 특정 커밋 \<commit>에서 local에 있는 세 영역의 차이점을 표시  

`git checkout <file>]`  
아직 스테이징이나 커밋을 하지 않은 변경내용을 취소하고 이전 상태로 되돌림.

## 3. 브랜치 관리

`git branch [-r][-a]`  
로컬에 존재하는 브랜치를 조회  
_-r_: 원격저장소의 브랜치를 조회
_-a_: 로컬 및 원격에 존재하는 모든 브랜치 조회

`git branch [-m] [<oldbranch>] <newbranch>`  
[\<oldbranch> 브랜치에서] \<newbranch> 브랜치를 만듬  
_-m_: 기존에 동일한 이름의 \<newbranch>이 있더라도 덮어씀 (옵션이 없을 경우 에러)

`git branch [-d][-D] <branchname>`  
\<branchname> 브랜치 삭제  
_-d_: \<branchname>이 현재 브랜치에 합져졌을 경우에만 삭제
_-D_: \<branchname>이 현재 브랜치에 합져지지 않았어도 삭제

`git tag <tagname> <branchname>`  
\<branchname> 브랜치의 현재시점에 \<tagname>으로 된 태그를 붙임  
git tag만 입력하면 현재 존재하는 태그 목록을 표시

`git checkout [--detach][<branch>]`  
`git checkout [--detach][<commit>]`  
\<branch>나 \<commit>로 작업트리를 변경

`git checkout -b <newbranch>`  
새로운 브랜치 \<newbranch>를 만들면서 체크아웃

`git rebase [-i | --interactive][--onto <newbase>][<branch>]`  
브랜치 \<branch>의 변경사항을 현재 브랜치 또는 \<newbase>에 적용
_-i_: 대화형모드로 커밋 순서를 변경하거나 합치는 등의 작업 가능

`git merge [--squash]<commit>`  
\<commit> 브랜치를 현재 브랜치로 통합  
_--squash_: \<commit> 브랜치의 모든 커밋을 하나의 커밋 통합

`git cherry-pick <commit>`  
\<commit> 브랜치에 있는 커밋을 현재 브랜치에 적용

`git revert [-n]<commit>`  
기존의 커밋에서 변경한 내용을 취소해서 새로운 커밋을 만듬
_-n_: 바로 커밋하지 않기 때문에 revert를 여러번한 다음 커밋 가능

`git reset [--soft | --hard]<commit>`
이전 커밋을 수정하기 위해서 사용
_--soft_: 이전 커밋을 스테이징하고 커밋은 하지 않음
_--hard_: 저장소와 작업트리에서 커밋을 제거
(e.g.: git reset HEAD^와 같이 입력하면 최근 1개의 커밋 취소)

## 4. 로그 관리

`git log [-\<number> | -n \<number>][-p][--stat][--pretty[=\<format>]][-L <range>][<commit>]`  
변경 이력 보기  
_-\<number> 또는 -n \<number>_: 보고자 하는 항목의 개수 지정 가능  
_-p_: 변경된 패치와 함께 표시  
_--stat_: 커밋할 시점의 파일 상태 보기  
_--pretty[=\<format>]_: \<format>으로 *oneline, short, medium, full*,.. 등을 지정을 수 있고 원하는 형식의 *format:\<string>* 지정 가능  
_-L \<start>,\<end>:\<file>_: 파일의 시작 끝 지점 지정 가능(숫자, 정규표현식, 오프셋 등으로 표현 가능)  
_-L :\<function>:\<file>_: 파일의 함수 이름 지정  
_\<commit>_: 해당 \<commit>의 로그 표시, commitA..commitB 와 같이 입력시 commitA부터 commitB까지 로그 표시,  
(^는 -1과 동일 HEAD^는 최신 바로 이전 커밋, HEAD^^^은 HEAD~3과 동일하게 3개 이전의 커밋)

`git blame [-L <range>][-M]<file>`  
해당 파일의 줄 단위 수정 이력 표시(커밋해시값, 수정한 사람, 수정 시간, 메시지 등)  
_-L \<start>,\<end>:\<file>_: 파일의 시작 끝 지점 지정 가능(숫자, 정규표현식, 오프셋 등으로 표현 가능)  
_-L :\<function>:\<file>_: 파일의 함수 이름 지정  
_-M_: 파일 안에서 줄 단위 복사, 붙여 넣기, 이동 정보 보기 (-C 추가 시 파일간의 복사 정보도 표시)


## 5. 원격 저장소

`git clone <repository>[<directory>]`  
원격 저장소로부터 복제하여 [새로운 경로 \<directory>]에 저장소 생성

`git fetch [<repository>]`  
원격 저장소의 변경사항을 가져와 원격브랜치 갱신
 
`git pull [<repository>]`  
git fetch에서 하는 원격저장소의 변경사항을 가져와 지역브랙치에 합치는 작업을 한꺼번에 수행

`git push [--dry-run][<repository>][<refspec>]`  
원격 저장소 \<repository>에 지역 브랜치 \<refspec>와 같은 이름으로 푸싱  
(옵션을 주지 않으면 origin 저장소에 현재 브랜치 이름으로 푸싱)  
(로컬에서 tag를 달았을 경우 기본적으로 푸싱하지 않기 때문에 git push origin \<tag>나 모든 태그를 올리기 위해 git push origin --tags를 사용)  
_--dry-run_: 푸싱된 변경사항을 확인

`git remote add 이름 저장소주소`
새로운 원격 저장소 추가

`git remote`
`git remote add <name><url>`
`git remote rm <name>`
추가한 원격저장소의 목록 확인
_add_: 새로운 원격 저장소 추가
_show_: 원격 저장소 정보 확인
_rm_: 원격 저장소 제거


## 6. 서브모듈

`git submodule`
`git submodule add <repository>[<path>]`
`git submodule init [<path>]`
`git submodule update [<path>]`
연관된 하위모듈을 확인
_add_: 새로운 하위모듈을 해당경로에 추가
_init_: 서브모듈을 초기화
_update_: 서브모듈의 변경사항 적용
