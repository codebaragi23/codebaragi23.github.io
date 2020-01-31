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
  teaser: https://images.unsplash.com/photo-1524741978410-350ba91a70d7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=959&q=80
  overlay_image: https://images.unsplash.com/photo-1524741978410-350ba91a70d7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=959&q=80
  overlay_filter: 0.5 # same as adding an opacity of 0.5 to a black background
  caption: "Photo by Hannah Joshua on Unsplash"

icon: fa-github
---

## commit 날짜 수정하기

**문제 상황**

잔디 심기를 할때 특정일을 놓치는 경우 유용(?)하게 쓸수 있는 꼼수(-_-..)

----------

**방법**

1.  **마지막 Commit 날짜를 현재 날짜로 설정**
    
    `git commit --amend --no-edit --date "$(date)"`
    
2.  **마지막 Commit 날짜를 임의의 날짜로 설정**
    
    `git commit --amend --no-edit --date "Mon 20 Aug 2018 20:19:19 KST"`
    
    `""`  사이에 원하는 날짜와 연도 및 시간을 기입하면 된다.
  
## commit 메시지 수정하기

```bash
git commit --amend -m "33"
```

## commit 되돌리기
```
git reset HEAD^
```

**강제로 원격 저장소에 push**
```
git push origin +master
```