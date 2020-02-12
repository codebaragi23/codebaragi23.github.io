---
title: "Git 기본 사용법-로컬 저장소편"
categories: 
  - Git
tags: 
  - Git 명령어
  - Git 로컬 명령어
  - Git 사용법
toc: true
last_modified_at: 2020-02-11

header:
  teaser: https://images.unsplash.com/photo-1489533119213-66a5cd877091?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=256&q=40
  overlay_image: https://images.unsplash.com/photo-1489533119213-66a5cd877091?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1024&q=80
  overlay_filter: 0.5 # same as adding an opacity of 0.5 to a black background
  caption: "Photo by Danielle MacInnes on Unsplash"

icon: fa-github
---


Git을 사용하기 위한 기본적인 사용방법에 대해 정리해 보고자 합니다.

Git 초기 설정은 이전 글의  [Git을 시작하며-4.초기설정](/git/Start-Git/#4-초기-설정)편을 참고하세요.


## 저장소 만들기

**현재 디렉토리에 git 저장소 만들기**

```bash
$ git init
```

**원격 저장소로 부터 로컬로 복제**

원격 저장소의 이름과 동일하게 복제

```bash
$ git clone https://github.com/codebaragi23/codebaragi23.github.io.git
```

blog라는 이름으로 복제

```bash
$ git clone https://github.com/codebaragi23/codebaragi23.github.io.git blog
```

> 원격 저장소의 기본 이름은 `origin`이다

## 저장소에 저장하기

### 파일 추가

**새 파일을 만들어 추가 (Untracked -> Staged)**
특정 파일 `*.c`와 `ReadMe`을 만들어 추가

```bash
$ git add *.c
$ git add ReadMe
```

**기존파일을 수정하고 추가 (Unmodified -> Modified -> Staged)**

처음 저장소를 원격 저장소에서 복제하거나 저장소에 저장이 완료된 상태의 모든 파일은 Tracked이면서 Unmodified 상태입니다.

1단계: 파일 수정(Unmodified -> Modified)

```
main.c 파일 편집
```

2단계: 파일 추가(Modified -> Staged)

```bash
$ git add main.c
```


> `git add` 명령어는 파일의 상태를 Untracked -> Staged 또는 Modified -> Staged 상태로 만들 때 씁니다.
> `git add` 명령어는 커밋을 위한 목록에 추가한다고 이해하면 됩니다.

### 저장소에 저장(커밋)하기 (Staged -> Committed)

```bash
$ git commit -m 'update git'
```

## 작업 디렉토리의 파일 상태 확인

```bash
$ git status
```

