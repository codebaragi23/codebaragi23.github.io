---
title: "Git 기본 사용법-원격 저장소편"
categories: 
  - Git
tags: 
  - Git 명령어
  - Git 원격 명령어
  - Git 사용법
toc: true
last_modified_at: 2020-02-07

header:
  teaser: https://images.unsplash.com/photo-1560169897-fc0cdbdfa4d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=256&q=40
  overlay_image: https://images.unsplash.com/photo-1560169897-fc0cdbdfa4d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1024&q=80
  overlay_filter: 0.5 # same as adding an opacity of 0.5 to a black background
  caption: "Photo by Glenn Carstens-Peters on Unsplash"

icon: fa-github
---


Git을 사용하기 위한 기본적인 사용방법에 대해 정리해 보고자 합니다.

Git 초기 설정은 이전 글의  [Git을 시작하며-4.초기설정](/git/Start-Git/#4-초기-설정)편을 참고하세요.


## 원격 저장소 관리

원격 저장소는 `github`와 같이 네트워크 존재하는 저장소를 말합니다.

### 원격 저장소 확인

이전 글의  [Git 기본 사용법-로컬 저장소편-저장소 만들기](/git/Git-basic-usage-local-repository/#저장소-만들기)에서 얘기한 것처럼 기본적으로 `git clone`을 하면 `origin`이라는 이름으로 원격저장소가 등록됩니다.

**저장소 이름 확인**

```bash
$ git remote
```

**저장소 이름과 URL 확인**

```bash
$ git remote -v
```

### 원격 저장소 추가

`git init`등을 통해 로컬에 새로운 git 저장소를 만들어 사용한 경우 직접 원격 저장소를 추가해 주어야 합니다.

원격 저장소를 origin이라는 이름으로 추가

```bash
$ git remote add origin https://github.com/codebaragi23/codebaragi23.github.io.git
```


### 원격 저장소에 저장하기

**`origin` 원격 저장소의 master 브랜치에 저장하기**

```bash
$ git push origin master
```

**`origin` 원격 저장소의 로컬 브랜치와 동일한 이름의 브랜치에 저장하기**

```bash
$ git push origin HEAD
```

**_-u_ 옵션 사용**

먼저 가장 많이 쓰이는 예를 보겠다.

```bash
$ git push -u origin master
```

이 명령어에서 -u 옵션은 master라는 현재 브랜치를 origin 원격저장소의 master 브랜치로 연결해 주어 다음부터는 간단히 git push만 입력하면 동일한 동작을 해 준다.


### 원격 저장소 변경

**이름 변경**

```bash
$ git remote rename origin new_name
```

**삭제**

```bash
$ git remote rm origin
```

## 브랜치와 병합

개인 프로젝트 관리를 위해 git을 사용한지 얼마 안되다 보니 아직 브랜치와 머지에 대해 정리가 부족합니다. 그러한 이유로 먼저 참고 자료를 정리해 보고자 합니다.

> 소프트웨어를 개발할 때에 개발자들은 동일한 소스코드를 함께 공유하고 다루게 됩니다. 동일한 소스코드 위에서 어떤 개발자는 버그를 수정하기도 하고 또 다른 개발자는 새로운 기능을 만들어 내기도 하죠. 이와 같이 여러 사람이 동일한 소스코드를 기반으로 서로 다른 작업을 할 때에는 각각 서로 다른 버전의 코드가 만들어 질 수 밖에 없습니다.
>
> 이럴 때, 여러 개발자들이 동시에 다양한 작업을 할 수 있게 만들어 주는 기능이 바로 '브랜치(Branch)' 입니다. 각자 독립적인 작업 영역(저장소) 안에서 마음대로 소스코드를 변경할 수 있지요. 이렇게 분리된 작업 영역에서 변경된 내용은 나중에 원래의 버전과 비교해서 하나의 새로운 버전으로 만들어 낼 수 있습니다.
> ![브랜치 예시](https://backlog.com/git-tutorial/kr/img/post/stepup/capture_stepup1_1_1.png)  
> 출처: [누구나 쉽게 이해할수 있는 Git 입문-브랜치란?](https://backlog.com/git-tutorial/kr/stepup/stepup1_1.html)


위 예시처럼 여러 작업자가 각자 작업을 하거나 큰 이슈들에 대한 별도의 처리과정을 남기고 다시 병합하는 과정 등으로 브랜치를 활요할 수 있습니다.

### 브랜치 만들기

**`issue1`이라는 이름으로 브랜치 만들기**

```bash
$ git branch issue1
```

### 브랜치로 이동

**`issue1`이라는 브랜치로 이동**

```bash
$ git checkout issue1
```

**`issue1`이라는 브랜치를 만들고 이동**

`-b`옵션을 사용하여 브랜치를 만들고 이동하는 동작을 한번에 할 수 있습니다.

```bash
$ git checkout -b issue1
```

### 병합

브랜치 이동 작업 후 master에 반영하기 위해 병합하려면 다음의 과정을 거칩니다.

1단계: master 브랜치로 이동

```bash
$ git checkout master
```

2단계: master에 issue1을 병합

```bash
$ git merge issue1
```

3단계: 병합 충돌 해결

병합과정에서 아래와 같은 충돌(Conflict) 메시지를 보는 경우가 있습니다.

```bash
$ git merge issue1
Auto-merging main.c
CONFLICT (content): Merge conflict in main.c
Automatic merge failed; fix conflicts and then commit the result.
```

이 경우 해당 충돌 파일(위 예시에서는 main.c)을 열어보면 충돌난 부분을 아래와 같이 확인 할 수 있고 하나하나 직접 정해줘야 합니다.

아래 main.c예를 보겠습니다.

```c
// main.c
int calc(int n1, int n2)
{
<<<<<<< HEAD
  n1 = n1 + 2;
=======
  n2 = n2 - 2;
>>>>>>> issue1 
  return n1+n2;
}
```

이 경우 반영할 내용을 확인 후 수정을 하고 다시 커밋을 합니다.

```c
// main.c
int calc(int n1, int n2)
{
  n1 = n1 + 2;
  n2 = n2 - 2;
  return n1+n2;
}
```

```bash
$ git add main.c
$ git commit -m "issue1 branch merge"
```

4단계: 브랜치 삭제

더이상 브랜치가 불필요한 경우 아래와 같이 브랜치를 삭제할 수 있습니다.

```bash
$ git branch -d issue1
```