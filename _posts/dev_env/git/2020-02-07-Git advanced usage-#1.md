---
title: "Git 고급편-1편"
categories: 
  - Git
tags: 
  - Git 사용법
  - Git 고급 명령
toc: true

related_posts:
  - 2019-12-05-Start Git

header:
  teaser: https://images.unsplash.com/photo-1523540939399-141cbff6a8d7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=256&q=40
  overlay_image: https://images.unsplash.com/photo-1523540939399-141cbff6a8d7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1024&q=80
  overlay_filter: 0.5 # same as adding an opacity of 0.5 to a black background
  caption: "Photo by Sam Dan Truong on Unsplash"

icon: fa-github
---

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
$ git reset HEAD^
```

단계 2: 다시 수정하고 다시 커밋

### 커밋 메시지 수정하기

`git commit --amend`를 이용하여 메시지만 추가하기

```bash
$ git commit --amend -m "new message"
```

## commit 날짜 수정하기

**마지막 Commit 날짜를 현재 날짜로 설정**

```bash
git commit --amend --no-edit --date "$(date)"
```
    
**마지막 Commit 날짜를 임의의 날짜로 설정**
    
```bash
git commit --amend --no-edit --date "Wed 01 Jan 2020 20:19:19 KST"
```
  
## 원격 저장소에 강제로 저장

기존 로컬의 commit을 변경한 경우 예로 `--amend`등을 이용하여 수정한 경우 원격 저장소에 다시 반영하기 위해서 아래와 같이 master앞에 `+`를 추가하여 사용합니다.

```
git push origin +master
```