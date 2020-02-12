---
title: "Git 고급편-1편"
categories: 
  - Git
tags: 
  - Git 사용법
  - Git 고급 명령
toc: true

last_modified_at: 2020-02-11

header:
  teaser: https://images.unsplash.com/photo-1523540939399-141cbff6a8d7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=256&q=40
  overlay_image: https://images.unsplash.com/photo-1523540939399-141cbff6a8d7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1024&q=80
  overlay_filter: 0.5 # same as adding an opacity of 0.5 to a black background
  caption: "Photo by Sam Dan Truong on Unsplash"

icon: fa-github
---

## .gitignore 사용하기

특정 파일 혹은 디렉토리를 버전 관리 대상에서 제외할 때 사용하는 파일입니다.

예를 들면 로그파일, 프로젝트 파일, 빌드 파일 등을 사용할 수 있겠죠.

### .gitignore 설정

**위치**
**.gitignore**파일의 위치는 .git 파일이 있는 최상위 경로입니다.

**내용 채우기**

아래의 예시들을 참고로 자신에게 불필요한 로그, 빌드 파일등을 추가하여 사용합니다.
 
Github에서 제시한 **.gitignore** 예시 링크입니다.  
<https://github.com/github/gitignore>

언어별 예시로 **.gitignore**를 만들어 주는 사이트도 아래와 같이 있습니다.  
<https://www.gitignore.io/>


### 이미 github에 반영된 파일 .gitignore 적용하기

이미 버전 관리에 포함되어 있는 파일들을 .gitigore 파일에 추가해도 Git이 알아서 버전 관리에서 제외 하지는 않습니다.

따라서 아래의 명령어를 통해 수동으로 해당 파일들을 버전관리에서 제외 시켜줘야 합니다.

`git rm -r --cached .`에서 특정 파일만 삭제하고자 하는 경우 마지막 모든 파일 (`.`) 대신 특정 파일 이름을 입력하면 됩니다.

```bash
// 현재 저장소에 기록된 모든 cache를 삭제
$ git rm -r --cached .

// 현재 저장소에 기록된 <file> cache만 삭제
// (로컬 저장소의 파일은 삭제되지 않음)
$ git rm -r --cached <file>
```


## 커밋 내용 수정하기

이미 커밋을 하고 빠트린 파일이나 내용을 추가하고자 할 경우 다음과 같은 방법을 사용합니다.

### `commit --amend` 사용하기

ReadMe.txt의 빠트린 내용을 추가후 커밋에 재반영

단계 1: ReadMe.txt 내용 변경

단계 2: 커밋 변경
```bash
$ git add ReadMe.txt
$ git commit --amend
```

### 마지막 커밋 되돌리기

단계 1: 커밋을 되돌림

```bash
// [방법 1] commit 취소 + 해당 파일 staged 상태로 작업경로에 보존
$ git reset --soft HEAD^

// [방법 2] commit을 취소 + 해당 파일 unstaged 상태로 작업경로에 보존
$ git reset --mixed HEAD^ // 기본
$ git reset HEAD^         // 위와 동일
$ git reset HEAD~2        // 마지막 2개의 commit 취소

// [방법 3] commit을 취소 + 해당 파일 unstaged 상태로 작업경로에서 삭제
$ git reset --hard HEAD^
```

단계 2: 수정하고 다시 커밋

### 커밋 메시지 수정하기

`git commit --amend`를 이용하여 메시지만 추가하기

```bash
$ git commit --amend -m "new message"
```

## commit 날짜 수정하기

**마지막 Commit 날짜를 현재 날짜로 설정**

```bash
$ git commit --amend --no-edit --date "$(date)"
```
    
**마지막 Commit 날짜를 임의의 날짜로 설정**
    
```bash
$ git commit --amend --no-edit --date "Wed 01 Jan 2020 20:19:19 KST"
```
  
## 원격 저장소에 강제로 저장

기존 로컬의 commit을 변경한 경우 예로 `--amend`등을 이용하여 수정한 경우 원격 저장소에 다시 반영하기 위해서 아래의 명령어를 통해 강제로 저장합니다.

```bash
$ git push origin +<branch>
// 또는
$ git push origin <branch> -f
```