---
title: 윈도우 스크립트 - 배치파일 기초
categories: 
  - Script
tags: 
  - 윈도우 스크립트
  - 윈도우 배치
  - 배치파일
  - CMD Batch
toc: true

header:
  teaser: https://images.unsplash.com/photo-1482062364825-616fd23b8fc1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=256&q=40
  overlay_image: https://images.unsplash.com/photo-1482062364825-616fd23b8fc1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1024&q=80
  overlay_filter: 0.5 # same as adding an opacity of 0.5 to a black background
  caption: Photo by Artem Sapegin on Unsplash

icon: fa-github
---

예전 학교 연구생 시절부터 특정 테스트 셋에서 실험을 위해 배치파일을 사용해 왔지만 그 때 그 때 찾아서 작성하고 했는데 이번 기회에 정리를 해보고자 합니다.

기본적으로 CMD용 배치파일에 대한 내용을 정리하고 사용 중인 예제를 몇 개의 포스트로 정리하고자 합니다.

## 배치 파일이란?

> - MS-DOS, 윈도우에서 쓰이는 셸 스크립트로 명령 인터프리터에 의해 실행되게끔 고안된 명령어들을 작성한 텍스트 파일
> - cmd.exe와 같은 셸 프로그램이 파일을 읽어 명령어를 줄 단위로 실행
> - 배치 작업(실행 파일을 자동/연속적 실행)에 유용하게 사용
> [출처-위키피디아](https://ko.wikipedia.org/wiki/%EB%B0%B0%EC%B9%98_%ED%8C%8C%EC%9D%BC)

배치파일은 별도의 컴파일이 필요하지 않아 메모장만 있으면 간단히 작성 및 실행 가능하기 때문에 간단하게 프로그래밍하여 유용하게 사용됩니다.

확장자는 `.bat`로 실행파일처럼 바로 실행 가능합니다.

## 배치파일 기초

[출처-잘해보자구!](https://devlsh.tistory.com/entry/Batch-file-or-Shell-Script-명령어-모음)

**ECHO :** 배치파일의 내용은 한 줄씩 실행이된다.

또한 배치파일이 실행이 될 때, 무조건 echo가 on 상태에서 배치파일의 처음 부분이 실행이 된다.

echo on 상태 : 한 줄이 실행될 때 마다, 그 줄의 내용을 화면에 뿌려준다.

echo off 상태 : 줄이 실행될 때, 그 줄의 내용을 화면에 뿌리지 않는다.

단, 줄의 실행된 내용이 출력이 있는 경우에는 당연히 출력을 화면에 뿌려준다.

**echo on :** 이 라인 다음의 라인부터 echo-on 상태가 된다.

**echo off :** 이 라인 다음의 라인부터 echo-off 상태가 된다.

**echo 문장** : 문장을 화면에 출력한다.

**echo.** : empty line을 출력한다.

**echo %undefined1%** : 만일 undefined1이라는 변수가 정의되어 있지 않은 상태라면,

화면에 ECHO가 정의되어 있지 않습니다. 라는 메시지가 출력이 된다.

**@ :** 이것이 붙어 있는 라인은, echo-off 상태에서 그 라인이 실행이 된다.

즉 그 줄의 내용 자체는 화면에 표시가 안되고, 실행된 출력만이 화면에 표시가 된다.

**:LABEL :** 라벨을 표시한다. GOTO와 함께 사용이 되어, 특정 래이블로 제어를 점프하기 위해 사용한다.

**%숫자 :** 도스창의 프롬프트에서 배치파일을 실행시킬 때의 인자들을, 배치파일내에서 사용하기 위함이다.

첫번째 인자를 %0, 두번째 인자를 %1, ....이런식으로 받아들인다. 따라서 %0~%9 까지 받아들인다.

여기서 %0는 파일이름을 받는다.

**SHIFT :** 도스창의 프롬프트에서 배치파일을 실행시킬 때의 인자들은, %0~%9 까지 받아들인다고 설명을 했다.

그런데 이 shift 명령을 한 번 실행시키면, 명령어 인자들이 전체적으로 하나씩 쉬프트되어서,

%0=(파일이름을 제외한)첫번째 인자, %1=두번째 인자...이런식으로 된다.

따라서 인자들이 9개 이상이 되어도, shift 명령을 통해서, 프로그램내에서 모두 사용할 수가 있다.

**shift /n** : 여기서 n은 0~8. n-1번째 까지는 그대로 두고, n = n+1, n+1 = n+2... 이런식이다.

즉, n-1번째 까지는 그대로 두고, n번째 인자가 사라지고, n+1과 그 이후가 한 칸씩 왼쪽으로 쉬프트된다.

**모든 인자를 사용하는 더 간단한 방법 :**

FOR %%A IN (%*) DO ( .... Now your batch file handles %%A instead of %1 ....) : 단, 이 때 %*는 %1부터 시작한다.  

**조건실행 :**

**& :**  command1 & command2 : command1의 실행이 끝나고, command2를 실행한다.

**&& :**  command1 && command2 : command1의 실행이 성공적으로 끝나는 경우에만, command2를 실행한다.

**|| :**  command1 || command2 : command1의 실행이 실패로 끝나는 경우에만, command2를 실행한다.

**CALL :** 배치파일내에서 다른 배치파일을 호출하기 위함이다.

**SET :** [http://computerhope.com/sethlp.htm](http://computerhope.com/sethlp.htm)

**SET** : 현재 설정되어 있는 모든 환경변수들과 그 값들을 보여준다.

**SET variable :** 현재 설정되어 있는 variable의 값을 보여준다. 화면에 variable=설정값 형태로 출력이 된다.

만일 variable이 설정되어 있지 않다면, "variable가 설정되어있지 않다"라는 메시지를 보여준다.

**SET variable=string** : variable의 값을 string으로 설정한다.

**예)** SET var1=%var2% : var2가 undefined 상태라고 하자. 그러면 var1도 undefined상태가 된다.

SET var3= : var3는 undefined 상태가 된다.

**SET /A variable=numerical expression** : string위치에 오는 것은 문자열이 아니라, 수식이다.

수식의 우선순위는 다음과 같다. (위쪽일 수록 높은 우선순위)

() grouping

* / % arithmetic operators

+ - arithmetic operators

<< >> logical shift

& bitwise and

^ bitwise exclusive or

| bitwise or

= *= /= %= += -= assignment  
&= ^= |= <<= >>=

, expression separator

**SET /P variable=[promptString]** : 사용자가 값을 입력할것을 요구를 하고, 입력된 값은 variable로 들어간다.

**예)** SET /P tempvar1=[원하는 수식을 입력하세요:] : 사용자가 3+4엔터 를 입력했다고 하자.  
SET /A tempvar2=%tempvar1% : 3+4가 계산이 되어 tempvar2에 입력이 된다.  
Echo 계산된 값은

SET tempvar2 : 7이 출력이 된다. (주의! tempvar2 다음에 바로 줄바꿈이 와야 한다.)

**IF 문 :**

IF

[NOT] ERRORLEVEL _number command_

IF

[NOT] _string1_==_string2 command_

IF

[NOT] EXIST _filename command_

NOT

Specifies that Windows should carry out the _command_ only if the condition is FALSE

ERRORLEVEL number

Specifies a TRUE condition

if the last program run returned an exit code equal to or greater than the _number_ specified.

_string1_==_string2_

Specifies a TRUE condition if the specified text strings match.

EXIST _filename_

Specifies a TRUE condition if the specified _filename_ exists.

_command_

Specifies the _command_ to carry out if the condition is met.  
_command_ can be followed by `ELSE _command2_` which will execute _command2_ if the specified condition is FALSE

IF [/I] _string1 compare-op string2 command_ ( /I 를 붙이면 case-insensitive 문자열 비교가 된다.)  
where `_compare-op_` may be one of :

EQU

-

equal (or string1 == string2 )

NEQ

-

not equal

LSS

-

less than

LEQ

-

less than or equal

GTR

-

greater than

GEQ

-

greater than or equal

IF DEFINED _variable command_ : variable이 정의가 되어 있다면, command를 실행한다.

**EXIT :** exit를 실행시키면, cmd.exe까지 모두 종료시켜버린다.

만일 배치파일만 종료를 시키고 싶다면, Exit /B를 하면 된다.

**Comments 처리 :** 배치파일내에, 코드가 아닌, 단순한 설명문을 넣고자 할 때 다음과 같은 여러가지 방법이 있다.

( [http://www.robvanderwoude.com/comments.php](http://www.robvanderwoude.com/comments.php))

아래와 같은 방법으로 사용하면 된다.

**REM comments**

**:unused_label comments** : 사용하지 않는 label을 지정하고, 그 뒤에 설명을 달면 된다.

**:: comments** : 사용하지 않는 label로써, :를 사용한 것 뿐이다.

(위의 3가지 방법들은 모두, leading spaces를 허용한다. 그 외의 것은 위의 문장들 앞에 올 수가 없다.)

그런데 **:unused_label**와 **::**는 조심을 해야 할 점이 있다. 그것은 For문의 command블록 또는 IF문의 command블록안에서

이 것들을 사용하게 되면 에러가 발생을 하기 때문이다.

이럴때는 이 것들을 아예 For문 또는 IF문 밖으로 빼 내거나 또는 REM문을 사용하면 된다.

**DEL :** 지정한 파일들을 삭제한다.

DEL

[/P] [/F] [/S] [/Q] [/A[[:]_attributes_]] [[_drive:_][_path_]_filename_

ERASE

[/P] [/F] [/S] [/Q] [/A[[:]_attributes_]] [[_drive:_][_path_]_filename_

[[_drive:_][_path_]_filename_

Specifies the file(s) to delete. Specify multiple files by using wildcards.

/P

Prompts for confirmation before deleting each file.

/F

Force deleting of read-only files.

/S

Delete specified files from all subdirectories.

/Q

Quiet mode, do not ask if ok to delete on global wildcard

/A

Selects files to delete based on attributes

attributes

A

Files ready for archiving

H

Hidden files

R

Read-only files

S

System files

-

Prefix meaning not

del 다음에 파일이름이 아니고, 디렉토리이름만 지정해 주면, 그 디렉토리안의 모든 파일들을 삭제시킨다.

**Redirection :** 프로그램은 기본적으로 stdin(0)은 키보드, stdout(1)은 화면, stderr(2)은 화면으로 설정이 된다.

stdout과 stderr의 차이는, stdout은 버퍼를 거쳐서 화면에 뿌려진다.

따라서 버퍼가 다 차기 전까지는 화면에 뿌려지지 않는다.

반면에 stderr은 버퍼를 사용하지 않기 때문에, 출력할 데이터는 바로 바로 화면에 뿌려진다.

이렇게 기본적으로 설정된 것들을 사용하지 않고, 다르게 사용하고 싶을때 재지향 기호 **>** 를 사용한다.

**command1 > filename** : command1의 stdout출력을 화면이 아니라, filename으로 보낸다.

command1의 stderr은 기존처럼 화면에 뿌려진다.

**command1 < filename** : command1의 입력을 키보드로부터 받는것이 아니라, filename으로 부터 받는다.

**command1 < infile > outfile** : 키보드가 아니라 infile로 부터 입력을 받고, stdout을 화면이 아니라 outfile로 출력을 한다.

command1의 stderr은 기존처럼 화면에 뿌려진다.

**command1 2> file** : command1의 stdout은 화면으로, stderr은 file로 보낸다.

**command1**  **>**  **file**  2**>&**1 : command1의 stdout은 file로, stderr은 stdout으로 보낸다.

즉 stdout과 stderr모두 file로 보낸다.

이 문장을 간단하게 표기하는 또 다른 방법은 **command1**  **&>****file 와  command1**  **>&file이다.**

**command1 >nul :** command1의 stdout출력을, 화면에 뿌리는 것이 아니라, 그냥 버린다.

**파이프 : command1 | command2** : command1의 stdout출력을 command2의 입력으로 보낸다.

이것은 command1 > tempfile, command2 < tempfile, del tempfile 과 동일하다.

command1, command2의 stderr은 기존처럼 화면에 뿌려진다.

**command1**  2**>&**1 **| command2** : command1의 stdout과 stderr을 모두, command2의 stdin으로 보낸다.

**RMDIR** [/S] [/Q] [drive:]path  
**RD** [/S] [/Q] [drive:]path  
/S Removes all directories and files in the specified directory in addition to the directory itself.

Used to remove a directory tree.  
/Q Quiet mode, do not ask if ok to remove a directory tree with /S  

**EXIT :** exit를 실행시키면, cmd.exe까지 모두 종료시켜버린다.

만일 배치파일만 종료를 시키고 싶다면, Exit /B를 하면 된다.

**XCOPY :**

XCOPY

_source_ [_destination_] [/A | /M] [/C] [/D[:date]] [/F] [/H] [/I] [/K] [/L] [/N] [/P] [/Q] [/R] [/S [/E]] [/T] [/U] [/V] [/W] [/Z] [/EXCLUDE:_filename_]

_source_

Specifies the file(s) to copy.

_destination_

Specifies the location and/or name of new files.

/A

Copies files with the archive attribute set, doesn't change the attribute.

/C

Continues copying even if errors occur.

/D[:_m-d-y_]

Copies files changed on or after the specified date.  
If no date is given, copies only those files whose source time is newer than the destination time.

/E

Copies directories and subdirectories, including empty ones.  
Same as /S /E. May be used to modify /T.

/F

Displays full source and destination file names while copying.

/H

Copies hidden and system files also.

/I

If destination does not exist and copying more than one file, assumes that destination must be a directory.

/K

Copies attributes. Normal Xcopy will reset read-only attributes.

/L

Displays files that _would_ be copied (_list_ only).

/M

Copies files with the archive attribute set, turns off the archive attribute.

/N

Copies using the generated short names.

/P

Prompts you before creating each destination file.

/Q

Does not display file names while copying.

/R

Overwrites read-only files.

/S

Copies directories and subdirectories except empty ones.

/T

Creates directory structure, but does not copy files.  
Does not include empty directories or subdirectories.  
/T /E includes empty directories and subdirectories.

/U

Copies only files that already exist in destination.

/V

Verifies each new file.

/W

Prompts you to press a key before copying.

/Z

Copies networked files in restartable mode.

/EXCLUDE:_filename_

Excludes the files listed in the specified file from the copy operation. The exclusion file can have a list of exclusion patterns (one per line, no wild card characters are supported). If any exclusion pattern in the file matches any part of the path of a subject file, that file is not copied.
