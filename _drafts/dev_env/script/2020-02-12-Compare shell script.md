---
title: task 강제 종료 배치파일 제작
categories: 
  - Script
tags: 
  - 윈도우 CMD 배치
  - CMD Batch
toc: true

header:
  teaser: https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=256&q=40
  overlay_image: https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1024&q=80
  overlay_filter: 0.5 # same as adding an opacity of 0.5 to a black background
  caption: Photo by Kelly Sikkema on Unsplash

icon: fa-github
---

## 비슷한 명령어들과 cmdlet 비교[[편집](https://ko.wikipedia.org/w/index.php?title=%ED%8C%8C%EC%9B%8C%EC%85%B8&action=edit&section=2 "부분 편집: 비슷한 명령어들과 cmdlet 비교")]

> [원문]-<https://ko.wikipedia.org/wiki/%ED%8C%8C%EC%9B%8C%EC%85%B8>

파워셸에 들어간 cmdlet과 잘 알려진 명령 줄 인터프리터의 비슷한 명령어를 아래의 표로 나열해 놓았다.

|윈도우 파워셸(Cmdlet)|윈도우 파워셸(다른 이름)|cmd.exe / COMMAND.COM(MS-DOS, 윈도우, OS/2, 등)|Bash(유닉스, BSD, 리눅스, 맥 오에스 텐 등)|설명|
|--- |--- |--- |--- |--- |
|Get-Location|gl, pwd|cd|pwd|현재 디렉터리/작업 디렉터리를 보여 준다.|
|Set-Location|sl, cd, chdir|cd, chdir|cd|현재 디렉터리를 바꾼다|
|Clear-Host|cls, clear|cls|clear|화면을 지운다[4]|
|Copy-Item|cpi, copy, cp|copy|cp|하나 이상의 파일 / 완전한 디렉터리 트리를 복사한다|
|Get-Help|help, man|help|man|명령에 대한 도움말을 보여 준다|
|Remove-Item|ri, del, erase, rmdir, rd, rm|del, erase, rmdir, rd|rm, rmdir|파일 / 디렉터리를 지운다|
|Rename-Item|rni, ren|ren, rename|mv|파일 / 디렉터리의 이름을 바꾼다|
|Move-Item|mi, move, mv|move|mv|파일 / 디렉터리를 새로운 위치로 옮긴다|
|Get-ChildItem|gci, dir, ls|dir|ls|현재 디렉터리의 모든 파일 / 디렉터리를 나열한다|
|Write-Output|echo, write|echo|echo|문자열, 변수 등을 표준 출력(stdout)으로 출력한다|
|Pop-Location|popd|popd|popd|현재 디렉터리를 맨 마지막에 스택으로 푸시(push)한 디렉터리로 바꾼다|
|Push-Location|pushd|pushd|pushd|현재 디렉터리를 스택으로 푸시(push)한다|
|Set-Variable|sv, set|set|set|변수 값을 설정하거나 새로 만든다|
|Get-Content|gc, type, cat|type|cat|파일의 내용을 보여 준다|
|Select-String||find, findstr|grep|패턴에 맞추어 줄들을 출력한다|
|Get-Process|gps, ps|tlist,[5] tasklist[6]|ps|현재 실행 중인 모든 프로세스를 나열한다|
|Stop-Process|spps, kill|kill,[5] taskkill[6]|kill|실행 중인 프로세스를 끝낸다|
|Tee-Object|tee|없음|tee|입력을 파일이나 변수로 파이프(pipe) 처리한 뒤 파이프라인에 따라 입력을 넘긴다|
